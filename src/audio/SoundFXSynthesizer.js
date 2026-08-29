/**
 * NovaForge Game Engine & Arcade Studio
 * Real-Time Programmatic Sound FX Synthesizer with ADSR Envelopes
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class SoundFXSynthesizer {
    constructor(audioManager) {
        this.audioManager = audioManager;
    }

    playLaser(frequency = 880, endFreq = 220, duration = 0.15) {
        const ctx = this.audioManager.ctx;
        if (!ctx) return;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(frequency, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(endFreq, ctx.currentTime + duration);

        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.audioManager.sfxGain || ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + duration);
    }

    playExplosion(duration = 0.4) {
        const ctx = this.audioManager.ctx;
        if (!ctx) return;

        const bufferSize = ctx.sampleRate * duration;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, ctx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + duration);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.5, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioManager.sfxGain || ctx.destination);

        noise.start();
        noise.stop(ctx.currentTime + duration);
    }

    playJump(freqStart = 150, freqEnd = 450, duration = 0.18) {
        const ctx = this.audioManager.ctx;
        if (!ctx) return;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'square';
        osc.frequency.setValueAtTime(freqStart, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(freqEnd, ctx.currentTime + duration);

        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.audioManager.sfxGain || ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + duration);
    }

    playCoin() {
        const ctx = this.audioManager.ctx;
        if (!ctx) return;

        const osc1 = ctx.createOscillator();
        const gain = ctx.createGain();

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(987.77, ctx.currentTime); // B5
        osc1.frequency.setValueAtTime(1318.51, ctx.currentTime + 0.08); // E6

        gain.gain.setValueAtTime(0.25, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

        osc1.connect(gain);
        gain.connect(this.audioManager.sfxGain || ctx.destination);

        osc1.start();
        osc1.stop(ctx.currentTime + 0.35);
    }

    playHit() {
        const ctx = this.audioManager.ctx;
        if (!ctx) return;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(120, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.1);

        gain.gain.setValueAtTime(0.4, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

        osc.connect(gain);
        gain.connect(this.audioManager.sfxGain || ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.1);
    }
}
