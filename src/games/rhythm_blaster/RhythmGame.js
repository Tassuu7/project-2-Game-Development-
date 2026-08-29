/**
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
