/**
 * NovaForge Game Engine & Arcade Studio
 * 2D Viewport Camera with Smooth Following, Zoom & Screen Shake
 * @author NovaForge Engineering Team
 * @license MIT
 */

import { Vector2 } from '../math/Vector2.js';

export class Camera2D {
    constructor(viewportWidth = 1280, viewportHeight = 720) {
        this.viewportWidth = viewportWidth;
        this.viewportHeight = viewportHeight;
        this.position = new Vector2(viewportWidth * 0.5, viewportHeight * 0.5);
        this.target = null;

        this.zoom = 1.0;
        this.targetZoom = 1.0;
        this.zoomSpeed = 4.0;

        this.rotation = 0;
        this.smoothFactor = 0.12;

        this.bounds = null; // { minX, minY, maxX, maxY }
        this.trauma = 0;
        this.traumaDecay = 1.8;
        this.maxShakeOffset = 30;
        this.maxShakeAngle = 0.08;
    }

    follow(target, smooth = true) {
        this.target = target;
        if (!smooth && target) {
            this.position.x = target.x;
            this.position.y = target.y;
        }
    }

    addTrauma(amount) {
        this.trauma = Math.min(1.0, this.trauma + amount);
    }

    update(dt) {
        // Target tracking
        if (this.target) {
            this.position.x += (this.target.x - this.position.x) * this.smoothFactor;
            this.position.y += (this.target.y - this.position.y) * this.smoothFactor;
        }

        // Zoom lerping
        this.zoom += (this.targetZoom - this.zoom) * Math.min(1.0, this.zoomSpeed * dt);

        // Clamp to world bounds
        if (this.bounds) {
            const hw = (this.viewportWidth * 0.5) / this.zoom;
            const hh = (this.viewportHeight * 0.5) / this.zoom;
            this.position.x = Math.max(this.bounds.minX + hw, Math.min(this.bounds.maxX - hw, this.position.x));
            this.position.y = Math.max(this.bounds.minY + hh, Math.min(this.bounds.maxY - hh, this.position.y));
        }

        // Screen shake decay
        if (this.trauma > 0) {
            this.trauma = Math.max(0, this.trauma - this.traumaDecay * dt);
        }
    }

    apply(ctx) {
        ctx.save();

        const shake = this.trauma * this.trauma;
        const offsetX = shake > 0 ? (Math.random() * 2 - 1) * this.maxShakeOffset * shake : 0;
        const offsetY = shake > 0 ? (Math.random() * 2 - 1) * this.maxShakeOffset * shake : 0;
        const angle = shake > 0 ? (Math.random() * 2 - 1) * this.maxShakeAngle * shake : 0;

        ctx.translate(this.viewportWidth * 0.5 + offsetX, this.viewportHeight * 0.5 + offsetY);
        ctx.rotate(this.rotation + angle);
        ctx.scale(this.zoom, this.zoom);
        ctx.translate(-this.position.x, -this.position.y);
    }

    restore(ctx) {
        ctx.restore();
    }

    screenToWorld(screenX, screenY) {
        const cx = this.viewportWidth * 0.5;
        const cy = this.viewportHeight * 0.5;
        const wx = (screenX - cx) / this.zoom + this.position.x;
        const wy = (screenY - cy) / this.zoom + this.position.y;
        return new Vector2(wx, wy);
    }

    worldToScreen(worldX, worldY) {
        const cx = this.viewportWidth * 0.5;
        const cy = this.viewportHeight * 0.5;
        const sx = (worldX - this.position.x) * this.zoom + cx;
        const sy = (worldY - this.position.y) * this.zoom + cy;
        return new Vector2(sx, sy);
    }
}
