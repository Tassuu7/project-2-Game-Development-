# -*- coding: utf-8 -*-
from scripts.code_gen_lib import write_file

def build_partA():
    # 1. src/audio/AudioContextManager.js
    write_file("src/audio/AudioContextManager.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Web Audio API Master Audio Context & Bus Routing Node
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class AudioContextManager {
    constructor() {
        this.ctx = null;
        this.masterGain = null;
        this.sfxGain = null;
        this.bgmGain = null;
        this.isUnlocked = false;

        this.masterVolume = 0.8;
        this.sfxVolume = 0.9;
        this.bgmVolume = 0.65;
    }

    init() {
        if (this.ctx) return;
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) {
            console.warn('[AudioContextManager] Web Audio API not supported.');
            return;
        }

        this.ctx = new AudioCtx();

        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.masterVolume, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);

        this.sfxGain = this.ctx.createGain();
        this.sfxGain.gain.setValueAtTime(this.sfxVolume, this.ctx.currentTime);
        this.sfxGain.connect(this.masterGain);

        this.bgmGain = this.ctx.createGain();
        this.bgmGain.gain.setValueAtTime(this.bgmVolume, this.ctx.currentTime);
        this.bgmGain.connect(this.masterGain);

        this._setupUnlockListener();
    }

    _setupUnlockListener() {
        const unlock = () => {
            if (this.ctx && this.ctx.state === 'suspended') {
                this.ctx.resume().then(() => {
                    this.isUnlocked = true;
                });
            } else {
                this.isUnlocked = true;
            }
            window.removeEventListener('click', unlock);
            window.removeEventListener('keydown', unlock);
            window.removeEventListener('touchstart', unlock);
        };

        window.addEventListener('click', unlock);
        window.addEventListener('keydown', unlock);
        window.addEventListener('touchstart', unlock);
    }

    setMasterVolume(volume) {
        this.masterVolume = Math.max(0, Math.min(1, volume));
        if (this.masterGain && this.ctx) {
            this.masterGain.gain.setValueAtTime(this.masterVolume, this.ctx.currentTime);
        }
    }

    setSFXVolume(volume) {
        this.sfxVolume = Math.max(0, Math.min(1, volume));
        if (this.sfxGain && this.ctx) {
            this.sfxGain.gain.setValueAtTime(this.sfxVolume, this.ctx.currentTime);
        }
    }

    setBGMVolume(volume) {
        this.bgmVolume = Math.max(0, Math.min(1, volume));
        if (this.bgmGain && this.ctx) {
            this.bgmGain.gain.setValueAtTime(this.bgmVolume, this.ctx.currentTime);
        }
    }
}
""")

    # 2. src/audio/SoundFXSynthesizer.js
    write_file("src/audio/SoundFXSynthesizer.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Real-Time Programmatic Sound FX Synthesizer with ADSR Envelopes
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
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
""")

    # 3. src/audio/ChiptuneMusicTracker.js
    write_file("src/audio/ChiptuneMusicTracker.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * 4-Channel Multi-Track Retro Chiptune Music Synthesizer
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
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
""")
