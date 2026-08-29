/**
 * NovaForge Game Engine & Arcade Studio
 * Dungeon Raycaster 3D - Classic 3D FPS Dungeon Crawler
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Raycast3DRenderer } from '../../graphics/Raycast3DRenderer.js';

export class RaycastGame {
    constructor(engine) {
        this.engine = engine;
        this.renderer = new Raycast3DRenderer(engine.canvas, 1280, 720);
        this.player = {
            x: 2.5,
            y: 2.5,
            angle: 0,
            speed: 3.0,
            rotSpeed: 2.5
        };
        this.mapWidth = 10;
        this.mapHeight = 10;
        this.map = new Uint8Array([
            1,1,1,1,1,1,1,1,1,1,
            1,0,0,0,0,0,2,0,0,1,
            1,0,1,0,0,0,2,0,0,1,
            1,0,1,0,0,0,0,0,0,1,
            1,0,0,0,3,3,0,0,0,1,
            1,0,0,0,3,3,0,0,0,1,
            1,0,2,0,0,0,0,1,0,1,
            1,0,2,0,0,0,0,1,0,1,
            1,0,0,0,0,0,0,0,0,1,
            1,1,1,1,1,1,1,1,1,1
        ]);
        this.sprites = [
            { x: 5.5, y: 2.5, color: '#00e5ff', distance: 0 },
            { x: 7.5, y: 7.5, color: '#ff0055', distance: 0 }
        ];
    }

    onCreate() {}

    update(dt) {
        const input = this.engine.input;
        const p = this.player;

        // Rotation
        if (input.isActionDown('move_left') || input.isKeyDown('ArrowLeft') || input.isKeyDown('KeyA')) {
            p.angle -= p.rotSpeed * dt;
        }
        if (input.isActionDown('move_right') || input.isKeyDown('ArrowRight') || input.isKeyDown('KeyD')) {
            p.angle += p.rotSpeed * dt;
        }

        // Forward / backward
        let moveStep = 0;
        if (input.isActionDown('move_up') || input.isKeyDown('ArrowUp') || input.isKeyDown('KeyW')) {
            moveStep = p.speed * dt;
        }
        if (input.isActionDown('move_down') || input.isKeyDown('ArrowDown') || input.isKeyDown('KeyS')) {
            moveStep = -p.speed * dt;
        }

        if (moveStep !== 0) {
            const nextX = p.x + Math.cos(p.angle) * moveStep;
            const nextY = p.y + Math.sin(p.angle) * moveStep;

            if (this.map[Math.floor(p.y) * this.mapWidth + Math.floor(nextX)] === 0) p.x = nextX;
            if (this.map[Math.floor(nextY) * this.mapWidth + Math.floor(p.x)] === 0) p.y = nextY;
        }
    }

    render(ctx) {
        this.renderer.render(ctx, this.map, this.mapWidth, this.mapHeight, this.player, this.sprites);

        // Minimap HUD
        ctx.save();
        ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
        ctx.fillRect(20, 20, 100, 100);
        ctx.fillStyle = '#00e5ff';
        ctx.fillRect(20 + this.player.x * 10 - 2, 20 + this.player.y * 10 - 2, 4, 4);
        ctx.restore();
    }
}
