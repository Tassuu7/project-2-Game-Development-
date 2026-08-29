# -*- coding: utf-8 -*-
from scripts.code_gen_lib import write_file, git_commit

def build_partB():
    # 4. src/audio/ProceduralAudioGenerator.js
    write_file("src/audio/ProceduralAudioGenerator.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Generative Ambient Soundscapes & Atmospheric Audio Generator
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class ProceduralAudioGenerator {
    constructor(audioManager) {
        this.audioManager = audioManager;
        this.ambientNodes = [];
    }

    startSpaceDrone() {
        const ctx = this.audioManager.ctx;
        if (!ctx) return;

        const osc = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        const gain = ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(55, ctx.currentTime); // A1

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(150, ctx.currentTime);

        gain.gain.setValueAtTime(0.08, ctx.currentTime);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioManager.bgmGain || ctx.destination);

        osc.start();
        this.ambientNodes.push({ osc, gain });
    }

    stopAll() {
        for (const node of this.ambientNodes) {
            try {
                node.osc.stop();
            } catch (e) {}
        }
        this.ambientNodes = [];
    }
}
""")

    # 5. src/audio/SpatialAudio2D.js
    write_file("src/audio/SpatialAudio2D.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Positional 2D Spatial Audio with Stereo Panning & Distance Attenuation
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class SpatialAudio2D {
    static calculatePanning(listenerPos, soundPos, maxDistance = 800) {
        const dx = soundPos.x - listenerPos.x;
        const dy = soundPos.y - listenerPos.y;
        const dist = Math.hypot(dx, dy);

        // Pan: -1 (full left) to +1 (full right)
        const pan = Math.max(-1.0, Math.min(1.0, dx / (maxDistance * 0.5)));

        // Volume attenuation: 1.0 (close) to 0.0 (far)
        const volume = Math.max(0.0, Math.min(1.0, 1.0 - (dist / maxDistance)));

        return { pan, volume, dist };
    }
}
""")

    # 6. src/audio/SoundBank.js
    write_file("src/audio/SoundBank.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Master Sound Bank & Preset SFX Dispatcher
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { AudioContextManager } from './AudioContextManager.js';
import { SoundFXSynthesizer } from './SoundFXSynthesizer.js';
import { ChiptuneMusicTracker } from './ChiptuneMusicTracker.js';

export class SoundBank {
    constructor() {
        this.contextManager = new AudioContextManager();
        this.synth = new SoundFXSynthesizer(this.contextManager);
        this.music = new ChiptuneMusicTracker(this.contextManager);
        this.enabled = true;
    }

    init() {
        this.contextManager.init();
    }

    play(soundName) {
        if (!this.enabled) return;
        this.init();

        switch (soundName) {
            case 'laser':
            case 'shoot':
                this.synth.playLaser();
                break;
            case 'explosion':
            case 'bomb':
                this.synth.playExplosion();
                break;
            case 'jump':
                this.synth.playJump();
                break;
            case 'coin':
            case 'pickup':
                this.synth.playCoin();
                break;
            case 'hit':
            case 'damage':
                this.synth.playHit();
                break;
            default:
                break;
        }
    }
}
""")

    git_commit("feat(audio): build Web Audio procedural synthesizer, sound bank, and chiptune tracker")
