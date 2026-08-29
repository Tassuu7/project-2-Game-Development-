/**
 * NovaForge Game Engine & Arcade Studio
 * High-Performance Typed Event Bus with Priority Queue & Wildcards
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class EventBus {
    constructor() {
        this.handlers = new Map();
        this.stickyEvents = new Map();
        this.history = [];
        this.maxHistorySize = 100;
        this.tracing = false;
    }

    on(event, handler, priority = 0, context = null) {
        if (!event || typeof handler !== 'function') {
            throw new Error('[EventBus] Invalid event subscription parameters.');
        }

        if (!this.handlers.has(event)) {
            this.handlers.set(event, []);
        }

        const subscriber = { handler, priority, context, once: false };
        const subscribers = this.handlers.get(event);
        subscribers.push(subscriber);
        subscribers.sort((a, b) => b.priority - a.priority);

        if (this.stickyEvents.has(event)) {
            const lastPayload = this.stickyEvents.get(event);
            try {
                handler.call(context, lastPayload);
            } catch (err) {
                console.error(`[EventBus] Error dispatching sticky event '${event}':`, err);
            }
        }

        return () => this.off(event, handler);
    }

    once(event, handler, priority = 0, context = null) {
        if (!event || typeof handler !== 'function') {
            throw new Error('[EventBus] Invalid parameters for once().');
        }

        if (!this.handlers.has(event)) {
            this.handlers.set(event, []);
        }

        const subscriber = { handler, priority, context, once: true };
        const subscribers = this.handlers.get(event);
        subscribers.push(subscriber);
        subscribers.sort((a, b) => b.priority - a.priority);

        return () => this.off(event, handler);
    }

    off(event, handler = null) {
        if (!this.handlers.has(event)) return;

        if (!handler) {
            this.handlers.delete(event);
            return;
        }

        const subscribers = this.handlers.get(event);
        const filtered = subscribers.filter(sub => sub.handler !== handler);
        if (filtered.length > 0) {
            this.handlers.set(event, filtered);
        } else {
            this.handlers.delete(event);
        }
    }

    emit(event, payload = null) {
        if (this.tracing) {
            this.history.push({ event, payload, timestamp: Date.now() });
            if (this.history.length > this.maxHistorySize) {
                this.history.shift();
            }
        }

        let handled = false;

        if (this.handlers.has(event)) {
            const subscribers = [...this.handlers.get(event)];
            for (let i = 0; i < subscribers.length; i++) {
                const sub = subscribers[i];
                try {
                    sub.handler.call(sub.context, payload, event);
                    handled = true;
                } catch (err) {
                    console.error(`[EventBus] Exception caught in subscriber for '${event}':`, err);
                }

                if (sub.once) {
                    this.off(event, sub.handler);
                }
            }
        }

        for (const [pattern, subscribers] of this.handlers.entries()) {
            if (pattern.includes('*') && this._matchesWildcard(event, pattern)) {
                const copySubs = [...subscribers];
                for (let i = 0; i < copySubs.length; i++) {
                    const sub = copySubs[i];
                    try {
                        sub.handler.call(sub.context, payload, event);
                        handled = true;
                    } catch (err) {
                        console.error(`[EventBus] Exception in wildcard subscriber for '${pattern}':`, err);
                    }
                    if (sub.once) {
                        this.off(pattern, sub.handler);
                    }
                }
            }
        }

        return handled;
    }

    emitSticky(event, payload = null) {
        this.stickyEvents.set(event, payload);
        return this.emit(event, payload);
    }

    clearSticky(event) {
        this.stickyEvents.delete(event);
    }

    clear() {
        this.handlers.clear();
        this.stickyEvents.clear();
        this.history = [];
    }

    _matchesWildcard(event, pattern) {
        const regexStr = '^' + pattern.replace(/\*/g, '.*') + '$';
        const reg = new RegExp(regexStr);
        return reg.test(event);
    }

    setTracing(enabled) {
        this.tracing = !!enabled;
    }

    getHistory() {
        return [...this.history];
    }
}
