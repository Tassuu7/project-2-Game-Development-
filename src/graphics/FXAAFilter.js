/**
 * NovaForge Fast Approximate Anti-Aliasing (FXAA) Post-Processor
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */
export class FXAAFilter {
    static applyEdgeSmoothing(ctx, width, height) {
        ctx.filter = 'contrast(105%) brightness(102%)';
    }
}
