/**
 * NovaForge Game Engine & Arcade Studio
 * Chrono Puzzle: Time Shift
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class PuzzleGame {
    constructor(engine) {
        this.engine = engine;
        this.gridSize = 52;
        this.currentLevelIndex = 0;
        this.history = [];
        this.moves = 0;
        this.levels = [
            {
                player: { x: 2, y: 2 },
                blocks: [{ x: 3, y: 2 }, { x: 4, y: 3 }],
                targets: [{ x: 6, y: 2 }, { x: 6, y: 3 }]
            },
            {
                player: { x: 1, y: 1 },
                blocks: [{ x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 3 }],
                targets: [{ x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }]
            }
        ];
        this.loadLevel(0);
    }

    loadLevel(index) {
        this.currentLevelIndex = index % this.levels.length;
        const lvl = this.levels[this.currentLevelIndex];
        this.playerX = lvl.player.x;
        this.playerY = lvl.player.y;
        this.blocks = JSON.parse(JSON.stringify(lvl.blocks));
        this.targets = JSON.parse(JSON.stringify(lvl.targets));
        this.history = [];
        this.moves = 0;
    }

    move(dx, dy) {
        this.history.push({
            px: this.playerX,
            py: this.playerY,
            blocks: JSON.parse(JSON.stringify(this.blocks))
        });

        const nextPX = this.playerX + dx;
        const nextPY = this.playerY + dy;

        const block = this.blocks.find(b => b.x === nextPX && b.y === nextPY);
        if (block) {
            const nextBX = block.x + dx;
            const nextBY = block.y + dy;
            const blocked = this.blocks.some(b => b.x === nextBX && b.y === nextBY);
            if (!blocked && nextBX >= 1 && nextBX <= 8 && nextBY >= 1 && nextBY <= 8) {
                block.x = nextBX;
                block.y = nextBY;
                this.playerX = nextPX;
                this.playerY = nextPY;
                this.moves++;
            }
        } else if (nextPX >= 1 && nextPX <= 8 && nextPY >= 1 && nextPY <= 8) {
            this.playerX = nextPX;
            this.playerY = nextPY;
            this.moves++;
        }

        const allSolved = this.targets.every(t => this.blocks.some(b => b.x === t.x && b.y === t.y));
        if (allSolved) {
            setTimeout(() => this.loadLevel(this.currentLevelIndex + 1), 500);
        }
    }

    rewind() {
        if (this.history.length > 0) {
            const last = this.history.pop();
            this.playerX = last.px;
            this.playerY = last.py;
            this.blocks = last.blocks;
            this.moves = Math.max(0, this.moves - 1);
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
        ctx.fillStyle = '#0c071e';
        ctx.fillRect(0, 0, 1280, 720);

        const offsetX = 380;
        const offsetY = 120;

        ctx.strokeStyle = '#6366f1';
        ctx.lineWidth = 2;
        ctx.strokeRect(offsetX + this.gridSize, offsetY + this.gridSize, this.gridSize * 8, this.gridSize * 8);

        for (const t of this.targets) {
            ctx.fillStyle = 'rgba(57, 255, 20, 0.35)';
            ctx.fillRect(offsetX + t.x * this.gridSize + 4, offsetY + t.y * this.gridSize + 4, this.gridSize - 8, this.gridSize - 8);
            ctx.strokeStyle = '#39ff14';
            ctx.strokeRect(offsetX + t.x * this.gridSize + 4, offsetY + t.y * this.gridSize + 4, this.gridSize - 8, this.gridSize - 8);
        }

        for (const b of this.blocks) {
            const onTarget = this.targets.some(t => t.x === b.x && t.y === b.y);
            ctx.fillStyle = onTarget ? '#39ff14' : '#00e5ff';
            ctx.fillRect(offsetX + b.x * this.gridSize + 4, offsetY + b.y * this.gridSize + 4, this.gridSize - 8, this.gridSize - 8);
            ctx.strokeStyle = '#fff';
            ctx.strokeRect(offsetX + b.x * this.gridSize + 4, offsetY + b.y * this.gridSize + 4, this.gridSize - 8, this.gridSize - 8);
        }

        ctx.fillStyle = '#ff0055';
        ctx.fillRect(offsetX + this.playerX * this.gridSize + 6, offsetY + this.playerY * this.gridSize + 6, this.gridSize - 12, this.gridSize - 12);

        ctx.fillStyle = '#ffe600';
        ctx.font = 'bold 20px monospace';
        ctx.fillText(`CHAMBER: ${this.currentLevelIndex + 1}   MOVES: ${this.moves}`, 30, 40);
        ctx.fillStyle = '#8e8eb2';
        ctx.font = '12px monospace';
        ctx.fillText('[WASD/Arrows] Push Blocks onto Green Targets   [Z/R] Rewind Time', 30, 70);
    }
}
