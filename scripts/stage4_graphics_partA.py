# -*- coding: utf-8 -*-
from scripts.code_gen_lib import write_file

def build_partA():
    # 1. src/graphics/Camera2D.js
    write_file("src/graphics/Camera2D.js", """/**
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
""")

    # 2. src/graphics/SpriteSheet.js
    write_file("src/graphics/SpriteSheet.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Sprite Atlas Grid Slicing & Texture Frame Manager
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class SpriteSheet {
    constructor(imageOrCanvas, frameWidth = 32, frameHeight = 32) {
        this.source = imageOrCanvas;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.columns = imageOrCanvas ? Math.floor(imageOrCanvas.width / frameWidth) : 0;
        this.rows = imageOrCanvas ? Math.floor(imageOrCanvas.height / frameHeight) : 0;
        this.totalFrames = this.columns * this.rows;
    }

    drawFrame(ctx, frameIndex, destX, destY, flipX = false, flipY = false, scale = 1.0) {
        if (!this.source || frameIndex < 0 || frameIndex >= this.totalFrames) return;

        const col = frameIndex % this.columns;
        const row = Math.floor(frameIndex / this.columns);
        const sx = col * this.frameWidth;
        const sy = row * this.frameHeight;

        ctx.save();
        ctx.translate(destX, destY);
        ctx.scale(flipX ? -scale : scale, flipY ? -scale : scale);

        ctx.drawImage(
            this.source,
            sx, sy, this.frameWidth, this.frameHeight,
            -this.frameWidth * 0.5, -this.frameHeight * 0.5, this.frameWidth, this.frameHeight
        );

        ctx.restore();
    }
}
""")

    # 3. src/graphics/AnimationController.js
    write_file("src/graphics/AnimationController.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * State-Based Sprite Frame Animation Player
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class AnimationController {
    constructor() {
        this.animations = new Map();
        this.currentAnim = null;
        this.currentFrame = 0;
        this.frameTimer = 0;
        this.isPlaying = false;
        this.onComplete = null;
    }

    addAnimation(name, frames, fps = 10, loop = true) {
        this.animations.set(name, {
            name,
            frames,
            frameDuration: 1.0 / Math.max(1, fps),
            loop
        });
        return this;
    }

    play(name, forceRestart = false, onComplete = null) {
        if (!this.animations.has(name)) return;
        if (this.currentAnim && this.currentAnim.name === name && !forceRestart && this.isPlaying) {
            return;
        }

        this.currentAnim = this.animations.get(name);
        this.currentFrame = 0;
        this.frameTimer = 0;
        this.isPlaying = true;
        this.onComplete = onComplete;
    }

    update(dt) {
        if (!this.isPlaying || !this.currentAnim) return;

        this.frameTimer += dt;
        if (this.frameTimer >= this.currentAnim.frameDuration) {
            this.frameTimer -= this.currentAnim.frameDuration;
            this.currentFrame++;

            if (this.currentFrame >= this.currentAnim.frames.length) {
                if (this.currentAnim.loop) {
                    this.currentFrame = 0;
                } else {
                    this.currentFrame = this.currentAnim.frames.length - 1;
                    this.isPlaying = false;
                    if (typeof this.onComplete === 'function') {
                        this.onComplete(this.currentAnim.name);
                    }
                }
            }
        }
    }

    getCurrentFrameIndex() {
        if (!this.currentAnim) return 0;
        return this.currentAnim.frames[this.currentFrame] || 0;
    }
}
""")

    # 4. src/graphics/TilemapRenderer.js
    write_file("src/graphics/TilemapRenderer.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Chunked Orthogonal & Isometric Tilemap Rendering Engine
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class TilemapRenderer {
    constructor(tileWidth = 32, tileHeight = 32) {
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        this.layers = [];
        this.tileset = null;
    }

    setTileset(spriteSheet) {
        this.tileset = spriteSheet;
    }

    addLayer(name, width, height, data = [], opacity = 1.0, isCollision = false) {
        this.layers.push({
            name,
            width,
            height,
            data: data.length > 0 ? data : new Int32Array(width * height).fill(-1),
            opacity,
            isCollision
        });
        return this.layers[this.layers.length - 1];
    }

    render(ctx, camera) {
        if (!this.tileset) return;

        const viewBounds = {
            minX: camera.position.x - (camera.viewportWidth * 0.5) / camera.zoom,
            minY: camera.position.y - (camera.viewportHeight * 0.5) / camera.zoom,
            maxX: camera.position.x + (camera.viewportWidth * 0.5) / camera.zoom,
            maxY: camera.position.y + (camera.viewportHeight * 0.5) / camera.zoom
        };

        const startCol = Math.max(0, Math.floor(viewBounds.minX / this.tileWidth));
        const endCol = Math.floor(viewBounds.maxX / this.tileWidth) + 1;
        const startRow = Math.max(0, Math.floor(viewBounds.minY / this.tileHeight));
        const endRow = Math.floor(viewBounds.maxY / this.tileHeight) + 1;

        for (const layer of this.layers) {
            ctx.globalAlpha = layer.opacity;

            const maxCol = Math.min(layer.width, endCol);
            const maxRow = Math.min(layer.height, endRow);

            for (let r = startRow; r < maxRow; r++) {
                for (let c = startCol; c < maxCol; c++) {
                    const tileId = layer.data[r * layer.width + c];
                    if (tileId >= 0) {
                        const destX = c * this.tileWidth + this.tileWidth * 0.5;
                        const destY = r * this.tileHeight + this.tileHeight * 0.5;
                        this.tileset.drawFrame(ctx, tileId, destX, destY);
                    }
                }
            }
        }
        ctx.globalAlpha = 1.0;
    }
}
""")
