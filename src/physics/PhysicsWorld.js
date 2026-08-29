/**
 * NovaForge Game Engine & Arcade Studio
 * Master 2D Physics World, Velocity Verlet Integration & Contact Resolution
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Vector2 } from '../math/Vector2.js';
import { SATCollision } from './SATCollision.js';
import { SpatialHashGrid } from './SpatialHashGrid.js';

export class PhysicsWorld {
    constructor(config = {}) {
        this.gravity = new Vector2(config.gravityX || 0, config.gravityY !== undefined ? config.gravityY : 980);
        this.bodies = [];
        this.joints = [];
        this.spatialHash = new SpatialHashGrid(config.spatialCellSize || 64);
        this.subSteps = config.subSteps || 4;
        this.penetrationSlop = 0.05;
        this.baumgarte = 0.2;
    }

    addBody(body) {
        if (!this.bodies.includes(body)) {
            this.bodies.push(body);
        }
        return body;
    }

    removeBody(body) {
        const index = this.bodies.indexOf(body);
        if (index !== -1) {
            this.bodies.splice(index, 1);
        }
    }

    addJoint(joint) {
        this.joints.push(joint);
        return joint;
    }

    removeJoint(joint) {
        const idx = this.joints.indexOf(joint);
        if (idx !== -1) this.joints.splice(idx, 1);
    }

    step(dt) {
        const subDt = dt / this.subSteps;

        for (let s = 0; s < this.subSteps; s++) {
            // 1. Solve joint constraints
            for (const joint of this.joints) {
                joint.solve(subDt);
            }

            // 2. Integrate velocities and positions
            for (const body of this.bodies) {
                body.integrate(subDt, this.gravity);
            }

            // 3. Broadphase spatial grid
            this.spatialHash.clear();
            for (const body of this.bodies) {
                if (body.collider) {
                    this.spatialHash.insert(body);
                }
            }

            // 4. Narrowphase collision & impulse resolution
            const checkedPairs = new Set();
            for (const bodyA of this.bodies) {
                if (!bodyA.collider || bodyA.isSleeping) continue;

                const candidates = this.spatialHash.queryPotentialCollisions(bodyA);
                for (const bodyB of candidates) {
                    if (!bodyB.collider) continue;

                    const pairKey = bodyA.mass > bodyB.mass ? `${bodyA.position.x}_${bodyB.position.x}` : `${bodyB.position.x}_${bodyA.position.x}`;
                    if (checkedPairs.has(pairKey)) continue;
                    checkedPairs.add(pairKey);

                    const collision = SATCollision.testCollision(bodyA.collider, bodyA, bodyB.collider, bodyB);
                    if (collision && collision.collided) {
                        this._resolveContact(collision, subDt);
                    }
                }
            }
        }
    }

    _resolveContact(c, dt) {
        const bodyA = c.bodyA;
        const bodyB = c.bodyB;
        if (!bodyA || !bodyB) return;
        if (bodyA.type === 'static' && bodyB.type === 'static') return;

        const normal = c.normal;
        const rvX = bodyB.velocity.x - bodyA.velocity.x;
        const rvY = bodyB.velocity.y - bodyA.velocity.y;
        const velAlongNormal = rvX * normal.x + rvY * normal.y;

        if (velAlongNormal > 0) return; // Moving apart

        const e = Math.min(bodyA.restitution, bodyB.restitution);
        const invMassSum = bodyA.invMass + bodyB.invMass;
        if (invMassSum <= 1e-8) return;

        let j = -(1 + e) * velAlongNormal;
        j /= invMassSum;

        const impulseX = normal.x * j;
        const impulseY = normal.y * j;

        if (bodyA.type === 'dynamic') {
            bodyA.velocity.x -= impulseX * bodyA.invMass;
            bodyA.velocity.y -= impulseY * bodyA.invMass;
            bodyA.isSleeping = false;
        }
        if (bodyB.type === 'dynamic') {
            bodyB.velocity.x += impulseX * bodyB.invMass;
            bodyB.velocity.y += impulseY * bodyB.invMass;
            bodyB.isSleeping = false;
        }

        // Positional Baumgarte stabilization
        const correctionMagnitude = Math.max(0, c.penetration - this.penetrationSlop) * this.baumgarte / invMassSum;
        const corrX = normal.x * correctionMagnitude;
        const corrY = normal.y * correctionMagnitude;

        if (bodyA.type === 'dynamic') {
            bodyA.position.x -= corrX * bodyA.invMass;
            bodyA.position.y -= corrY * bodyA.invMass;
        }
        if (bodyB.type === 'dynamic') {
            bodyB.position.x += corrX * bodyB.invMass;
            bodyB.position.y += corrY * bodyB.invMass;
        }
    }

    clear() {
        this.bodies = [];
        this.joints = [];
        this.spatialHash.clear();
    }
}
