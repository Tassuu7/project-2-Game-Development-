/**
 * NovaForge Game Engine & Arcade Studio
 * Neon Tower Defense - Strategic Grid Path Defense
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Vector2 } from '../../math/Vector2.js';

export class TowerDefenseGame {
    constructor(engine) {
        this.engine = engine;
        this.path = [
            { x: 50, y: 360 }, { x: 300, y: 360 }, { x: 300, y: 150 },
            { x: 700, y: 150 }, { x: 700, y: 550 }, { x: 1000, y: 550 }, { x: 1230, y: 550 }
        ];
        this.towers = [
            { x: 350, y: 220, range: 140, fireCooldown: 0, damage: 15, color: '#00e5ff' },
            { x: 650, y: 350, range: 160, fireCooldown: 0, damage: 25, color: '#ff0055' }
        ];
        this.creeps = [];
        this.credits = 300;
        this.lives = 20;
        this.waveTimer = 0;
    }

    onCreate() {
        this.spawnWave();
    }

    spawnWave() {
        for (let i = 0; i < 10; i++) {
            this.creeps.push({
                pos: new Vector2(this.path[0].x - i * 40, this.path[0].y),
                waypointIndex: 1,
                health: 50,
                maxHealth: 50,
                speed: 90
            });
        }
    }

    update(dt) {
        // Move creeps along path
        for (let i = this.creeps.length - 1; i >= 0; i--) {
            const c = this.creeps[i];
            const target = this.path[c.waypointIndex];
            if (!target) {
                this.lives--;
                this.creeps.splice(i, 1);
                continue;
            }

            const dx = target.x - c.pos.x;
            const dy = target.y - c.pos.y;
            const dist = Math.hypot(dx, dy);

            if (dist < 5) {
                c.waypointIndex++;
            } else {
                c.pos.x += (dx / dist) * c.speed * dt;
                c.pos.y += (dy / dist) * c.speed * dt;
            }
        }

        // Tower attack logic
        for (const t of this.towers) {
            t.fireCooldown -= dt;
            if (t.fireCooldown <= 0) {
                for (const c of this.creeps) {
                    if (c.pos.distanceTo(new Vector2(t.x, t.y)) <= t.range) {
                        c.health -= t.damage;
                        t.fireCooldown = 0.4;
                        break;
                    }
                }
            }
        }

        // Clean dead creeps
        for (let i = this.creeps.length - 1; i >= 0; i--) {
            if (this.creeps[i].health <= 0) {
                this.credits += 25;
                this.creeps.splice(i, 1);
            }
        }

        if (this.creeps.length === 0) {
            this.spawnWave();
        }
    }

    render(ctx) {
        ctx.fillStyle = '#0d1117';
        ctx.fillRect(0, 0, 1280, 720);

        // Draw path
        ctx.strokeStyle = '#30363d';
        ctx.lineWidth = 40;
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(this.path[0].x, this.path[0].y);
        for (let i = 1; i < this.path.length; i++) {
            ctx.lineTo(this.path[i].x, this.path[i].y);
        }
        ctx.stroke();

        // Draw towers
        for (const t of this.towers) {
            ctx.fillStyle = t.color;
            ctx.beginPath();
            ctx.arc(t.x, t.y, 22, 0, Math.PI * 2);
            ctx.fill();
        }

        // Draw creeps
        for (const c of this.creeps) {
            ctx.fillStyle = '#39ff14';
            ctx.beginPath();
            ctx.arc(c.pos.x, c.pos.y, 10, 0, Math.PI * 2);
            ctx.fill();
        }

        // HUD
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 18px monospace';
        ctx.fillText(`LIVES: ${this.lives}   CREDITS: $${this.credits}`, 30, 40);
    }
}
