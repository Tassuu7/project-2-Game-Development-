/**
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
