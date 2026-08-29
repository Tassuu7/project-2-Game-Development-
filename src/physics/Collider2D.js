/**
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
