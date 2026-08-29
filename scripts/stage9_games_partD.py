# -*- coding: utf-8 -*-
from scripts.code_gen_lib import write_file, git_commit

def build_partD():
    # 7. Chrono Puzzle
    write_file("src/games/chrono_puzzle/PuzzleGame.js", """/**
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
""")

    # 8. Rhythm Blaster
    write_file("src/games/rhythm_blaster/RhythmGame.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Rhythm Blaster: SynthWave - Beat Slasher Game
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class RhythmGame {
    constructor(engine) {
        this.engine = engine;
        this.lanes = [440, 540, 640, 740];
        this.keys = ['KeyD', 'KeyF', 'KeyJ', 'KeyK'];
        this.notes = [];
        this.spawnTimer = 0;
        this.score = 0;
        this.combo = 0;
    }

    onCreate() {
        this.notes = [];
        this.score = 0;
        this.combo = 0;
    }

    update(dt) {
        this.spawnTimer += dt;
        if (this.spawnTimer > 0.4) {
            this.spawnTimer = 0;
            const laneIndex = Math.floor(Math.random() * 4);
            this.notes.push({
                lane: laneIndex,
                y: 50,
                speed: 400,
                hit: false
            });
        }

        // Move notes
        for (let i = this.notes.length - 1; i >= 0; i--) {
            const n = this.notes[i];
            n.y += n.speed * dt;

            if (n.y > 680) {
                if (!n.hit) this.combo = 0;
                this.notes.splice(i, 1);
            }
        }

        // Input check
        const input = this.engine.input;
        for (let l = 0; l < 4; l++) {
            if (input.isKeyJustPressed(this.keys[l])) {
                for (const n of this.notes) {
                    if (n.lane === l && !n.hit && Math.abs(n.y - 600) < 50) {
                        n.hit = true;
                        this.combo++;
                        this.score += 100 * Math.min(4, this.combo);
                        break;
                    }
                }
            }
        }
    }

    render(ctx) {
        ctx.fillStyle = '#050510';
        ctx.fillRect(0, 0, 1280, 720);

        // Draw Highway Lanes
        for (let l = 0; l < 4; l++) {
            ctx.fillStyle = l % 2 === 0 ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.06)';
            ctx.fillRect(this.lanes[l] - 40, 0, 80, 720);

            // Hit zone targets
            ctx.strokeStyle = '#00e5ff';
            ctx.lineWidth = 3;
            ctx.strokeRect(this.lanes[l] - 35, 570, 70, 60);

            // Key labels
            ctx.fillStyle = '#8e8eb2';
            ctx.font = 'bold 20px monospace';
            ctx.textAlign = 'center';
            ctx.fillText(this.keys[l].replace('Key', ''), this.lanes[l], 610);
        }

        // Draw falling notes
        for (const n of this.notes) {
            if (!n.hit) {
                ctx.fillStyle = ['#ff0055', '#00e5ff', '#39ff14', '#ffe600'][n.lane];
                ctx.fillRect(this.lanes[n.lane] - 30, n.y - 15, 60, 30);
            }
        }

        // HUD
        ctx.textAlign = 'left';
        ctx.fillStyle = '#00e5ff';
        ctx.font = 'bold 22px monospace';
        ctx.fillText(`SCORE: ${this.score}`, 30, 50);
        ctx.fillText(`COMBO: ${this.combo}x`, 30, 85);
    }
}
""")

    git_commit("feat(games): implement 8 complete playable arcade, RPG, platformer, 3D raycast, and puzzle games")
