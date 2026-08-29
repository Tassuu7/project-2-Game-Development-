/**
 * NovaForge Game Engine & Arcade Studio
 * Neon Tower Defense
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Vector2 } from '../../math/Vector2.js';

export class TowerDefenseGame {
    constructor(engine) {
        this.engine = engine;
        this.path = [
            { x: 50, y: 360 }, { x: 300, y: 360 }, { x: 300, y: 140 },
            { x: 700, y: 140 }, { x: 700, y: 560 }, { x: 1000, y: 560 }, { x: 1230, y: 560 }
        ];
        this.towers = [];
        this.creeps = [];
        this.projectiles = [];
        this.credits = 350;
        this.lives = 20;
        this.waveNumber = 1;
        this.selectedTowerType = 'gatling';
    }

    onCreate() {
        this.credits = 350;
        this.lives = 20;
        this.waveNumber = 1;
        this.towers = [
            { x: 360, y: 220, type: 'gatling', range: 150, fireCooldown: 0, damage: 18, color: '#00e5ff', cost: 100 }
        ];
        this.creeps = [];
        this.spawnWave();
    }

    spawnWave() {
        const count = 8 + this.waveNumber * 3;
        for (let i = 0; i < count; i++) {
            this.creeps.push({
                pos: new Vector2(this.path[0].x - i * 45, this.path[0].y),
                waypointIndex: 1,
                health: 60 + this.waveNumber * 20,
                maxHealth: 60 + this.waveNumber * 20,
                speed: 85 + (i % 3) * 20,
                color: (i % 5 === 0) ? '#ff0055' : '#39ff14'
            });
        }
    }

    update(dt) {
        const input = this.engine.input;

        if (input.mouse.justPressed) {
            const mx = input.mouse.x;
            const my = input.mouse.y;
            const cost = this.selectedTowerType === 'gatling' ? 100 : this.selectedTowerType === 'cryo' ? 150 : 220;

            if (this.credits >= cost) {
                this.credits -= cost;
                this.towers.push({
                    x: mx,
                    y: my,
                    type: this.selectedTowerType,
                    range: this.selectedTowerType === 'laser' ? 220 : 150,
                    fireCooldown: 0,
                    damage: this.selectedTowerType === 'laser' ? 45 : 18,
                    color: this.selectedTowerType === 'gatling' ? '#00e5ff' : this.selectedTowerType === 'cryo' ? '#ffe600' : '#ff0055',
                    cost
                });
            }
        }

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

            if (dist < 6) {
                c.waypointIndex++;
            } else {
                c.pos.x += (dx / dist) * c.speed * dt;
                c.pos.y += (dy / dist) * c.speed * dt;
            }
        }

        for (const t of this.towers) {
            t.fireCooldown -= dt;
            if (t.fireCooldown <= 0) {
                for (const c of this.creeps) {
                    if (c.pos.distanceTo(new Vector2(t.x, t.y)) <= t.range) {
                        c.health -= t.damage;
                        t.fireCooldown = t.type === 'laser' ? 0.6 : 0.25;

                        this.projectiles.push({
                            x1: t.x, y1: t.y,
                            x2: c.pos.x, y2: c.pos.y,
                            color: t.color,
                            life: 0.1
                        });
                        break;
                    }
                }
            }
        }

        for (let i = this.creeps.length - 1; i >= 0; i--) {
            if (this.creeps[i].health <= 0) {
                this.credits += 30;
                this.creeps.splice(i, 1);
            }
        }

        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            this.projectiles[i].life -= dt;
            if (this.projectiles[i].life <= 0) this.projectiles.splice(i, 1);
        }

        if (this.creeps.length === 0) {
            this.waveNumber++;
            this.spawnWave();
        }
    }

    render(ctx) {
        ctx.fillStyle = '#080c14';
        ctx.fillRect(0, 0, 1280, 720);

        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 44;
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(this.path[0].x, this.path[0].y);
        for (let i = 1; i < this.path.length; i++) ctx.lineTo(this.path[i].x, this.path[i].y);
        ctx.stroke();

        for (const p of this.projectiles) {
            ctx.strokeStyle = p.color;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(p.x1, p.y1);
            ctx.lineTo(p.x2, p.y2);
            ctx.stroke();
        }

        for (const t of this.towers) {
            ctx.fillStyle = t.color;
            ctx.beginPath();
            ctx.arc(t.x, t.y, 20, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.stroke();
        }

        for (const c of this.creeps) {
            ctx.fillStyle = c.color;
            ctx.beginPath();
            ctx.arc(c.pos.x, c.pos.y, 11, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#ff0055';
            ctx.fillRect(c.pos.x - 12, c.pos.y - 18, 24 * (c.health / c.maxHealth), 3);
        }

        ctx.fillStyle = '#fff';
        ctx.font = 'bold 18px monospace';
        ctx.fillText(`WAVE: ${this.waveNumber}   LIVES: ${this.lives}   CREDITS: $${this.credits}`, 30, 40);
        ctx.fillStyle = '#8e8eb2';
        ctx.font = '12px monospace';
        ctx.fillText('Click anywhere on map to build defense towers! Next wave auto-launches.', 30, 70);
    }
}
