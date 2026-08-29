/**
 * NovaForge Game Engine & Arcade Studio
 * Verlet Multi-Bone Ragdoll Simulation System
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Vector2 } from '../math/Vector2.js';

export class RagdollPhysics {
    constructor(startX = 100, startY = 100) {
        this.points = [
            { pos: new Vector2(startX, startY - 30), oldPos: new Vector2(startX, startY - 30), radius: 10, mass: 1, name: 'head' },
            { pos: new Vector2(startX, startY), oldPos: new Vector2(startX, startY), radius: 14, mass: 3, name: 'chest' },
            { pos: new Vector2(startX, startY + 25), oldPos: new Vector2(startX, startY + 25), radius: 12, mass: 2, name: 'pelvis' },
            { pos: new Vector2(startX - 20, startY + 5), oldPos: new Vector2(startX - 20, startY + 5), radius: 6, mass: 0.8, name: 'hand_l' },
            { pos: new Vector2(startX + 20, startY + 5), oldPos: new Vector2(startX + 20, startY + 5), radius: 6, mass: 0.8, name: 'hand_r' },
            { pos: new Vector2(startX - 15, startY + 55), oldPos: new Vector2(startX - 15, startY + 55), radius: 7, mass: 1, name: 'foot_l' },
            { pos: new Vector2(startX + 15, startY + 55), oldPos: new Vector2(startX + 15, startY + 55), radius: 7, mass: 1, name: 'foot_r' }
        ];

        this.sticks = [
            { p0: 0, p1: 1, length: 30 },
            { p0: 1, p1: 2, length: 25 },
            { p0: 1, p1: 3, length: 25 },
            { p0: 1, p1: 4, length: 25 },
            { p0: 2, p1: 5, length: 30 },
            { p0: 2, p1: 6, length: 30 }
        ];
    }

    update(dt, gravity, bounds) {
        // Verlet point integration
        for (const p of this.points) {
            const vx = (p.pos.x - p.oldPos.x) * 0.98;
            const vy = (p.pos.y - p.oldPos.y) * 0.98 + (gravity.y * dt * dt);
            p.oldPos.copy(p.pos);
            p.pos.x += vx;
            p.pos.y += vy;

            // Floor & walls collision
            if (p.pos.y > bounds.maxY - p.radius) {
                p.pos.y = bounds.maxY - p.radius;
            }
            if (p.pos.x < bounds.minX + p.radius) p.pos.x = bounds.minX + p.radius;
            if (p.pos.x > bounds.maxX - p.radius) p.pos.x = bounds.maxX - p.radius;
        }

        // Stick constraints solver
        for (let iter = 0; iter < 5; iter++) {
            for (const s of this.sticks) {
                const p0 = this.points[s.p0];
                const p1 = this.points[s.p1];
                const dx = p1.pos.x - p0.pos.x;
                const dy = p1.pos.y - p0.pos.y;
                const dist = Math.hypot(dx, dy);
                if (dist > 1e-6) {
                    const diff = (dist - s.length) / dist;
                    const offsetX = dx * 0.5 * diff;
                    const offsetY = dy * 0.5 * diff;
                    p0.pos.x += offsetX;
                    p0.pos.y += offsetY;
                    p1.pos.x -= offsetX;
                    p1.pos.y -= offsetY;
                }
            }
        }
    }

    applyImpulse(pointIndex, impulseX, impulseY) {
        if (this.points[pointIndex]) {
            this.points[pointIndex].oldPos.x -= impulseX;
            this.points[pointIndex].oldPos.y -= impulseY;
        }
    }

    render(ctx) {
        ctx.strokeStyle = '#00e5ff';
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';

        // Draw skeleton sticks
        for (const s of this.sticks) {
            const p0 = this.points[s.p0].pos;
            const p1 = this.points[s.p1].pos;
            ctx.beginPath();
            ctx.moveTo(p0.x, p0.y);
            ctx.lineTo(p1.x, p1.y);
            ctx.stroke();
        }

        // Draw joint points
        for (const p of this.points) {
            ctx.fillStyle = p.name === 'head' ? '#ff3366' : '#ffffff';
            ctx.beginPath();
            ctx.arc(p.pos.x, p.pos.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}
