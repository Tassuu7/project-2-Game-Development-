/**
 * NovaForge Game Engine & Arcade Studio
 * Autonomous Agent Swarm & Boids Flocking Simulation
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Vector2 } from '../math/Vector2.js';

export class Boid {
    constructor(x, y) {
        this.position = new Vector2(x, y);
        this.velocity = new Vector2((Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100);
        this.acceleration = new Vector2(0, 0);
        this.maxSpeed = 150;
        this.maxForce = 300;
        this.neighborRadius = 60;
        this.separationRadius = 25;
    }

    flock(boids, bounds) {
        let sep = this.separate(boids);
        let ali = this.align(boids);
        let coh = this.cohere(boids);

        sep.scale(1.5);
        ali.scale(1.0);
        coh.scale(1.0);

        this.acceleration.add(sep);
        this.acceleration.add(ali);
        this.acceleration.add(coh);

        // Bounding
        if (bounds) {
            if (this.position.x < bounds.minX) this.velocity.x += 20;
            if (this.position.x > bounds.maxX) this.velocity.x -= 20;
            if (this.position.y < bounds.minY) this.velocity.y += 20;
            if (this.position.y > bounds.maxY) this.velocity.y -= 20;
        }
    }

    separate(boids) {
        let steer = new Vector2(0, 0);
        let count = 0;

        for (const other of boids) {
            const d = this.position.distanceTo(other.position);
            if (d > 0 && d < this.separationRadius) {
                const diff = new Vector2(this.position.x - other.position.x, this.position.y - other.position.y).normalize().scale(1 / d);
                steer.add(diff);
                count++;
            }
        }

        if (count > 0) steer.scale(1 / count);
        return steer;
    }

    align(boids) {
        let sum = new Vector2(0, 0);
        let count = 0;

        for (const other of boids) {
            const d = this.position.distanceTo(other.position);
            if (d > 0 && d < this.neighborRadius) {
                sum.add(other.velocity);
                count++;
            }
        }

        if (count > 0) {
            sum.scale(1 / count).normalize().scale(this.maxSpeed);
            const steer = new Vector2(sum.x - this.velocity.x, sum.y - this.velocity.y);
            return steer;
        }
        return new Vector2(0, 0);
    }

    cohere(boids) {
        let sum = new Vector2(0, 0);
        let count = 0;

        for (const other of boids) {
            const d = this.position.distanceTo(other.position);
            if (d > 0 && d < this.neighborRadius) {
                sum.add(other.position);
                count++;
            }
        }

        if (count > 0) {
            sum.scale(1 / count);
            const desired = new Vector2(sum.x - this.position.x, sum.y - this.position.y).normalize().scale(this.maxSpeed);
            return new Vector2(desired.x - this.velocity.x, desired.y - this.velocity.y);
        }
        return new Vector2(0, 0);
    }

    update(dt) {
        this.velocity.add(new Vector2(this.acceleration.x * dt, this.acceleration.y * dt));
        this.velocity.clampLength(0, this.maxSpeed);
        this.position.add(new Vector2(this.velocity.x * dt, this.velocity.y * dt));
        this.acceleration.set(0, 0);
    }
}
