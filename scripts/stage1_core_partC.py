# -*- coding: utf-8 -*-
from scripts.code_gen_lib import write_file

def build_partC():
    # src/core/Timer.js
    write_file("src/core/Timer.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * High-Precision Delta Timer, Schedulers, and Easing Tweens
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class Timer {
    constructor() {
        this.lastTime = 0;
        this.currentTime = 0;
        this.deltaTime = 0;
        this.unscaledDeltaTime = 0;
        this.totalElapsedTime = 0;
        this.timeScale = 1.0;
        this.isPaused = false;
        this.frameCount = 0;
        this.fps = 60;
        this.fpsSmoothing = 0.9;
        this.lastFpsUpdate = 0;

        this.scheduledTasks = [];
        this.activeTweens = [];
    }

    init() {
        const now = typeof performance !== 'undefined' ? performance.now() : Date.now();
        this.lastTime = now;
        this.currentTime = now;
        this.totalElapsedTime = 0;
        this.deltaTime = 0;
        this.unscaledDeltaTime = 0;
        this.frameCount = 0;
        this.lastFpsUpdate = now;
    }

    update() {
        const now = typeof performance !== 'undefined' ? performance.now() : Date.now();
        this.currentTime = now;
        const rawDelta = (now - this.lastTime) / 1000.0;
        this.lastTime = now;

        const clampedDelta = Math.min(rawDelta, 0.1);
        this.unscaledDeltaTime = clampedDelta;

        if (this.isPaused) {
            this.deltaTime = 0.0;
        } else {
            this.deltaTime = clampedDelta * this.timeScale;
            this.totalElapsedTime += this.deltaTime;
        }

        this.frameCount++;

        if (now - this.lastFpsUpdate >= 250) {
            const currentFps = this.unscaledDeltaTime > 0 ? (1.0 / this.unscaledDeltaTime) : 60;
            this.fps = (this.fps * this.fpsSmoothing) + (currentFps * (1.0 - this.fpsSmoothing));
            this.lastFpsUpdate = now;
        }

        this._processSchedulers(this.deltaTime);
        this._processTweens(this.deltaTime);
    }

    setTimeScale(scale) {
        this.timeScale = Math.max(0.0, scale);
    }

    pause() { this.isPaused = true; }
    resume() { this.isPaused = false; }
    togglePause() { this.isPaused = !this.isPaused; return this.isPaused; }

    after(delaySeconds, callback, context = null) {
        const task = {
            remaining: delaySeconds,
            duration: delaySeconds,
            callback,
            context,
            repeat: false,
            cancelled: false
        };
        this.scheduledTasks.push(task);
        return () => { task.cancelled = true; };
    }

    every(intervalSeconds, callback, context = null, maxRuns = Infinity) {
        const task = {
            remaining: intervalSeconds,
            duration: intervalSeconds,
            callback,
            context,
            repeat: true,
            runsLeft: maxRuns,
            cancelled: false
        };
        this.scheduledTasks.push(task);
        return () => { task.cancelled = true; };
    }

    tween(target, properties, duration, easing = 'easeInOutQuad', onComplete = null) {
        const startValues = {};
        const changeValues = {};

        for (const prop in properties) {
            if (Object.prototype.hasOwnProperty.call(properties, prop) && typeof target[prop] === 'number') {
                startValues[prop] = target[prop];
                changeValues[prop] = properties[prop] - target[prop];
            }
        }

        const tweenInstance = {
            target,
            startValues,
            changeValues,
            duration,
            elapsed: 0,
            easing: typeof easing === 'string' ? Timer.Easings[easing] || Timer.Easings.linear : easing,
            onComplete,
            cancelled: false
        };

        this.activeTweens.push(tweenInstance);
        return {
            cancel: () => { tweenInstance.cancelled = true; },
            progress: () => Math.min(1, tweenInstance.elapsed / tweenInstance.duration)
        };
    }

    _processSchedulers(dt) {
        if (dt <= 0) return;
        for (let i = this.scheduledTasks.length - 1; i >= 0; i--) {
            const task = this.scheduledTasks[i];
            if (task.cancelled) { this.scheduledTasks.splice(i, 1); continue; }
            task.remaining -= dt;
            if (task.remaining <= 0) {
                try { task.callback.call(task.context); } catch (err) { console.error('[Timer] Error:', err); }
                if (task.repeat) {
                    task.runsLeft--;
                    if (task.runsLeft <= 0) this.scheduledTasks.splice(i, 1);
                    else task.remaining = task.duration;
                } else this.scheduledTasks.splice(i, 1);
            }
        }
    }

    _processTweens(dt) {
        if (dt <= 0) return;
        for (let i = this.activeTweens.length - 1; i >= 0; i--) {
            const tw = this.activeTweens[i];
            if (tw.cancelled) { this.activeTweens.splice(i, 1); continue; }
            tw.elapsed += dt;
            const progress = Math.min(1.0, tw.elapsed / tw.duration);
            const easedProgress = tw.easing(progress);

            for (const prop in tw.changeValues) {
                tw.target[prop] = tw.startValues[prop] + (tw.changeValues[prop] * easedProgress);
            }

            if (progress >= 1.0) {
                this.activeTweens.splice(i, 1);
                if (typeof tw.onComplete === 'function') {
                    try { tw.onComplete(tw.target); } catch (err) { console.error('[Timer] Tween complete error:', err); }
                }
            }
        }
    }

    clear() { this.scheduledTasks = []; this.activeTweens = []; }

    static Easings = {
        linear: t => t,
        easeInQuad: t => t * t,
        easeOutQuad: t => t * (2 - t),
        easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
        easeInCubic: t => t * t * t,
        easeOutCubic: t => (--t) * t * t + 1,
        easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
        easeInElastic: t => (0.04 - 0.04 / t) * Math.sin(25 * t) + 1,
        easeOutElastic: t => 0.04 * t / (--t) * Math.sin(25 * t),
        easeOutBounce: t => {
            const n1 = 7.5625; const d1 = 2.75;
            if (t < 1 / d1) return n1 * t * t;
            else if (t < 2 / d1) return n1 * (t -= 1.5 / d1) * t + 0.75;
            else if (t < 2.5 / d1) return n1 * (t -= 2.25 / d1) * t + 0.9375;
            else return n1 * (t -= 2.625 / d1) * t + 0.984375;
        }
    };
}
""")

    # src/core/EventBus.js
    write_file("src/core/EventBus.js", """/**
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
        const regexStr = '^' + pattern.replace(/\\*/g, '.*') + '$';
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
""")
