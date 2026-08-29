/**
 * NovaForge Game Engine & Arcade Studio
 * 2D Convex Polygon Collider
 * @author NovaForge Engineering Team
 * @license MIT
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
