/**
 * NovaForge Game Engine & Arcade Studio
 * Base ECS Component & Registration System
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

let nextComponentTypeId = 1;

export class Component {
    constructor() {
        this.entity = null;
        this.enabled = true;
    }

    static register(name) {
        const typeId = `COMP_${name.toUpperCase()}_${nextComponentTypeId++}`;
        const bitFlag = 1n << BigInt(nextComponentTypeId % 62);
        return { typeId, bitFlag };
    }

    reset() {
        this.entity = null;
        this.enabled = true;
    }
}
