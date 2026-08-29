/**
 * NovaForge 2D Mass-Spring Cloth & Flag Physics Engine
 * @author NovaForge Engineering Team
 * @license MIT
 */

import { Vector2 } from '../math/Vector2.js';

export class ClothSimulation {
    constructor(cols = 16, rows = 12, spacing = 20, startX = 400, startY = 100) {
        this.cols = cols;
        this.rows = rows;
        this.spacing = spacing;
        this.points = [];
        this.constraints = [];

        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                const px = startX + x * spacing;
                const py = startY + y * spacing;
                const pinned = (y === 0 && (x === 0 || x === cols - 1 || x === Math.floor(cols / 2)));
                this.points.push({
                    pos: new Vector2(px, py),
                    oldPos: new Vector2(px, py),
                    pinned
                });
            }
        }

        // Structural links
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                if (x < cols - 1) {
                    this.constraints.push({
                        p1: y * cols + x,
                        p2: y * cols + (x + 1),
                        dist: spacing
                    });
                }
                if (y < rows - 1) {
                    this.constraints.push({
                        p1: y * cols + x,
                        p2: (y + 1) * cols + x,
                        dist: spacing
                    });
                }
            }
        }
    }

    update(dt, gravity = { x: 0, y: 400 }, wind = { x: 50, y: 0 }) {
        for (const p of this.points) {
            if (p.pinned) continue;
            const vx = (p.pos.x - p.oldPos.x) * 0.98 + (gravity.x + wind.x) * dt * dt;
            const vy = (p.pos.y - p.oldPos.y) * 0.98 + (gravity.y + wind.y) * dt * dt;
            p.oldPos.copy(p.pos);
            p.pos.x += vx;
            p.pos.y += vy;
        }

        for (let iter = 0; iter < 4; iter++) {
            for (const c of this.constraints) {
                const p1 = this.points[c.p1];
                const p2 = this.points[c.p2];
                const dx = p2.pos.x - p1.pos.x;
                const dy = p2.pos.y - p1.pos.y;
                const dist = Math.hypot(dx, dy);
                if (dist > 1e-4) {
                    const diff = (dist - c.dist) / dist;
                    const offsetX = dx * 0.5 * diff;
                    const offsetY = dy * 0.5 * diff;
                    if (!p1.pinned) { p1.pos.x += offsetX; p1.pos.y += offsetY; }
                    if (!p2.pinned) { p2.pos.x -= offsetX; p2.pos.y -= offsetY; }
                }
            }
        }
    }

    render(ctx) {
        ctx.strokeStyle = 'rgba(0, 229, 255, 0.6)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (const c of this.constraints) {
            const p1 = this.points[c.p1].pos;
            const p2 = this.points[c.p2].pos;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
        }
        ctx.stroke();
    }
}
