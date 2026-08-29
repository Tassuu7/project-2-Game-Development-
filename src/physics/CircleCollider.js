/**
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
