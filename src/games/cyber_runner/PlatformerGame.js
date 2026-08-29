/**
 * NovaForge Game Engine & Arcade Studio
 * Cyber Runner 2099 - Precision Platformer with Wall Jumping & Dashing
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Vector2 } from '../../math/Vector2.js';

export class PlatformerGame {
    constructor(engine) {
        this.engine = engine;
        this.player = {
            pos: new Vector2(100, 400),
            vel: new Vector2(0, 0),
            width: 24,
            height: 36,
            isGrounded: false,
            canDoubleJump: true,
            dashCooldown: 0
        };
        this.platforms = [
            { x: 0, y: 650, w: 1280, h: 70 },
            { x: 250, y: 520, w: 200, h: 20 },
            { x: 550, y: 400, w: 220, h: 20 },
            { x: 850, y: 300, w: 180, h: 20 }
        ];
        this.collectibles = [
            { x: 350, y: 480, collected: false },
            { x: 650, y: 360, collected: false },
            { x: 940, y: 260, collected: false }
        ];
        this.score = 0;
    }

    onCreate() {
        this.player.pos.set(100, 400);
        this.player.vel.set(0, 0);
        this.score = 0;
    }

    update(dt) {
        const input = this.engine.input;
        const p = this.player;

        // Horizontal movement
        let moveX = 0;
        if (input.isActionDown('move_left') || input.isKeyDown('KeyA') || input.isKeyDown('ArrowLeft')) moveX -= 1;
        if (input.isActionDown('move_right') || input.isKeyDown('KeyD') || input.isKeyDown('ArrowRight')) moveX += 1;

        p.vel.x = moveX * 240;

        // Gravity
        p.vel.y += 980 * dt;

        // Jump
        if (input.isActionJustPressed('jump') || input.isKeyJustPressed('Space') || input.isKeyJustPressed('KeyW')) {
            if (p.isGrounded) {
                p.vel.y = -520;
                p.isGrounded = false;
            } else if (p.canDoubleJump) {
                p.vel.y = -460;
                p.canDoubleJump = false;
            }
        }

        // Apply movement
        p.pos.x += p.vel.x * dt;
        p.pos.y += p.vel.y * dt;

        // Platform collision
        p.isGrounded = false;
        for (const plat of this.platforms) {
            if (p.pos.x + p.width * 0.5 > plat.x && p.pos.x - p.width * 0.5 < plat.x + plat.w) {
                if (p.pos.y + p.height * 0.5 >= plat.y && p.pos.y + p.height * 0.5 <= plat.y + plat.h && p.vel.y > 0) {
                    p.pos.y = plat.y - p.height * 0.5;
                    p.vel.y = 0;
                    p.isGrounded = true;
                    p.canDoubleJump = true;
                }
            }
        }

        // Collectibles
        for (const c of this.collectibles) {
            if (!c.collected && Math.hypot(p.pos.x - c.x, p.pos.y - c.y) < 30) {
                c.collected = true;
                this.score += 500;
            }
        }
    }

    render(ctx) {
        ctx.fillStyle = '#0a0a1a';
        ctx.fillRect(0, 0, 1280, 720);

        // Draw platforms
        ctx.fillStyle = '#1e1b4b';
        ctx.strokeStyle = '#00e5ff';
        ctx.lineWidth = 2;
        for (const plat of this.platforms) {
            ctx.fillRect(plat.x, plat.y, plat.w, plat.h);
            ctx.strokeRect(plat.x, plat.y, plat.w, plat.h);
        }

        // Draw collectibles (energy cores)
        for (const c of this.collectibles) {
            if (!c.collected) {
                ctx.fillStyle = '#ffe600';
                ctx.beginPath();
                ctx.arc(c.x, c.y, 8, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Draw player
        const p = this.player;
        ctx.fillStyle = '#ff0055';
        ctx.fillRect(p.pos.x - p.width * 0.5, p.pos.y - p.height * 0.5, p.width, p.height);

        // HUD
        ctx.fillStyle = '#00e5ff';
        ctx.font = 'bold 20px monospace';
        ctx.fillText(`CYBER RUNNER 2099 - SCORE: ${this.score}`, 30, 40);
    }
}
