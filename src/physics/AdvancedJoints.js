/**
 * NovaForge Advanced Physics Constraints (Revolute, Prismatic, Pulley, Weld)
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Vector2 } from '../math/Vector2.js';

export class RevoluteJoint {
    constructor(bodyA, bodyB, anchorWorldPos) {
        this.bodyA = bodyA;
        this.bodyB = bodyB;
        this.localAnchorA = new Vector2(anchorWorldPos.x - bodyA.position.x, anchorWorldPos.y - bodyA.position.y);
        this.localAnchorB = new Vector2(anchorWorldPos.x - bodyB.position.x, anchorWorldPos.y - bodyB.position.y);
        this.enableLimit = false;
        this.lowerAngle = -Math.PI * 0.5;
        this.upperAngle = Math.PI * 0.5;
    }

    solve(dt) {
        const rA = this._rotate(this.localAnchorA, this.bodyA.rotation);
        const rB = this._rotate(this.localAnchorB, this.bodyB.rotation);

        const pA = new Vector2(this.bodyA.position.x + rA.x, this.bodyA.position.y + rA.y);
        const pB = new Vector2(this.bodyB.position.x + rB.x, this.bodyB.position.y + rB.y);

        const diff = new Vector2(pB.x - pA.x, pB.y - pA.y);
        const invMass = this.bodyA.invMass + this.bodyB.invMass;
        if (invMass <= 1e-8) return;

        const impulse = new Vector2((diff.x * 0.8) / invMass, (diff.y * 0.8) / invMass);

        if (this.bodyA.type === 'dynamic') {
            this.bodyA.position.x += impulse.x * this.bodyA.invMass;
            this.bodyA.position.y += impulse.y * this.bodyA.invMass;
        }
        if (this.bodyB.type === 'dynamic') {
            this.bodyB.position.x -= impulse.x * this.bodyB.invMass;
            this.bodyB.position.y -= impulse.y * this.bodyB.invMass;
        }
    }

    _rotate(v, theta) {
        const cos = Math.cos(theta);
        const sin = Math.sin(theta);
        return new Vector2(v.x * cos - v.y * sin, v.x * sin + v.y * cos);
    }
}

export class WeldJoint {
    constructor(bodyA, bodyB) {
        this.bodyA = bodyA;
        this.bodyB = bodyB;
        this.offset = new Vector2(bodyB.position.x - bodyA.position.x, bodyB.position.y - bodyA.position.y);
        this.angleOffset = bodyB.rotation - bodyA.rotation;
    }

    solve(dt) {
        if (this.bodyB.type === 'dynamic') {
            this.bodyB.position.x = this.bodyA.position.x + this.offset.x;
            this.bodyB.position.y = this.bodyA.position.y + this.offset.y;
            this.bodyB.rotation = this.bodyA.rotation + this.angleOffset;
        }
    }
}
