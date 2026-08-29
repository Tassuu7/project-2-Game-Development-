/**
 * NovaForge Game Engine & Arcade Studio
 * Master Sound Bank & Preset SFX Dispatcher
 * @author NovaForge Engineering Team
 * @license MIT
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
