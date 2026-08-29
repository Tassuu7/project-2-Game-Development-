# -*- coding: utf-8 -*-
from scripts.code_gen_lib import write_file, git_commit

def build_partC():
    # 11. src/physics/RagdollPhysics.js
    write_file("src/physics/RagdollPhysics.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Verlet Multi-Bone Ragdoll Simulation System
 * @author NovaForge Engineering Team
 * @license MIT
 */

import { Vector2 } from '../math/Vector2.js';

export class RagdollPhysics {
    constructor(startX = 100, startY = 100) {
        this.points = [
            { pos: new Vector2(startX, startY - 30), oldPos: new Vector2(startX, startY - 30), radius: 10, mass: 1, name: 'head' },
            { pos: new Vector2(startX, startY), oldPos: new Vector2(startX, startY), radius: 14, mass: 3, name: 'chest' },
            { pos: new Vector2(startX, startY + 25), oldPos: new Vector2(startX, startY + 25), radius: 12, mass: 2, name: 'pelvis' },
            { pos: new Vector2(startX - 20, startY + 5), oldPos: new Vector2(startX - 20, startY + 5), radius: 6, mass: 0.8, name: 'hand_l' },
            { pos: new Vector2(startX + 20, startY + 5), oldPos: new Vector2(startX + 20, startY + 5), radius: 6, mass: 0.8, name: 'hand_r' },
            { pos: new Vector2(startX - 15, startY + 55), oldPos: new Vector2(startX - 15, startY + 55), radius: 7, mass: 1, name: 'foot_l' },
            { pos: new Vector2(startX + 15, startY + 55), oldPos: new Vector2(startX + 15, startY + 55), radius: 7, mass: 1, name: 'foot_r' }
        ];

        this.sticks = [
            { p0: 0, p1: 1, length: 30 },
            { p0: 1, p1: 2, length: 25 },
            { p0: 1, p1: 3, length: 25 },
            { p0: 1, p1: 4, length: 25 },
            { p0: 2, p1: 5, length: 30 },
            { p0: 2, p1: 6, length: 30 }
        ];
    }

    update(dt, gravity, bounds) {
        // Verlet point integration
        for (const p of this.points) {
            const vx = (p.pos.x - p.oldPos.x) * 0.98;
            const vy = (p.pos.y - p.oldPos.y) * 0.98 + (gravity.y * dt * dt);
            p.oldPos.copy(p.pos);
            p.pos.x += vx;
            p.pos.y += vy;

            // Floor & walls collision
            if (p.pos.y > bounds.maxY - p.radius) {
                p.pos.y = bounds.maxY - p.radius;
            }
            if (p.pos.x < bounds.minX + p.radius) p.pos.x = bounds.minX + p.radius;
            if (p.pos.x > bounds.maxX - p.radius) p.pos.x = bounds.maxX - p.radius;
        }

        // Stick constraints solver
        for (let iter = 0; iter < 5; iter++) {
            for (const s of this.sticks) {
                const p0 = this.points[s.p0];
                const p1 = this.points[s.p1];
                const dx = p1.pos.x - p0.pos.x;
                const dy = p1.pos.y - p0.pos.y;
                const dist = Math.hypot(dx, dy);
                if (dist > 1e-6) {
                    const diff = (dist - s.length) / dist;
                    const offsetX = dx * 0.5 * diff;
                    const offsetY = dy * 0.5 * diff;
                    p0.pos.x += offsetX;
                    p0.pos.y += offsetY;
                    p1.pos.x -= offsetX;
                    p1.pos.y -= offsetY;
                }
            }
        }
    }

    applyImpulse(pointIndex, impulseX, impulseY) {
        if (this.points[pointIndex]) {
            this.points[pointIndex].oldPos.x -= impulseX;
            this.points[pointIndex].oldPos.y -= impulseY;
        }
    }

    render(ctx) {
        ctx.strokeStyle = '#00e5ff';
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';

        // Draw skeleton sticks
        for (const s of this.sticks) {
            const p0 = this.points[s.p0].pos;
            const p1 = this.points[s.p1].pos;
            ctx.beginPath();
            ctx.moveTo(p0.x, p0.y);
            ctx.lineTo(p1.x, p1.y);
            ctx.stroke();
        }

        // Draw joint points
        for (const p of this.points) {
            ctx.fillStyle = p.name === 'head' ? '#ff3366' : '#ffffff';
            ctx.beginPath();
            ctx.arc(p.pos.x, p.pos.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}
""")

    # 12. src/physics/FluidSimulation2D.js
    write_file("src/physics/FluidSimulation2D.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * SPH (Smoothed-Particle Hydrodynamics) 2D Fluid Simulation
 * @author NovaForge Engineering Team
 * @license MIT
 */

import { Vector2 } from '../math/Vector2.js';

export class FluidSimulation2D {
    constructor(maxParticles = 300, smoothingRadius = 24) {
        this.particles = [];
        this.maxParticles = maxParticles;
        this.h = smoothingRadius;
        this.h2 = smoothingRadius * smoothingRadius;
        this.restDensity = 1.0;
        this.gasConstant = 200.0;
        this.viscosity = 2.5;

        for (let i = 0; i < maxParticles; i++) {
            this.particles.push({
                x: 100 + (i % 15) * 14,
                y: 50 + Math.floor(i / 15) * 14,
                vx: 0,
                vy: 0,
                fx: 0,
                fy: 0,
                density: 0,
                pressure: 0
            });
        }
    }

    update(dt, gravity, bounds) {
        const h2 = this.h2;

        // 1. Density and pressure computation
        for (let i = 0; i < this.particles.length; i++) {
            const pi = this.particles[i];
            pi.density = 0;

            for (let j = 0; j < this.particles.length; j++) {
                const pj = this.particles[j];
                const dx = pj.x - pi.x;
                const dy = pj.y - pi.y;
                const r2 = dx * dx + dy * dy;
                if (r2 < h2) {
                    pi.density += (h2 - r2) ** 3;
                }
            }

            pi.density = Math.max(pi.density * 0.0001, this.restDensity);
            pi.pressure = this.gasConstant * (pi.density - this.restDensity);
        }

        // 2. Pressure and viscosity force computation
        for (let i = 0; i < this.particles.length; i++) {
            const pi = this.particles[i];
            let fPressX = 0, fPressY = 0;
            let fViscX = 0, fViscY = 0;

            for (let j = 0; j < this.particles.length; j++) {
                if (i === j) continue;
                const pj = this.particles[j];
                const dx = pj.x - pi.x;
                const dy = pj.y - pi.y;
                const r = Math.hypot(dx, dy);

                if (r < this.h && r > 1e-4) {
                    const q = 1 - r / this.h;
                    const pTerm = ((pi.pressure + pj.pressure) / (2 * pj.density)) * (q * q);
                    fPressX -= (dx / r) * pTerm;
                    fPressY -= (dy / r) * pTerm;

                    const vTerm = (this.viscosity / pj.density) * q;
                    fViscX += (pj.vx - pi.vx) * vTerm;
                    fViscY += (pj.vy - pi.vy) * vTerm;
                }
            }

            pi.fx = fPressX + fViscX + gravity.x;
            pi.fy = fPressY + fViscY + gravity.y;
        }

        // 3. Integration & boundary clamping
        for (const p of this.particles) {
            p.vx += (p.fx / p.density) * dt;
            p.vy += (p.fy / p.density) * dt;
            p.x += p.vx * dt;
            p.y += p.vy * dt;

            // Boundaries
            if (p.x < bounds.minX + 8) { p.x = bounds.minX + 8; p.vx *= -0.5; }
            if (p.x > bounds.maxX - 8) { p.x = bounds.maxX - 8; p.vx *= -0.5; }
            if (p.y < bounds.minY + 8) { p.y = bounds.minY + 8; p.vy *= -0.5; }
            if (p.y > bounds.maxY - 8) { p.y = bounds.maxY - 8; p.vy *= -0.5; }
        }
    }

    render(ctx) {
        ctx.fillStyle = 'rgba(0, 195, 255, 0.75)';
        for (const p of this.particles) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}
""")

    # 13. src/physics/Raycaster2D.js
    write_file("src/physics/Raycaster2D.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * 2D Raycasting, Segment Intersections and Visibility Polygons
 * @author NovaForge Engineering Team
 * @license MIT
 */

import { Vector2 } from '../math/Vector2.js';

export class Raycaster2D {
    static castRay(origin, direction, colliders = [], maxDistance = 1000) {
        const normDir = new Vector2(direction.x, direction.y).normalize();
        let closestHit = null;
        let minDistance = maxDistance;

        for (const col of colliders) {
            if (col.type === 'circle') {
                const hit = Raycaster2D._rayCircle(origin, normDir, col.worldCenter, col.radius);
                if (hit && hit.distance < minDistance) {
                    minDistance = hit.distance;
                    closestHit = hit;
                    closestHit.collider = col;
                }
            } else if (col.type === 'box' || col.type === 'polygon') {
                const verts = col.worldVertices || col.vertices;
                const hit = Raycaster2D._rayPolygon(origin, normDir, verts);
                if (hit && hit.distance < minDistance) {
                    minDistance = hit.distance;
                    closestHit = hit;
                    closestHit.collider = col;
                }
            }
        }

        return closestHit;
    }

    static _rayCircle(origin, dir, center, radius) {
        const ocX = center.x - origin.x;
        const ocY = center.y - origin.y;
        const tca = ocX * dir.x + ocY * dir.y;
        if (tca < 0) return null;

        const d2 = (ocX * ocX + ocY * ocY) - (tca * tca);
        const r2 = radius * radius;
        if (d2 > r2) return null;

        const thc = Math.sqrt(r2 - d2);
        const t0 = tca - thc;
        const dist = t0 >= 0 ? t0 : tca + thc;
        if (dist < 0) return null;

        const point = new Vector2(origin.x + dir.x * dist, origin.y + dir.y * dist);
        const normal = new Vector2(point.x - center.x, point.y - center.y).normalize();

        return { distance: dist, point, normal };
    }

    static _rayPolygon(origin, dir, vertices) {
        let closestHit = null;
        let minT = Infinity;

        for (let i = 0; i < vertices.length; i++) {
            const p1 = vertices[i];
            const p2 = vertices[(i + 1) % vertices.length];
            const hit = Raycaster2D._raySegment(origin, dir, p1, p2);
            if (hit && hit.distance < minT) {
                minT = hit.distance;
                closestHit = hit;
            }
        }

        return closestHit;
    }

    static _raySegment(rayOrigin, rayDir, segA, segB) {
        const dx = segB.x - segA.x;
        const dy = segB.y - segA.y;
        const cross = rayDir.x * dy - rayDir.y * dx;
        if (Math.abs(cross) < 1e-8) return null;

        const t2 = ((rayOrigin.x - segA.x) * rayDir.y - (rayOrigin.y - segA.y) * rayDir.x) / cross;
        const t1 = ((segA.x - rayOrigin.x) * dy - (segA.y - rayOrigin.y) * dx) / -cross;

        if (t1 >= 0 && t2 >= 0 && t2 <= 1) {
            const point = new Vector2(rayOrigin.x + rayDir.x * t1, rayOrigin.y + rayDir.y * t1);
            const edgeNormal = new Vector2(-dy, dx).normalize();
            return { distance: t1, point, normal: edgeNormal };
        }

        return null;
    }
}
""")

    # 14. src/physics/ParticleSystem.js
    write_file("src/physics/ParticleSystem.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * High-Density Particle Physics & Visual Emitter Engine
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class ParticleSystem {
    constructor(maxParticles = 2000) {
        this.maxParticles = maxParticles;
        this.particles = [];
        this.pool = [];

        // Preallocate pool
        for (let i = 0; i < maxParticles; i++) {
            this.pool.push({
                x: 0, y: 0,
                vx: 0, vy: 0,
                size: 4, startSize: 4, endSize: 0,
                color: '#ffdd00',
                alpha: 1.0,
                life: 1.0, maxLife: 1.0,
                gravityScale: 1.0,
                drag: 0.98,
                active: false
            });
        }
    }

    emit(config) {
        const count = config.count || 1;
        for (let i = 0; i < count; i++) {
            const p = this.pool.pop();
            if (!p) break;

            const angle = config.angle !== undefined ? config.angle + (Math.random() - 0.5) * (config.spread || 0) : Math.random() * Math.PI * 2;
            const speed = (config.speed || 100) * (0.5 + Math.random());

            p.x = config.x || 0;
            p.y = config.y || 0;
            p.vx = Math.cos(angle) * speed;
            p.vy = Math.sin(angle) * speed;
            p.startSize = config.size || 4;
            p.endSize = config.endSize !== undefined ? config.endSize : 0;
            p.size = p.startSize;
            p.color = config.color || '#ffcc00';
            p.alpha = 1.0;
            p.maxLife = config.lifetime || 0.8;
            p.life = p.maxLife;
            p.gravityScale = config.gravityScale !== undefined ? config.gravityScale : 1.0;
            p.drag = config.drag !== undefined ? config.drag : 0.98;
            p.active = true;

            this.particles.push(p);
        }
    }

    update(dt, gravity = { x: 0, y: 300 }) {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.life -= dt;

            if (p.life <= 0) {
                p.active = false;
                this.particles.splice(i, 1);
                this.pool.push(p);
                continue;
            }

            const progress = 1.0 - (p.life / p.maxLife);
            p.size = p.startSize + (p.endSize - p.startSize) * progress;
            p.alpha = 1.0 - progress;

            p.vx += gravity.x * p.gravityScale * dt;
            p.vy += gravity.y * p.gravityScale * dt;
            p.vx *= p.drag;
            p.vy *= p.drag;

            p.x += p.vx * dt;
            p.y += p.vy * dt;
        }
    }

    render(ctx) {
        ctx.save();
        for (const p of this.particles) {
            ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha));
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, Math.max(0.5, p.size), 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }

    clear() {
        while (this.particles.length > 0) {
            const p = this.particles.pop();
            p.active = false;
            this.pool.push(p);
        }
    }
}
""")

    # 15. src/physics/PhysicsWorld.js
    write_file("src/physics/PhysicsWorld.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Master 2D Physics World, Velocity Verlet Integration & Contact Resolution
 * @author NovaForge Engineering Team
 * @license MIT
 */

import { Vector2 } from '../math/Vector2.js';
import { SATCollision } from './SATCollision.js';
import { SpatialHashGrid } from './SpatialHashGrid.js';

export class PhysicsWorld {
    constructor(config = {}) {
        this.gravity = new Vector2(config.gravityX || 0, config.gravityY !== undefined ? config.gravityY : 980);
        this.bodies = [];
        this.joints = [];
        this.spatialHash = new SpatialHashGrid(config.spatialCellSize || 64);
        this.subSteps = config.subSteps || 4;
        this.penetrationSlop = 0.05;
        this.baumgarte = 0.2;
    }

    addBody(body) {
        if (!this.bodies.includes(body)) {
            this.bodies.push(body);
        }
        return body;
    }

    removeBody(body) {
        const index = this.bodies.indexOf(body);
        if (index !== -1) {
            this.bodies.splice(index, 1);
        }
    }

    addJoint(joint) {
        this.joints.push(joint);
        return joint;
    }

    removeJoint(joint) {
        const idx = this.joints.indexOf(joint);
        if (idx !== -1) this.joints.splice(idx, 1);
    }

    step(dt) {
        const subDt = dt / this.subSteps;

        for (let s = 0; s < this.subSteps; s++) {
            // 1. Solve joint constraints
            for (const joint of this.joints) {
                joint.solve(subDt);
            }

            // 2. Integrate velocities and positions
            for (const body of this.bodies) {
                body.integrate(subDt, this.gravity);
            }

            // 3. Broadphase spatial grid
            this.spatialHash.clear();
            for (const body of this.bodies) {
                if (body.collider) {
                    this.spatialHash.insert(body);
                }
            }

            // 4. Narrowphase collision & impulse resolution
            const checkedPairs = new Set();
            for (const bodyA of this.bodies) {
                if (!bodyA.collider || bodyA.isSleeping) continue;

                const candidates = this.spatialHash.queryPotentialCollisions(bodyA);
                for (const bodyB of candidates) {
                    if (!bodyB.collider) continue;

                    const pairKey = bodyA.mass > bodyB.mass ? `${bodyA.position.x}_${bodyB.position.x}` : `${bodyB.position.x}_${bodyA.position.x}`;
                    if (checkedPairs.has(pairKey)) continue;
                    checkedPairs.add(pairKey);

                    const collision = SATCollision.testCollision(bodyA.collider, bodyA, bodyB.collider, bodyB);
                    if (collision && collision.collided) {
                        this._resolveContact(collision, subDt);
                    }
                }
            }
        }
    }

    _resolveContact(c, dt) {
        const bodyA = c.bodyA;
        const bodyB = c.bodyB;
        if (!bodyA || !bodyB) return;
        if (bodyA.type === 'static' && bodyB.type === 'static') return;

        const normal = c.normal;
        const rvX = bodyB.velocity.x - bodyA.velocity.x;
        const rvY = bodyB.velocity.y - bodyA.velocity.y;
        const velAlongNormal = rvX * normal.x + rvY * normal.y;

        if (velAlongNormal > 0) return; // Moving apart

        const e = Math.min(bodyA.restitution, bodyB.restitution);
        const invMassSum = bodyA.invMass + bodyB.invMass;
        if (invMassSum <= 1e-8) return;

        let j = -(1 + e) * velAlongNormal;
        j /= invMassSum;

        const impulseX = normal.x * j;
        const impulseY = normal.y * j;

        if (bodyA.type === 'dynamic') {
            bodyA.velocity.x -= impulseX * bodyA.invMass;
            bodyA.velocity.y -= impulseY * bodyA.invMass;
            bodyA.isSleeping = false;
        }
        if (bodyB.type === 'dynamic') {
            bodyB.velocity.x += impulseX * bodyB.invMass;
            bodyB.velocity.y += impulseY * bodyB.invMass;
            bodyB.isSleeping = false;
        }

        // Positional Baumgarte stabilization
        const correctionMagnitude = Math.max(0, c.penetration - this.penetrationSlop) * this.baumgarte / invMassSum;
        const corrX = normal.x * correctionMagnitude;
        const corrY = normal.y * correctionMagnitude;

        if (bodyA.type === 'dynamic') {
            bodyA.position.x -= corrX * bodyA.invMass;
            bodyA.position.y -= corrY * bodyA.invMass;
        }
        if (bodyB.type === 'dynamic') {
            bodyB.position.x += corrX * bodyB.invMass;
            bodyB.position.y += corrY * bodyB.invMass;
        }
    }

    clear() {
        this.bodies = [];
        this.joints = [];
        this.spatialHash.clear();
    }
}
""")

    git_commit("feat(physics): implement 2D rigid body physics, SAT collision, quadtree, and fluid simulation")
