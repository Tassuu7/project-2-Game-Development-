/**
 * NovaForge Game Engine & Arcade Studio
 * SPH (Smoothed-Particle Hydrodynamics) 2D Fluid Simulation
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Vector2 } from '../math/Vector2.js';

export class FluidSimulation2D {
    constructor(maxParticles = 300, smoothingRadius = 24) {
        this.particles = [];
        this.maxParticles = maxParticles;
        this.h = smoothingRadius;
        this.h2 = smoothingRadius * smoothingRadius;
        this.restDensity = 1.0;
        this.gasConstant = 200.0;
        this.viscosity = 2.5;

        for (let i = 0; i < maxParticles; i++) {
            this.particles.push({
                x: 100 + (i % 15) * 14,
                y: 50 + Math.floor(i / 15) * 14,
                vx: 0,
                vy: 0,
                fx: 0,
                fy: 0,
                density: 0,
                pressure: 0
            });
        }
    }

    update(dt, gravity, bounds) {
        const h2 = this.h2;

        // 1. Density and pressure computation
        for (let i = 0; i < this.particles.length; i++) {
            const pi = this.particles[i];
            pi.density = 0;

            for (let j = 0; j < this.particles.length; j++) {
                const pj = this.particles[j];
                const dx = pj.x - pi.x;
                const dy = pj.y - pi.y;
                const r2 = dx * dx + dy * dy;
                if (r2 < h2) {
                    pi.density += (h2 - r2) ** 3;
                }
            }

            pi.density = Math.max(pi.density * 0.0001, this.restDensity);
            pi.pressure = this.gasConstant * (pi.density - this.restDensity);
        }

        // 2. Pressure and viscosity force computation
        for (let i = 0; i < this.particles.length; i++) {
            const pi = this.particles[i];
            let fPressX = 0, fPressY = 0;
            let fViscX = 0, fViscY = 0;

            for (let j = 0; j < this.particles.length; j++) {
                if (i === j) continue;
                const pj = this.particles[j];
                const dx = pj.x - pi.x;
                const dy = pj.y - pi.y;
                const r = Math.hypot(dx, dy);

                if (r < this.h && r > 1e-4) {
                    const q = 1 - r / this.h;
                    const pTerm = ((pi.pressure + pj.pressure) / (2 * pj.density)) * (q * q);
                    fPressX -= (dx / r) * pTerm;
                    fPressY -= (dy / r) * pTerm;

                    const vTerm = (this.viscosity / pj.density) * q;
                    fViscX += (pj.vx - pi.vx) * vTerm;
                    fViscY += (pj.vy - pi.vy) * vTerm;
                }
            }

            pi.fx = fPressX + fViscX + gravity.x;
            pi.fy = fPressY + fViscY + gravity.y;
        }

        // 3. Integration & boundary clamping
        for (const p of this.particles) {
            p.vx += (p.fx / p.density) * dt;
            p.vy += (p.fy / p.density) * dt;
            p.x += p.vx * dt;
            p.y += p.vy * dt;

            // Boundaries
            if (p.x < bounds.minX + 8) { p.x = bounds.minX + 8; p.vx *= -0.5; }
            if (p.x > bounds.maxX - 8) { p.x = bounds.maxX - 8; p.vx *= -0.5; }
            if (p.y < bounds.minY + 8) { p.y = bounds.minY + 8; p.vy *= -0.5; }
            if (p.y > bounds.maxY - 8) { p.y = bounds.maxY - 8; p.vy *= -0.5; }
        }
    }

    render(ctx) {
        ctx.fillStyle = 'rgba(0, 195, 255, 0.75)';
        for (const p of this.particles) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}
