# -*- coding: utf-8 -*-
from scripts.code_gen_lib import write_file

def build_partB():
    # 6. src/physics/RigidBody.js
    write_file("src/physics/RigidBody.js", """/**
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
""")

    # 7. src/physics/QuadTree.js
    write_file("src/physics/QuadTree.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Spatial Partitioning 2D Quadtree Engine
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class QuadTree {
    constructor(boundary, maxObjects = 10, maxLevels = 5, level = 0) {
        this.boundary = boundary; // { x, y, width, height }
        this.maxObjects = maxObjects;
        this.maxLevels = maxLevels;
        this.level = level;
        this.objects = [];
        this.nodes = [];
        this.divided = false;
    }

    subdivide() {
        const x = this.boundary.x;
        const y = this.boundary.y;
        const hw = this.boundary.width * 0.5;
        const hh = this.boundary.height * 0.5;

        this.nodes = [
            new QuadTree({ x, y, width: hw, height: hh }, this.maxObjects, this.maxLevels, this.level + 1),
            new QuadTree({ x: x + hw, y, width: hw, height: hh }, this.maxObjects, this.maxLevels, this.level + 1),
            new QuadTree({ x, y: y + hh, width: hw, height: hh }, this.maxObjects, this.maxLevels, this.level + 1),
            new QuadTree({ x: x + hw, y: y + hh, width: hw, height: hh }, this.maxObjects, this.maxLevels, this.level + 1)
        ];
        this.divided = true;
    }

    insert(item) {
        const b = item.collider ? item.collider.bounds : { minX: item.x, minY: item.y, maxX: item.x + (item.width || 1), maxY: item.y + (item.height || 1) };
        if (!this._intersects(this.boundary, b)) {
            return false;
        }

        if (this.objects.length < this.maxObjects || this.level >= this.maxLevels) {
            this.objects.push(item);
            return true;
        }

        if (!this.divided) {
            this.subdivide();
        }

        let inserted = false;
        for (const node of this.nodes) {
            if (node.insert(item)) inserted = true;
        }
        return inserted;
    }

    query(range, found = []) {
        if (!this._intersects(this.boundary, range)) {
            return found;
        }

        for (const obj of this.objects) {
            const b = obj.collider ? obj.collider.bounds : { minX: obj.x, minY: obj.y, maxX: obj.x + (obj.width || 1), maxY: obj.y + (obj.height || 1) };
            if (this._intersects(range, b)) {
                found.push(obj);
            }
        }

        if (this.divided) {
            for (const node of this.nodes) {
                node.query(range, found);
            }
        }

        return found;
    }

    clear() {
        this.objects = [];
        for (const node of this.nodes) {
            node.clear();
        }
        this.nodes = [];
        this.divided = false;
    }

    _intersects(rect, bounds) {
        const rMinX = rect.x, rMinY = rect.y, rMaxX = rect.x + rect.width, rMaxY = rect.y + rect.height;
        return !(bounds.minX > rMaxX || bounds.maxX < rMinX || bounds.minY > rMaxY || bounds.maxY < rMinY);
    }
}
""")

    # 8. src/physics/SpatialHashGrid.js
    write_file("src/physics/SpatialHashGrid.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Broadphase Spatial Hash Grid for Ultra-Fast Proximity Queries
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class SpatialHashGrid {
    constructor(cellSize = 64) {
        this.cellSize = cellSize;
        this.grid = new Map();
    }

    _key(cellX, cellY) {
        return `${cellX},${cellY}`;
    }

    insert(entity) {
        const bounds = entity.collider ? entity.collider.bounds : { minX: entity.position.x - 16, minY: entity.position.y - 16, maxX: entity.position.x + 16, maxY: entity.position.y + 16 };
        const minCellX = Math.floor(bounds.minX / this.cellSize);
        const maxCellX = Math.floor(bounds.maxX / this.cellSize);
        const minCellY = Math.floor(bounds.minY / this.cellSize);
        const maxCellY = Math.floor(bounds.maxY / this.cellSize);

        for (let cx = minCellX; cx <= maxCellX; cx++) {
            for (let cy = minCellY; cy <= maxCellY; cy++) {
                const k = this._key(cx, cy);
                if (!this.grid.has(k)) {
                    this.grid.set(k, new Set());
                }
                this.grid.get(k).add(entity);
            }
        }
    }

    queryPotentialCollisions(entity, results = new Set()) {
        const bounds = entity.collider ? entity.collider.bounds : { minX: entity.position.x - 16, minY: entity.position.y - 16, maxX: entity.position.x + 16, maxY: entity.position.y + 16 };
        const minCellX = Math.floor(bounds.minX / this.cellSize);
        const maxCellX = Math.floor(bounds.maxX / this.cellSize);
        const minCellY = Math.floor(bounds.minY / this.cellSize);
        const maxCellY = Math.floor(bounds.maxY / this.cellSize);

        for (let cx = minCellX; cx <= maxCellX; cx++) {
            for (let cy = minCellY; cy <= maxCellY; cy++) {
                const k = this._key(cx, cy);
                const cell = this.grid.get(k);
                if (cell) {
                    for (const other of cell) {
                        if (other !== entity) {
                            results.add(other);
                        }
                    }
                }
            }
        }
        return results;
    }

    clear() {
        this.grid.clear();
    }
}
""")

    # 9. src/physics/SpringJoint.js
    write_file("src/physics/SpringJoint.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Spring Joint Constraint Simulation
 * @author NovaForge Engineering Team
 * @license MIT
 */

import { Vector2 } from '../math/Vector2.js';

export class SpringJoint {
    constructor(bodyA, bodyB, restLength = 50, stiffness = 100, damping = 5) {
        this.bodyA = bodyA;
        this.bodyB = bodyB;
        this.restLength = restLength;
        this.stiffness = stiffness;
        this.damping = damping;
    }

    solve(dt) {
        const dx = this.bodyB.position.x - this.bodyA.position.x;
        const dy = this.bodyB.position.y - this.bodyA.position.y;
        const dist = Math.hypot(dx, dy);
        if (dist <= 1e-6) return;

        const normal = new Vector2(dx / dist, dy / dist);
        const deltaDist = dist - this.restLength;

        // Relative velocity
        const relVx = this.bodyB.velocity.x - this.bodyA.velocity.x;
        const relVy = this.bodyB.velocity.y - this.bodyA.velocity.y;
        const relVAlongNormal = relVx * normal.x + relVy * normal.y;

        const springForce = deltaDist * this.stiffness;
        const dampingForce = relVAlongNormal * this.damping;
        const totalForce = (springForce + dampingForce);

        const forceVec = new Vector2(normal.x * totalForce, normal.y * totalForce);

        if (this.bodyA.type === 'dynamic') this.bodyA.applyForce(forceVec);
        if (this.bodyB.type === 'dynamic') this.bodyB.applyForce(new Vector2(-forceVec.x, -forceVec.y));
    }
}
""")

    # 10. src/physics/DistanceJoint.js
    write_file("src/physics/DistanceJoint.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Distance Joint Constraint with Baumgarte Stabilization
 * @author NovaForge Engineering Team
 * @license MIT
 */

import { Vector2 } from '../math/Vector2.js';

export class DistanceJoint {
    constructor(bodyA, bodyB, targetDistance = null) {
        this.bodyA = bodyA;
        this.bodyB = bodyB;
        this.targetDistance = targetDistance !== null ? targetDistance : bodyA.position.distanceTo(bodyB.position);
    }

    solve(dt) {
        const dx = this.bodyB.position.x - this.bodyA.position.x;
        const dy = this.bodyB.position.y - this.bodyA.position.y;
        const currentDistance = Math.hypot(dx, dy);
        if (currentDistance <= 1e-6) return;

        const error = currentDistance - this.targetDistance;
        const normal = new Vector2(dx / currentDistance, dy / currentDistance);

        const invMassSum = this.bodyA.invMass + this.bodyB.invMass;
        if (invMassSum <= 1e-8) return;

        const correctionMagnitude = (error * 0.8) / invMassSum;
        if (this.bodyA.type === 'dynamic') {
            this.bodyA.position.x += normal.x * correctionMagnitude * this.bodyA.invMass;
            this.bodyA.position.y += normal.y * correctionMagnitude * this.bodyA.invMass;
        }
        if (this.bodyB.type === 'dynamic') {
            this.bodyB.position.x -= normal.x * correctionMagnitude * this.bodyB.invMass;
            this.bodyB.position.y -= normal.y * correctionMagnitude * this.bodyB.invMass;
        }
    }
}
""")
