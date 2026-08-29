/**
 * NovaForge Game Engine & Arcade Studio
 * Rule-Based Decision Tree Evaluator
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class DecisionNode {
    constructor(conditionFn, trueNode = null, falseNode = null) {
        this.conditionFn = conditionFn;
        this.trueNode = trueNode;
        this.falseNode = falseNode;
    }

    evaluate(context) {
        if (typeof this.conditionFn === 'function') {
            const result = this.conditionFn(context);
            if (result && this.trueNode) {
                return this.trueNode.evaluate(context);
            } else if (!result && this.falseNode) {
                return this.falseNode.evaluate(context);
            }
        }
        return this;
    }
}
