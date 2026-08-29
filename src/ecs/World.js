/**
 * NovaForge Game Engine & Arcade Studio
 * Master ECS World, Entity Registry, System Pipeline & Query Cache
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Entity } from './Entity.js';

export class World {
    constructor() {
        this.nextEntityId = 1;
        this.entities = new Map();
        this.systems = [];
        this.queryCache = new Map();
        this.entitiesToDestroy = [];
        this.isUpdating = false;
    }

    createEntity(tag = 'default') {
        const entity = new Entity(this.nextEntityId++, this);
        entity.tag = tag;
        this.entities.set(entity.id, entity);
        this._invalidateCache();
        return entity;
    }

    destroyEntity(entity) {
        if (this.isUpdating) {
            this.entitiesToDestroy.push(entity);
        } else {
            this._removeEntityImmediate(entity);
        }
    }

    _removeEntityImmediate(entity) {
        if (this.entities.has(entity.id)) {
            for (const child of entity.children) {
                this._removeEntityImmediate(child);
            }
            if (entity.parent) {
                entity.parent.removeChild(entity);
            }
            this.entities.delete(entity.id);
            this._invalidateCache();
        }
    }

    addSystem(systemInstance) {
        this.systems.push(systemInstance);
        this.systems.sort((a, b) => a.priority - b.priority);
        systemInstance.init();
        return systemInstance;
    }

    query(componentTypeIds) {
        const cacheKey = componentTypeIds.slice().sort().join('|');
        if (this.queryCache.has(cacheKey)) {
            return this.queryCache.get(cacheKey);
        }

        const matched = [];
        for (const entity of this.entities.values()) {
            if (!entity.active) continue;
            let match = true;
            for (const typeId of componentTypeIds) {
                if (!entity.hasComponent(typeId)) {
                    match = false;
                    break;
                }
            }
            if (match) {
                matched.push(entity);
            }
        }

        this.queryCache.set(cacheKey, matched);
        return matched;
    }

    _invalidateCache() {
        this.queryCache.clear();
    }

    _onEntityComponentAdded(entity, comp) {
        this._invalidateCache();
    }

    _onEntityComponentRemoved(entity, comp) {
        this._invalidateCache();
    }

    update(dt) {
        this.isUpdating = true;
        for (const system of this.systems) {
            if (system.enabled) {
                system.update(dt);
            }
        }
        this.isUpdating = false;

        // Process pending destroys
        if (this.entitiesToDestroy.length > 0) {
            for (const e of this.entitiesToDestroy) {
                this._removeEntityImmediate(e);
            }
            this.entitiesToDestroy = [];
        }
    }

    clear() {
        this.entities.clear();
        this.queryCache.clear();
        this.entitiesToDestroy = [];
    }
}
