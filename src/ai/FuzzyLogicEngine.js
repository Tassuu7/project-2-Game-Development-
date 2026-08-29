/**
 * NovaForge Fuzzy Logic Controller & Inference Engine (Centroid Defuzzification)
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class FuzzySet {
    static triangular(x, a, b, c) {
        if (x <= a || x >= c) return 0.0;
        if (x === b) return 1.0;
        if (x > a && x < b) return (x - a) / (b - a);
        return (c - x) / (c - b);
    }

    static trapezoidal(x, a, b, c, d) {
        if (x <= a || x >= d) return 0.0;
        if (x >= b && x <= c) return 1.0;
        if (x > a && x < b) return (x - a) / (b - a);
        return (d - x) / (d - c);
    }
}

export class FuzzyLogicEngine {
    constructor() {
        this.rules = [];
    }

    addRule(conditionFn, consequenceValue) {
        this.rules.push({ conditionFn, consequenceValue });
        return this;
    }

    evaluate(context) {
        let weightedSum = 0.0;
        let membershipSum = 0.0;

        for (const rule of this.rules) {
            const membership = rule.conditionFn(context);
            if (membership > 0) {
                weightedSum += membership * rule.consequenceValue;
                membershipSum += membership;
            }
        }

        return membershipSum > 0 ? weightedSum / membershipSum : 0.0;
    }
}
