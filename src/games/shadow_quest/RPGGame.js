/**
 * NovaForge Game Engine & Arcade Studio
 * Shadow Quest: Chronicles of Eldoria (Action RPG with Spells, Potions & Quests)
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Vector2 } from '../../math/Vector2.js';
import { VectorArtGenerator } from '../../graphics/VectorArtGenerator.js';

export class RPGGame {
    constructor(engine) {
        this.engine = engine;
        this.player = {
            pos: new Vector2(640, 450),
            speed: 200,
            health: 150,
            maxHealth: 150,
            mana: 100,
            maxMana: 100,
            gold: 120,
            potions: 3,
            level: 1,
            frame: 0,
            facingRight: true,
            isRolling: false,
            rollTimer: 0
        };
        this.spells = [];
        this.enemies = [];
        this.floatingNumbers = [];
        this.currentRoom = 1;
        this.npcs = [
            { x: 350, y: 250, name: 'Commander Valen', text: 'Scouts report dark wraiths guarding the ancient seal. Cleanse them!' }
        ];
        this.spawnDungeonRoom();
    }

    onCreate() {
        this.spawnDungeonRoom();
    }

    spawnDungeonRoom() {
        this.enemies = [];
        for (let i = 0; i < 5 + this.currentRoom * 2; i++) {
            this.enemies.push({
                pos: new Vector2(250 + (i % 6) * 140, 180 + Math.floor(i / 6) * 120),
                health: 50 + this.currentRoom * 15,
                maxHealth: 50 + this.currentRoom * 15,
                speed: 80 + Math.random() * 40,
                color: (i % 2 === 0) ? '#ff3366' : '#b026ff',
                name: (i % 2 === 0) ? 'Shadow Wraith' : 'Infernal Imp'
            });
        }
    }

    update(dt) {
        const input = this.engine.input;
        const p = this.player;

        // Potions (1)
        if (input.isKeyJustPressed('Digit1') && p.potions > 0 && p.health < p.maxHealth) {
            p.health = Math.min(p.maxHealth, p.health + 60);
            p.potions--;
            this._addCombatText('+60 HP', p.pos.x, p.pos.y - 20, '#39ff14');
        }

        // Mana regen
        if (p.mana < p.maxMana) p.mana = Math.min(p.maxMana, p.mana + 15 * dt);

        // Movement
        const move = input.getMovementVector();
        if (move.x > 0) p.facingRight = true;
        if (move.x < 0) p.facingRight = false;

        p.pos.x += move.x * p.speed * dt;
        p.pos.y += move.y * p.speed * dt;
        p.pos.x = Math.max(100, Math.min(1180, p.pos.x));
        p.pos.y = Math.max(100, Math.min(620, p.pos.y));

        if (move.x !== 0 || move.y !== 0) p.frame += dt * 8;

        // Melee Attack (Space)
        if (input.isActionJustPressed('action_primary') || input.isKeyJustPressed('Space')) {
            for (let i = this.enemies.length - 1; i >= 0; i--) {
                const e = this.enemies[i];
                if (p.pos.distanceTo(e.pos) < 65) {
                    const dmg = 35 + Math.floor(Math.random() * 15);
                    e.health -= dmg;
                    this._addCombatText(`-${dmg}`, e.pos.x, e.pos.y - 20, '#ffe600');

                    if (e.health <= 0) {
                        p.gold += 25;
                        this.enemies.splice(i, 1);
                    }
                }
            }
        }

        // Fireball Spell (Q)
        if (input.isKeyJustPressed('KeyQ') && p.mana >= 25) {
            p.mana -= 25;
            const dir = p.facingRight ? 1 : -1;
            this.spells.push({
                pos: new Vector2(p.pos.x, p.pos.y),
                vx: dir * 450,
                vy: 0,
                damage: 55,
                color: '#ff3300'
            });
        }

        // Frost Nova Spell (E)
        if (input.isKeyJustPressed('KeyE') && p.mana >= 35) {
            p.mana -= 35;
            for (const e of this.enemies) {
                if (p.pos.distanceTo(e.pos) < 180) {
                    e.health -= 45;
                    e.speed *= 0.5;
                    this._addCombatText('-45 FROST', e.pos.x, e.pos.y - 20, '#00e5ff');
                }
            }
        }

        // Update Spells
        for (let i = this.spells.length - 1; i >= 0; i--) {
            const sp = this.spells[i];
            sp.pos.x += sp.vx * dt;

            for (let j = this.enemies.length - 1; j >= 0; j--) {
                const e = this.enemies[j];
                if (sp.pos.distanceTo(e.pos) < 30) {
                    e.health -= sp.damage;
                    this._addCombatText(`-${sp.damage}`, e.pos.x, e.pos.y - 20, sp.color);
                    this.spells.splice(i, 1);
                    if (e.health <= 0) {
                        p.gold += 30;
                        this.enemies.splice(j, 1);
                    }
                    break;
                }
            }
            if (sp && (sp.pos.x < 50 || sp.pos.x > 1230)) this.spells.splice(i, 1);
        }

        // Enemies AI Chase
        for (const e of this.enemies) {
            const dx = p.pos.x - e.pos.x;
            const dy = p.pos.y - e.pos.y;
            const dist = Math.hypot(dx, dy);
            if (dist > 30 && dist < 400) {
                e.pos.x += (dx / dist) * e.speed * dt;
                e.pos.y += (dy / dist) * e.speed * dt;
            } else if (dist <= 30) {
                p.health = Math.max(0, p.health - 12 * dt);
            }
        }

        // Next Room
        if (this.enemies.length === 0) {
            this.currentRoom++;
            p.potions = Math.min(5, p.potions + 1);
            this.spawnDungeonRoom();
        }

        // Floating texts
        for (let i = this.floatingNumbers.length - 1; i >= 0; i--) {
            const ft = this.floatingNumbers[i];
            ft.life -= dt;
            ft.y -= 25 * dt;
            if (ft.life <= 0) this.floatingNumbers.splice(i, 1);
        }
    }

    _addCombatText(text, x, y, color) {
        this.floatingNumbers.push({ text, x, y, color, life: 0.8 });
    }

    render(ctx) {
        ctx.fillStyle = '#0a0e17';
        ctx.fillRect(0, 0, 1280, 720);

        // Dungeon Floor Grid
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 1;
        for (let x = 80; x < 1200; x += 64) {
            for (let y = 80; y < 640; y += 64) {
                ctx.strokeRect(x, y, 64, 64);
            }
        }

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
            ctx.fillStyle = 'rgba(0,0,0,0.6)';
            ctx.fillRect(e.pos.x - 15, e.pos.y - 24, 30, 4);
            ctx.fillStyle = '#ff0055';
            ctx.fillRect(e.pos.x - 15, e.pos.y - 24, 30 * (e.health / e.maxHealth), 4);
        }

        // Draw Spells
        for (const sp of this.spells) {
            ctx.fillStyle = sp.color;
            ctx.beginPath();
            ctx.arc(sp.pos.x, sp.pos.y, 8, 0, Math.PI * 2);
            ctx.fill();
        }

        // Draw Player Hero
        const p = this.player;
        VectorArtGenerator.drawHero(ctx, p.pos.x, p.pos.y, Math.floor(p.frame), p.facingRight, '#39ff14');

        // Draw Floating Combat Text
        for (const ft of this.floatingNumbers) {
            ctx.fillStyle = ft.color;
            ctx.font = 'bold 15px monospace';
            ctx.textAlign = 'center';
            ctx.fillText(ft.text, ft.x, ft.y);
        }

        // RPG HUD
        ctx.textAlign = 'left';
        ctx.fillStyle = '#39ff14';
        ctx.font = 'bold 18px monospace';
        ctx.fillText(`CHAMBER: ${this.currentRoom}   GOLD: ${p.gold}g   POTIONS [1]: ${p.potions}`, 30, 40);

        // HP & Mana Bars
        ctx.fillStyle = 'rgba(0,0,0,0.6)';
        ctx.fillRect(30, 55, 180, 12);
        ctx.fillStyle = '#ff0055';
        ctx.fillRect(30, 55, 180 * (p.health / p.maxHealth), 12);

        ctx.fillStyle = 'rgba(0,0,0,0.6)';
        ctx.fillRect(30, 72, 180, 10);
        ctx.fillStyle = '#00e5ff';
        ctx.fillRect(30, 72, 180 * (p.mana / p.maxMana), 10);

        ctx.fillStyle = '#fff';
        ctx.font = '11px monospace';
        ctx.fillText('[SPACE] Sword Slash   [Q] Fireball (25 MP)   [E] Frost Nova (35 MP)', 30, 100);
    }
}
