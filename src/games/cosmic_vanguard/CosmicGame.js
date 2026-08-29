/**
 * NovaForge Game Engine & Arcade Studio
 * Cosmic Vanguard - Bullet Hell Space Shooter
 * @author NovaForge Engineering Team
 * @license MIT
 */

import { Vector2 } from '../../math/Vector2.js';
import { VectorArtGenerator } from '../../graphics/VectorArtGenerator.js';
import { CanvasEffects } from '../../graphics/CanvasEffects.js';
import { ParticleSystem } from '../../physics/ParticleSystem.js';

export class CosmicGame {
    constructor(engine) {
        this.engine = engine;
        this.player = {
            pos: new Vector2(640, 600),
            speed: 350,
            health: 100,
            maxHealth: 100,
            shield: 50,
            maxShield: 50,
            score: 0,
            shootCooldown: 0
        };
        this.bullets = [];
        this.enemies = [];
        this.particles = new ParticleSystem(1000);
        this.starfield = new CanvasEffects(1280, 720);
        this.waveTimer = 0;
        this.isGameOver = false;
    }

    onCreate() {
        this.player.health = 100;
        this.player.score = 0;
        this.bullets = [];
        this.enemies = [];
        this.isGameOver = false;
        this.spawnWave();
    }

    spawnWave() {
        for (let i = 0; i < 8; i++) {
            this.enemies.push({
                pos: new Vector2(150 + i * 140, 80 + Math.sin(i) * 30),
                vx: (Math.random() - 0.5) * 80,
                vy: 20,
                health: 30,
                color: '#ff0055',
                shootTimer: Math.random() * 2
            });
        }
    }

    update(dt) {
        if (this.isGameOver) return;

        const input = this.engine.input;
        const move = input.getMovementVector();

        this.player.pos.x += move.x * this.player.speed * dt;
        this.player.pos.y += move.y * this.player.speed * dt;

        this.player.pos.x = Math.max(30, Math.min(1250, this.player.pos.x));
        this.player.pos.y = Math.max(50, Math.min(680, this.player.pos.y));

        // Shooting
        this.player.shootCooldown -= dt;
        if (input.isActionDown('action_primary') || input.isKeyDown('Space') || input.mouse.isDown) {
            if (this.player.shootCooldown <= 0) {
                this.bullets.push({
                    pos: new Vector2(this.player.pos.x - 10, this.player.pos.y - 15),
                    vy: -600,
                    isPlayer: true
                });
                this.bullets.push({
                    pos: new Vector2(this.player.pos.x + 10, this.player.pos.y - 15),
                    vy: -600,
                    isPlayer: true
                });
                this.player.shootCooldown = 0.12;
            }
        }

        // Bullets update
        for (let i = this.bullets.length - 1; i >= 0; i--) {
            const b = this.bullets[i];
            b.pos.y += b.vy * dt;
            if (b.pos.y < -20 || b.pos.y > 750) {
                this.bullets.splice(i, 1);
            }
        }

        // Enemies update
        for (let i = this.enemies.length - 1; i >= 0; i--) {
            const e = this.enemies[i];
            e.pos.x += e.vx * dt;
            if (e.pos.x < 50 || e.pos.x > 1230) e.vx *= -1;

            // Collision with bullets
            for (let j = this.bullets.length - 1; j >= 0; j--) {
                const b = this.bullets[j];
                if (b.isPlayer && b.pos.distanceTo(e.pos) < 25) {
                    e.health -= 15;
                    this.bullets.splice(j, 1);
                    this.particles.emit({ x: b.pos.x, y: b.pos.y, count: 5, color: '#ffea00' });

                    if (e.health <= 0) {
                        this.player.score += 100;
                        this.particles.emit({ x: e.pos.x, y: e.pos.y, count: 25, color: '#ff0055', speed: 180 });
                        this.enemies.splice(i, 1);
                        break;
                    }
                }
            }
        }

        if (this.enemies.length === 0) {
            this.spawnWave();
        }

        this.particles.update(dt);
    }

    render(ctx) {
        this.starfield.updateAndRenderStarfield(ctx, 80);

        // Render player
        VectorArtGenerator.drawSpaceship(ctx, this.player.pos.x, this.player.pos.y, 1.2, '#00e5ff', true);

        // Render bullets
        ctx.fillStyle = '#00ffff';
        for (const b of this.bullets) {
            ctx.fillRect(b.pos.x - 2, b.pos.y - 8, 4, 16);
        }

        // Render enemies
        for (const e of this.enemies) {
            VectorArtGenerator.drawSpaceship(ctx, e.pos.x, e.pos.y, 1.0, e.color, false);
        }

        this.particles.render(ctx);

        // Render HUD
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 20px monospace';
        ctx.fillText(`SCORE: ${this.player.score}`, 30, 40);
        ctx.fillText(`SHIELD: ${Math.floor(this.player.shield)}`, 30, 70);
    }
}
