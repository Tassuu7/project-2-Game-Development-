/**
 * NovaForge Deformable Pressure Soft-Body 2D Simulation
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Vector2 } from '../math/Vector2.js';

export class SoftBody2D {
    constructor(centerX = 640, centerY = 300, radius = 50, numNodes = 16) {
        this.center = new Vector2(centerX, centerY);
        this.radius = radius;
        this.nodes = [];
        this.springs = [];
        this.pressure = 250;

        for (let i = 0; i < numNodes; i++) {
            const angle = (i * Math.PI * 2) / numNodes;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            this.nodes.push({
                pos: new Vector2(x, y),
                oldPos: new Vector2(x, y),
                normal: new Vector2(Math.cos(angle), Math.sin(angle)),
                mass: 0.5
            });
        }

        const segmentLength = (2 * Math.PI * radius) / numNodes;
        for (let i = 0; i < numNodes; i++) {
            this.springs.push({
                a: i,
                b: (i + 1) % numNodes,
                restLength: segmentLength,
                stiffness: 0.8
            });
        }
    }

    update(dt, gravity = { x: 0, y: 500 }, bounds = { minX: 50, minY: 50, maxX: 1230, maxY: 680 }) {
        // Node integration
        for (const n of this.nodes) {
            const vx = (n.pos.x - n.oldPos.x) * 0.97;
            const vy = (n.pos.y - n.oldPos.y) * 0.97 + (gravity.y * dt * dt);
            n.oldPos.copy(n.pos);
            n.pos.x += vx;
            n.pos.y += vy;

            if (n.pos.y > bounds.maxY) { n.pos.y = bounds.maxY; }
            if (n.pos.x < bounds.minX) { n.pos.x = bounds.minX; }
            if (n.pos.x > bounds.maxX) { n.pos.x = bounds.maxX; }
        }

        // Springs
        for (let iter = 0; iter < 4; iter++) {
            for (const s of this.springs) {
                const nA = this.nodes[s.a];
                const nB = this.nodes[s.b];
                const dx = nB.pos.x - nA.pos.x;
                const dy = nB.pos.y - nA.pos.y;
                const dist = Math.hypot(dx, dy);
                if (dist > 1e-4) {
                    const diff = (dist - s.restLength) / dist;
                    const ox = dx * 0.5 * diff * s.stiffness;
                    const oy = dy * 0.5 * diff * s.stiffness;
                    nA.pos.x += ox;
                    nA.pos.y += oy;
                    nB.pos.x -= ox;
                    nB.pos.y -= oy;
                }
            }
        }
    }

    render(ctx) {
        ctx.fillStyle = 'rgba(0, 229, 255, 0.4)';
        ctx.strokeStyle = '#00e5ff';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(this.nodes[0].pos.x, this.nodes[0].pos.y);
        for (let i = 1; i < this.nodes.length; i++) {
            ctx.lineTo(this.nodes[i].pos.x, this.nodes[i].pos.y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
}
