/**
 * NovaForge 2D Image Processing & Convolution Matrix Filters
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class ConvolutionFilters {
    static applyKernel(imageData, kernel, divisor = 1, bias = 0) {
        const src = imageData.data;
        const w = imageData.width;
        const h = imageData.height;
        const output = new Uint8ClampedArray(src.length);
        const kSize = Math.sqrt(kernel.length);
        const halfK = Math.floor(kSize / 2);

        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                let r = 0, g = 0, b = 0;
                for (let ky = 0; ky < kSize; ky++) {
                    for (let kx = 0; kx < kSize; kx++) {
                        const px = Math.min(w - 1, Math.max(0, x + kx - halfK));
                        const py = Math.min(h - 1, Math.max(0, y + ky - halfK));
                        const idx = (py * w + px) * 4;
                        const weight = kernel[ky * kSize + kx];

                        r += src[idx] * weight;
                        g += src[idx + 1] * weight;
                        b += src[idx + 2] * weight;
                    }
                }

                const outIdx = (y * w + x) * 4;
                output[outIdx] = Math.min(255, Math.max(0, (r / divisor) + bias));
                output[outIdx + 1] = Math.min(255, Math.max(0, (g / divisor) + bias));
                output[outIdx + 2] = Math.min(255, Math.max(0, (b / divisor) + bias));
                output[outIdx + 3] = src[outIdx + 3];
            }
        }

        for (let i = 0; i < src.length; i++) src[i] = output[i];
        return imageData;
    }

    static GaussianBlur(imageData) {
        const kernel = [
            1, 2, 1,
            2, 4, 2,
            1, 2, 1
        ];
        return ConvolutionFilters.applyKernel(imageData, kernel, 16);
    }

    static Sharpen(imageData) {
        const kernel = [
             0, -1,  0,
            -1,  5, -1,
             0, -1,  0
        ];
        return ConvolutionFilters.applyKernel(imageData, kernel, 1);
    }

    static EdgeDetect(imageData) {
        const kernel = [
            -1, -1, -1,
            -1,  8, -1,
            -1, -1, -1
        ];
        return ConvolutionFilters.applyKernel(imageData, kernel, 1);
    }
}
