/**
 * NovaForge Game Engine & Arcade Studio
 * Base ECS System Framework
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class System {
    constructor(world, priority = 0) {
        this.world = world;
        this.priority = priority;
        this.enabled = true;
        this.requiredComponents = [];
    }

    init() {}

    update(dt) {
        if (!this.enabled) return;
        const entities = this.world.query(this.requiredComponents);
        for (const entity of entities) {
            this.processEntity(entity, dt);
        }
    }

    processEntity(entity, dt) {}

    destroy() {}
}
