/**
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
