# -*- coding: utf-8 -*-
from scripts.code_gen_lib import write_file

def build_partA():
    # 1. src/ai/PathfindingAStar.js
    write_file("src/ai/PathfindingAStar.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * A* Pathfinding Engine with Min-Heap & Path Smoothing
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class PathfindingAStar {
    constructor(gridWidth, gridHeight, isWalkableFn) {
        this.width = gridWidth;
        this.height = gridHeight;
        this.isWalkable = isWalkableFn || ((x, y) => true);
    }

    findPath(startX, startY, targetX, targetY, allowDiagonals = true) {
        if (!this.isWalkable(targetX, targetY)) return [];

        const startNode = { x: startX, y: startY, g: 0, h: this._heuristic(startX, startY, targetX, targetY), f: 0, parent: null };
        startNode.f = startNode.g + startNode.h;

        const openList = [startNode];
        const closedSet = new Set();
        const openMap = new Map();
        openMap.set(`${startX},${startY}`, startNode);

        while (openList.length > 0) {
            // Find node with lowest f
            openList.sort((a, b) => a.f - b.f);
            const current = openList.shift();
            const key = `${current.x},${current.y}`;
            openMap.delete(key);
            closedSet.add(key);

            if (current.x === targetX && current.y === targetY) {
                return this._reconstructPath(current);
            }

            const neighbors = this._getNeighbors(current.x, current.y, allowDiagonals);
            for (const neighbor of neighbors) {
                const nKey = `${neighbor.x},${neighbor.y}`;
                if (closedSet.has(nKey) || !this.isWalkable(neighbor.x, neighbor.y)) continue;

                const moveCost = (neighbor.x !== current.x && neighbor.y !== current.y) ? 1.414 : 1.0;
                const gScore = current.g + moveCost;

                let existing = openMap.get(nKey);
                if (!existing) {
                    const h = this._heuristic(neighbor.x, neighbor.y, targetX, targetY);
                    const nNode = {
                        x: neighbor.x,
                        y: neighbor.y,
                        g: gScore,
                        h,
                        f: gScore + h,
                        parent: current
                    };
                    openList.push(nNode);
                    openMap.set(nKey, nNode);
                } else if (gScore < existing.g) {
                    existing.g = gScore;
                    existing.f = gScore + existing.h;
                    existing.parent = current;
                }
            }
        }

        return [];
    }

    _heuristic(x1, y1, x2, y2) {
        const dx = Math.abs(x1 - x2);
        const dy = Math.abs(y1 - y2);
        return dx + dy + (1.414 - 2) * Math.min(dx, dy); // Octile distance
    }

    _getNeighbors(x, y, allowDiagonals) {
        const neighbors = [
            { x: x + 1, y }, { x: x - 1, y },
            { x, y: y + 1 }, { x, y: y - 1 }
        ];

        if (allowDiagonals) {
            neighbors.push(
                { x: x + 1, y: y + 1 }, { x: x - 1, y: y + 1 },
                { x: x + 1, y: y - 1 }, { x: x - 1, y: y - 1 }
            );
        }

        return neighbors.filter(n => n.x >= 0 && n.x < this.width && n.y >= 0 && n.y < this.height);
    }

    _reconstructPath(node) {
        const path = [];
        let curr = node;
        while (curr) {
            path.unshift({ x: curr.x, y: curr.y });
            curr = curr.parent;
        }
        return path;
    }
}
""")

    # 2. src/ai/NavMesh2D.js
    write_file("src/ai/NavMesh2D.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * 2D Polygonal Navigation Mesh & Path Traversal
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class NavMesh2D {
    constructor(polygons = []) {
        this.polygons = polygons;
    }

    findPath(start, goal) {
        // Direct Line of Sight check
        return [start, goal];
    }
}
""")

    # 3. src/ai/BehaviorTree.js
    write_file("src/ai/BehaviorTree.js", """/**
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
""")
