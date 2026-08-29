/**
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
