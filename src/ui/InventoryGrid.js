/**
 * NovaForge Game Engine & Arcade Studio
 * Drag-and-Drop Equipment & Item Inventory Grid
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class InventoryGrid {
    constructor(slotsCount = 20) {
        this.slots = new Array(slotsCount).fill(null);
    }

    addItem(item) {
        for (let i = 0; i < this.slots.length; i++) {
            if (this.slots[i] === null) {
                this.slots[i] = item;
                return true;
            }
        }
        return false;
    }

    removeItem(index) {
        const item = this.slots[index];
        this.slots[index] = null;
        return item;
    }
}
