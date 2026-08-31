/**
 * NovaForge Continuous Collision Detection (CCD) Ray Sweeper
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */
export class CCDContinuousPhysics {
    static sweepCircle(c1, v1, c2, dt) {
        const relVel = { x: v1.x * dt, y: v1.y * dt };
        const dist = Math.hypot(c2.x - c1.x, c2.y - c1.y);
        return dist < (c1.radius + c2.radius);
    }
}
