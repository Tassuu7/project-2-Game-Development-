/**
 * NovaForge Game Engine & Arcade Studio
 * Separating Axis Theorem (SAT) Collision Solver & Contact Manifolds
 * @author NovaForge Engineering Team
 * @license MIT
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
