/**
 * NovaForge Game Engine & Arcade Studio
 * Utility-Based Action Scoring & Decision Engine
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class UtilityAI {
    constructor() {
        this.actions = [];
    }

    addAction(name, scoreFn, executeFn) {
        this.actions.push({ name, scoreFn, executeFn });
        return this;
    }

    selectBestAction(context) {
        let bestAction = null;
        let highestScore = -Infinity;

        for (const action of this.actions) {
            const score = action.scoreFn(context);
            if (score > highestScore) {
                highestScore = score;
                bestAction = action;
            }
        }

        return bestAction;
    }
}
