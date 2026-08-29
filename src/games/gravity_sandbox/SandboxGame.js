/**
 * NovaForge Game Engine & Arcade Studio
 * Gravity Sandbox & Physics Playground
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
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
