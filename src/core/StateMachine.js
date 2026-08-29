/**
 * NovaForge Game Engine & Arcade Studio
 * Hierarchical Finite State Machine with Enter, Update, and Exit Hooks
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class StateMachine {
    constructor(owner = null) {
        this.owner = owner;
        this.states = new Map();
        this.currentState = null;
        this.previousState = null;
        this.stateHistory = [];
        this.maxHistory = 10;
        this.isTransitioning = false;
    }

    addState(name, stateConfig) {
        if (!name || typeof stateConfig !== 'object') {
            throw new Error('[StateMachine] Invalid state configuration');
        }

        this.states.set(name, {
            name,
            enter: stateConfig.enter || (() => {}),
            update: stateConfig.update || (() => {}),
            exit: stateConfig.exit || (() => {}),
            render: stateConfig.render || (() => {}),
            canTransitionTo: stateConfig.canTransitionTo || (() => true),
            parent: stateConfig.parent || null
        });

        return this;
    }

    setState(name, transitionData = {}) {
        if (!this.states.has(name)) {
            console.warn(`[StateMachine] Cannot set unknown state '${name}'.`);
            return false;
        }

        if (this.isTransitioning) {
            console.warn(`[StateMachine] Circular transition prevented during state change to '${name}'.`);
            return false;
        }

        const nextState = this.states.get(name);

        if (this.currentState && this.currentState.canTransitionTo) {
            if (!this.currentState.canTransitionTo(name, transitionData)) {
                console.warn(`[StateMachine] Transition from '${this.currentState.name}' to '${name}' was rejected by guard.`);
                return false;
            }
        }

        this.isTransitioning = true;

        if (this.currentState) {
            try {
                this.currentState.exit.call(this.owner, nextState.name, transitionData);
            } catch (err) {
                console.error(`[StateMachine] Error in exit hook of '${this.currentState.name}':`, err);
            }

            this.previousState = this.currentState;
            this.stateHistory.push(this.currentState.name);
            if (this.stateHistory.length > this.maxHistory) {
                this.stateHistory.shift();
            }
        }

        this.currentState = nextState;

        try {
            this.currentState.enter.call(this.owner, this.previousState ? this.previousState.name : null, transitionData);
        } catch (err) {
            console.error(`[StateMachine] Error in enter hook of '${this.currentState.name}':`, err);
        }

        this.isTransitioning = false;
        return true;
    }

    update(dt) {
        if (this.currentState && typeof this.currentState.update === 'function') {
            try {
                this.currentState.update.call(this.owner, dt);
            } catch (err) {
                console.error(`[StateMachine] Error during update hook of '${this.currentState.name}':`, err);
            }
        }
    }

    render(ctx) {
        if (this.currentState && typeof this.currentState.render === 'function') {
            try {
                this.currentState.render.call(this.owner, ctx);
            } catch (err) {
                console.error(`[StateMachine] Error during render hook of '${this.currentState.name}':`, err);
            }
        }
    }

    revertToPrevious(transitionData = {}) {
        if (this.previousState) {
            return this.setState(this.previousState.name, transitionData);
        }
        return false;
    }

    getCurrentStateName() {
        return this.currentState ? this.currentState.name : null;
    }

    getPreviousStateName() {
        return this.previousState ? this.previousState.name : null;
    }

    hasState(name) {
        return this.states.has(name);
    }
}
