/**
 * NovaForge ECS Standard Systems Implementation Suite
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { System } from './System.js';
import { Transform2D, Velocity, Acceleration, HealthComp, LifetimeComp, SpriteComp, AnimatedSpriteComp, AudioSourceComp, WeaponComp, AIControllerComp } from './Components.js';

export class MovementSystem extends System {
    constructor(world, priority = 0) {
        super(world, priority);
        this.requiredComponents = [Transform2D.TYPE, Velocity.TYPE];
    }
    processEntity(entity, dt) {

        const trans = entity.getComponent(Transform2D.TYPE);
        const vel = entity.getComponent(Velocity.TYPE);
        trans.x += vel.x * dt;
        trans.y += vel.y * dt;
        
    }
}

export class AccelerationSystem extends System {
    constructor(world, priority = 0) {
        super(world, priority);
        this.requiredComponents = [Velocity.TYPE, Acceleration.TYPE];
    }
    processEntity(entity, dt) {

        const vel = entity.getComponent(Velocity.TYPE);
        const acc = entity.getComponent(Acceleration.TYPE);
        vel.x += acc.x * dt;
        vel.y += acc.y * dt;
        
    }
}

export class HealthRegenSystem extends System {
    constructor(world, priority = 0) {
        super(world, priority);
        this.requiredComponents = [HealthComp.TYPE];
    }
    processEntity(entity, dt) {

        const hp = entity.getComponent(HealthComp.TYPE);
        if (hp.current < hp.max && hp.regenRate > 0) {
            hp.current = Math.min(hp.max, hp.current + hp.regenRate * dt);
        }
        
    }
}

export class LifetimeSystem extends System {
    constructor(world, priority = 0) {
        super(world, priority);
        this.requiredComponents = [LifetimeComp.TYPE];
    }
    processEntity(entity, dt) {

        const life = entity.getComponent(LifetimeComp.TYPE);
        life.remaining -= dt;
        if (life.remaining <= 0) {
            entity.destroy();
        }
        
    }
}

export class AnimationSystem extends System {
    constructor(world, priority = 0) {
        super(world, priority);
        this.requiredComponents = [AnimatedSpriteComp.TYPE];
    }
    processEntity(entity, dt) {

        const anim = entity.getComponent(AnimatedSpriteComp.TYPE);
        if (!anim.playing) return;
        anim.frameTimer += dt;
        if (anim.frameTimer >= (1.0 / anim.fps)) {
            anim.frameTimer = 0;
            anim.frameIndex++;
        }
        
    }
}

export class WeaponCooldownSystem extends System {
    constructor(world, priority = 0) {
        super(world, priority);
        this.requiredComponents = [WeaponComp.TYPE];
    }
    processEntity(entity, dt) {

        const weapon = entity.getComponent(WeaponComp.TYPE);
        if (weapon.currentCooldown > 0) {
            weapon.currentCooldown = Math.max(0, weapon.currentCooldown - dt);
        }
        
    }
}

export class AISteeringSystem extends System {
    constructor(world, priority = 0) {
        super(world, priority);
        this.requiredComponents = [Transform2D.TYPE, Velocity.TYPE, AIControllerComp.TYPE];
    }
    processEntity(entity, dt) {

        const trans = entity.getComponent(Transform2D.TYPE);
        const vel = entity.getComponent(Velocity.TYPE);
        const ai = entity.getComponent(AIControllerComp.TYPE);
        ai.patrolTimer += dt;
        if (ai.patrolTimer > 3.0) {
            ai.patrolTimer = 0;
            vel.x = (Math.random() - 0.5) * 80;
            vel.y = (Math.random() - 0.5) * 80;
        }
        
    }
}

