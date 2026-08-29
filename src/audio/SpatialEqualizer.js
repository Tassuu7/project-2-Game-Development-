/**
 * NovaForge Master 10-Band Parametric Equalizer & Room Impulse Acoustic Matrix
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class SpatialEqualizer {
    constructor(audioContext) {
        this.ctx = audioContext;
        this.frequencies = [31, 62, 125, 250, 500, 1000, 2000, 4000, 8000, 16000];
        this.bands = [];

        if (this.ctx) {
            for (const freq of this.frequencies) {
                const filter = this.ctx.createBiquadFilter();
                filter.type = 'peaking';
                filter.frequency.value = freq;
                filter.Q.value = 1.4;
                filter.gain.value = 0;
                this.bands.push(filter);
            }

            for (let i = 0; i < this.bands.length - 1; i++) {
                this.bands[i].connect(this.bands[i + 1]);
            }
        }
    }

    setBandGain(index, gainDb) {
        if (this.bands[index]) {
            this.bands[index].gain.setValueAtTime(gainDb, this.ctx.currentTime);
        }
    }

    applyPreset(presetName) {
        const presets = {
            bass_boost: [6, 5, 4, 2, 0, 0, 0, 0, 1, 2],
            treble_boost: [-1, -1, 0, 0, 1, 2, 4, 6, 7, 8],
            arcade_vibrant: [3, 2, 0, -1, 0, 2, 4, 5, 3, 2],
            retro_crt: [-6, -4, 0, 2, 3, 2, 0, -3, -8, -12]
        };

        const gains = presets[presetName];
        if (gains) {
            for (let i = 0; i < gains.length; i++) {
                this.setBandGain(i, gains[i]);
            }
        }
    }
}
