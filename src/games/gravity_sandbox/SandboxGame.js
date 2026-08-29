/**
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
