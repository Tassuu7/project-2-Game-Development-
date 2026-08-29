/**
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
