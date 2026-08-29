/**
 * NovaForge Game Engine & Arcade Studio
 * Cyber Runner 2099 - Enhanced Precision Cyberpunk Platformer
 * Features: Wall Jumps, Air Dashes, Moving Lasers, Spring Boosters, Ghost Replay Trails
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Vector2 } from '../../math/Vector2.js';
import { ParticleSystem } from '../../physics/ParticleSystem.js';

export class PlatformerGame {
    constructor(engine) {
        this.engine = engine;
        this.player = {
            pos: new Vector2(100, 500),
            vel: new Vector2(0, 0),
            width: 22,
            height: 34,
            isGrounded: false,
            canDoubleJump: true,
            canDash: true,
            isDashing: 0,
            dashCooldown: 0
        };
        this.particles = new ParticleSystem(800);
        this.ghostTrails = [];
        this.platforms = [
            { x: 0, y: 640, w: 1280, h: 80, type: 'solid' },
            { x: 220, y: 520, w: 180, h: 20, type: 'moving', vx: 60, minX: 180, maxX: 380 },
            { x: 500, y: 410, w: 190, h: 20, type: 'solid' },
            { x: 800, y: 310, w: 160, h: 20, type: 'boost', boostY: -720 },
            { x: 1050, y: 210, w: 180, h: 20, type: 'goal' }
        ];
        this.hazards = [
            { x: 420, y: 620, w: 60, h: 20, type: 'laser' },
            { x: 720, y: 620, w: 60, h: 20, type: 'laser' }
        ];
        this.collectibles = [
            { x: 300, y: 470, collected: false },
            { x: 600, y: 360, collected: false },
            { x: 880, y: 250, collected: false }
        ];
        this.score = 0;
        this.deaths = 0;
        this.timer = 0;
    }

    onCreate() {
        this.player.pos.set(100, 500);
        this.player.vel.set(0, 0);
        this.score = 0;
        this.timer = 0;
        this.collectibles.forEach(c => c.collected = false);
    }

    update(dt) {
        const input = this.engine.input;
        const p = this.player;
        this.timer += dt;

        // Dash Ability (Shift / K)
        if (p.dashCooldown > 0) p.dashCooldown -= dt;
        if (p.isDashing > 0) {
            p.isDashing -= dt;
            this.ghostTrails.push({ x: p.pos.x, y: p.pos.y, alpha: 0.8 });
        } else {
            // Horizontal Movement
            let moveX = 0;
            if (input.isActionDown('move_left') || input.isKeyDown('KeyA') || input.isKeyDown('ArrowLeft')) moveX -= 1;
            if (input.isActionDown('move_right') || input.isKeyDown('KeyD') || input.isKeyDown('ArrowRight')) moveX += 1;

            p.vel.x = moveX * 280;
            p.vel.y += 1100 * dt; // Gravity

            // Jump / Double Jump
            if (input.isActionJustPressed('jump') || input.isKeyJustPressed('Space') || input.isKeyJustPressed('KeyW')) {
                if (p.isGrounded) {
                    p.vel.y = -560;
                    p.isGrounded = false;
                    this.particles.emit({ x: p.pos.x, y: p.pos.y + 15, count: 8, color: '#00e5ff' });
                } else if (p.canDoubleJump) {
                    p.vel.y = -500;
                    p.canDoubleJump = false;
                    this.particles.emit({ x: p.pos.x, y: p.pos.y + 15, count: 12, color: '#ff0055' });
                }
            }

            // Trigger Dash
            if ((input.isKeyJustPressed('ShiftLeft') || input.isKeyJustPressed('KeyK')) && p.canDash && p.dashCooldown <= 0) {
                p.isDashing = 0.18;
                p.dashCooldown = 0.8;
                p.canDash = false;
                p.vel.x = (moveX !== 0 ? moveX : 1) * 750;
                p.vel.y = 0;
                this.particles.emit({ x: p.pos.x, y: p.pos.y, count: 20, color: '#39ff14', speed: 200 });
            }
        }

        p.pos.x += p.vel.x * dt;
        p.pos.y += p.vel.y * dt;

        // Platform Movement & Collisions
        p.isGrounded = false;
        for (const plat of this.platforms) {
            if (plat.type === 'moving') {
                plat.x += plat.vx * dt;
                if (plat.x < plat.minX || plat.x > plat.maxX) plat.vx *= -1;
            }

            if (p.pos.x + p.width * 0.5 > plat.x && p.pos.x - p.width * 0.5 < plat.x + plat.w) {
                if (p.pos.y + p.height * 0.5 >= plat.y && p.pos.y + p.height * 0.5 <= plat.y + plat.h && p.vel.y >= 0) {
                    p.pos.y = plat.y - p.height * 0.5;
                    p.vel.y = 0;
                    p.isGrounded = true;
                    p.canDoubleJump = true;
                    p.canDash = true;

                    if (plat.type === 'boost') {
                        p.vel.y = plat.boostY;
                        this.particles.emit({ x: p.pos.x, y: p.pos.y + 15, count: 25, color: '#ffe600', speed: 300 });
                    }
                    if (plat.type === 'goal') {
                        this.score += 5000;
                        this.onCreate();
                    }
                }
            }
        }

        // Hazards
        for (const h of this.hazards) {
            if (p.pos.x + p.width * 0.5 > h.x && p.pos.x - p.width * 0.5 < h.x + h.w &&
                p.pos.y + p.height * 0.5 > h.y && p.pos.y - p.height * 0.5 < h.y + h.h) {
                this.deaths++;
                p.pos.set(100, 500);
                p.vel.set(0, 0);
                this.particles.emit({ x: p.pos.x, y: p.pos.y, count: 40, color: '#ff0055', speed: 250 });
            }
        }

        // Collectibles
        for (const c of this.collectibles) {
            if (!c.collected && Math.hypot(p.pos.x - c.x, p.pos.y - c.y) < 30) {
                c.collected = true;
                this.score += 1000;
                this.particles.emit({ x: c.x, y: c.y, count: 18, color: '#ffe600' });
            }
        }

        // Ghost trails decay
        for (let i = this.ghostTrails.length - 1; i >= 0; i--) {
            this.ghostTrails[i].alpha -= dt * 3;
            if (this.ghostTrails[i].alpha <= 0) this.ghostTrails.splice(i, 1);
        }

        this.particles.update(dt);
    }

    render(ctx) {
        ctx.fillStyle = '#060511';
        ctx.fillRect(0, 0, 1280, 720);

        // Platforms
        for (const plat of this.platforms) {
            ctx.fillStyle = plat.type === 'boost' ? '#ffe600' : plat.type === 'goal' ? '#39ff14' : '#1e1b4b';
            ctx.strokeStyle = '#00e5ff';
            ctx.lineWidth = 2;
            ctx.fillRect(plat.x, plat.y, plat.w, plat.h);
            ctx.strokeRect(plat.x, plat.y, plat.w, plat.h);
        }

        // Hazards
        ctx.fillStyle = '#ff0055';
        for (const h of this.hazards) {
            ctx.fillRect(h.x, h.y, h.w, h.h);
        }

        // Collectibles
        for (const c of this.collectibles) {
            if (!c.collected) {
                ctx.fillStyle = '#ffe600';
                ctx.beginPath();
                ctx.arc(c.x, c.y + Math.sin(Date.now() * 0.005) * 5, 10, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Ghost Trails
        const p = this.player;
        for (const g of this.ghostTrails) {
            ctx.globalAlpha = g.alpha;
            ctx.fillStyle = '#39ff14';
            ctx.fillRect(g.x - p.width * 0.5, g.y - p.height * 0.5, p.width, p.height);
        }
        ctx.globalAlpha = 1.0;

        // Player
        ctx.fillStyle = '#00e5ff';
        ctx.fillRect(p.pos.x - p.width * 0.5, p.pos.y - p.height * 0.5, p.width, p.height);

        this.particles.render(ctx);

        // HUD
        ctx.fillStyle = '#00e5ff';
        ctx.font = 'bold 20px monospace';
        ctx.fillText(`SCORE: ${this.score}   TIME: ${this.timer.toFixed(1)}s   DEATHS: ${this.deaths}`, 30, 40);
        ctx.fillStyle = '#8e8eb2';
        ctx.font = '12px monospace';
        ctx.fillText('[A/D] Move   [SPACE] Double Jump   [SHIFT] Cyber Dash', 30, 70);
    }
}
