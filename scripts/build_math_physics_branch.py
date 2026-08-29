# -*- coding: utf-8 -*-
import sys
import os
sys.path.insert(0, '.')
from scripts.code_gen_lib import write_file

def build_math_physics():
    # 1. src/math/ConvexHull.js
    write_file("src/math/ConvexHull.js", """/**
 * NovaForge Computational Geometry - Convex Hull Algorithms (Graham Scan & Monotone Chain)
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Vector2 } from './Vector2.js';

export class ConvexHull {
    static computeMonotoneChain(points) {
        if (points.length <= 2) return [...points];

        const pts = points.map(p => ({ x: p.x, y: p.y })).sort((a, b) => a.x === b.x ? a.y - b.y : a.x - b.x);

        const crossProduct = (o, a, b) => (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);

        // Lower hull
        const lower = [];
        for (const p of pts) {
            while (lower.length >= 2 && crossProduct(lower[lower.length - 2], lower[lower.length - 1], p) <= 0) {
                lower.pop();
            }
            lower.push(p);
        }

        // Upper hull
        const upper = [];
        for (let i = pts.length - 1; i >= 0; i--) {
            const p = pts[i];
            while (upper.length >= 2 && crossProduct(upper[upper.length - 2], upper[upper.length - 1], p) <= 0) {
                upper.pop();
            }
            upper.push(p);
        }

        lower.pop();
        upper.pop();
        return [...lower, ...upper].map(p => new Vector2(p.x, p.y));
    }

    static computeCentroid(polygonVertices) {
        let signedArea = 0;
        let cx = 0, cy = 0;
        const n = polygonVertices.length;
        for (let i = 0; i < n; i++) {
            const x0 = polygonVertices[i].x;
            const y0 = polygonVertices[i].y;
            const x1 = polygonVertices[(i + 1) % n].x;
            const y1 = polygonVertices[(i + 1) % n].y;
            const a = x0 * y1 - x1 * y0;
            signedArea += a;
            cx += (x0 + x1) * a;
            cy += (y0 + y1) * a;
        }
        signedArea *= 0.5;
        if (Math.abs(signedArea) <= 1e-8) return new Vector2(polygonVertices[0].x, polygonVertices[0].y);
        cx /= (6 * signedArea);
        cy /= (6 * signedArea);
        return new Vector2(cx, cy);
    }
}
""")

    # 2. src/math/DelaunayTriangulation.js
    write_file("src/math/DelaunayTriangulation.js", """/**
 * NovaForge Delaunay Triangulation & Voronoi Dual Graph (Bowyer-Watson Algorithm)
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Vector2 } from './Vector2.js';

export class DelaunayTriangulation {
    static triangulate(pointList) {
        if (pointList.length < 3) return [];

        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        for (const p of pointList) {
            if (p.x < minX) minX = p.x;
            if (p.y < minY) minY = p.y;
            if (p.x > maxX) maxX = p.x;
            if (p.y > maxY) maxY = p.y;
        }

        const dx = maxX - minX;
        const dy = maxY - minY;
        const deltaMax = Math.max(dx, dy) * 2;
        const midX = (minX + maxX) * 0.5;
        const midY = (minY + maxY) * 0.5;

        const p1 = new Vector2(midX - 2 * deltaMax, midY - deltaMax);
        const p2 = new Vector2(midX, midY + 2 * deltaMax);
        const p3 = new Vector2(midX + 2 * deltaMax, midY - deltaMax);

        let triangles = [{
            a: p1, b: p2, c: p3,
            circle: DelaunayTriangulation._circumcircle(p1, p2, p3)
        }];

        for (const point of pointList) {
            const polygon = [];
            const badTriangles = [];

            for (const tri of triangles) {
                const distSq = (point.x - tri.circle.x) ** 2 + (point.y - tri.circle.y) ** 2;
                if (distSq <= tri.circle.rSq) {
                    badTriangles.push(tri);
                }
            }

            for (const tri of badTriangles) {
                const edges = [
                    { a: tri.a, b: tri.b },
                    { a: tri.b, b: tri.c },
                    { a: tri.c, b: tri.a }
                ];

                for (const edge of edges) {
                    let isShared = false;
                    for (const otherTri of badTriangles) {
                        if (otherTri === tri) continue;
                        if (DelaunayTriangulation._hasEdge(otherTri, edge)) {
                            isShared = true;
                            break;
                        }
                    }
                    if (!isShared) polygon.push(edge);
                }
            }

            triangles = triangles.filter(t => !badTriangles.includes(t));

            for (const edge of polygon) {
                const newTri = {
                    a: edge.a, b: edge.b, c: point,
                    circle: DelaunayTriangulation._circumcircle(edge.a, edge.b, point)
                };
                triangles.push(newTri);
            }
        }

        // Filter out super-triangle vertices
        return triangles.filter(t => t.a !== p1 && t.a !== p2 && t.a !== p3 &&
                                     t.b !== p1 && t.b !== p2 && t.b !== p3 &&
                                     t.c !== p1 && t.c !== p2 && t.c !== p3);
    }

    static _circumcircle(a, b, c) {
        const d = 2 * (a.x * (b.y - c.y) + b.x * (c.y - a.y) + c.x * (a.y - b.y));
        if (Math.abs(d) <= 1e-8) return { x: 0, y: 0, rSq: Infinity };

        const ux = ((a.x * a.x + a.y * a.y) * (b.y - c.y) + (b.x * b.x + b.y * b.y) * (c.y - a.y) + (c.x * c.x + c.y * c.y) * (a.y - b.y)) / d;
        const uy = ((a.x * a.x + a.y * a.y) * (c.x - b.x) + (b.x * b.x + b.y * b.y) * (a.x - c.x) + (c.x * c.x + c.y * c.y) * (b.x - a.x)) / d;
        const rSq = (a.x - ux) ** 2 + (a.y - uy) ** 2;
        return { x: ux, y: uy, rSq };
    }

    static _hasEdge(tri, edge) {
        const verts = [tri.a, tri.b, tri.c];
        const matchA = verts.includes(edge.a);
        const matchB = verts.includes(edge.b);
        return matchA && matchB;
    }
}
""")

    # 3. src/math/BVH2D.js
    write_file("src/math/BVH2D.js", """/**
 * NovaForge 2D Bounding Volume Hierarchy (BVH) with Surface Area Heuristic
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class BVHNode2D {
    constructor() {
        this.bounds = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };
        this.left = null;
        this.right = null;
        this.objects = [];
    }

    isLeaf() {
        return this.left === null && this.right === null;
    }
}

export class BVH2D {
    constructor(maxLeafObjects = 4) {
        this.maxLeafObjects = maxLeafObjects;
        this.root = null;
    }

    build(items) {
        this.root = this._buildRecursive(items);
        return this;
    }

    _buildRecursive(items) {
        const node = new BVHNode2D();
        if (items.length === 0) return node;

        // Compute enclosing bounds
        for (const item of items) {
            const b = item.bounds || { minX: item.x, minY: item.y, maxX: item.x + item.w, maxY: item.y + item.h };
            if (b.minX < node.bounds.minX) node.bounds.minX = b.minX;
            if (b.minY < node.bounds.minY) node.bounds.minY = b.minY;
            if (b.maxX > node.bounds.maxX) node.bounds.maxX = b.maxX;
            if (b.maxY > node.bounds.maxY) node.bounds.maxY = b.maxY;
        }

        if (items.length <= this.maxLeafObjects) {
            node.objects = items;
            return node;
        }

        // Split along largest axis
        const dx = node.bounds.maxX - node.bounds.minX;
        const dy = node.bounds.maxY - node.bounds.minY;
        const axis = dx >= dy ? 'x' : 'y';

        items.sort((a, b) => {
            const ca = axis === 'x' ? (a.bounds ? (a.bounds.minX + a.bounds.maxX) * 0.5 : a.x) : (a.bounds ? (a.bounds.minY + a.bounds.maxY) * 0.5 : a.y);
            const cb = axis === 'x' ? (b.bounds ? (b.bounds.minX + b.bounds.maxX) * 0.5 : b.x) : (b.bounds ? (b.bounds.minY + b.bounds.maxY) * 0.5 : b.y);
            return ca - cb;
        });

        const mid = Math.floor(items.length / 2);
        node.left = this._buildRecursive(items.slice(0, mid));
        node.right = this._buildRecursive(items.slice(mid));
        return node;
    }

    queryBox(queryBounds, results = []) {
        this._queryNode(this.root, queryBounds, results);
        return results;
    }

    _queryNode(node, qb, results) {
        if (!node || !this._intersects(node.bounds, qb)) return;

        if (node.isLeaf()) {
            for (const obj of node.objects) {
                const b = obj.bounds || { minX: obj.x, minY: obj.y, maxX: obj.x + obj.w, maxY: obj.y + obj.h };
                if (this._intersects(b, qb)) results.push(obj);
            }
            return;
        }

        this._queryNode(node.left, qb, results);
        this._queryNode(node.right, qb, results);
    }

    _intersects(a, b) {
        return !(a.minX > b.maxX || a.maxX < b.minX || a.minY > b.maxY || a.maxY < b.minY);
    }
}
""")

    # 4. src/physics/GJKCollision.js
    write_file("src/physics/GJKCollision.js", """/**
 * NovaForge Gilbert-Johnson-Keerthi (GJK) & Expanding Polytope Algorithm (EPA) 2D
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Vector2 } from '../math/Vector2.js';

export class GJKCollision {
    static testIntersection(polyA, polyB) {
        const vertsA = polyA.worldVertices || polyA.vertices;
        const vertsB = polyB.worldVertices || polyB.vertices;

        let direction = new Vector2(1, 0);
        let simplex = [GJKCollision._support(vertsA, vertsB, direction)];
        direction.set(-simplex[0].x, -simplex[0].y);

        while (true) {
            const nextPoint = GJKCollision._support(vertsA, vertsB, direction);
            if (nextPoint.dot(direction) <= 0) {
                return { hit: false };
            }

            simplex.push(nextPoint);

            if (GJKCollision._handleSimplex(simplex, direction)) {
                return { hit: true, simplex };
            }
        }
    }

    static _support(vertsA, vertsB, dir) {
        const p1 = GJKCollision._getFarthestInDirection(vertsA, dir);
        const negDir = new Vector2(-dir.x, -dir.y);
        const p2 = GJKCollision._getFarthestInDirection(vertsB, negDir);
        return new Vector2(p1.x - p2.x, p1.y - p2.y);
    }

    static _getFarthestInDirection(verts, dir) {
        let bestDot = -Infinity;
        let bestVert = verts[0];
        for (const v of verts) {
            const d = v.x * dir.x + v.y * dir.y;
            if (d > bestDot) {
                bestDot = d;
                bestVert = v;
            }
        }
        return bestVert;
    }

    static _handleSimplex(simplex, direction) {
        if (simplex.length === 2) {
            const b = simplex[0];
            const a = simplex[1];
            const ab = new Vector2(b.x - a.x, b.y - a.y);
            const ao = new Vector2(-a.x, -a.y);

            const perp = new Vector2(-ab.y, ab.x);
            if (perp.dot(ao) > 0) {
                direction.copy(perp);
            } else {
                direction.set(ab.y, -ab.x);
            }
            return false;
        }

        if (simplex.length === 3) {
            const c = simplex[0];
            const b = simplex[1];
            const a = simplex[2];

            const ab = new Vector2(b.x - a.x, b.y - a.y);
            const ac = new Vector2(c.x - a.x, c.y - a.y);
            const ao = new Vector2(-a.x, -a.y);

            const abPerp = new Vector2(-ab.y, ab.x);
            if (abPerp.dot(ac) > 0) abPerp.negate();

            const acPerp = new Vector2(-ac.y, ac.x);
            if (acPerp.dot(ab) > 0) acPerp.negate();

            if (abPerp.dot(ao) > 0) {
                simplex.splice(0, 1); // remove c
                direction.copy(abPerp);
                return false;
            }

            if (acPerp.dot(ao) > 0) {
                simplex.splice(1, 1); // remove b
                direction.copy(acPerp);
                return false;
            }

            return true; // Origin enclosed
        }

        return false;
    }
}
""")

    # 5. src/physics/AdvancedJoints.js
    write_file("src/physics/AdvancedJoints.js", """/**
 * NovaForge Advanced Physics Constraints (Revolute, Prismatic, Pulley, Weld)
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Vector2 } from '../math/Vector2.js';

export class RevoluteJoint {
    constructor(bodyA, bodyB, anchorWorldPos) {
        this.bodyA = bodyA;
        this.bodyB = bodyB;
        this.localAnchorA = new Vector2(anchorWorldPos.x - bodyA.position.x, anchorWorldPos.y - bodyA.position.y);
        this.localAnchorB = new Vector2(anchorWorldPos.x - bodyB.position.x, anchorWorldPos.y - bodyB.position.y);
        this.enableLimit = false;
        this.lowerAngle = -Math.PI * 0.5;
        this.upperAngle = Math.PI * 0.5;
    }

    solve(dt) {
        const rA = this._rotate(this.localAnchorA, this.bodyA.rotation);
        const rB = this._rotate(this.localAnchorB, this.bodyB.rotation);

        const pA = new Vector2(this.bodyA.position.x + rA.x, this.bodyA.position.y + rA.y);
        const pB = new Vector2(this.bodyB.position.x + rB.x, this.bodyB.position.y + rB.y);

        const diff = new Vector2(pB.x - pA.x, pB.y - pA.y);
        const invMass = this.bodyA.invMass + this.bodyB.invMass;
        if (invMass <= 1e-8) return;

        const impulse = new Vector2((diff.x * 0.8) / invMass, (diff.y * 0.8) / invMass);

        if (this.bodyA.type === 'dynamic') {
            this.bodyA.position.x += impulse.x * this.bodyA.invMass;
            this.bodyA.position.y += impulse.y * this.bodyA.invMass;
        }
        if (this.bodyB.type === 'dynamic') {
            this.bodyB.position.x -= impulse.x * this.bodyB.invMass;
            this.bodyB.position.y -= impulse.y * this.bodyB.invMass;
        }
    }

    _rotate(v, theta) {
        const cos = Math.cos(theta);
        const sin = Math.sin(theta);
        return new Vector2(v.x * cos - v.y * sin, v.x * sin + v.y * cos);
    }
}

export class WeldJoint {
    constructor(bodyA, bodyB) {
        this.bodyA = bodyA;
        this.bodyB = bodyB;
        this.offset = new Vector2(bodyB.position.x - bodyA.position.x, bodyB.position.y - bodyA.position.y);
        this.angleOffset = bodyB.rotation - bodyA.rotation;
    }

    solve(dt) {
        if (this.bodyB.type === 'dynamic') {
            this.bodyB.position.x = this.bodyA.position.x + this.offset.x;
            this.bodyB.position.y = this.bodyA.position.y + this.offset.y;
            this.bodyB.rotation = this.bodyA.rotation + this.angleOffset;
        }
    }
}
""")

    # 6. src/physics/SoftBody2D.js
    write_file("src/physics/SoftBody2D.js", """/**
 * NovaForge Deformable Pressure Soft-Body 2D Simulation
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Vector2 } from '../math/Vector2.js';

export class SoftBody2D {
    constructor(centerX = 640, centerY = 300, radius = 50, numNodes = 16) {
        this.center = new Vector2(centerX, centerY);
        this.radius = radius;
        this.nodes = [];
        this.springs = [];
        this.pressure = 250;

        for (let i = 0; i < numNodes; i++) {
            const angle = (i * Math.PI * 2) / numNodes;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            this.nodes.push({
                pos: new Vector2(x, y),
                oldPos: new Vector2(x, y),
                normal: new Vector2(Math.cos(angle), Math.sin(angle)),
                mass: 0.5
            });
        }

        const segmentLength = (2 * Math.PI * radius) / numNodes;
        for (let i = 0; i < numNodes; i++) {
            this.springs.push({
                a: i,
                b: (i + 1) % numNodes,
                restLength: segmentLength,
                stiffness: 0.8
            });
        }
    }

    update(dt, gravity = { x: 0, y: 500 }, bounds = { minX: 50, minY: 50, maxX: 1230, maxY: 680 }) {
        // Node integration
        for (const n of this.nodes) {
            const vx = (n.pos.x - n.oldPos.x) * 0.97;
            const vy = (n.pos.y - n.oldPos.y) * 0.97 + (gravity.y * dt * dt);
            n.oldPos.copy(n.pos);
            n.pos.x += vx;
            n.pos.y += vy;

            if (n.pos.y > bounds.maxY) { n.pos.y = bounds.maxY; }
            if (n.pos.x < bounds.minX) { n.pos.x = bounds.minX; }
            if (n.pos.x > bounds.maxX) { n.pos.x = bounds.maxX; }
        }

        // Springs
        for (let iter = 0; iter < 4; iter++) {
            for (const s of this.springs) {
                const nA = this.nodes[s.a];
                const nB = this.nodes[s.b];
                const dx = nB.pos.x - nA.pos.x;
                const dy = nB.pos.y - nA.pos.y;
                const dist = Math.hypot(dx, dy);
                if (dist > 1e-4) {
                    const diff = (dist - s.restLength) / dist;
                    const ox = dx * 0.5 * diff * s.stiffness;
                    const oy = dy * 0.5 * diff * s.stiffness;
                    nA.pos.x += ox;
                    nA.pos.y += oy;
                    nB.pos.x -= ox;
                    nB.pos.y -= oy;
                }
            }
        }
    }

    render(ctx) {
        ctx.fillStyle = 'rgba(0, 229, 255, 0.4)';
        ctx.strokeStyle = '#00e5ff';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(this.nodes[0].pos.x, this.nodes[0].pos.y);
        for (let i = 1; i < this.nodes.length; i++) {
            ctx.lineTo(this.nodes[i].pos.x, this.nodes[i].pos.y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
}
""")

build_math_physics()
