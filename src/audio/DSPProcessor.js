/**
 * NovaForge Digital Signal Processing (DSP) & IIR Filter Bank
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class DSPProcessor {
    constructor(audioContext) {
        this.ctx = audioContext;
    }

    createBiquadFilter(type = 'lowpass', freq = 1000, Q = 1.0, gain = 0) {
        const filter = this.ctx.createBiquadFilter();
        filter.type = type;
        filter.frequency.setValueAtTime(freq, this.ctx.currentTime);
        filter.Q.setValueAtTime(Q, this.ctx.currentTime);
        filter.gain.setValueAtTime(gain, this.ctx.currentTime);
        return filter;
    }

    createSyntheticReverb(duration = 2.0, decay = 2.0) {
        const sampleRate = this.ctx.sampleRate;
        const length = sampleRate * duration;
        const impulse = this.ctx.createBuffer(2, length, sampleRate);
        const left = impulse.getChannelData(0);
        const right = impulse.getChannelData(1);

        for (let i = 0; i < length; i++) {
            const factor = Math.pow(1 - i / length, decay);
            left[i] = (Math.random() * 2 - 1) * factor;
            right[i] = (Math.random() * 2 - 1) * factor;
        }

        const convolver = this.ctx.createConvolver();
        convolver.buffer = impulse;
        return convolver;
    }
}
