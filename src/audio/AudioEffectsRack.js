/**
 * NovaForge Master Audio Effects Rack (Delay, Chorus, Distortion, Bitcrusher)
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class AudioEffectsRack {
    constructor(audioContext) {
        this.ctx = audioContext;
    }

    createDelay(time = 0.25, feedbackAmount = 0.4) {
        const delay = this.ctx.createDelay();
        delay.delayTime.setValueAtTime(time, this.ctx.currentTime);

        const feedback = this.ctx.createGain();
        feedback.gain.setValueAtTime(feedbackAmount, this.ctx.currentTime);

        delay.connect(feedback);
        feedback.connect(delay);

        return { input: delay, output: delay, feedbackNode: feedback };
    }

    createDistortion(amount = 50) {
        const waveShaper = this.ctx.createWaveShaper();
        const n_samples = 44100;
        const curve = new Float32Array(n_samples);
        const deg = Math.PI / 180;
        const k = typeof amount === 'number' ? amount : 50;

        for (let i = 0; i < n_samples; ++i) {
            const x = (i * 2) / n_samples - 1;
            curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
        }

        waveShaper.curve = curve;
        waveShaper.oversample = '4x';
        return waveShaper;
    }
}
