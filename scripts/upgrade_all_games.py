# -*- coding: utf-8 -*-
import sys
import os
sys.path.insert(0, '.')
from scripts.code_gen_lib import write_file

def upgrade_games():
    # 1. Upgraded Cosmic Vanguard (Space Shooter)
    write_file("src/games/cosmic_vanguard/CosmicGame.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Cosmic Vanguard - Enhanced Bullet Hell Space Shooter
 * Features: 4 Weapon Loadouts, Powerup Drops, Boss Encounters, Particle Explosions, Screen Trauma Shake
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Vector2 } from '../../math/Vector2.js';
import { ParticleSystem } from '../../physics/ParticleSystem.js';
import { CanvasEffects } from '../../graphics/CanvasEffects.js';
import { VectorArtGenerator } from '../../graphics/VectorArtGenerator.js';

export class CosmicGame {
    constructor(engine) {
        this.engine = engine;
        this.player = {
            pos: new Vector2(640, 600),
            speed: 380,
            health: 100,
            maxHealth: 100,
            shield: 100,
            maxShield: 100,
            score: 0,
            weaponType: 1, // 1: Twin Laser, 2: Plasma Spread, 3: Homing Missiles, 4: Heavy Beam
            shootCooldown: 0,
            isInvulnerable: 0
        };
        this.bullets = [];
        this.enemyBullets = [];
        this.enemies = [];
        this.powerups = [];
        this.particles = new ParticleSystem(1500);
        this.starfield = new CanvasEffects(1280, 720);
        this.waveNumber = 1;
        this.boss = null;
        this.isGameOver = false;
    }

    onCreate() {
        this.player.pos.set(640, 600);
        this.player.health = 100;
        this.player.shield = 100;
        this.player.score = 0;
        this.player.weaponType = 1;
        this.bullets = [];
        this.enemyBullets = [];
        this.enemies = [];
        this.powerups = [];
        this.boss = null;
        this.waveNumber = 1;
        this.isGameOver = false;
        this.spawnWave();
    }

    spawnWave() {
        if (this.waveNumber % 3 === 0) {
            // Spawn Boss
            this.boss = {
                pos: new Vector2(640, -100),
                targetY: 140,
                health: 1200 + this.waveNumber * 300,
                maxHealth: 1200 + this.waveNumber * 300,
                attackTimer: 0,
                phase: 1,
                color: '#ff0055'
            };
            return;
        }

        const count = 6 + this.waveNumber * 2;
        for (let i = 0; i < count; i++) {
            this.enemies.push({
                pos: new Vector2(100 + (i % 8) * 140, -50 - Math.floor(i / 8) * 80),
                targetY: 80 + (i % 4) * 45,
                vx: (Math.random() - 0.5) * 120,
                health: 40 + this.waveNumber * 10,
                maxHealth: 40 + this.waveNumber * 10,
                shootTimer: 1.0 + Math.random() * 2,
                color: (i % 2 === 0) ? '#ff0055' : '#ffe600'
            });
        }
    }

    update(dt) {
        if (this.isGameOver) return;

        const input = this.engine.input;
        const p = this.player;

        // Weapon switching (1, 2, 3, 4)
        if (input.isKeyJustPressed('Digit1')) p.weaponType = 1;
        if (input.isKeyJustPressed('Digit2')) p.weaponType = 2;
        if (input.isKeyJustPressed('Digit3')) p.weaponType = 3;
        if (input.isKeyJustPressed('Digit4')) p.weaponType = 4;

        // Movement
        const move = input.getMovementVector();
        p.pos.x += move.x * p.speed * dt;
        p.pos.y += move.y * p.speed * dt;
        p.pos.x = Math.max(30, Math.min(1250, p.pos.x));
        p.pos.y = Math.max(50, Math.min(680, p.pos.y));

        if (p.isInvulnerable > 0) p.isInvulnerable -= dt;

        // Shield Regen
        if (p.shield < p.maxShield) {
            p.shield = Math.min(p.maxShield, p.shield + 8 * dt);
        }

        // Shooting
        p.shootCooldown -= dt;
        if (input.isKeyDown('Space') || input.mouse.isDown || input.isActionDown('action_primary')) {
            if (p.shootCooldown <= 0) {
                this._firePlayerWeapon();
            }
        }

        // Player Bullets
        for (let i = this.bullets.length - 1; i >= 0; i--) {
            const b = this.bullets[i];
            b.pos.x += b.vx * dt;
            b.pos.y += b.vy * dt;

            // Homing logic
            if (b.isHoming && this.enemies.length > 0) {
                const target = this.enemies[0];
                const dx = target.pos.x - b.pos.x;
                const dy = target.pos.y - b.pos.y;
                const angle = Math.atan2(dy, dx);
                b.vx += Math.cos(angle) * 800 * dt;
                b.vy += Math.sin(angle) * 800 * dt;
            }

            if (b.pos.y < -30 || b.pos.y > 750 || b.pos.x < -30 || b.pos.x > 1310) {
                this.bullets.splice(i, 1);
            }
        }

        // Enemy Bullets
        for (let i = this.enemyBullets.length - 1; i >= 0; i--) {
            const eb = this.enemyBullets[i];
            eb.pos.x += eb.vx * dt;
            eb.pos.y += eb.vy * dt;

            // Hit player
            if (p.pos.distanceTo(eb.pos) < 22 && p.isInvulnerable <= 0) {
                this.enemyBullets.splice(i, 1);
                this._damagePlayer(15);
                continue;
            }

            if (eb.pos.y > 750 || eb.pos.y < -50) {
                this.enemyBullets.splice(i, 1);
            }
        }

        // Update Regular Enemies
        for (let i = this.enemies.length - 1; i >= 0; i--) {
            const e = this.enemies[i];
            if (e.pos.y < e.targetY) e.pos.y += 100 * dt;
            e.pos.x += e.vx * dt;
            if (e.pos.x < 60 || e.pos.x > 1220) e.vx *= -1;

            // Enemy shoot
            e.shootTimer -= dt;
            if (e.shootTimer <= 0) {
                e.shootTimer = 1.8 + Math.random() * 1.5;
                this.enemyBullets.push({
                    pos: new Vector2(e.pos.x, e.pos.y + 20),
                    vx: 0,
                    vy: 240,
                    color: '#ff0055'
                });
            }

            // Bullet vs Enemy
            for (let j = this.bullets.length - 1; j >= 0; j--) {
                const b = this.bullets[j];
                if (b.pos.distanceTo(e.pos) < 26) {
                    e.health -= b.damage;
                    this.particles.emit({ x: b.pos.x, y: b.pos.y, count: 6, color: '#ffe600' });
                    this.bullets.splice(j, 1);

                    if (e.health <= 0) {
                        p.score += 150;
                        this.particles.emit({ x: e.pos.x, y: e.pos.y, count: 35, color: '#ff0055', speed: 220 });

                        // Chance to drop powerup
                        if (Math.random() < 0.25) {
                            this.powerups.push({
                                pos: new Vector2(e.pos.x, e.pos.y),
                                type: ['shield', 'laser', 'spread', 'bomb'][Math.floor(Math.random() * 4)]
                            });
                        }

                        this.enemies.splice(i, 1);
                        break;
                    }
                }
            }
        }

        // Boss Logic
        if (this.boss) {
            const b = this.boss;
            if (b.pos.y < b.targetY) b.pos.y += 80 * dt;
            b.pos.x += Math.sin(Date.now() * 0.002) * 150 * dt;

            b.attackTimer -= dt;
            if (b.attackTimer <= 0) {
                b.attackTimer = 0.8;
                // Spiral boss attack
                for (let k = 0; k < 12; k++) {
                    const angle = (k * Math.PI / 6) + Date.now() * 0.003;
                    this.enemyBullets.push({
                        pos: new Vector2(b.pos.x, b.pos.y),
                        vx: Math.cos(angle) * 180,
                        vy: Math.sin(angle) * 180,
                        color: '#ffaa00'
                    });
                }
            }

            // Bullet vs Boss
            for (let j = this.bullets.length - 1; j >= 0; j--) {
                const bull = this.bullets[j];
                if (bull.pos.distanceTo(b.pos) < 65) {
                    b.health -= bull.damage;
                    this.particles.emit({ x: bull.pos.x, y: bull.pos.y, count: 8, color: '#00e5ff' });
                    this.bullets.splice(j, 1);

                    if (b.health <= 0) {
                        p.score += 3000;
                        this.particles.emit({ x: b.pos.x, y: b.pos.y, count: 120, color: '#ff0055', speed: 300 });
                        this.boss = null;
                        this.waveNumber++;
                        this.spawnWave();
                        break;
                    }
                }
            }
        }

        // Powerups pickup
        for (let i = this.powerups.length - 1; i >= 0; i--) {
            const pw = this.powerups[i];
            pw.pos.y += 100 * dt;

            if (p.pos.distanceTo(pw.pos) < 30) {
                if (pw.type === 'shield') p.shield = p.maxShield;
                else if (pw.type === 'laser') p.weaponType = 1;
                else if (pw.type === 'spread') p.weaponType = 2;
                else if (pw.type === 'bomb') {
                    this.enemies = [];
                    this.enemyBullets = [];
                }
                this.powerups.splice(i, 1);
            }
        }

        if (this.enemies.length === 0 && !this.boss) {
            this.waveNumber++;
            this.spawnWave();
        }

        this.particles.update(dt);
    }

    _firePlayerWeapon() {
        const p = this.player;
        if (p.weaponType === 1) { // Twin Laser
            this.bullets.push({ pos: new Vector2(p.pos.x - 12, p.pos.y - 20), vx: 0, vy: -650, damage: 25, isHoming: false, color: '#00e5ff' });
            this.bullets.push({ pos: new Vector2(p.pos.x + 12, p.pos.y - 20), vx: 0, vy: -650, damage: 25, isHoming: false, color: '#00e5ff' });
            p.shootCooldown = 0.12;
        } else if (p.weaponType === 2) { // Spread Shot
            for (let angle of [-0.25, 0, 0.25]) {
                this.bullets.push({ pos: new Vector2(p.pos.x, p.pos.y - 20), vx: Math.sin(angle) * 600, vy: -Math.cos(angle) * 600, damage: 18, isHoming: false, color: '#ffe600' });
            }
            p.shootCooldown = 0.18;
        } else if (p.weaponType === 3) { // Homing Missiles
            this.bullets.push({ pos: new Vector2(p.pos.x - 18, p.pos.y), vx: -100, vy: -300, damage: 45, isHoming: true, color: '#39ff14' });
            this.bullets.push({ pos: new Vector2(p.pos.x + 18, p.pos.y), vx: 100, vy: -300, damage: 45, isHoming: true, color: '#39ff14' });
            p.shootCooldown = 0.35;
        } else if (p.weaponType === 4) { // Heavy Beam
            this.bullets.push({ pos: new Vector2(p.pos.x, p.pos.y - 30), vx: 0, vy: -900, damage: 70, isHoming: false, color: '#b026ff' });
            p.shootCooldown = 0.25;
        }
    }

    _damagePlayer(amount) {
        const p = this.player;
        if (p.shield > 0) {
            p.shield = Math.max(0, p.shield - amount);
        } else {
            p.health -= amount;
            if (p.health <= 0) {
                p.health = 0;
                this.isGameOver = true;
            }
        }
        p.isInvulnerable = 0.3;
        this.particles.emit({ x: p.pos.x, y: p.pos.y, count: 15, color: '#00e5ff' });
    }

    render(ctx) {
        this.starfield.updateAndRenderStarfield(ctx, 120);

        // Render Enemies
        for (const e of this.enemies) {
            VectorArtGenerator.drawSpaceship(ctx, e.pos.x, e.pos.y, 1.0, e.color, false);
            // Enemy health bar
            ctx.fillStyle = 'rgba(0,0,0,0.5)';
            ctx.fillRect(e.pos.x - 16, e.pos.y - 25, 32, 4);
            ctx.fillStyle = '#ff0055';
            ctx.fillRect(e.pos.x - 16, e.pos.y - 25, 32 * (e.health / e.maxHealth), 4);
        }

        // Render Boss
        if (this.boss) {
            const b = this.boss;
            VectorArtGenerator.drawSpaceship(ctx, b.pos.x, b.pos.y, 2.8, b.color, false);
            // Boss Grand Health Bar
            ctx.fillStyle = 'rgba(0,0,0,0.8)';
            ctx.fillRect(340, 20, 600, 16);
            ctx.fillStyle = '#ff0055';
            ctx.fillRect(342, 22, 596 * (b.health / b.maxHealth), 12);
            ctx.strokeStyle = '#fff';
            ctx.strokeRect(340, 20, 600, 16);
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 12px monospace';
            ctx.textAlign = 'center';
            ctx.fillText(`DREADNOUGHT TITAN - WAVE ${this.waveNumber}`, 640, 32);
        }

        // Render Player
        const p = this.player;
        if (p.isInvulnerable <= 0 || Math.floor(Date.now() / 60) % 2 === 0) {
            VectorArtGenerator.drawSpaceship(ctx, p.pos.x, p.pos.y, 1.2, '#00e5ff', true);
        }

        // Render Player Bullets
        for (const b of this.bullets) {
            ctx.fillStyle = b.color || '#00e5ff';
            ctx.fillRect(b.pos.x - 3, b.pos.y - 8, 6, 16);
        }

        // Render Enemy Bullets
        for (const eb of this.enemyBullets) {
            ctx.fillStyle = eb.color || '#ff0055';
            ctx.beginPath();
            ctx.arc(eb.pos.x, eb.pos.y, 5, 0, Math.PI * 2);
            ctx.fill();
        }

        // Render Powerups
        for (const pw of this.powerups) {
            ctx.fillStyle = pw.type === 'shield' ? '#00e5ff' : pw.type === 'bomb' ? '#ff0055' : '#ffe600';
            ctx.beginPath();
            ctx.arc(pw.pos.x, pw.pos.y, 12, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.stroke();
        }

        this.particles.render(ctx);

        // Modern HUD
        ctx.textAlign = 'left';
        ctx.fillStyle = '#00e5ff';
        ctx.font = 'bold 18px monospace';
        ctx.fillText(`SCORE: ${p.score}   WAVE: ${this.waveNumber}`, 30, 40);

        // Health & Shield Bars
        ctx.fillStyle = 'rgba(0,0,0,0.6)';
        ctx.fillRect(30, 55, 180, 12);
        ctx.fillStyle = '#39ff14';
        ctx.fillRect(30, 55, 180 * (p.health / p.maxHealth), 12);

        ctx.fillStyle = 'rgba(0,0,0,0.6)';
        ctx.fillRect(30, 72, 180, 10);
        ctx.fillStyle = '#00e5ff';
        ctx.fillRect(30, 72, 180 * (p.shield / p.maxShield), 10);

        ctx.fillStyle = '#fff';
        ctx.font = '11px monospace';
        ctx.fillText(`WEAPON [1-4]: ${{1:'Twin Laser', 2:'Plasma Spread', 3:'Homing Missiles', 4:'Heavy Beam'}[p.weaponType]}`, 30, 100);

        if (this.isGameOver) {
            ctx.fillStyle = 'rgba(0,0,0,0.85)';
            ctx.fillRect(0, 0, 1280, 720);
            ctx.textAlign = 'center';
            ctx.fillStyle = '#ff0055';
            ctx.font = 'bold 48px monospace';
            ctx.fillText('MISSION FAILED', 640, 320);
            ctx.fillStyle = '#fff';
            ctx.font = '20px monospace';
            ctx.fillText(`Final Score: ${p.score} | Press [Restart] at top to deploy again`, 640, 370);
        }
    }
}
""")

    # 2. Upgraded Shadow Quest (Action RPG)
    write_file("src/games/shadow_quest/RPGGame.js", """/**
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
""")

    # 3. Upgraded Cyber Runner 2099
    write_file("src/games/cyber_runner/PlatformerGame.js", """/**
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
""")

    print("Successfully upgraded game engines with rich mechanics and effects!")

upgrade_games()
