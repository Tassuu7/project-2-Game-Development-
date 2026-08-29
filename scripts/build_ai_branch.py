# -*- coding: utf-8 -*-
import sys
import os
sys.path.insert(0, '.')
from scripts.code_gen_lib import write_file

def build_ai():
    # 1. src/ai/InfluenceMap2D.js
    write_file("src/ai/InfluenceMap2D.js", """/**
 * NovaForge Tactical Spatial Influence Grid & Threat Heatmap
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class InfluenceMap2D {
    constructor(width = 40, height = 25, cellSize = 32) {
        this.width = width;
        this.height = height;
        this.cellSize = cellSize;
        this.friendlyInfluence = new Float32Array(width * height);
        this.enemyInfluence = new Float32Array(width * height);
        this.tensionMap = new Float32Array(width * height);
        this.decayFactor = 0.85;
        this.momentum = 0.1;
    }

    clear() {
        this.friendlyInfluence.fill(0);
        this.enemyInfluence.fill(0);
        this.tensionMap.fill(0);
    }

    addInfluence(worldX, worldY, strength, radius = 4, isFriendly = true) {
        const gridX = Math.floor(worldX / this.cellSize);
        const gridY = Math.floor(worldY / this.cellSize);
        const map = isFriendly ? this.friendlyInfluence : this.enemyInfluence;

        for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
                const gx = gridX + dx;
                const gy = gridY + dy;
                if (gx >= 0 && gx < this.width && gy >= 0 && gy < this.height) {
                    const dist = Math.hypot(dx, dy);
                    if (dist <= radius) {
                        const falloff = 1.0 - (dist / radius);
                        map[gy * this.width + gx] += strength * falloff;
                    }
                }
            }
        }
    }

    updateTension() {
        for (let i = 0; i < this.tensionMap.length; i++) {
            const f = this.friendlyInfluence[i];
            const e = this.enemyInfluence[i];
            this.tensionMap[i] = (f + e) - Math.abs(f - e);
            this.friendlyInfluence[i] *= this.decayFactor;
            this.enemyInfluence[i] *= this.decayFactor;
        }
    }

    getSafestNearbyCell(worldX, worldY, searchRadius = 3) {
        const gridX = Math.floor(worldX / this.cellSize);
        const gridY = Math.floor(worldY / this.cellSize);
        let lowestThreat = Infinity;
        let bestCell = { x: gridX, y: gridY };

        for (let dy = -searchRadius; dy <= searchRadius; dy++) {
            for (let dx = -searchRadius; dx <= searchRadius; dx++) {
                const gx = gridX + dx;
                const gy = gridY + dy;
                if (gx >= 0 && gx < this.width && gy >= 0 && gy < this.height) {
                    const threat = this.enemyInfluence[gy * this.width + gx];
                    if (threat < lowestThreat) {
                        lowestThreat = threat;
                        bestCell = { x: gx, y: gy };
                    }
                }
            }
        }
        return { worldX: bestCell.x * this.cellSize + this.cellSize * 0.5, worldY: bestCell.y * this.cellSize + this.cellSize * 0.5 };
    }
}
""")

    # 2. src/ai/GOAPPlanner.js
    write_file("src/ai/GOAPPlanner.js", """/**
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
""")

    # 3. src/ai/FuzzyLogicEngine.js
    write_file("src/ai/FuzzyLogicEngine.js", """/**
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
""")

build_ai()
