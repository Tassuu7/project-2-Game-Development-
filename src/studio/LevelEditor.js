/**
 * NovaForge Game Engine & Arcade Studio
 * In-Browser Interactive Level Creator & Object Placer
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class LevelEditor {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.gridSize = 32;
        this.entities = [];
        this.selectedTool = 'place';
        this.selectedEntity = 'enemy';
        this.history = [];
    }

    addEntity(type, x, y) {
        const snapX = Math.floor(x / this.gridSize) * this.gridSize;
        const snapY = Math.floor(y / this.gridSize) * this.gridSize;
        const entity = { id: Date.now(), type, x: snapX, y: snapY, width: 32, height: 32 };
        this.entities.push(entity);
        return entity;
    }

    render(ctx) {
        // Draw grid
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        for (let x = 0; x < this.canvas.width; x += this.gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, this.canvas.height);
            ctx.stroke();
        }
        for (let y = 0; y < this.canvas.height; y += this.gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(this.canvas.width, y);
            ctx.stroke();
        }

        // Draw entities
        for (const ent of this.entities) {
            ctx.fillStyle = ent.type === 'player' ? '#39ff14' : ent.type === 'enemy' ? '#ff0055' : '#ffe600';
            ctx.fillRect(ent.x + 2, ent.y + 2, ent.width - 4, ent.height - 4);
        }
    }

    exportJSON() {
        return JSON.stringify({ gridSize: this.gridSize, entities: this.entities }, null, 2);
    }
}
