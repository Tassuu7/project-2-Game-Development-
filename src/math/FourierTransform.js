/**
 * NovaForge Discrete & Fast Fourier Transform (FFT) for Audio Analysis
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class FastFourierTransform {
    constructor(bufferSize = 1024) {
        this.bufferSize = bufferSize;
        this.cosTable = new Float32Array(bufferSize / 2);
        this.sinTable = new Float32Array(bufferSize / 2);
        for (let i = 0; i < bufferSize / 2; i++) {
            this.cosTable[i] = Math.cos(-2 * Math.PI * i / bufferSize);
            this.sinTable[i] = Math.sin(-2 * Math.PI * i / bufferSize);
        }
    }

    forward(inputReal, outReal, outImag) {
        const n = this.bufferSize;
        for (let k = 0; k < n / 2; k++) {
            let sumReal = 0.0;
            let sumImag = 0.0;
            for (let t = 0; t < n; t++) {
                const angle = (2 * Math.PI * t * k) / n;
                sumReal += inputReal[t] * Math.cos(angle);
                sumImag -= inputReal[t] * Math.sin(angle);
            }
            outReal[k] = sumReal;
            outImag[k] = sumImag;
        }
    }
}
