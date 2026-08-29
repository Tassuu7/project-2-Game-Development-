# -*- coding: utf-8 -*-
from scripts.code_gen_lib import write_file, git_commit

def build_partC():
    # 8. src/graphics/Raycast3DRenderer.js
    write_file("src/graphics/Raycast3DRenderer.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Classic 3D Raycasting Engine (Wolfenstein-style DDA & Depth Buffer)
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class Raycast3DRenderer {
    constructor(canvas, width = 640, height = 360) {
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        this.halfHeight = height * 0.5;
        this.fov = 60 * Math.PI / 180;
        this.numRays = width;
        this.zBuffer = new Float32Array(width);
    }

    render(ctx, map, mapWidth, mapHeight, player, sprites = []) {
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        // Ceiling & Floor
        ctx.fillStyle = '#1a1a2e';
        ctx.fillRect(0, 0, this.width, this.halfHeight);
        ctx.fillStyle = '#16213e';
        ctx.fillRect(0, this.halfHeight, this.width, this.halfHeight);

        const halfFov = this.fov * 0.5;
        const angleStep = this.fov / this.numRays;
        let rayAngle = player.angle - halfFov;

        // DDA Raycasting
        for (let ray = 0; ray < this.numRays; ray++) {
            const cos = Math.cos(rayAngle);
            const sin = Math.sin(rayAngle);

            let mapX = Math.floor(player.x);
            let mapY = Math.floor(player.y);

            const deltaDistX = Math.abs(1 / cos);
            const deltaDistY = Math.abs(1 / sin);

            let stepX, stepY, sideDistX, sideDistY;

            if (cos < 0) {
                stepX = -1;
                sideDistX = (player.x - mapX) * deltaDistX;
            } else {
                stepX = 1;
                sideDistX = (mapX + 1.0 - player.x) * deltaDistX;
            }

            if (sin < 0) {
                stepY = -1;
                sideDistY = (player.y - mapY) * deltaDistY;
            } else {
                stepY = 1;
                sideDistY = (mapY + 1.0 - player.y) * deltaDistY;
            }

            let hit = 0, side = 0;
            while (hit === 0) {
                if (sideDistX < sideDistY) {
                    sideDistX += deltaDistX;
                    mapX += stepX;
                    side = 0;
                } else {
                    sideDistY += deltaDistY;
                    mapY += stepY;
                    side = 1;
                }

                if (mapX < 0 || mapX >= mapWidth || mapY < 0 || mapY >= mapHeight) break;
                if (map[mapY * mapWidth + mapX] > 0) hit = map[mapY * mapWidth + mapX];
            }

            let perpWallDist;
            if (side === 0) perpWallDist = (mapX - player.x + (1 - stepX) / 2) / cos;
            else perpWallDist = (mapY - player.y + (1 - stepY) / 2) / sin;

            // Fish-eye correction
            const correctedDist = perpWallDist * Math.cos(rayAngle - player.angle);
            this.zBuffer[ray] = correctedDist;

            const lineHeight = Math.floor((this.height / Math.max(0.01, correctedDist)));
            const drawStart = Math.max(0, -lineHeight * 0.5 + this.halfHeight);
            const drawEnd = Math.min(this.height - 1, lineHeight * 0.5 + this.halfHeight);

            // Shading
            const brightness = Math.max(0.1, Math.min(1.0, 1.0 - (correctedDist / 12.0)));
            const baseColor = hit === 2 ? [0, 229, 255] : hit === 3 ? [255, 0, 85] : [230, 230, 250];
            const shade = side === 1 ? 0.75 : 1.0;
            const r = Math.floor(baseColor[0] * brightness * shade);
            const g = Math.floor(baseColor[1] * brightness * shade);
            const b = Math.floor(baseColor[2] * brightness * shade);

            ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
            ctx.fillRect(ray, drawStart, 1, drawEnd - drawStart);

            rayAngle += angleStep;
        }

        // Render Sprite Billboards
        sprites.sort((a, b) => b.distance - a.distance);
        for (const spr of sprites) {
            const spriteX = spr.x - player.x;
            const spriteY = spr.y - player.y;

            const invDet = 1.0 / (Math.cos(player.angle) * Math.sin(player.angle + Math.PI * 0.5) - Math.sin(player.angle) * Math.cos(player.angle + Math.PI * 0.5));
            const transformX = invDet * (Math.sin(player.angle + Math.PI * 0.5) * spriteX - Math.cos(player.angle + Math.PI * 0.5) * spriteY);
            const transformY = invDet * (-Math.sin(player.angle) * spriteX + Math.cos(player.angle) * spriteY);

            if (transformY <= 0.1) continue;

            const spriteScreenX = Math.floor((this.width / 2) * (1 + transformX / transformY));
            const spriteHeight = Math.abs(Math.floor(this.height / transformY));
            const drawStartY = Math.max(0, -spriteHeight / 2 + this.halfHeight);
            const drawEndY = Math.min(this.height - 1, spriteHeight / 2 + this.halfHeight);

            const spriteWidth = Math.abs(Math.floor(this.height / transformY));
            const drawStartX = Math.max(0, Math.floor(-spriteWidth / 2 + spriteScreenX));
            const drawEndX = Math.min(this.width - 1, Math.floor(spriteWidth / 2 + spriteScreenX));

            for (let stripe = drawStartX; stripe < drawEndX; stripe++) {
                if (transformY < this.zBuffer[stripe]) {
                    ctx.fillStyle = spr.color || '#ff0055';
                    ctx.fillRect(stripe, drawStartY, 1, drawEndY - drawStartY);
                }
            }
        }

        ctx.restore();
    }
}
""")

    # 9. src/graphics/VectorArtGenerator.js
    write_file("src/graphics/VectorArtGenerator.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Procedural Vector Art Generator for Spaceships, Characters & Glyphs
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class VectorArtGenerator {
    static drawSpaceship(ctx, x, y, scale = 1.0, color = '#00e5ff', engineThrust = false) {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(scale, scale);

        // Hull
        ctx.fillStyle = color;
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(20, 0);
        ctx.lineTo(-15, -12);
        ctx.lineTo(-8, -4);
        ctx.lineTo(-8, 4);
        ctx.lineTo(-15, 12);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Cockpit
        ctx.fillStyle = '#ff0055';
        ctx.beginPath();
        ctx.arc(4, 0, 4, 0, Math.PI * 2);
        ctx.fill();

        // Engine glow
        if (engineThrust) {
            ctx.fillStyle = '#ffaa00';
            ctx.beginPath();
            ctx.moveTo(-10, -4);
            ctx.lineTo(-22 - Math.random() * 8, 0);
            ctx.lineTo(-10, 4);
            ctx.closePath();
            ctx.fill();
        }

        ctx.restore();
    }

    static drawHero(ctx, x, y, frame = 0, facingRight = true, color = '#39ff14') {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(facingRight ? 1 : -1, 1);

        // Head
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(0, -14, 6, 0, Math.PI * 2);
        ctx.fill();

        // Body
        ctx.fillStyle = color;
        ctx.fillRect(-5, -8, 10, 14);

        // Legs
        const legOffset = Math.sin(frame * 0.5) * 4;
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(-3, 6);
        ctx.lineTo(-3 + legOffset, 16);
        ctx.moveTo(3, 6);
        ctx.lineTo(3 - legOffset, 16);
        ctx.stroke();

        ctx.restore();
    }
}
""")

    # 10. src/graphics/UIOverlayRenderer.js
    write_file("src/graphics/UIOverlayRenderer.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * High-DPI Canvas Heads-Up Display & Floating Combat Text Renderer
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class UIOverlayRenderer {
    constructor() {
        this.floatingTexts = [];
    }

    addFloatingText(text, x, y, color = '#ffe600', isCrit = false) {
        this.floatingTexts.push({
            text, x, y,
            color,
            isCrit,
            life: 1.0,
            vy: -40
        });
    }

    drawHealthBar(ctx, x, y, width, height, current, max, color = '#00e5ff', bgColor = 'rgba(0,0,0,0.6)') {
        const pct = Math.max(0, Math.min(1.0, current / max));
        ctx.fillStyle = bgColor;
        ctx.fillRect(x, y, width, height);

        ctx.fillStyle = color;
        ctx.fillRect(x + 2, y + 2, (width - 4) * pct, height - 4);

        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, width, height);
    }

    updateAndRender(ctx, dt) {
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
            const ft = this.floatingTexts[i];
            ft.life -= dt;
            ft.y += ft.vy * dt;

            if (ft.life <= 0) {
                this.floatingTexts.splice(i, 1);
                continue;
            }

            ctx.globalAlpha = Math.max(0, ft.life);
            ctx.font = ft.isCrit ? 'bold 18px sans-serif' : '14px sans-serif';
            ctx.fillStyle = ft.color;
            ctx.textAlign = 'center';
            ctx.fillText(ft.text, ft.x, ft.y);
        }

        ctx.restore();
    }
}
""")

    # 11. src/graphics/Renderer2D.js
    write_file("src/graphics/Renderer2D.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Master 2D Multi-Layer Rendering Pipeline
 * @author NovaForge Engineering Team
 * @license MIT
 */

import { Camera2D } from './Camera2D.js';
import { LightingSystem2D } from './LightingSystem2D.js';
import { UIOverlayRenderer } from './UIOverlayRenderer.js';

export class Renderer2D {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.camera = new Camera2D(canvas.width, canvas.height);
        this.lighting = new LightingSystem2D(canvas.width, canvas.height);
        this.ui = new UIOverlayRenderer();
    }

    beginFrame() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    applyWorldTransform() {
        this.camera.apply(this.ctx);
    }

    restoreWorldTransform() {
        this.camera.restore(this.ctx);
    }

    renderLighting() {
        this.lighting.render(this.ctx, this.camera);
    }

    renderUI(dt) {
        this.ui.updateAndRender(this.ctx, dt);
    }
}
""")

    git_commit("feat(graphics): implement 2D canvas renderer, lighting system, camera, and raycast 3D engine")
