/**
 * NovaForge 2-Corner & 4-Edge Wang Tile Auto-Tiling Engine (Blob Map Resolution)
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class AutoTileWangEngine {
    constructor(tileWidth = 32, tileHeight = 32) {
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        // 16-Tile Bitmask lookup table (North=1, East=2, South=4, West=8)
        this.bitmaskLookup = new Int32Array([
            0,  // 0000: Isolated
            1,  // 0001: North only
            2,  // 0010: East only
            3,  // 0011: North-East corner
            4,  // 0100: South only
            5,  // 0101: Vertical corridor
            6,  // 0110: South-East corner
            7,  // 0111: T-Junction East
            8,  // 1000: West only
            9,  // 1001: North-West corner
            10, // 1010: Horizontal corridor
            11, // 1011: T-Junction North
            12, // 1100: South-West corner
            13, // 1101: T-Junction West
            14, // 1110: T-Junction South
            15  // 1111: Center 4-way solid
        ]);
    }

    calculateBitmask(grid, width, height, x, y, solidValue = 1) {
        if (grid[y * width + x] !== solidValue) return -1;

        let mask = 0;
        if (y > 0 && grid[(y - 1) * width + x] === solidValue) mask |= 1;          // North
        if (x < width - 1 && grid[y * width + (x + 1)] === solidValue) mask |= 2;   // East
        if (y < height - 1 && grid[(y + 1) * width + x] === solidValue) mask |= 4; // South
        if (x > 0 && grid[y * width + (x - 1)] === solidValue) mask |= 8;          // West

        return this.bitmaskLookup[mask];
    }
}
