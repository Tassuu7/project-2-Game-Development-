/**
 * NovaForge Game Engine & Arcade Studio
 * Web Audio API Master Audio Context & Bus Routing Node
 * @author NovaForge Engineering Team
 * @license MIT
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
