/**
 * NovaForge Game Engine & Arcade Studio
 * Procedural Starfield, Weather & Laser Particle Effects
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class CanvasEffects {
    constructor(width = 1280, height = 720) {
        this.width = width;
        this.height = height;
        this.stars = [];
        this.initStarfield(200);
    }

    initStarfield(count = 200) {
        this.stars = [];
        for (let i = 0; i < count; i++) {
            this.stars.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                z: Math.random() * 3 + 0.5,
                size: Math.random() * 2 + 1,
                color: ['#ffffff', '#00e5ff', '#ff3366', '#ffe600'][Math.floor(Math.random() * 4)]
            });
        }
    }

    updateAndRenderStarfield(ctx, speed = 50, dt = 0.016) {
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        for (const star of this.stars) {
            star.y += speed * star.z * dt;
            if (star.y > this.height) {
                star.y = 0;
                star.x = Math.random() * this.width;
            }

            ctx.fillStyle = star.color;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size * (star.z * 0.5), 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }
}
