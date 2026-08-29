/**
 * NovaForge Game Engine & Arcade Studio
 * Hierarchical Behavior Tree Framework (Selector, Sequence, Decorator)
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export const NodeState = {
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE',
    RUNNING: 'RUNNING'
};

export class BTNode {
    tick(agent, blackboard) {
        return NodeState.SUCCESS;
    }
}

export class SequenceNode extends BTNode {
    constructor(children = []) {
        super();
        this.children = children;
    }

    tick(agent, blackboard) {
        for (const child of this.children) {
            const state = child.tick(agent, blackboard);
            if (state !== NodeState.SUCCESS) {
                return state;
            }
        }
        return NodeState.SUCCESS;
    }
}

export class SelectorNode extends BTNode {
    constructor(children = []) {
        super();
        this.children = children;
    }

    tick(agent, blackboard) {
        for (const child of this.children) {
            const state = child.tick(agent, blackboard);
            if (state !== NodeState.FAILURE) {
                return state;
            }
        }
        return NodeState.FAILURE;
    }
}

export class ActionNode extends BTNode {
    constructor(actionFn) {
        super();
        this.actionFn = actionFn;
    }

    tick(agent, blackboard) {
        return this.actionFn(agent, blackboard);
    }
}
