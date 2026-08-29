/**
 * NovaForge Game Engine & Arcade Studio
 * Dungeon Raycaster 3D - Enhanced First-Person 3D Dungeon Crawler
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
            speed: 3.5,
            rotSpeed: 2.8,
            health: 100,
            ammo: 50,
            score: 0,
            isShooting: 0
        };
        this.mapWidth = 12;
        this.mapHeight = 12;
        this.map = new Uint8Array([
            1,1,1,1,1,1,1,1,1,1,1,1,
            1,0,0,0,0,0,2,0,0,0,0,1,
            1,0,1,1,0,0,2,0,1,1,0,1,
            1,0,1,0,0,0,0,0,0,1,0,1,
            1,0,0,0,3,3,0,3,0,0,0,1,
            1,0,0,0,3,0,0,3,0,0,0,1,
            1,0,2,0,0,0,0,0,0,2,0,1,
            1,0,2,0,1,0,0,1,0,2,0,1,
            1,0,0,0,1,0,0,1,0,0,0,1,
            1,0,1,0,0,0,0,0,0,1,0,1,
            1,0,0,0,0,0,0,0,0,0,0,1,
            1,1,1,1,1,1,1,1,1,1,1,1
        ]);
        this.sprites = [
            { x: 5.5, y: 3.5, color: '#00e5ff', distance: 0, health: 40, type: 'demon' },
            { x: 8.5, y: 7.5, color: '#ff0055', distance: 0, health: 60, type: 'undead_knight' },
            { x: 3.5, y: 9.5, color: '#ffe600', distance: 0, health: 30, type: 'ammo_pack' }
        ];
    }

    onCreate() {
        this.player.health = 100;
        this.player.ammo = 50;
        this.player.score = 0;
        this.player.x = 2.5;
        this.player.y = 2.5;
    }

    update(dt) {
        const input = this.engine.input;
        const p = this.player;

        if (p.isShooting > 0) p.isShooting -= dt;

        // Rotation
        if (input.isActionDown('move_left') || input.isKeyDown('ArrowLeft') || input.isKeyDown('KeyA')) {
            p.angle -= p.rotSpeed * dt;
        }
        if (input.isActionDown('move_right') || input.isKeyDown('ArrowRight') || input.isKeyDown('KeyD')) {
            p.angle += p.rotSpeed * dt;
        }

        // Movement forward/back
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

        // Shooting (Space / Mouse click)
        if ((input.isKeyJustPressed('Space') || input.mouse.justPressed) && p.ammo > 0 && p.isShooting <= 0) {
            p.ammo--;
            p.isShooting = 0.15;
            if (this.engine.soundBank) this.engine.soundBank.play('laser');

            // Hitscan check against sprites in front
            for (let i = this.sprites.length - 1; i >= 0; i--) {
                const s = this.sprites[i];
                if (s.type === 'ammo_pack') continue;

                const dx = s.x - p.x;
                const dy = s.y - p.y;
                const angleToSpr = Math.atan2(dy, dx);
                let diffAngle = angleToSpr - p.angle;
                while (diffAngle < -Math.PI) diffAngle += Math.PI * 2;
                while (diffAngle > Math.PI) diffAngle -= Math.PI * 2;

                if (Math.abs(diffAngle) < 0.25 && Math.hypot(dx, dy) < 8.0) {
                    s.health -= 35;
                    if (s.health <= 0) {
                        p.score += 500;
                        this.sprites.splice(i, 1);
                    }
                    break;
                }
            }
        }

        // Ammo pickup check
        for (let i = this.sprites.length - 1; i >= 0; i--) {
            const s = this.sprites[i];
            if (s.type === 'ammo_pack' && Math.hypot(p.x - s.x, p.y - s.y) < 1.0) {
                p.ammo += 25;
                this.sprites.splice(i, 1);
            }
        }
    }

    render(ctx) {
        this.renderer.render(ctx, this.map, this.mapWidth, this.mapHeight, this.player, this.sprites);

        // Gun in viewport
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        const gunX = 640 + Math.sin(Date.now() * 0.006) * 10;
        const gunY = 620;

        // Gun barrel
        ctx.fillStyle = '#1f2937';
        ctx.fillRect(gunX - 25, gunY - 140, 50, 140);
        ctx.fillStyle = '#374151';
        ctx.fillRect(gunX - 15, gunY - 160, 30, 80);

        // Muzzle Flash
        if (this.player.isShooting > 0) {
            ctx.fillStyle = '#ffe600';
            ctx.beginPath();
            ctx.arc(gunX, gunY - 170, 35, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#ff0055';
            ctx.beginPath();
            ctx.arc(gunX, gunY - 170, 18, 0, Math.PI * 2);
            ctx.fill();
        }

        // Minimap
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(20, 20, 144, 144);
        ctx.strokeStyle = '#00e5ff';
        ctx.strokeRect(20, 20, 144, 144);

        for (let r = 0; r < this.mapHeight; r++) {
            for (let c = 0; c < this.mapWidth; c++) {
                if (this.map[r * this.mapWidth + c] > 0) {
                    ctx.fillStyle = '#475569';
                    ctx.fillRect(20 + c * 12, 20 + r * 12, 12, 12);
                }
            }
        }

        // Player marker on minimap
        ctx.fillStyle = '#00e5ff';
        ctx.fillRect(20 + this.player.x * 12 - 2, 20 + this.player.y * 12 - 2, 5, 5);

        // HUD
        ctx.textAlign = 'left';
        ctx.fillStyle = '#00e5ff';
        ctx.font = 'bold 20px monospace';
        ctx.fillText(`HEALTH: ${this.player.health}   AMMO: ${this.player.ammo}   SCORE: ${this.player.score}`, 180, 50);

        ctx.restore();
    }
}
