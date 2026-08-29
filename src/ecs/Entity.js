/**
 * NovaForge Game Engine & Arcade Studio
 * Entity Component System - Entity Representation & Bitmask Signature
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class Entity {
    constructor(id, world) {
        this.id = id;
        this.world = world;
        this.active = true;
        this.tag = 'default';
        this.layer = 0;
        this.parent = null;
        this.children = [];
        this.components = new Map();
        this.componentMask = 0n;
    }

    addComponent(component) {
        if (!component || !component.typeId) {
            throw new Error(`[Entity ${this.id}] Cannot add invalid component`);
        }
        this.components.set(component.typeId, component);
        component.entity = this;
        this.world._onEntityComponentAdded(this, component);
        return this;
    }

    getComponent(typeId) {
        return this.components.get(typeId) || null;
    }

    hasComponent(typeId) {
        return this.components.has(typeId);
    }

    removeComponent(typeId) {
        if (this.components.has(typeId)) {
            const comp = this.components.get(typeId);
            this.components.delete(typeId);
            comp.entity = null;
            this.world._onEntityComponentRemoved(this, comp);
            return true;
        }
        return false;
    }

    addChild(childEntity) {
        if (childEntity && !this.children.includes(childEntity)) {
            if (childEntity.parent) {
                childEntity.parent.removeChild(childEntity);
            }
            childEntity.parent = this;
            this.children.push(childEntity);
        }
        return this;
    }

    removeChild(childEntity) {
        const index = this.children.indexOf(childEntity);
        if (index !== -1) {
            childEntity.parent = null;
            this.children.splice(index, 1);
        }
        return this;
    }

    destroy() {
        this.world.destroyEntity(this);
    }
}
