/**
 * NovaForge Game Engine & Arcade Studio
 * Chrono Puzzle - Sokoban Tile Logic with Temporal Rewind
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class PuzzleGame {
    constructor(engine) {
        this.engine = engine;
        this.gridSize = 48;
        this.playerX = 2;
        this.playerY = 2;
        this.blocks = [
            { x: 3, y: 2 },
            { x: 4, y: 3 }
        ];
        this.targets = [
            { x: 6, y: 2 },
            { x: 6, y: 3 }
        ];
        this.history = [];
    }

    onCreate() {
        this.history = [];
    }

    move(dx, dy) {
        // Record history for time-shift rewind
        this.history.push({
            px: this.playerX,
            py: this.playerY,
            blocks: JSON.parse(JSON.stringify(this.blocks))
        });

        const nextPX = this.playerX + dx;
        const nextPY = this.playerY + dy;

        // Check block push
        const block = this.blocks.find(b => b.x === nextPX && b.y === nextPY);
        if (block) {
            const nextBX = block.x + dx;
            const nextBY = block.y + dy;
            const isBlocked = this.blocks.some(b => b.x === nextBX && b.y === nextBY);
            if (!isBlocked && nextBX >= 1 && nextBX <= 8 && nextBY >= 1 && nextBY <= 8) {
                block.x = nextBX;
                block.y = nextBY;
                this.playerX = nextPX;
                this.playerY = nextPY;
            }
        } else if (nextPX >= 1 && nextPX <= 8 && nextPY >= 1 && nextPY <= 8) {
            this.playerX = nextPX;
            this.playerY = nextPY;
        }
    }

    rewind() {
        if (this.history.length > 0) {
            const lastState = this.history.pop();
            this.playerX = lastState.px;
            this.playerY = lastState.py;
            this.blocks = lastState.blocks;
        }
    }

    update(dt) {
        const input = this.engine.input;
        if (input.isKeyJustPressed('KeyW') || input.isKeyJustPressed('ArrowUp')) this.move(0, -1);
        if (input.isKeyJustPressed('KeyS') || input.isKeyJustPressed('ArrowDown')) this.move(0, 1);
        if (input.isKeyJustPressed('KeyA') || input.isKeyJustPressed('ArrowLeft')) this.move(-1, 0);
        if (input.isKeyJustPressed('KeyD') || input.isKeyJustPressed('ArrowRight')) this.move(1, 0);
        if (input.isKeyJustPressed('KeyZ') || input.isKeyJustPressed('KeyR')) this.rewind();
    }

    render(ctx) {
        ctx.fillStyle = '#1e1b4b';
        ctx.fillRect(0, 0, 1280, 720);

        const offsetX = 400;
        const offsetY = 150;

        // Draw grid
        ctx.strokeStyle = '#4338ca';
        ctx.strokeRect(offsetX + this.gridSize, offsetY + this.gridSize, this.gridSize * 8, this.gridSize * 8);

        // Draw targets
        for (const t of this.targets) {
            ctx.fillStyle = 'rgba(57, 255, 20, 0.4)';
            ctx.fillRect(offsetX + t.x * this.gridSize + 4, offsetY + t.y * this.gridSize + 4, this.gridSize - 8, this.gridSize - 8);
        }

        // Draw blocks
        for (const b of this.blocks) {
            ctx.fillStyle = '#00e5ff';
            ctx.fillRect(offsetX + b.x * this.gridSize + 4, offsetY + b.y * this.gridSize + 4, this.gridSize - 8, this.gridSize - 8);
        }

        // Draw player
        ctx.fillStyle = '#ff0055';
        ctx.fillRect(offsetX + this.playerX * this.gridSize + 6, offsetY + this.playerY * this.gridSize + 6, this.gridSize - 12, this.gridSize - 12);

        // HUD
        ctx.fillStyle = '#ffffff';
        ctx.font = '16px monospace';
        ctx.fillText('CHRONO PUZZLE - Push cyan blocks onto green targets. Press [Z] to Rewind Time.', 30, 40);
    }
}
