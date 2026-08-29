/**
 * NovaForge Game Engine & Arcade Studio
 * 2D Rigid Body with Dynamic, Static, Kinematic State Integration
 * @author NovaForge Engineering Team
 * @license MIT
 */

import { Vector2 } from '../math/Vector2.js';

export class RigidBody {
    constructor(config = {}) {
        this.type = config.type || 'dynamic'; // 'dynamic' | 'static' | 'kinematic'
        this.position = new Vector2(config.x || 0, config.y || 0);
        this.previousPosition = new Vector2(this.position.x, this.position.y);
        this.velocity = new Vector2(config.vx || 0, config.vy || 0);
        this.acceleration = new Vector2(0, 0);
        this.forceAccumulator = new Vector2(0, 0);

        this.rotation = config.rotation || 0;
        this.angularVelocity = config.angularVelocity || 0;
        this.torqueAccumulator = 0;

        this.mass = this.type === 'static' ? 0 : (config.mass !== undefined ? config.mass : 1.0);
        this.invMass = this.mass > 0 ? (1.0 / this.mass) : 0;

        this.inertia = this.type === 'static' ? 0 : (config.inertia !== undefined ? config.inertia : 500);
        this.invInertia = this.inertia > 0 ? (1.0 / this.inertia) : 0;

        this.restitution = config.restitution !== undefined ? config.restitution : 0.25;
        this.staticFriction = config.staticFriction !== undefined ? config.staticFriction : 0.4;
        this.dynamicFriction = config.dynamicFriction !== undefined ? config.dynamicFriction : 0.28;

        this.linearDamping = config.linearDamping !== undefined ? config.linearDamping : 0.01;
        this.angularDamping = config.angularDamping !== undefined ? config.angularDamping : 0.05;
        this.gravityScale = config.gravityScale !== undefined ? config.gravityScale : 1.0;

        this.isSleeping = false;
        this.sleepTimer = 0;
        this.collider = config.collider || null;
        if (this.collider) {
            this.collider.body = this;
        }
    }

    applyForce(force) {
        if (this.type !== 'dynamic') return;
        this.forceAccumulator.add(force);
        this.isSleeping = false;
    }

    applyImpulse(impulse, contactVector = null) {
        if (this.type !== 'dynamic') return;
        this.velocity.x += impulse.x * this.invMass;
        this.velocity.y += impulse.y * this.invMass;

        if (contactVector) {
            this.angularVelocity += (contactVector.x * impulse.y - contactVector.y * impulse.x) * this.invInertia;
        }
        this.isSleeping = false;
    }

    applyTorque(torque) {
        if (this.type !== 'dynamic') return;
        this.torqueAccumulator += torque;
        this.isSleeping = false;
    }

    integrate(dt, gravity) {
        if (this.type === 'static' || this.isSleeping) return;

        this.previousPosition.copy(this.position);

        // Apply gravity & accumulated forces
        if (this.type === 'dynamic') {
            this.velocity.x += (gravity.x * this.gravityScale + this.forceAccumulator.x * this.invMass) * dt;
            this.velocity.y += (gravity.y * this.gravityScale + this.forceAccumulator.y * this.invMass) * dt;

            this.angularVelocity += (this.torqueAccumulator * this.invInertia) * dt;

            // Apply damping
            this.velocity.scale(Math.max(0, 1.0 - this.linearDamping * dt));
            this.angularVelocity *= Math.max(0, 1.0 - this.angularDamping * dt);
        }

        // Integrate positions
        this.position.x += this.velocity.x * dt;
        this.position.y += this.velocity.y * dt;
        this.rotation += this.angularVelocity * dt;

        // Clear accumulators
        this.forceAccumulator.set(0, 0);
        this.torqueAccumulator = 0;

        // Update collider bounds
        if (this.collider) {
            this.collider.updateBounds(this.position, this.rotation);
        }

        // Sleeping detection
        const speedSq = this.velocity.lengthSq();
        if (speedSq < 0.05 && Math.abs(this.angularVelocity) < 0.05) {
            this.sleepTimer += dt;
            if (this.sleepTimer > 0.5) {
                this.isSleeping = true;
                this.velocity.set(0, 0);
                this.angularVelocity = 0;
            }
        } else {
            this.sleepTimer = 0;
        }
    }
}
