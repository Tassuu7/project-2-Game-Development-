/**
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
