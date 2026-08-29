/**
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
