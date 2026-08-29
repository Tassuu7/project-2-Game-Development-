# -*- coding: utf-8 -*-
from scripts.code_gen_lib import write_file

def build_partA():
    # 1. src/physics/Collider2D.js
    write_file("src/physics/Collider2D.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Abstract 2D Geometric Collider Base Class
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Vector2 } from '../math/Vector2.js';

export class Collider2D {
    constructor(type = 'generic') {
        this.type = type;
        this.offset = new Vector2(0, 0);
        this.isTrigger = false;
        this.layerMask = 0xFFFFFFFF;
        this.collisionGroup = 1;
        this.body = null;
        this.bounds = { minX: 0, minY: 0, maxX: 0, maxY: 0 };
    }

    updateBounds() {
        // Base implementation
    }

    containsPoint(point) {
        return false;
    }
}
""")

    # 2. src/physics/BoxCollider.js
    write_file("src/physics/BoxCollider.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * 2D Box / Oriented Bounding Box Collider
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Collider2D } from './Collider2D.js';
import { Vector2 } from '../math/Vector2.js';

export class BoxCollider extends Collider2D {
    constructor(width = 32, height = 32) {
        super('box');
        this.width = width;
        this.height = height;
        this.halfWidth = width * 0.5;
        this.halfHeight = height * 0.5;
        this.vertices = [new Vector2(), new Vector2(), new Vector2(), new Vector2()];
        this.normals = [new Vector2(), new Vector2()];
    }

    updateBounds(position, rotation = 0) {
        const hw = this.halfWidth;
        const hh = this.halfHeight;
        const cx = position.x + this.offset.x;
        const cy = position.y + this.offset.y;

        const cos = Math.cos(rotation);
        const sin = Math.sin(rotation);

        const localVertices = [
            { x: -hw, y: -hh },
            { x:  hw, y: -hh },
            { x:  hw, y:  hh },
            { x: -hw, y:  hh }
        ];

        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

        for (let i = 0; i < 4; i++) {
            const lx = localVertices[i].x;
            const ly = localVertices[i].y;
            const rx = (lx * cos) - (ly * sin) + cx;
            const ry = (lx * sin) + (ly * cos) + cy;
            this.vertices[i].set(rx, ry);

            if (rx < minX) minX = rx;
            if (rx > maxX) maxX = rx;
            if (ry < minY) minY = ry;
            if (ry > maxY) maxY = ry;
        }

        this.normals[0].set(cos, sin); // Right normal
        this.normals[1].set(-sin, cos); // Up normal

        this.bounds.minX = minX;
        this.bounds.minY = minY;
        this.bounds.maxX = maxX;
        this.bounds.maxY = maxY;
    }

    containsPoint(point) {
        // Point in OBB test
        const p = this.body ? this.body.position : new Vector2(0, 0);
        const rot = this.body ? this.body.rotation : 0;
        const dx = point.x - (p.x + this.offset.x);
        const dy = point.y - (p.y + this.offset.y);
        const cos = Math.cos(-rot);
        const sin = Math.sin(-rot);
        const localX = (dx * cos) - (dy * sin);
        const localY = (dx * sin) + (dy * cos);
        return Math.abs(localX) <= this.halfWidth && Math.abs(localY) <= this.halfHeight;
    }
}
""")

    # 3. src/physics/CircleCollider.js
    write_file("src/physics/CircleCollider.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * 2D Circle Collider
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Collider2D } from './Collider2D.js';
import { Vector2 } from '../math/Vector2.js';

export class CircleCollider extends Collider2D {
    constructor(radius = 16) {
        super('circle');
        this.radius = radius;
        this.worldCenter = new Vector2(0, 0);
    }

    updateBounds(position, rotation = 0) {
        const cx = position.x + this.offset.x;
        const cy = position.y + this.offset.y;
        this.worldCenter.set(cx, cy);

        this.bounds.minX = cx - this.radius;
        this.bounds.minY = cy - this.radius;
        this.bounds.maxX = cx + this.radius;
        this.bounds.maxY = cy + this.radius;
    }

    containsPoint(point) {
        const dx = point.x - this.worldCenter.x;
        const dy = point.y - this.worldCenter.y;
        return (dx * dx + dy * dy) <= (this.radius * this.radius);
    }
}
""")

    # 4. src/physics/PolygonCollider.js
    write_file("src/physics/PolygonCollider.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * 2D Convex Polygon Collider
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Collider2D } from './Collider2D.js';
import { Vector2 } from '../math/Vector2.js';

export class PolygonCollider extends Collider2D {
    constructor(localVertices = []) {
        super('polygon');
        this.localVertices = localVertices.length > 0 ? localVertices : [
            new Vector2(-16, -16),
            new Vector2(16, -16),
            new Vector2(16, 16),
            new Vector2(-16, 16)
        ];
        this.worldVertices = this.localVertices.map(v => new Vector2(v.x, v.y));
        this.normals = [];
        this._calculateNormals();
    }

    _calculateNormals() {
        this.normals = [];
        for (let i = 0; i < this.localVertices.length; i++) {
            const p1 = this.localVertices[i];
            const p2 = this.localVertices[(i + 1) % this.localVertices.length];
            const edge = new Vector2(p2.x - p1.x, p2.y - p1.y);
            const normal = new Vector2(-edge.y, edge.x).normalize();
            this.normals.push(normal);
        }
    }

    updateBounds(position, rotation = 0) {
        const cx = position.x + this.offset.x;
        const cy = position.y + this.offset.y;
        const cos = Math.cos(rotation);
        const sin = Math.sin(rotation);

        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

        for (let i = 0; i < this.localVertices.length; i++) {
            const lv = this.localVertices[i];
            const rx = (lv.x * cos) - (lv.y * sin) + cx;
            const ry = (lv.x * sin) + (lv.y * cos) + cy;
            this.worldVertices[i].set(rx, ry);

            if (rx < minX) minX = rx;
            if (rx > maxX) maxX = rx;
            if (ry < minY) minY = ry;
            if (ry > maxY) maxY = ry;
        }

        this.bounds.minX = minX;
        this.bounds.minY = minY;
        this.bounds.maxX = maxX;
        this.bounds.maxY = maxY;
    }

    containsPoint(point) {
        let inside = false;
        const vs = this.worldVertices;
        for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
            const xi = vs[i].x, yi = vs[i].y;
            const xj = vs[j].x, yj = vs[j].y;
            const intersect = ((yi > point.y) !== (yj > point.y)) &&
                (point.x < (xj - xi) * (point.y - yi) / (yj - yi) + xi);
            if (intersect) inside = !inside;
        }
        return inside;
    }
}
""")

    # 5. src/physics/SATCollision.js
    write_file("src/physics/SATCollision.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Separating Axis Theorem (SAT) Collision Solver & Contact Manifolds
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Vector2 } from '../math/Vector2.js';

export class SATCollision {
    static testCollision(colliderA, bodyA, colliderB, bodyB) {
        if (colliderA.type === 'circle' && colliderB.type === 'circle') {
            return SATCollision._circleCircle(colliderA, bodyA, colliderB, bodyB);
        }
        if (colliderA.type === 'circle' && (colliderB.type === 'box' || colliderB.type === 'polygon')) {
            return SATCollision._circlePolygon(colliderA, bodyA, colliderB, bodyB);
        }
        if ((colliderA.type === 'box' || colliderA.type === 'polygon') && colliderB.type === 'circle') {
            const result = SATCollision._circlePolygon(colliderB, bodyB, colliderA, bodyA);
            if (result) {
                result.normal.negate();
            }
            return result;
        }
        return SATCollision._polygonPolygon(colliderA, bodyA, colliderB, bodyB);
    }

    static _circleCircle(colA, bodyA, colB, bodyB) {
        const pA = colA.worldCenter;
        const pB = colB.worldCenter;
        const dx = pB.x - pA.x;
        const dy = pB.y - pA.y;
        const distSq = (dx * dx) + (dy * dy);
        const radiusSum = colA.radius + colB.radius;

        if (distSq >= (radiusSum * radiusSum)) {
            return null;
        }

        const dist = Math.sqrt(distSq);
        const normal = dist > 1e-6 ? new Vector2(dx / dist, dy / dist) : new Vector2(0, 1);
        const penetration = radiusSum - dist;
        const contactPoint = new Vector2(pA.x + normal.x * colA.radius, pA.y + normal.y * colA.radius);

        return {
            collided: true,
            normal,
            penetration,
            contactPoint,
            bodyA,
            bodyB
        };
    }

    static _circlePolygon(circleCol, circleBody, polyCol, polyBody) {
        const cCenter = circleCol.worldCenter;
        const vertices = polyCol.worldVertices || polyCol.vertices;
        let minOverlap = Infinity;
        let smallestAxis = new Vector2();

        // 1. Polygon edge normals
        for (let i = 0; i < vertices.length; i++) {
            const p1 = vertices[i];
            const p2 = vertices[(i + 1) % vertices.length];
            const edge = new Vector2(p2.x - p1.x, p2.y - p1.y);
            const axis = new Vector2(-edge.y, edge.x).normalize();

            const polyProj = SATCollision._projectPolygon(vertices, axis);
            const circleProj = SATCollision._projectCircle(cCenter, circleCol.radius, axis);

            const overlap = SATCollision._getOverlap(polyProj, circleProj);
            if (overlap <= 0) return null;

            if (overlap < minOverlap) {
                minOverlap = overlap;
                smallestAxis.copy(axis);
            }
        }

        // 2. Nearest vertex to circle axis
        let closestVertex = vertices[0];
        let minDistSq = Infinity;
        for (const v of vertices) {
            const dSq = (v.x - cCenter.x) ** 2 + (v.y - cCenter.y) ** 2;
            if (dSq < minDistSq) {
                minDistSq = dSq;
                closestVertex = v;
            }
        }

        const vertexAxis = new Vector2(closestVertex.x - cCenter.x, closestVertex.y - cCenter.y).normalize();
        const polyProj = SATCollision._projectPolygon(vertices, vertexAxis);
        const circleProj = SATCollision._projectCircle(cCenter, circleCol.radius, vertexAxis);
        const overlap = SATCollision._getOverlap(polyProj, circleProj);
        if (overlap <= 0) return null;

        if (overlap < minOverlap) {
            minOverlap = overlap;
            smallestAxis.copy(vertexAxis);
        }

        // Ensure normal points from poly to circle
        const polyCenter = polyBody ? polyBody.position : new Vector2(0, 0);
        const dir = new Vector2(cCenter.x - polyCenter.x, cCenter.y - polyCenter.y);
        if (smallestAxis.dot(dir) < 0) {
            smallestAxis.negate();
        }

        const contactPoint = new Vector2(cCenter.x - smallestAxis.x * circleCol.radius, cCenter.y - smallestAxis.y * circleCol.radius);

        return {
            collided: true,
            normal: smallestAxis,
            penetration: minOverlap,
            contactPoint,
            bodyA: circleBody,
            bodyB: polyBody
        };
    }

    static _polygonPolygon(colA, bodyA, colB, bodyB) {
        const vertsA = colA.worldVertices || colA.vertices;
        const vertsB = colB.worldVertices || colB.vertices;

        let minOverlap = Infinity;
        let smallestAxis = new Vector2();

        const testAxes = [...SATCollision._getAxes(vertsA), ...SATCollision._getAxes(vertsB)];

        for (const axis of testAxes) {
            const projA = SATCollision._projectPolygon(vertsA, axis);
            const projB = SATCollision._projectPolygon(vertsB, axis);

            const overlap = SATCollision._getOverlap(projA, projB);
            if (overlap <= 0) return null;

            if (overlap < minOverlap) {
                minOverlap = overlap;
                smallestAxis.copy(axis);
            }
        }

        const centerA = bodyA ? bodyA.position : new Vector2(0, 0);
        const centerB = bodyB ? bodyB.position : new Vector2(0, 0);
        const dir = new Vector2(centerB.x - centerA.x, centerB.y - centerA.y);
        if (smallestAxis.dot(dir) < 0) {
            smallestAxis.negate();
        }

        return {
            collided: true,
            normal: smallestAxis,
            penetration: minOverlap,
            contactPoint: new Vector2((centerA.x + centerB.x) * 0.5, (centerA.y + centerB.y) * 0.5),
            bodyA,
            bodyB
        };
    }

    static _getAxes(vertices) {
        const axes = [];
        for (let i = 0; i < vertices.length; i++) {
            const p1 = vertices[i];
            const p2 = vertices[(i + 1) % vertices.length];
            const edge = new Vector2(p2.x - p1.x, p2.y - p1.y);
            axes.push(new Vector2(-edge.y, edge.x).normalize());
        }
        return axes;
    }

    static _projectPolygon(vertices, axis) {
        let min = axis.dot(vertices[0]);
        let max = min;
        for (let i = 1; i < vertices.length; i++) {
            const p = axis.dot(vertices[i]);
            if (p < min) min = p;
            if (p > max) max = p;
        }
        return { min, max };
    }

    static _projectCircle(center, radius, axis) {
        const p = axis.dot(center);
        return { min: p - radius, max: p + radius };
    }

    static _getOverlap(a, b) {
        return Math.min(a.max, b.max) - Math.max(a.min, b.min);
    }
}
""")
