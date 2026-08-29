/**
 * NovaForge Game Engine & Arcade Studio
 * Chunked Orthogonal & Isometric Tilemap Rendering Engine
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class TilemapRenderer {
    constructor(tileWidth = 32, tileHeight = 32) {
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        this.layers = [];
        this.tileset = null;
    }

    setTileset(spriteSheet) {
        this.tileset = spriteSheet;
    }

    addLayer(name, width, height, data = [], opacity = 1.0, isCollision = false) {
        this.layers.push({
            name,
            width,
            height,
            data: data.length > 0 ? data : new Int32Array(width * height).fill(-1),
            opacity,
            isCollision
        });
        return this.layers[this.layers.length - 1];
    }

    render(ctx, camera) {
        if (!this.tileset) return;

        const viewBounds = {
            minX: camera.position.x - (camera.viewportWidth * 0.5) / camera.zoom,
            minY: camera.position.y - (camera.viewportHeight * 0.5) / camera.zoom,
            maxX: camera.position.x + (camera.viewportWidth * 0.5) / camera.zoom,
            maxY: camera.position.y + (camera.viewportHeight * 0.5) / camera.zoom
        };

        const startCol = Math.max(0, Math.floor(viewBounds.minX / this.tileWidth));
        const endCol = Math.floor(viewBounds.maxX / this.tileWidth) + 1;
        const startRow = Math.max(0, Math.floor(viewBounds.minY / this.tileHeight));
        const endRow = Math.floor(viewBounds.maxY / this.tileHeight) + 1;

        for (const layer of this.layers) {
            ctx.globalAlpha = layer.opacity;

            const maxCol = Math.min(layer.width, endCol);
            const maxRow = Math.min(layer.height, endRow);

            for (let r = startRow; r < maxRow; r++) {
                for (let c = startCol; c < maxCol; c++) {
                    const tileId = layer.data[r * layer.width + c];
                    if (tileId >= 0) {
                        const destX = c * this.tileWidth + this.tileWidth * 0.5;
                        const destY = r * this.tileHeight + this.tileHeight * 0.5;
                        this.tileset.drawFrame(ctx, tileId, destX, destY);
                    }
                }
            }
        }
        ctx.globalAlpha = 1.0;
    }
}
