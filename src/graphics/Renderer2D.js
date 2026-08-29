/**
 * NovaForge Game Engine & Arcade Studio
 * Master 2D Multi-Layer Rendering Pipeline
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Camera2D } from './Camera2D.js';
import { LightingSystem2D } from './LightingSystem2D.js';
import { UIOverlayRenderer } from './UIOverlayRenderer.js';

export class Renderer2D {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.camera = new Camera2D(canvas.width, canvas.height);
        this.lighting = new LightingSystem2D(canvas.width, canvas.height);
        this.ui = new UIOverlayRenderer();
    }

    beginFrame() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    applyWorldTransform() {
        this.camera.apply(this.ctx);
    }

    restoreWorldTransform() {
        this.camera.restore(this.ctx);
    }

    renderLighting() {
        this.lighting.render(this.ctx, this.camera);
    }

    renderUI(dt) {
        this.ui.updateAndRender(this.ctx, dt);
    }
}
