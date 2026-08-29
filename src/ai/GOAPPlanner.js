/**
 * NovaForge Goal-Oriented Action Planning (GOAP) Engine
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class GOAPAction {
    constructor(name, cost = 1.0) {
        this.name = name;
        this.cost = cost;
        this.preconditions = new Map();
        this.effects = new Map();
    }

    addPrecondition(key, value) {
        this.preconditions.set(key, value);
        return this;
    }

    addEffect(key, value) {
        this.effects.set(key, value);
        return this;
    }

    isMatch(state) {
        for (const [k, v] of this.preconditions.entries()) {
            if (state.get(k) !== v) return false;
        }
        return true;
    }

    applyEffects(state) {
        const newState = new Map(state);
        for (const [k, v] of this.effects.entries()) {
            newState.set(k, v);
        }
        return newState;
    }
}

export class GOAPPlanner {
    constructor() {
        this.actions = [];
    }

    addAction(action) {
        this.actions.push(action);
        return this;
    }

    plan(worldState, goalState) {
        const startNode = {
            state: new Map(worldState),
            cost: 0,
            action: null,
            parent: null
        };

        const openList = [startNode];
        const closedList = [];

        while (openList.length > 0) {
            openList.sort((a, b) => a.cost - b.cost);
            const current = openList.shift();

            if (this._meetsGoal(current.state, goalState)) {
                return this._reconstructPlan(current);
            }

            closedList.push(current);

            for (const action of this.actions) {
                if (action.isMatch(current.state)) {
                    const nextState = action.applyEffects(current.state);
                    const node = {
                        state: nextState,
                        cost: current.cost + action.cost,
                        action: action,
                        parent: current
                    };
                    openList.push(node);
                }
            }
        }

        return [];
    }

    _meetsGoal(state, goal) {
        for (const [k, v] of goal.entries()) {
            if (state.get(k) !== v) return false;
        }
        return true;
    }

    _reconstructPlan(node) {
        const plan = [];
        let curr = node;
        while (curr && curr.action) {
            plan.unshift(curr.action);
            curr = curr.parent;
        }
        return plan;
    }
}
