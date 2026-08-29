/**
 * NovaForge Procedural Texture Synthesis Engine
 * Generates high-resolution textures on-the-fly using mathematical noise and cellular algorithms
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { PerlinNoise } from '../math/PerlinNoise.js';
import { VoronoiNoise } from '../math/Voronoi.js';

export class ProceduralTextures {
    constructor() {
        this.perlin = new PerlinNoise(42);
        this.voronoi = new VoronoiNoise(1337);
    }

    generateBrickWall(width = 256, height = 256) {

        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#8b2500';
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = '#681c00';
        const brickH = 16;
        const brickW = 32;
        ctx.strokeStyle = '#3a0e00';
        ctx.lineWidth = 2;
        for (let y = 0; y < height; y += brickH) {
            const shift = (Math.floor(y / brickH) % 2) * (brickW / 2);
            for (let x = -brickW; x < width + brickW; x += brickW) {
                const rx = x + shift;
                ctx.strokeRect(rx, y, brickW, brickH);
            }
        }
        return canvas;
        
    }

    generateSciFiPanel(width = 256, height = 256) {

        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#1a1d2e';
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = '#00e5ff';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(8, 8, width - 16, height - 16);
        ctx.fillStyle = '#262c45';
        ctx.fillRect(20, 20, width - 40, height - 40);
        ctx.fillStyle = '#00e5ff';
        ctx.fillRect(30, 30, 10, 4);
        ctx.fillRect(30, 40, 10, 4);
        return canvas;
        
    }

    generateMarble(width = 256, height = 256) {

        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const imgData = ctx.createImageData(width, height);
        const data = imgData.data;
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const n = this.perlin.fractal2D(x * 0.02, y * 0.02, 4);
                const val = Math.sin((x + y) * 0.05 + n * 5.0);
                const c = Math.floor((val + 1) * 0.5 * 255);
                const idx = (y * width + x) * 4;
                data[idx] = c;
                data[idx + 1] = c;
                data[idx + 2] = Math.min(255, c + 20);
                data[idx + 3] = 255;
            }
        }
        ctx.putImageData(imgData, 0, 0);
        return canvas;
        
    }

    generateWoodGrain(width = 256, height = 256) {

        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const imgData = ctx.createImageData(width, height);
        const data = imgData.data;
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const n = this.perlin.noise2D(x * 0.05, y * 0.01);
                const dist = Math.sqrt((x - width/2)**2 + (y - height/2)**2) * 0.1 + n * 2.0;
                const ring = (dist - Math.floor(dist));
                const r = Math.floor(139 + ring * 50);
                const g = Math.floor(69 + ring * 30);
                const b = Math.floor(19 + ring * 10);
                const idx = (y * width + x) * 4;
                data[idx] = r; data[idx + 1] = g; data[idx + 2] = b; data[idx + 3] = 255;
            }
        }
        ctx.putImageData(imgData, 0, 0);
        return canvas;
        
    }

    generateMetalPlating(width = 256, height = 256) {

        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#3a4454';
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = '#5a6980';
        ctx.lineWidth = 2;
        ctx.strokeRect(4, 4, width - 8, height - 8);
        ctx.fillStyle = '#1e2430';
        // Rivets
        for (let x = 12; x < width; x += 32) {
            ctx.beginPath(); ctx.arc(x, 12, 3, 0, Math.PI*2); ctx.fill();
            ctx.beginPath(); ctx.arc(x, height - 12, 3, 0, Math.PI*2); ctx.fill();
        }
        return canvas;
        
    }

    generatePresetVariant1(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (1 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 01', 25, 40);
        return canvas;
    }

    generatePresetVariant2(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (2 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 02', 25, 40);
        return canvas;
    }

    generatePresetVariant3(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (3 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 03', 25, 40);
        return canvas;
    }

    generatePresetVariant4(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (4 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 04', 25, 40);
        return canvas;
    }

    generatePresetVariant5(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (5 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 05', 25, 40);
        return canvas;
    }

    generatePresetVariant6(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (6 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 06', 25, 40);
        return canvas;
    }

    generatePresetVariant7(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (7 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 07', 25, 40);
        return canvas;
    }

    generatePresetVariant8(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (8 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 08', 25, 40);
        return canvas;
    }

    generatePresetVariant9(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (9 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 09', 25, 40);
        return canvas;
    }

    generatePresetVariant10(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (10 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 10', 25, 40);
        return canvas;
    }

    generatePresetVariant11(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (11 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 11', 25, 40);
        return canvas;
    }

    generatePresetVariant12(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (12 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 12', 25, 40);
        return canvas;
    }

    generatePresetVariant13(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (13 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 13', 25, 40);
        return canvas;
    }

    generatePresetVariant14(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (14 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 14', 25, 40);
        return canvas;
    }

    generatePresetVariant15(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (15 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 15', 25, 40);
        return canvas;
    }

    generatePresetVariant16(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (16 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 16', 25, 40);
        return canvas;
    }

    generatePresetVariant17(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (17 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 17', 25, 40);
        return canvas;
    }

    generatePresetVariant18(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (18 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 18', 25, 40);
        return canvas;
    }

    generatePresetVariant19(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (19 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 19', 25, 40);
        return canvas;
    }

    generatePresetVariant20(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (20 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 20', 25, 40);
        return canvas;
    }

    generatePresetVariant21(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (21 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 21', 25, 40);
        return canvas;
    }

    generatePresetVariant22(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (22 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 22', 25, 40);
        return canvas;
    }

    generatePresetVariant23(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (23 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 23', 25, 40);
        return canvas;
    }

    generatePresetVariant24(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (24 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 24', 25, 40);
        return canvas;
    }

    generatePresetVariant25(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (25 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 25', 25, 40);
        return canvas;
    }

    generatePresetVariant26(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (26 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 26', 25, 40);
        return canvas;
    }

    generatePresetVariant27(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (27 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 27', 25, 40);
        return canvas;
    }

    generatePresetVariant28(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (28 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 28', 25, 40);
        return canvas;
    }

    generatePresetVariant29(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (29 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 29', 25, 40);
        return canvas;
    }

    generatePresetVariant30(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (30 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 30', 25, 40);
        return canvas;
    }

    generatePresetVariant31(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (31 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 31', 25, 40);
        return canvas;
    }

    generatePresetVariant32(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (32 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 32', 25, 40);
        return canvas;
    }

    generatePresetVariant33(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (33 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 33', 25, 40);
        return canvas;
    }

    generatePresetVariant34(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (34 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 34', 25, 40);
        return canvas;
    }

    generatePresetVariant35(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (35 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 35', 25, 40);
        return canvas;
    }

    generatePresetVariant36(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (36 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 36', 25, 40);
        return canvas;
    }

    generatePresetVariant37(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (37 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 37', 25, 40);
        return canvas;
    }

    generatePresetVariant38(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (38 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 38', 25, 40);
        return canvas;
    }

    generatePresetVariant39(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (39 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 39', 25, 40);
        return canvas;
    }

    generatePresetVariant40(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (40 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 40', 25, 40);
        return canvas;
    }

    generatePresetVariant41(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (41 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 41', 25, 40);
        return canvas;
    }

    generatePresetVariant42(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (42 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 42', 25, 40);
        return canvas;
    }

    generatePresetVariant43(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (43 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 43', 25, 40);
        return canvas;
    }

    generatePresetVariant44(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (44 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 44', 25, 40);
        return canvas;
    }

    generatePresetVariant45(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (45 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 45', 25, 40);
        return canvas;
    }

    generatePresetVariant46(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (46 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 46', 25, 40);
        return canvas;
    }

    generatePresetVariant47(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (47 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 47', 25, 40);
        return canvas;
    }

    generatePresetVariant48(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (48 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 48', 25, 40);
        return canvas;
    }

    generatePresetVariant49(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (49 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 49', 25, 40);
        return canvas;
    }

    generatePresetVariant50(width = 256, height = 256) {
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        const hue = (50 * 37) % 360;
        ctx.fillStyle = `hsl(${hue}, 60%, 15%)`;
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(10, 10, width - 20, height - 20);
        ctx.fillStyle = `hsl(${hue}, 70%, 35%)`;
        ctx.font = 'bold 16px monospace';
        ctx.fillText('MODULE 50', 25, 40);
        return canvas;
    }

}
