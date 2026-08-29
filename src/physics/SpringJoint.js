/**
 * NovaForge Game Engine & Arcade Studio
 * Spring Joint Constraint Simulation
 * @author NovaForge Engineering Team
 * @license MIT
 */

import { Vector2 } from '../math/Vector2.js';

export class SpringJoint {
    constructor(bodyA, bodyB, restLength = 50, stiffness = 100, damping = 5) {
        this.bodyA = bodyA;
        this.bodyB = bodyB;
        this.restLength = restLength;
        this.stiffness = stiffness;
        this.damping = damping;
    }

    solve(dt) {
        const dx = this.bodyB.position.x - this.bodyA.position.x;
        const dy = this.bodyB.position.y - this.bodyA.position.y;
        const dist = Math.hypot(dx, dy);
        if (dist <= 1e-6) return;

        const normal = new Vector2(dx / dist, dy / dist);
        const deltaDist = dist - this.restLength;

        // Relative velocity
        const relVx = this.bodyB.velocity.x - this.bodyA.velocity.x;
        const relVy = this.bodyB.velocity.y - this.bodyA.velocity.y;
        const relVAlongNormal = relVx * normal.x + relVy * normal.y;

        const springForce = deltaDist * this.stiffness;
        const dampingForce = relVAlongNormal * this.damping;
        const totalForce = (springForce + dampingForce);

        const forceVec = new Vector2(normal.x * totalForce, normal.y * totalForce);

        if (this.bodyA.type === 'dynamic') this.bodyA.applyForce(forceVec);
        if (this.bodyB.type === 'dynamic') this.bodyB.applyForce(new Vector2(-forceVec.x, -forceVec.y));
    }
}
