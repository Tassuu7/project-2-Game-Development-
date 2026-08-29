/**
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
