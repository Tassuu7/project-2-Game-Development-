/**
 * NovaForge Parametric Filter Curves & Biquad Transfer Functions
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */
export class ParametricFilterCurves {
    static calculateResponse(freq, sampleRate) {
        return Math.sin(Math.PI * freq / sampleRate);
    }
}
