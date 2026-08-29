/**
 * NovaForge 2D Canvas Post-Processing Shaders & Color Matrix Algorithms
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class Shaders2D {
    static applyColorGrade(imageData, rMult = 1.0, gMult = 1.0, bMult = 1.0) {
        const d = imageData.data;
        for (let i = 0; i < d.length; i += 4) {
            d[i] = Math.min(255, d[i] * rMult);
            d[i + 1] = Math.min(255, d[i + 1] * gMult);
            d[i + 2] = Math.min(255, d[i + 2] * bMult);
        }
        return imageData;
    }

    static applyGrayscale(imageData) {
        const d = imageData.data;
        for (let i = 0; i < d.length; i += 4) {
            const avg = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
            d[i] = avg;
            d[i + 1] = avg;
            d[i + 2] = avg;
        }
        return imageData;
    }

    static applyThreshold(imageData, threshold = 128) {
        const d = imageData.data;
        for (let i = 0; i < d.length; i += 4) {
            const val = (d[i] + d[i + 1] + d[i + 2]) / 3 >= threshold ? 255 : 0;
            d[i] = val;
            d[i + 1] = val;
            d[i + 2] = val;
        }
        return imageData;
    }
}
