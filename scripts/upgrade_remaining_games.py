# -*- coding: utf-8 -*-
import sys
import os
sys.path.insert(0, '.')
from scripts.code_gen_lib import write_file

def upgrade_remaining():
    # 4. Dungeon Raycaster 3D
    write_file("src/games/dungeon_raycast3d/RaycastGame.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Dungeon Raycaster 3D - Enhanced First-Person 3D Dungeon Crawler
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Raycast3DRenderer } from '../../graphics/Raycast3DRenderer.js';

export class RaycastGame {
    constructor(engine) {
        this.engine = engine;
        this.renderer = new Raycast3DRenderer(engine.canvas, 1280, 720);
        this.player = {
            x: 2.5,
            y: 2.5,
            angle: 0,
            speed: 3.5,
            rotSpeed: 2.8,
            health: 100,
            ammo: 50,
            score: 0,
            isShooting: 0
        };
        this.mapWidth = 12;
        this.mapHeight = 12;
        this.map = new Uint8Array([
            1,1,1,1,1,1,1,1,1,1,1,1,
            1,0,0,0,0,0,2,0,0,0,0,1,
            1,0,1,1,0,0,2,0,1,1,0,1,
            1,0,1,0,0,0,0,0,0,1,0,1,
            1,0,0,0,3,3,0,3,0,0,0,1,
            1,0,0,0,3,0,0,3,0,0,0,1,
            1,0,2,0,0,0,0,0,0,2,0,1,
            1,0,2,0,1,0,0,1,0,2,0,1,
            1,0,0,0,1,0,0,1,0,0,0,1,
            1,0,1,0,0,0,0,0,0,1,0,1,
            1,0,0,0,0,0,0,0,0,0,0,1,
            1,1,1,1,1,1,1,1,1,1,1,1
        ]);
        this.sprites = [
            { x: 5.5, y: 3.5, color: '#00e5ff', distance: 0, health: 40, type: 'demon' },
            { x: 8.5, y: 7.5, color: '#ff0055', distance: 0, health: 60, type: 'undead_knight' },
            { x: 3.5, y: 9.5, color: '#ffe600', distance: 0, health: 30, type: 'ammo_pack' }
        ];
    }

    onCreate() {
        this.player.health = 100;
        this.player.ammo = 50;
        this.player.score = 0;
        this.player.x = 2.5;
        this.player.y = 2.5;
    }

    update(dt) {
        const input = this.engine.input;
        const p = this.player;

        if (p.isShooting > 0) p.isShooting -= dt;

        // Rotation
        if (input.isActionDown('move_left') || input.isKeyDown('ArrowLeft') || input.isKeyDown('KeyA')) {
            p.angle -= p.rotSpeed * dt;
        }
        if (input.isActionDown('move_right') || input.isKeyDown('ArrowRight') || input.isKeyDown('KeyD')) {
            p.angle += p.rotSpeed * dt;
        }

        // Movement forward/back
        let moveStep = 0;
        if (input.isActionDown('move_up') || input.isKeyDown('ArrowUp') || input.isKeyDown('KeyW')) {
            moveStep = p.speed * dt;
        }
        if (input.isActionDown('move_down') || input.isKeyDown('ArrowDown') || input.isKeyDown('KeyS')) {
            moveStep = -p.speed * dt;
        }

        if (moveStep !== 0) {
            const nextX = p.x + Math.cos(p.angle) * moveStep;
            const nextY = p.y + Math.sin(p.angle) * moveStep;
            if (this.map[Math.floor(p.y) * this.mapWidth + Math.floor(nextX)] === 0) p.x = nextX;
            if (this.map[Math.floor(nextY) * this.mapWidth + Math.floor(p.x)] === 0) p.y = nextY;
        }

        // Shooting (Space / Mouse click)
        if ((input.isKeyJustPressed('Space') || input.mouse.justPressed) && p.ammo > 0 && p.isShooting <= 0) {
            p.ammo--;
            p.isShooting = 0.15;
            if (this.engine.soundBank) this.engine.soundBank.play('laser');

            // Hitscan check against sprites in front
            for (let i = this.sprites.length - 1; i >= 0; i--) {
                const s = this.sprites[i];
                if (s.type === 'ammo_pack') continue;

                const dx = s.x - p.x;
                const dy = s.y - p.y;
                const angleToSpr = Math.atan2(dy, dx);
                let diffAngle = angleToSpr - p.angle;
                while (diffAngle < -Math.PI) diffAngle += Math.PI * 2;
                while (diffAngle > Math.PI) diffAngle -= Math.PI * 2;

                if (Math.abs(diffAngle) < 0.25 && Math.hypot(dx, dy) < 8.0) {
                    s.health -= 35;
                    if (s.health <= 0) {
                        p.score += 500;
                        this.sprites.splice(i, 1);
                    }
                    break;
                }
            }
        }

        // Ammo pickup check
        for (let i = this.sprites.length - 1; i >= 0; i--) {
            const s = this.sprites[i];
            if (s.type === 'ammo_pack' && Math.hypot(p.x - s.x, p.y - s.y) < 1.0) {
                p.ammo += 25;
                this.sprites.splice(i, 1);
            }
        }
    }

    render(ctx) {
        this.renderer.render(ctx, this.map, this.mapWidth, this.mapHeight, this.player, this.sprites);

        // Gun in viewport
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        const gunX = 640 + Math.sin(Date.now() * 0.006) * 10;
        const gunY = 620;

        // Gun barrel
        ctx.fillStyle = '#1f2937';
        ctx.fillRect(gunX - 25, gunY - 140, 50, 140);
        ctx.fillStyle = '#374151';
        ctx.fillRect(gunX - 15, gunY - 160, 30, 80);

        // Muzzle Flash
        if (this.player.isShooting > 0) {
            ctx.fillStyle = '#ffe600';
            ctx.beginPath();
            ctx.arc(gunX, gunY - 170, 35, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#ff0055';
            ctx.beginPath();
            ctx.arc(gunX, gunY - 170, 18, 0, Math.PI * 2);
            ctx.fill();
        }

        // Minimap
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(20, 20, 144, 144);
        ctx.strokeStyle = '#00e5ff';
        ctx.strokeRect(20, 20, 144, 144);

        for (let r = 0; r < this.mapHeight; r++) {
            for (let c = 0; c < this.mapWidth; c++) {
                if (this.map[r * this.mapWidth + c] > 0) {
                    ctx.fillStyle = '#475569';
                    ctx.fillRect(20 + c * 12, 20 + r * 12, 12, 12);
                }
            }
        }

        // Player marker on minimap
        ctx.fillStyle = '#00e5ff';
        ctx.fillRect(20 + this.player.x * 12 - 2, 20 + this.player.y * 12 - 2, 5, 5);

        // HUD
        ctx.textAlign = 'left';
        ctx.fillStyle = '#00e5ff';
        ctx.font = 'bold 20px monospace';
        ctx.fillText(`HEALTH: ${this.player.health}   AMMO: ${this.player.ammo}   SCORE: ${this.player.score}`, 180, 50);

        ctx.restore();
    }
}
""")

    # 5. Gravity Sandbox
    write_file("src/games/gravity_sandbox/SandboxGame.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Gravity Sandbox & Physics Lab
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { PhysicsWorld } from '../../physics/PhysicsWorld.js';
import { RigidBody } from '../../physics/RigidBody.js';
import { BoxCollider } from '../../physics/BoxCollider.js';
import { CircleCollider } from '../../physics/CircleCollider.js';
import { RagdollPhysics } from '../../physics/RagdollPhysics.js';
import { FluidSimulation2D } from '../../physics/FluidSimulation2D.js';
import { Vector2 } from '../../math/Vector2.js';

export class SandboxGame {
    constructor(engine) {
        this.engine = engine;
        this.world = new PhysicsWorld();
        this.ragdolls = [new RagdollPhysics(640, 150)];
        this.fluids = new FluidSimulation2D(200, 24);
        this.selectedTool = 'spawn_box';
        this.setupWorld();
    }

    setupWorld() {
        this.world.clear();
        const floor = new RigidBody({ x: 640, y: 700, type: 'static' });
        floor.collider = new BoxCollider(1280, 40);
        this.world.addBody(floor);

        const leftWall = new RigidBody({ x: 10, y: 360, type: 'static' });
        leftWall.collider = new BoxCollider(20, 720);
        this.world.addBody(leftWall);

        const rightWall = new RigidBody({ x: 1270, y: 360, type: 'static' });
        rightWall.collider = new BoxCollider(20, 720);
        this.world.addBody(rightWall);

        for (let i = 0; i < 15; i++) {
            const box = new RigidBody({ x: 500 + (i % 5) * 55, y: 450 - Math.floor(i / 5) * 55, mass: 2, restitution: 0.3 });
            box.collider = new BoxCollider(45, 45);
            this.world.addBody(box);
        }
    }

    onCreate() {}

    update(dt) {
        this.world.step(dt);
        for (const ragdoll of this.ragdolls) {
            ragdoll.update(dt, this.world.gravity, { minX: 30, minY: 30, maxX: 1250, maxY: 680 });
        }
        this.fluids.update(dt, this.world.gravity, { minX: 30, minY: 30, maxX: 1250, maxY: 680 });

        const input = this.engine.input;
        const mx = input.mouse.x;
        const my = input.mouse.y;

        if (input.isKeyJustPressed('Digit1')) this.selectedTool = 'spawn_box';
        if (input.isKeyJustPressed('Digit2')) this.selectedTool = 'spawn_circle';
        if (input.isKeyJustPressed('Digit3')) this.selectedTool = 'spawn_ragdoll';
        if (input.isKeyJustPressed('Digit4')) this.selectedTool = 'bomb';
        if (input.isKeyJustPressed('Digit5')) {
            this.world.gravity.y = this.world.gravity.y === 0 ? 980 : 0;
        }

        if (input.mouse.justPressed) {
            if (this.selectedTool === 'spawn_box') {
                const box = new RigidBody({ x: mx, y: my, mass: 2, restitution: 0.4 });
                box.collider = new BoxCollider(40, 40);
                this.world.addBody(box);
            } else if (this.selectedTool === 'spawn_circle') {
                const circle = new RigidBody({ x: mx, y: my, mass: 3, restitution: 0.75 });
                circle.collider = new CircleCollider(22);
                this.world.addBody(circle);
            } else if (this.selectedTool === 'spawn_ragdoll') {
                this.ragdolls.push(new RagdollPhysics(mx, my));
            } else if (this.selectedTool === 'bomb') {
                for (const b of this.world.bodies) {
                    if (b.type === 'dynamic') {
                        const dx = b.position.x - mx;
                        const dy = b.position.y - my;
                        const dist = Math.hypot(dx, dy);
                        if (dist < 300 && dist > 1) {
                            const force = (300 - dist) * 15;
                            b.applyImpulse(new Vector2((dx / dist) * force, (dy / dist) * force));
                        }
                    }
                }
            }
        }
    }

    render(ctx) {
        ctx.fillStyle = '#090a12';
        ctx.fillRect(0, 0, 1280, 720);

        for (const b of this.world.bodies) {
            if (b.collider) {
                if (b.collider.type === 'box') {
                    ctx.fillStyle = b.type === 'static' ? '#1e293b' : '#00e5ff';
                    ctx.fillRect(b.position.x - b.collider.halfWidth, b.position.y - b.collider.halfHeight, b.collider.width, b.collider.height);
                    ctx.strokeStyle = '#fff';
                    ctx.strokeRect(b.position.x - b.collider.halfWidth, b.position.y - b.collider.halfHeight, b.collider.width, b.collider.height);
                } else if (b.collider.type === 'circle') {
                    ctx.fillStyle = '#ffe600';
                    ctx.beginPath();
                    ctx.arc(b.position.x, b.position.y, b.collider.radius, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.strokeStyle = '#fff';
                    ctx.stroke();
                }
            }
        }

        for (const rag of this.ragdolls) rag.render(ctx);
        this.fluids.render(ctx);

        ctx.fillStyle = '#fff';
        ctx.font = 'bold 16px monospace';
        ctx.fillText(`PHYSICS LAB | Tool: [${this.selectedTool.toUpperCase()}] | Gravity: ${this.world.gravity.y} px/s^2`, 30, 40);
        ctx.fillStyle = '#8e8eb2';
        ctx.font = '12px monospace';
        ctx.fillText('[1] Box   [2] Circle   [3] Ragdoll   [4] Explosion Bomb   [5] Toggle Zero-G', 30, 70);
    }
}
""")

    # 6. Neon Tower Defense
    write_file("src/games/neon_tower_defense/TowerDefenseGame.js", """/**
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
""")

    # 7. Chrono Puzzle
    write_file("src/games/chrono_puzzle/PuzzleGame.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Chrono Puzzle: Time Shift
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class PuzzleGame {
    constructor(engine) {
        this.engine = engine;
        this.gridSize = 52;
        this.currentLevelIndex = 0;
        this.history = [];
        this.moves = 0;
        this.levels = [
            {
                player: { x: 2, y: 2 },
                blocks: [{ x: 3, y: 2 }, { x: 4, y: 3 }],
                targets: [{ x: 6, y: 2 }, { x: 6, y: 3 }]
            },
            {
                player: { x: 1, y: 1 },
                blocks: [{ x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 3 }],
                targets: [{ x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }]
            }
        ];
        this.loadLevel(0);
    }

    loadLevel(index) {
        this.currentLevelIndex = index % this.levels.length;
        const lvl = this.levels[this.currentLevelIndex];
        this.playerX = lvl.player.x;
        this.playerY = lvl.player.y;
        this.blocks = JSON.parse(JSON.stringify(lvl.blocks));
        this.targets = JSON.parse(JSON.stringify(lvl.targets));
        this.history = [];
        this.moves = 0;
    }

    move(dx, dy) {
        this.history.push({
            px: this.playerX,
            py: this.playerY,
            blocks: JSON.parse(JSON.stringify(this.blocks))
        });

        const nextPX = this.playerX + dx;
        const nextPY = this.playerY + dy;

        const block = this.blocks.find(b => b.x === nextPX && b.y === nextPY);
        if (block) {
            const nextBX = block.x + dx;
            const nextBY = block.y + dy;
            const blocked = this.blocks.some(b => b.x === nextBX && b.y === nextBY);
            if (!blocked && nextBX >= 1 && nextBX <= 8 && nextBY >= 1 && nextBY <= 8) {
                block.x = nextBX;
                block.y = nextBY;
                this.playerX = nextPX;
                this.playerY = nextPY;
                this.moves++;
            }
        } else if (nextPX >= 1 && nextPX <= 8 && nextPY >= 1 && nextPY <= 8) {
            this.playerX = nextPX;
            this.playerY = nextPY;
            this.moves++;
        }

        const allSolved = this.targets.every(t => this.blocks.some(b => b.x === t.x && b.y === t.y));
        if (allSolved) {
            setTimeout(() => this.loadLevel(this.currentLevelIndex + 1), 500);
        }
    }

    rewind() {
        if (this.history.length > 0) {
            const last = this.history.pop();
            this.playerX = last.px;
            this.playerY = last.py;
            this.blocks = last.blocks;
            this.moves = Math.max(0, this.moves - 1);
        }
    }

    update(dt) {
        const input = this.engine.input;
        if (input.isKeyJustPressed('KeyW') || input.isKeyJustPressed('ArrowUp')) this.move(0, -1);
        if (input.isKeyJustPressed('KeyS') || input.isKeyJustPressed('ArrowDown')) this.move(0, 1);
        if (input.isKeyJustPressed('KeyA') || input.isKeyJustPressed('ArrowLeft')) this.move(-1, 0);
        if (input.isKeyJustPressed('KeyD') || input.isKeyJustPressed('ArrowRight')) this.move(1, 0);
        if (input.isKeyJustPressed('KeyZ') || input.isKeyJustPressed('KeyR')) this.rewind();
    }

    render(ctx) {
        ctx.fillStyle = '#0c071e';
        ctx.fillRect(0, 0, 1280, 720);

        const offsetX = 380;
        const offsetY = 120;

        ctx.strokeStyle = '#6366f1';
        ctx.lineWidth = 2;
        ctx.strokeRect(offsetX + this.gridSize, offsetY + this.gridSize, this.gridSize * 8, this.gridSize * 8);

        for (const t of this.targets) {
            ctx.fillStyle = 'rgba(57, 255, 20, 0.35)';
            ctx.fillRect(offsetX + t.x * this.gridSize + 4, offsetY + t.y * this.gridSize + 4, this.gridSize - 8, this.gridSize - 8);
            ctx.strokeStyle = '#39ff14';
            ctx.strokeRect(offsetX + t.x * this.gridSize + 4, offsetY + t.y * this.gridSize + 4, this.gridSize - 8, this.gridSize - 8);
        }

        for (const b of this.blocks) {
            const onTarget = this.targets.some(t => t.x === b.x && t.y === b.y);
            ctx.fillStyle = onTarget ? '#39ff14' : '#00e5ff';
            ctx.fillRect(offsetX + b.x * this.gridSize + 4, offsetY + b.y * this.gridSize + 4, this.gridSize - 8, this.gridSize - 8);
            ctx.strokeStyle = '#fff';
            ctx.strokeRect(offsetX + b.x * this.gridSize + 4, offsetY + b.y * this.gridSize + 4, this.gridSize - 8, this.gridSize - 8);
        }

        ctx.fillStyle = '#ff0055';
        ctx.fillRect(offsetX + this.playerX * this.gridSize + 6, offsetY + this.playerY * this.gridSize + 6, this.gridSize - 12, this.gridSize - 12);

        ctx.fillStyle = '#ffe600';
        ctx.font = 'bold 20px monospace';
        ctx.fillText(`CHAMBER: ${this.currentLevelIndex + 1}   MOVES: ${this.moves}`, 30, 40);
        ctx.fillStyle = '#8e8eb2';
        ctx.font = '12px monospace';
        ctx.fillText('[WASD/Arrows] Push Blocks onto Green Targets   [Z/R] Rewind Time', 30, 70);
    }
}
""")

    # 8. Rhythm Blaster
    write_file("src/games/rhythm_blaster/RhythmGame.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Rhythm Blaster: SynthWave
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class RhythmGame {
    constructor(engine) {
        this.engine = engine;
        this.lanes = [420, 530, 640, 750];
        this.keys = ['KeyD', 'KeyF', 'KeyJ', 'KeyK'];
        this.notes = [];
        this.spawnTimer = 0;
        this.score = 0;
        this.combo = 0;
        this.maxCombo = 0;
        this.judgment = '';
        this.judgmentTimer = 0;
        this.judgmentColor = '#00e5ff';
    }

    onCreate() {
        this.notes = [];
        this.score = 0;
        this.combo = 0;
        this.maxCombo = 0;
        this.judgment = '';
    }

    update(dt) {
        this.spawnTimer += dt;
        if (this.spawnTimer > 0.38) {
            this.spawnTimer = 0;
            const laneIndex = Math.floor(Math.random() * 4);
            this.notes.push({
                lane: laneIndex,
                y: 40,
                speed: 480,
                hit: false
            });
        }

        if (this.judgmentTimer > 0) this.judgmentTimer -= dt;

        for (let i = this.notes.length - 1; i >= 0; i--) {
            const n = this.notes[i];
            n.y += n.speed * dt;

            if (n.y > 690) {
                if (!n.hit) {
                    this.combo = 0;
                    this.judgment = 'MISS';
                    this.judgmentColor = '#ff0055';
                    this.judgmentTimer = 0.5;
                }
                this.notes.splice(i, 1);
            }
        }

        const input = this.engine.input;
        for (let l = 0; l < 4; l++) {
            if (input.isKeyJustPressed(this.keys[l])) {
                for (const n of this.notes) {
                    if (n.lane === l && !n.hit) {
                        const dist = Math.abs(n.y - 600);
                        if (dist < 70) {
                            n.hit = true;
                            this.combo++;
                            if (this.combo > this.maxCombo) this.maxCombo = this.combo;

                            if (dist < 25) {
                                this.judgment = 'PERFECT!';
                                this.judgmentColor = '#ffe600';
                                this.score += 300 * Math.min(4, this.combo);
                            } else {
                                this.judgment = 'GREAT!';
                                this.judgmentColor = '#00e5ff';
                                this.score += 150 * Math.min(4, this.combo);
                            }
                            this.judgmentTimer = 0.5;
                            break;
                        }
                    }
                }
            }
        }
    }

    render(ctx) {
        ctx.fillStyle = '#04030a';
        ctx.fillRect(0, 0, 1280, 720);

        for (let l = 0; l < 4; l++) {
            ctx.fillStyle = l % 2 === 0 ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.05)';
            ctx.fillRect(this.lanes[l] - 45, 0, 90, 720);

            ctx.strokeStyle = '#00e5ff';
            ctx.lineWidth = 3;
            ctx.strokeRect(this.lanes[l] - 40, 570, 80, 60);

            ctx.fillStyle = '#8e8eb2';
            ctx.font = 'bold 22px monospace';
            ctx.textAlign = 'center';
            ctx.fillText(this.keys[l].replace('Key', ''), this.lanes[l], 610);
        }

        for (const n of this.notes) {
            if (!n.hit) {
                ctx.fillStyle = ['#ff0055', '#00e5ff', '#ffe600', '#39ff14'][n.lane];
                ctx.fillRect(this.lanes[n.lane] - 35, n.y - 15, 70, 30);
                ctx.strokeStyle = '#fff';
                ctx.strokeRect(this.lanes[n.lane] - 35, n.y - 15, 70, 30);
            }
        }

        if (this.judgmentTimer > 0) {
            ctx.textAlign = 'center';
            ctx.fillStyle = this.judgmentColor;
            ctx.font = 'bold 36px monospace';
            ctx.fillText(this.judgment, 585, 480);
        }

        ctx.textAlign = 'left';
        ctx.fillStyle = '#ff0077';
        ctx.font = 'bold 22px monospace';
        ctx.fillText(`SCORE: ${this.score}`, 30, 45);
        ctx.fillStyle = '#00e5ff';
        ctx.fillText(`COMBO: ${this.combo}x (MAX: ${this.maxCombo})`, 30, 75);
    }
}
""")

    print("All remaining games successfully upgraded!")

upgrade_remaining()
