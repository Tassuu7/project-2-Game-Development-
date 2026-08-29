/**
 * NovaForge Game Engine & Arcade Studio
 * Rhythm Blaster: SynthWave
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class RhythmGame {
    constructor(engine) {
        this.engine = engine;
        this.lanes = [420, 530, 640, 750];
        this.keys = ['KeyD', 'KeyF', 'KeyJ', 'KeyK'];
        this.notes = [];
        this.spawnTimer = 0;
        this.score = 0;
        this.combo = 0;
        this.maxCombo = 0;
        this.judgment = '';
        this.judgmentTimer = 0;
        this.judgmentColor = '#00e5ff';
    }

    onCreate() {
        this.notes = [];
        this.score = 0;
        this.combo = 0;
        this.maxCombo = 0;
        this.judgment = '';
    }

    update(dt) {
        this.spawnTimer += dt;
        if (this.spawnTimer > 0.38) {
            this.spawnTimer = 0;
            const laneIndex = Math.floor(Math.random() * 4);
            this.notes.push({
                lane: laneIndex,
                y: 40,
                speed: 480,
                hit: false
            });
        }

        if (this.judgmentTimer > 0) this.judgmentTimer -= dt;

        for (let i = this.notes.length - 1; i >= 0; i--) {
            const n = this.notes[i];
            n.y += n.speed * dt;

            if (n.y > 690) {
                if (!n.hit) {
                    this.combo = 0;
                    this.judgment = 'MISS';
                    this.judgmentColor = '#ff0055';
                    this.judgmentTimer = 0.5;
                }
                this.notes.splice(i, 1);
            }
        }

        const input = this.engine.input;
        for (let l = 0; l < 4; l++) {
            if (input.isKeyJustPressed(this.keys[l])) {
                for (const n of this.notes) {
                    if (n.lane === l && !n.hit) {
                        const dist = Math.abs(n.y - 600);
                        if (dist < 70) {
                            n.hit = true;
                            this.combo++;
                            if (this.combo > this.maxCombo) this.maxCombo = this.combo;

                            if (dist < 25) {
                                this.judgment = 'PERFECT!';
                                this.judgmentColor = '#ffe600';
                                this.score += 300 * Math.min(4, this.combo);
                            } else {
                                this.judgment = 'GREAT!';
                                this.judgmentColor = '#00e5ff';
                                this.score += 150 * Math.min(4, this.combo);
                            }
                            this.judgmentTimer = 0.5;
                            break;
                        }
                    }
                }
            }
        }
    }

    render(ctx) {
        ctx.fillStyle = '#04030a';
        ctx.fillRect(0, 0, 1280, 720);

        for (let l = 0; l < 4; l++) {
            ctx.fillStyle = l % 2 === 0 ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.05)';
            ctx.fillRect(this.lanes[l] - 45, 0, 90, 720);

            ctx.strokeStyle = '#00e5ff';
            ctx.lineWidth = 3;
            ctx.strokeRect(this.lanes[l] - 40, 570, 80, 60);

            ctx.fillStyle = '#8e8eb2';
            ctx.font = 'bold 22px monospace';
            ctx.textAlign = 'center';
            ctx.fillText(this.keys[l].replace('Key', ''), this.lanes[l], 610);
        }

        for (const n of this.notes) {
            if (!n.hit) {
                ctx.fillStyle = ['#ff0055', '#00e5ff', '#ffe600', '#39ff14'][n.lane];
                ctx.fillRect(this.lanes[n.lane] - 35, n.y - 15, 70, 30);
                ctx.strokeStyle = '#fff';
                ctx.strokeRect(this.lanes[n.lane] - 35, n.y - 15, 70, 30);
            }
        }

        if (this.judgmentTimer > 0) {
            ctx.textAlign = 'center';
            ctx.fillStyle = this.judgmentColor;
            ctx.font = 'bold 36px monospace';
            ctx.fillText(this.judgment, 585, 480);
        }

        ctx.textAlign = 'left';
        ctx.fillStyle = '#ff0077';
        ctx.font = 'bold 22px monospace';
        ctx.fillText(`SCORE: ${this.score}`, 30, 45);
        ctx.fillStyle = '#00e5ff';
        ctx.fillText(`COMBO: ${this.combo}x (MAX: ${this.maxCombo})`, 30, 75);
    }
}
