/**
 * NovaForge Game Engine & Arcade Studio
 * Shadow Quest: Chronicles of Eldoria (2D Action RPG)
 * @author NovaForge Engineering Team
 * @license MIT
 */

import { Vector2 } from '../../math/Vector2.js';
import { VectorArtGenerator } from '../../graphics/VectorArtGenerator.js';

export class RPGGame {
    constructor(engine) {
        this.engine = engine;
        this.player = {
            pos: new Vector2(400, 300),
            speed: 160,
            health: 120,
            maxHealth: 120,
            level: 1,
            gold: 50,
            frame: 0
        };
        this.npcs = [
            { x: 300, y: 200, name: 'Commander Valen', text: 'Beware the shadow dungeon ahead!' }
        ];
        this.enemies = [
            { pos: new Vector2(700, 250), health: 40, color: '#ff3366' },
            { pos: new Vector2(800, 450), health: 40, color: '#ff3366' }
        ];
    }

    onCreate() {}

    update(dt) {
        const input = this.engine.input;
        const move = input.getMovementVector();

        this.player.pos.x += move.x * this.player.speed * dt;
        this.player.pos.y += move.y * this.player.speed * dt;

        if (move.x !== 0 || move.y !== 0) {
            this.player.frame += dt * 8;
        }

        // Sword attack
        if (input.isActionJustPressed('action_primary') || input.isKeyJustPressed('Space')) {
            for (let i = this.enemies.length - 1; i >= 0; i--) {
                const e = this.enemies[i];
                if (this.player.pos.distanceTo(e.pos) < 50) {
                    e.health -= 25;
                    if (e.health <= 0) {
                        this.player.gold += 20;
                        this.enemies.splice(i, 1);
                    }
                }
            }
        }
    }

    render(ctx) {
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, 1280, 720);

        // Draw NPCs
        for (const npc of this.npcs) {
            VectorArtGenerator.drawHero(ctx, npc.x, npc.y, 0, true, '#ffe600');
            ctx.fillStyle = '#ffe600';
            ctx.font = '12px monospace';
            ctx.textAlign = 'center';
            ctx.fillText(npc.name, npc.x, npc.y - 25);
        }

        // Draw Enemies
        for (const e of this.enemies) {
            VectorArtGenerator.drawHero(ctx, e.pos.x, e.pos.y, 0, false, e.color);
        }

        // Draw Player Hero
        VectorArtGenerator.drawHero(ctx, this.player.pos.x, this.player.pos.y, Math.floor(this.player.frame), true, '#39ff14');

        // RPG HUD
        ctx.textAlign = 'left';
        ctx.fillStyle = '#39ff14';
        ctx.font = 'bold 18px monospace';
        ctx.fillText(`HP: ${this.player.health}/${this.player.maxHealth}   GOLD: ${this.player.gold}   LVL: ${this.player.level}`, 30, 40);
    }
}
