# -*- coding: utf-8 -*-
import sys
import os
sys.path.insert(0, '.')
from scripts.code_gen_lib import write_file

def build_ecs():
    os.makedirs("src/ecs", exist_ok=True)

    # 1. src/ecs/Entity.js
    write_file("src/ecs/Entity.js", """/**
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
""")

    # 2. src/ecs/Component.js
    write_file("src/ecs/Component.js", """/**
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
""")

    # 3. src/ecs/Components.js
    comp_lines = [
        "/**",
        " * NovaForge ECS Component Library (Standard Built-in Components)",
        " * @author NovaForge Engineering Team",
        " * @license Proprietary - All Rights Reserved",
        " */",
        "",
        "import { Component } from './Component.js';",
        "import { Vector2 } from '../math/Vector2.js';",
        ""
    ]

    component_definitions = [
        ("Transform2D", [("x", "0"), ("y", "0"), ("rotation", "0"), ("scaleX", "1"), ("scaleY", "1")]),
        ("Transform3D", [("x", "0"), ("y", "0"), ("z", "0"), ("rotX", "0"), ("rotY", "0"), ("rotZ", "0"), ("scale", "1")]),
        ("Velocity", [("x", "0"), ("y", "0"), ("maxSpeed", "500")]),
        ("Acceleration", [("x", "0"), ("y", "0")]),
        ("ForceAccumulator", [("fx", "0"), ("fy", "0"), ("torque", "0")]),
        ("MassData", [("mass", "1.0"), ("invMass", "1.0"), ("inertia", "500"), ("invInertia", "0.002")]),
        ("CircleColliderComp", [("radius", "16"), ("offsetX", "0"), ("offsetY", "0"), ("isTrigger", "false")]),
        ("BoxColliderComp", [("width", "32"), ("height", "32"), ("offsetX", "0"), ("offsetY", "0"), ("isTrigger", "false")]),
        ("PolygonColliderComp", [("vertices", "[]"), ("isTrigger", "false")]),
        ("SpriteComp", [("textureId", "''"), ("width", "32"), ("height", "32"), ("color", "'#ffffff'"), ("flipX", "false"), ("flipY", "false"), ("layer", "0")]),
        ("AnimatedSpriteComp", [("currentAnim", "'idle'"), ("frameIndex", "0"), ("frameTimer", "0"), ("fps", "12"), ("loop", "true"), ("playing", "true")]),
        ("CameraFollowComp", [("target", "null"), ("smoothFactor", "0.1"), ("leadDistance", "50"), ("deadzoneX", "20"), ("deadzoneY", "20")]),
        ("PointLightComp", [("radius", "200"), ("color", "'#ffffff'"), ("intensity", "1.0"), ("flicker", "false"), ("flickerSpeed", "5.0")]),
        ("SpotLightComp", [("radius", "300"), ("direction", "0"), ("angle", "Math.PI * 0.25"), ("color", "'#ffffff'"), ("intensity", "1.0")]),
        ("AudioSourceComp", [("soundId", "''"), ("volume", "1.0"), ("loop", "false"), ("spatial", "true"), ("range", "600")]),
        ("HealthComp", [("current", "100"), ("max", "100"), ("regenRate", "1.0"), ("invulnerable", "false"), ("invulnerableTimer", "0")]),
        ("ManaComp", [("current", "50"), ("max", "50"), ("regenRate", "2.0")]),
        ("StaminaComp", [("current", "100"), ("max", "100"), ("regenRate", "15.0"), ("exhausted", "false")]),
        ("InventoryComp", [("slots", "new Array(20).fill(null)"), ("gold", "100"), ("capacity", "20")]),
        ("WeaponComp", [("weaponId", "'plasma_gun'"), ("damage", "25"), ("cooldown", "0.2"), ("currentCooldown", "0"), ("range", "400"), ("bulletSpeed", "600")]),
        ("AIControllerComp", [("state", "'IDLE'"), ("targetEntity", "null"), ("aggroRadius", "250"), ("attackRadius", "50"), ("leashRadius", "600"), ("patrolTimer", "0")]),
        ("PathFollowerComp", [("waypoints", "[]"), ("currentWaypointIndex", "0"), ("speed", "120"), ("reachedTarget", "false")]),
        ("TeamComp", [("teamId", "1"), ("faction", "'players'")]),
        ("LifetimeComp", [("remaining", "2.0"), ("maxLifetime", "2.0"), ("fadeOut", "true")]),
        ("ParticleEmitterComp", [("presetId", "'sparks'"), ("rate", "30"), ("active", "true"), ("timer", "0")]),
        ("SpatialTagComp", [("gridX", "0"), ("gridY", "0"), ("chunkId", "'0:0'")]),
        ("RenderLayerComp", [("order", "0"), ("visible", "true"), ("blendMode", "'source-over'"), ("opacity", "1.0")]),
        ("ShadowCasterComp", [("shadowRadius", "16"), ("shadowOpacity", "0.5"), ("heightOffset", "10")]),
        ("InputReceiverComp", [("enabled", "true"), ("playerIndex", "0")]),
        ("DialogueTriggerComp", [("dialogueId", "'welcome'"), ("interactRadius", "60"), ("promptText", "'[E] Talk'")]),
        ("QuestTargetComp", [("questId", "'q1'"), ("objectiveType", "'kill'"), ("requiredCount", "1")]),
        ("BuffContainerComp", [("buffs", "[]")]),
        ("StatusEffectComp", [("effects", "new Map()")]),
        ("FloatingCombatTextComp", [("texts", "[]")]),
        ("LevelDataComp", [("level", "1"), ("experience", "0"), ("nextLevelExp", "100"), ("skillPoints", "0")]),
        ("Rigidbody2DComp", [("bodyType", "'dynamic'"), ("restitution", "0.3"), ("friction", "0.4"), ("linearDamping", "0.02"), ("angularDamping", "0.05")]),
        ("CollisionResponseComp", [("collidingEntities", "new Set()"), ("contactNormals", "[]")]),
        ("JointAttachmentComp", [("connectedEntity", "null"), ("anchorX", "0"), ("anchorY", "0"), ("restLength", "50")]),
        ("NavAgentComp", [("desiredVelocity", "new Vector2()"), ("avoidancePriority", "1"), ("maxAcceleration", "400")]),
        ("VisibilityMaskComp", [("revealed", "false"), ("visionRadius", "300")])
    ]

    for name, fields in component_definitions:
        comp_lines.append(f"export class {name} extends Component {{")
        comp_lines.append(f"    static TYPE = Component.register('{name}').typeId;")
        comp_lines.append("    constructor(config = {}) {")
        comp_lines.append("        super();")
        comp_lines.append(f"        this.typeId = {name}.TYPE;")
        for f_name, f_def in fields:
            comp_lines.append(f"        this.{f_name} = config.{f_name} !== undefined ? config.{f_name} : {f_def};")
        comp_lines.append("    }")
        comp_lines.append("}\n")

    write_file("src/ecs/Components.js", "\n".join(comp_lines) + "\n")

    # 4. src/ecs/System.js
    write_file("src/ecs/System.js", """/**
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
""")

    # 5. src/ecs/Systems.js
    sys_lines = [
        "/**",
        " * NovaForge ECS Standard Systems Implementation Suite",
        " * @author NovaForge Engineering Team",
        " * @license Proprietary - All Rights Reserved",
        " */",
        "",
        "import { System } from './System.js';",
        "import { Transform2D, Velocity, Acceleration, HealthComp, LifetimeComp, SpriteComp, AnimatedSpriteComp, AudioSourceComp, WeaponComp, AIControllerComp } from './Components.js';",
        ""
    ]

    systems_def = [
        ("MovementSystem", ["Transform2D.TYPE", "Velocity.TYPE"], """
        const trans = entity.getComponent(Transform2D.TYPE);
        const vel = entity.getComponent(Velocity.TYPE);
        trans.x += vel.x * dt;
        trans.y += vel.y * dt;
        """),
        ("AccelerationSystem", ["Velocity.TYPE", "Acceleration.TYPE"], """
        const vel = entity.getComponent(Velocity.TYPE);
        const acc = entity.getComponent(Acceleration.TYPE);
        vel.x += acc.x * dt;
        vel.y += acc.y * dt;
        """),
        ("HealthRegenSystem", ["HealthComp.TYPE"], """
        const hp = entity.getComponent(HealthComp.TYPE);
        if (hp.current < hp.max && hp.regenRate > 0) {
            hp.current = Math.min(hp.max, hp.current + hp.regenRate * dt);
        }
        """),
        ("LifetimeSystem", ["LifetimeComp.TYPE"], """
        const life = entity.getComponent(LifetimeComp.TYPE);
        life.remaining -= dt;
        if (life.remaining <= 0) {
            entity.destroy();
        }
        """),
        ("AnimationSystem", ["AnimatedSpriteComp.TYPE"], """
        const anim = entity.getComponent(AnimatedSpriteComp.TYPE);
        if (!anim.playing) return;
        anim.frameTimer += dt;
        if (anim.frameTimer >= (1.0 / anim.fps)) {
            anim.frameTimer = 0;
            anim.frameIndex++;
        }
        """),
        ("WeaponCooldownSystem", ["WeaponComp.TYPE"], """
        const weapon = entity.getComponent(WeaponComp.TYPE);
        if (weapon.currentCooldown > 0) {
            weapon.currentCooldown = Math.max(0, weapon.currentCooldown - dt);
        }
        """),
        ("AISteeringSystem", ["Transform2D.TYPE", "Velocity.TYPE", "AIControllerComp.TYPE"], """
        const trans = entity.getComponent(Transform2D.TYPE);
        const vel = entity.getComponent(Velocity.TYPE);
        const ai = entity.getComponent(AIControllerComp.TYPE);
        ai.patrolTimer += dt;
        if (ai.patrolTimer > 3.0) {
            ai.patrolTimer = 0;
            vel.x = (Math.random() - 0.5) * 80;
            vel.y = (Math.random() - 0.5) * 80;
        }
        """)
    ]

    for sys_name, req_comps, sys_body in systems_def:
        req_str = ", ".join(req_comps)
        sys_lines.append(f"export class {sys_name} extends System {{")
        sys_lines.append("    constructor(world, priority = 0) {")
        sys_lines.append("        super(world, priority);")
        sys_lines.append(f"        this.requiredComponents = [{req_str}];")
        sys_lines.append("    }")
        sys_lines.append("    processEntity(entity, dt) {")
        sys_lines.append(sys_body)
        sys_lines.append("    }")
        sys_lines.append("}\n")

    write_file("src/ecs/Systems.js", "\n".join(sys_lines) + "\n")

    # 6. src/ecs/World.js
    write_file("src/ecs/World.js", """/**
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
""")

build_ecs()
