/**
 * NovaForge Game Engine & Arcade Studio
 * High-Density Particle Physics & Visual Emitter Engine
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class ParticleSystem {
    constructor(maxParticles = 2000) {
        this.maxParticles = maxParticles;
        this.particles = [];
        this.pool = [];

        // Preallocate pool
        for (let i = 0; i < maxParticles; i++) {
            this.pool.push({
                x: 0, y: 0,
                vx: 0, vy: 0,
                size: 4, startSize: 4, endSize: 0,
                color: '#ffdd00',
                alpha: 1.0,
                life: 1.0, maxLife: 1.0,
                gravityScale: 1.0,
                drag: 0.98,
                active: false
            });
        }
    }

    emit(config) {
        const count = config.count || 1;
        for (let i = 0; i < count; i++) {
            const p = this.pool.pop();
            if (!p) break;

            const angle = config.angle !== undefined ? config.angle + (Math.random() - 0.5) * (config.spread || 0) : Math.random() * Math.PI * 2;
            const speed = (config.speed || 100) * (0.5 + Math.random());

            p.x = config.x || 0;
            p.y = config.y || 0;
            p.vx = Math.cos(angle) * speed;
            p.vy = Math.sin(angle) * speed;
            p.startSize = config.size || 4;
            p.endSize = config.endSize !== undefined ? config.endSize : 0;
            p.size = p.startSize;
            p.color = config.color || '#ffcc00';
            p.alpha = 1.0;
            p.maxLife = config.lifetime || 0.8;
            p.life = p.maxLife;
            p.gravityScale = config.gravityScale !== undefined ? config.gravityScale : 1.0;
            p.drag = config.drag !== undefined ? config.drag : 0.98;
            p.active = true;

            this.particles.push(p);
        }
    }

    update(dt, gravity = { x: 0, y: 300 }) {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.life -= dt;

            if (p.life <= 0) {
                p.active = false;
                this.particles.splice(i, 1);
                this.pool.push(p);
                continue;
            }

            const progress = 1.0 - (p.life / p.maxLife);
            p.size = p.startSize + (p.endSize - p.startSize) * progress;
            p.alpha = 1.0 - progress;

            p.vx += gravity.x * p.gravityScale * dt;
            p.vy += gravity.y * p.gravityScale * dt;
            p.vx *= p.drag;
            p.vy *= p.drag;

            p.x += p.vx * dt;
            p.y += p.vy * dt;
        }
    }

    render(ctx) {
        ctx.save();
        for (const p of this.particles) {
            ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha));
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, Math.max(0.5, p.size), 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }

    clear() {
        while (this.particles.length > 0) {
            const p = this.particles.pop();
            p.active = false;
            this.pool.push(p);
        }
    }
}
