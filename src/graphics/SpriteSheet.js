/**
 * NovaForge Game Engine & Arcade Studio
 * Sprite Atlas Grid Slicing & Texture Frame Manager
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class SpriteSheet {
    constructor(imageOrCanvas, frameWidth = 32, frameHeight = 32) {
        this.source = imageOrCanvas;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.columns = imageOrCanvas ? Math.floor(imageOrCanvas.width / frameWidth) : 0;
        this.rows = imageOrCanvas ? Math.floor(imageOrCanvas.height / frameHeight) : 0;
        this.totalFrames = this.columns * this.rows;
    }

    drawFrame(ctx, frameIndex, destX, destY, flipX = false, flipY = false, scale = 1.0) {
        if (!this.source || frameIndex < 0 || frameIndex >= this.totalFrames) return;

        const col = frameIndex % this.columns;
        const row = Math.floor(frameIndex / this.columns);
        const sx = col * this.frameWidth;
        const sy = row * this.frameHeight;

        ctx.save();
        ctx.translate(destX, destY);
        ctx.scale(flipX ? -scale : scale, flipY ? -scale : scale);

        ctx.drawImage(
            this.source,
            sx, sy, this.frameWidth, this.frameHeight,
            -this.frameWidth * 0.5, -this.frameHeight * 0.5, this.frameWidth, this.frameHeight
        );

        ctx.restore();
    }
}
