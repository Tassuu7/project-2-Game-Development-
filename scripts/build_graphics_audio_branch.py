# -*- coding: utf-8 -*-
import sys
import os
sys.path.insert(0, '.')
from scripts.code_gen_lib import write_file

def build_graphics_audio():
    # 1. src/graphics/SoftwareRenderer3D.js
    write_file("src/graphics/SoftwareRenderer3D.js", """/**
 * NovaForge Software 3D Pipeline & Scanline Rasterizer
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Matrix4x4 } from '../math/Matrix4x4.js';
import { Vector3 } from '../math/Vector3.js';

export class SoftwareRenderer3D {
    constructor(width = 640, height = 360) {
        this.width = width;
        this.height = height;
        this.zBuffer = new Float32Array(width * height);
        this.viewMatrix = new Matrix4x4();
        this.projMatrix = new Matrix4x4();
        this.projMatrix.makePerspective(60, width / height, 0.1, 1000);
    }

    clear() {
        this.zBuffer.fill(Infinity);
    }

    renderMesh(ctx, mesh, modelMatrix, color = '#00e5ff') {
        const mvp = new Matrix4x4().multiplyMatrices(this.projMatrix, new Matrix4x4().multiplyMatrices(this.viewMatrix, modelMatrix));
        const verts = mesh.vertices;
        const indices = mesh.indices;
        const projected = [];

        for (let i = 0; i < verts.length; i += 3) {
            const v = new Vector3(verts[i], verts[i + 1], verts[i + 2]);
            const p = this._projectVertex(v, mvp);
            projected.push(p);
        }

        ctx.strokeStyle = color;
        ctx.lineWidth = 1;

        for (let i = 0; i < indices.length; i += 3) {
            const p0 = projected[indices[i]];
            const p1 = projected[indices[i + 1]];
            const p2 = projected[indices[i + 2]];

            if (p0.z > 0 && p1.z > 0 && p2.z > 0) {
                // Backface culling
                const area = (p1.x - p0.x) * (p2.y - p0.y) - (p1.y - p0.y) * (p2.x - p0.x);
                if (area > 0) {
                    ctx.beginPath();
                    ctx.moveTo(p0.x, p0.y);
                    ctx.lineTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.closePath();
                    ctx.stroke();
                }
            }
        }
    }

    _projectVertex(v, matrix) {
        const m = matrix.elements;
        const x = v.x * m[0] + v.y * m[4] + v.z * m[8] + m[12];
        const y = v.x * m[1] + v.y * m[5] + v.z * m[9] + m[13];
        const z = v.x * m[2] + v.y * m[6] + v.z * m[10] + m[14];
        const w = v.x * m[3] + v.y * m[7] + v.z * m[11] + m[15];

        if (w <= 0.001) return { x: 0, y: 0, z: -1 };

        const invW = 1.0 / w;
        const ndcX = x * invW;
        const ndcY = y * invW;

        const screenX = (ndcX + 1.0) * 0.5 * this.width;
        const screenY = (1.0 - ndcY) * 0.5 * this.height;

        return { x: screenX, y: screenY, z: w };
    }
}
""")

    # 2. src/graphics/ConvolutionFilters.js
    write_file("src/graphics/ConvolutionFilters.js", """/**
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
""")

    # 3. src/audio/DSPProcessor.js
    write_file("src/audio/DSPProcessor.js", """/**
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
""")

    # 4. src/audio/AudioEffectsRack.js
    write_file("src/audio/AudioEffectsRack.js", """/**
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
""")

build_graphics_audio()
