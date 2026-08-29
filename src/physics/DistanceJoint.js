/**
 * NovaForge Game Engine & Arcade Studio
 * Distance Joint Constraint with Baumgarte Stabilization
 * @author NovaForge Engineering Team
 * @license MIT
 */

import { Vector2 } from '../math/Vector2.js';

export class DistanceJoint {
    constructor(bodyA, bodyB, targetDistance = null) {
        this.bodyA = bodyA;
        this.bodyB = bodyB;
        this.targetDistance = targetDistance !== null ? targetDistance : bodyA.position.distanceTo(bodyB.position);
    }

    solve(dt) {
        const dx = this.bodyB.position.x - this.bodyA.position.x;
        const dy = this.bodyB.position.y - this.bodyA.position.y;
        const currentDistance = Math.hypot(dx, dy);
        if (currentDistance <= 1e-6) return;

        const error = currentDistance - this.targetDistance;
        const normal = new Vector2(dx / currentDistance, dy / currentDistance);

        const invMassSum = this.bodyA.invMass + this.bodyB.invMass;
        if (invMassSum <= 1e-8) return;

        const correctionMagnitude = (error * 0.8) / invMassSum;
        if (this.bodyA.type === 'dynamic') {
            this.bodyA.position.x += normal.x * correctionMagnitude * this.bodyA.invMass;
            this.bodyA.position.y += normal.y * correctionMagnitude * this.bodyA.invMass;
        }
        if (this.bodyB.type === 'dynamic') {
            this.bodyB.position.x -= normal.x * correctionMagnitude * this.bodyB.invMass;
            this.bodyB.position.y -= normal.y * correctionMagnitude * this.bodyB.invMass;
        }
    }
}
