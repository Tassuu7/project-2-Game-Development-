# -*- coding: utf-8 -*-
from scripts.code_gen_lib import write_file, git_commit

def build_partB():
    # 4. src/ai/DecisionTree.js
    write_file("src/ai/DecisionTree.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Rule-Based Decision Tree Evaluator
 * @author NovaForge Engineering Team
 * @license MIT
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
""")

    # 5. src/ai/FlockingBoids.js
    write_file("src/ai/FlockingBoids.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Autonomous Agent Swarm & Boids Flocking Simulation
 * @author NovaForge Engineering Team
 * @license MIT
 */

import { Vector2 } from '../math/Vector2.js';

export class Boid {
    constructor(x, y) {
        this.position = new Vector2(x, y);
        this.velocity = new Vector2((Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100);
        this.acceleration = new Vector2(0, 0);
        this.maxSpeed = 150;
        this.maxForce = 300;
        this.neighborRadius = 60;
        this.separationRadius = 25;
    }

    flock(boids, bounds) {
        let sep = this.separate(boids);
        let ali = this.align(boids);
        let coh = this.cohere(boids);

        sep.scale(1.5);
        ali.scale(1.0);
        coh.scale(1.0);

        this.acceleration.add(sep);
        this.acceleration.add(ali);
        this.acceleration.add(coh);

        // Bounding
        if (bounds) {
            if (this.position.x < bounds.minX) this.velocity.x += 20;
            if (this.position.x > bounds.maxX) this.velocity.x -= 20;
            if (this.position.y < bounds.minY) this.velocity.y += 20;
            if (this.position.y > bounds.maxY) this.velocity.y -= 20;
        }
    }

    separate(boids) {
        let steer = new Vector2(0, 0);
        let count = 0;

        for (const other of boids) {
            const d = this.position.distanceTo(other.position);
            if (d > 0 && d < this.separationRadius) {
                const diff = new Vector2(this.position.x - other.position.x, this.position.y - other.position.y).normalize().scale(1 / d);
                steer.add(diff);
                count++;
            }
        }

        if (count > 0) steer.scale(1 / count);
        return steer;
    }

    align(boids) {
        let sum = new Vector2(0, 0);
        let count = 0;

        for (const other of boids) {
            const d = this.position.distanceTo(other.position);
            if (d > 0 && d < this.neighborRadius) {
                sum.add(other.velocity);
                count++;
            }
        }

        if (count > 0) {
            sum.scale(1 / count).normalize().scale(this.maxSpeed);
            const steer = new Vector2(sum.x - this.velocity.x, sum.y - this.velocity.y);
            return steer;
        }
        return new Vector2(0, 0);
    }

    cohere(boids) {
        let sum = new Vector2(0, 0);
        let count = 0;

        for (const other of boids) {
            const d = this.position.distanceTo(other.position);
            if (d > 0 && d < this.neighborRadius) {
                sum.add(other.position);
                count++;
            }
        }

        if (count > 0) {
            sum.scale(1 / count);
            const desired = new Vector2(sum.x - this.position.x, sum.y - this.position.y).normalize().scale(this.maxSpeed);
            return new Vector2(desired.x - this.velocity.x, desired.y - this.velocity.y);
        }
        return new Vector2(0, 0);
    }

    update(dt) {
        this.velocity.add(new Vector2(this.acceleration.x * dt, this.acceleration.y * dt));
        this.velocity.clampLength(0, this.maxSpeed);
        this.position.add(new Vector2(this.velocity.x * dt, this.velocity.y * dt));
        this.acceleration.set(0, 0);
    }
}
""")

    # 6. src/ai/EnemyFSM.js
    write_file("src/ai/EnemyFSM.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Combat Enemy Tactical Finite State Machine
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class EnemyFSM {
    constructor(enemy) {
        this.enemy = enemy;
        this.state = 'PATROL'; // PATROL | CHASE | ATTACK | FLEE
        this.patrolTimer = 0;
    }

    update(dt, player) {
        const enemy = this.enemy;
        if (!player) return;

        const dist = Math.hypot(player.position.x - enemy.position.x, player.position.y - enemy.position.y);

        switch (this.state) {
            case 'PATROL':
                this.patrolTimer += dt;
                if (this.patrolTimer > 2.0) {
                    this.patrolTimer = 0;
                    enemy.velocity.x = (Math.random() - 0.5) * 60;
                    enemy.velocity.y = (Math.random() - 0.5) * 60;
                }
                if (dist < 200) {
                    this.state = 'CHASE';
                }
                break;

            case 'CHASE':
                const dx = player.position.x - enemy.position.x;
                const dy = player.position.y - enemy.position.y;
                const angle = Math.atan2(dy, dx);
                enemy.velocity.x = Math.cos(angle) * 120;
                enemy.velocity.y = Math.sin(angle) * 120;

                if (dist < 40) {
                    this.state = 'ATTACK';
                } else if (dist > 350) {
                    this.state = 'PATROL';
                }
                break;

            case 'ATTACK':
                enemy.velocity.set(0, 0);
                if (enemy.attackCooldown <= 0) {
                    enemy.performAttack(player);
                    enemy.attackCooldown = 1.0;
                }
                if (dist > 50) {
                    this.state = 'CHASE';
                }
                break;
        }
    }
}
""")

    # 7. src/ai/UtilityAI.js
    write_file("src/ai/UtilityAI.js", """/**
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
""")

    git_commit("feat(ai): integrate A* pathfinding, behavior trees, flocking boids, and decision systems")
