# -*- coding: utf-8 -*-
from scripts.code_gen_lib import write_file

def build_partC():
    # 5. Gravity Sandbox
    write_file("src/games/gravity_sandbox/SandboxGame.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Gravity Sandbox & Physics Playground
 * @author NovaForge Engineering Team
 * @license MIT
 */

import { PhysicsWorld } from '../../physics/PhysicsWorld.js';
import { RigidBody } from '../../physics/RigidBody.js';
import { BoxCollider } from '../../physics/BoxCollider.js';
import { CircleCollider } from '../../physics/CircleCollider.js';
import { RagdollPhysics } from '../../physics/RagdollPhysics.js';
import { FluidSimulation2D } from '../../physics/FluidSimulation2D.js';

export class SandboxGame {
    constructor(engine) {
        this.engine = engine;
        this.world = new PhysicsWorld();
        this.ragdoll = new RagdollPhysics(640, 150);
        this.fluids = new FluidSimulation2D(150, 24);
        this.setupWorld();
    }

    setupWorld() {
        // Floor
        const floor = new RigidBody({ x: 640, y: 700, type: 'static' });
        floor.collider = new BoxCollider(1280, 40);
        this.world.addBody(floor);

        // Spawn some stackable boxes
        for (let i = 0; i < 12; i++) {
            const box = new RigidBody({ x: 550 + (i % 3) * 60, y: 300 - Math.floor(i / 3) * 60, mass: 2 });
            box.collider = new BoxCollider(40, 40);
            this.world.addBody(box);
        }
    }

    onCreate() {}

    update(dt) {
        this.world.step(dt);
        this.ragdoll.update(dt, this.world.gravity, { minX: 50, minY: 50, maxX: 1230, maxY: 680 });
        this.fluids.update(dt, this.world.gravity, { minX: 100, minY: 50, maxX: 1180, maxY: 680 });

        // Spawn box on click
        const input = this.engine.input;
        if (input.mouse.justPressed) {
            const circle = new RigidBody({ x: input.mouse.x, y: input.mouse.y, mass: 3, restitution: 0.7 });
            circle.collider = new CircleCollider(20);
            this.world.addBody(circle);
        }
    }

    render(ctx) {
        ctx.fillStyle = '#0a0a14';
        ctx.fillRect(0, 0, 1280, 720);

        // Draw bodies
        for (const b of this.world.bodies) {
            if (b.collider) {
                if (b.collider.type === 'box') {
                    ctx.fillStyle = b.type === 'static' ? '#1e293b' : '#00e5ff';
                    ctx.fillRect(b.position.x - b.collider.halfWidth, b.position.y - b.collider.halfHeight, b.collider.width, b.collider.height);
                } else if (b.collider.type === 'circle') {
                    ctx.fillStyle = '#ffe600';
                    ctx.beginPath();
                    ctx.arc(b.position.x, b.position.y, b.collider.radius, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }

        // Draw ragdoll & fluids
        this.ragdoll.render(ctx);
        this.fluids.render(ctx);

        // HUD
        ctx.fillStyle = '#ffffff';
        ctx.font = '16px monospace';
        ctx.fillText('PHYSICS SANDBOX - Click anywhere to spawn physics spheres', 30, 40);
    }
}
""")

    # 6. Neon Tower Defense
    write_file("src/games/neon_tower_defense/TowerDefenseGame.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Neon Tower Defense - Strategic Grid Path Defense
 * @author NovaForge Engineering Team
 * @license MIT
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
""")
