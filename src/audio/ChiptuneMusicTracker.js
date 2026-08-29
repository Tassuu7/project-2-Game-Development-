/**
 * NovaForge Game Engine & Arcade Studio
 * 4-Channel Multi-Track Retro Chiptune Music Synthesizer
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class ChiptuneMusicTracker {
    constructor(audioManager) {
        this.audioManager = audioManager;
        this.tempo = 125;
        this.isPlaying = false;
        this.currentStep = 0;
        this.timerId = null;

        this.notes = {
            'C3': 130.81, 'D3': 146.83, 'E3': 164.81, 'F3': 174.61, 'G3': 196.00, 'A3': 220.00, 'B3': 246.94,
            'C4': 261.63, 'D4': 293.66, 'E4': 329.63, 'F4': 349.23, 'G4': 392.00, 'A4': 440.00, 'B4': 493.88,
            'C5': 523.25, 'D5': 587.33, 'E5': 659.25, 'G5': 783.99, 'A5': 880.00
        };

        this.leadPattern = ['C4', 'E4', 'G4', 'C5', 'B4', 'G4', 'E4', 'D4', 'C4', 'E4', 'G4', 'A4', 'G4', 'E4', 'D4', 'C4'];
        this.bassPattern = ['C3', null, 'C3', null, 'G3', null, 'G3', null, 'A3', null, 'A3', null, 'F3', null, 'G3', null];
    }

    start() {
        if (this.isPlaying) return;
        this.isPlaying = true;
        this.currentStep = 0;

        const stepDuration = (60 / this.tempo) / 4 * 1000;
        this.timerId = setInterval(() => this._tick(), stepDuration);
    }

    stop() {
        this.isPlaying = false;
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    _tick() {
        const ctx = this.audioManager.ctx;
        if (!ctx || !this.isPlaying) return;

        const leadNote = this.leadPattern[this.currentStep % this.leadPattern.length];
        const bassNote = this.bassPattern[this.currentStep % this.bassPattern.length];

        if (leadNote && this.notes[leadNote]) {
            this._playTone(this.notes[leadNote], 'square', 0.1, 0.12);
        }

        if (bassNote && this.notes[bassNote]) {
            this._playTone(this.notes[bassNote], 'triangle', 0.18, 0.2);
        }

        this.currentStep++;
    }

    _playTone(freq, type, duration, volume = 0.1) {
        const ctx = this.audioManager.ctx;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        gain.gain.setValueAtTime(volume, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.audioManager.bgmGain || ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + duration);
    }
}
