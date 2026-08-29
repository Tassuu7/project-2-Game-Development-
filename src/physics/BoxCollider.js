/**
 * NovaForge Game Engine & Arcade Studio
 * 2D Box / Oriented Bounding Box Collider
 * @author NovaForge Engineering Team
 * @license MIT
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
