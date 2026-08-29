# -*- coding: utf-8 -*-
import sys
sys.path.insert(0, '.')
from scripts.code_gen_lib import write_file

def build_modules():
    # 1. src/math/TrigLookupTable.js
    lines = [
        "/**",
        " * NovaForge Fast Trigonometric Approximation & Precomputed Lookup Tables",
        " * @author NovaForge Engineering Team",
        " * @license Proprietary - All Rights Reserved",
        " */",
        "",
        "export class TrigLookupTable {",
        "    constructor(resolution = 3600) {",
        "        this.resolution = resolution;",
        "        this.sinTable = new Float32Array(resolution);",
        "        this.cosTable = new Float32Array(resolution);",
        "        this.step = (Math.PI * 2) / resolution;",
        "        this.invStep = resolution / (Math.PI * 2);",
        "        this._initTables();",
        "    }",
        "",
        "    _initTables() {",
        "        for (let i = 0; i < this.resolution; i++) {",
        "            const angle = i * this.step;",
        "            this.sinTable[i] = Math.sin(angle);",
        "            this.cosTable[i] = Math.cos(angle);",
        "        }",
        "    }",
        "",
        "    sin(rad) {",
        "        let idx = Math.floor(rad * this.invStep) % this.resolution;",
        "        if (idx < 0) idx += this.resolution;",
        "        return this.sinTable[idx];",
        "    }",
        "",
        "    cos(rad) {",
        "        let idx = Math.floor(rad * this.invStep) % this.resolution;",
        "        if (idx < 0) idx += this.resolution;",
        "        return this.cosTable[idx];",
        "    }",
        "}"
    ]
    write_file("src/math/TrigLookupTable.js", "\n".join(lines) + "\n")

    # 2. src/math/FourierTransform.js
    write_file("src/math/FourierTransform.js", """/**
 * NovaForge Discrete & Fast Fourier Transform (FFT) for Audio Analysis
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class FastFourierTransform {
    constructor(bufferSize = 1024) {
        this.bufferSize = bufferSize;
        this.cosTable = new Float32Array(bufferSize / 2);
        this.sinTable = new Float32Array(bufferSize / 2);
        for (let i = 0; i < bufferSize / 2; i++) {
            this.cosTable[i] = Math.cos(-2 * Math.PI * i / bufferSize);
            this.sinTable[i] = Math.sin(-2 * Math.PI * i / bufferSize);
        }
    }

    forward(inputReal, outReal, outImag) {
        const n = this.bufferSize;
        for (let k = 0; k < n / 2; k++) {
            let sumReal = 0.0;
            let sumImag = 0.0;
            for (let t = 0; t < n; t++) {
                const angle = (2 * Math.PI * t * k) / n;
                sumReal += inputReal[t] * Math.cos(angle);
                sumImag -= inputReal[t] * Math.sin(angle);
            }
            outReal[k] = sumReal;
            outImag[k] = sumImag;
        }
    }
}
""")

    # 3. src/physics/ClothSimulation.js
    write_file("src/physics/ClothSimulation.js", """/**
 * NovaForge 2D Mass-Spring Cloth & Flag Physics Engine
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
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
""")

    # 4. src/games/cosmic_vanguard/BossPatterns.js
    write_file("src/games/cosmic_vanguard/BossPatterns.js", """/**
 * NovaForge Cosmic Vanguard Boss Attack Patterns & Wave Formations
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class BossPatterns {
    static generateSpiralBarrage(originX, originY, count = 24, rotationOffset = 0, speed = 250) {
        const bullets = [];
        const step = (Math.PI * 2) / count;
        for (let i = 0; i < count; i++) {
            const angle = i * step + rotationOffset;
            bullets.push({
                x: originX,
                y: originY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                color: '#ff0055',
                radius: 5
            });
        }
        return bullets;
    }

    static generateConeSpread(originX, originY, targetX, targetY, count = 7, spreadAngle = Math.PI * 0.25, speed = 320) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - originY, targetX - originX);
        const startAngle = baseAngle - spreadAngle * 0.5;
        const step = spreadAngle / (count - 1);

        for (let i = 0; i < count; i++) {
            const angle = startAngle + i * step;
            bullets.push({
                x: originX,
                y: originY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                color: '#ffaa00',
                radius: 4
            });
        }
        return bullets;
    }
}
""")

    # 5. src/games/rhythm_blaster/TrackData.js
    write_file("src/games/rhythm_blaster/TrackData.js", """/**
 * NovaForge Rhythm Blaster Song Tracks & Choreographed Beat Maps
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export const SONG_TRACKS = [
    {
        id: "track_cyber_overdrive",
        title: "Cyber Overdrive (140 BPM)",
        bpm: 140,
        notes: [
            { time: 1.0, lane: 0 }, { time: 1.5, lane: 1 }, { time: 2.0, lane: 2 }, { time: 2.5, lane: 3 },
            { time: 3.0, lane: 1 }, { time: 3.25, lane: 2 }, { time: 3.5, lane: 0 }, { time: 4.0, lane: 3 },
            { time: 4.5, lane: 2 }, { time: 5.0, lane: 1 }, { time: 5.5, lane: 0 }, { time: 6.0, lane: 3 }
        ]
    },
    {
        id: "track_neon_nights",
        title: "Neon Nights (128 BPM)",
        bpm: 128,
        notes: [
            { time: 0.8, lane: 1 }, { time: 1.6, lane: 2 }, { time: 2.4, lane: 0 }, { time: 3.2, lane: 3 },
            { time: 4.0, lane: 1 }, { time: 4.8, lane: 2 }, { time: 5.6, lane: 0 }, { time: 6.4, lane: 3 }
        ]
    }
];
""")

build_modules()
