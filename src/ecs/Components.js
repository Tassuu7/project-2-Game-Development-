/**
 * NovaForge ECS Component Library (Standard Built-in Components)
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Component } from './Component.js';
import { Vector2 } from '../math/Vector2.js';

export class Transform2D extends Component {
    static TYPE = Component.register('Transform2D').typeId;
    constructor(config = {}) {
        super();
        this.typeId = Transform2D.TYPE;
        this.x = config.x !== undefined ? config.x : 0;
        this.y = config.y !== undefined ? config.y : 0;
        this.rotation = config.rotation !== undefined ? config.rotation : 0;
        this.scaleX = config.scaleX !== undefined ? config.scaleX : 1;
        this.scaleY = config.scaleY !== undefined ? config.scaleY : 1;
    }
}

export class Transform3D extends Component {
    static TYPE = Component.register('Transform3D').typeId;
    constructor(config = {}) {
        super();
        this.typeId = Transform3D.TYPE;
        this.x = config.x !== undefined ? config.x : 0;
        this.y = config.y !== undefined ? config.y : 0;
        this.z = config.z !== undefined ? config.z : 0;
        this.rotX = config.rotX !== undefined ? config.rotX : 0;
        this.rotY = config.rotY !== undefined ? config.rotY : 0;
        this.rotZ = config.rotZ !== undefined ? config.rotZ : 0;
        this.scale = config.scale !== undefined ? config.scale : 1;
    }
}

export class Velocity extends Component {
    static TYPE = Component.register('Velocity').typeId;
    constructor(config = {}) {
        super();
        this.typeId = Velocity.TYPE;
        this.x = config.x !== undefined ? config.x : 0;
        this.y = config.y !== undefined ? config.y : 0;
        this.maxSpeed = config.maxSpeed !== undefined ? config.maxSpeed : 500;
    }
}

export class Acceleration extends Component {
    static TYPE = Component.register('Acceleration').typeId;
    constructor(config = {}) {
        super();
        this.typeId = Acceleration.TYPE;
        this.x = config.x !== undefined ? config.x : 0;
        this.y = config.y !== undefined ? config.y : 0;
    }
}

export class ForceAccumulator extends Component {
    static TYPE = Component.register('ForceAccumulator').typeId;
    constructor(config = {}) {
        super();
        this.typeId = ForceAccumulator.TYPE;
        this.fx = config.fx !== undefined ? config.fx : 0;
        this.fy = config.fy !== undefined ? config.fy : 0;
        this.torque = config.torque !== undefined ? config.torque : 0;
    }
}

export class MassData extends Component {
    static TYPE = Component.register('MassData').typeId;
    constructor(config = {}) {
        super();
        this.typeId = MassData.TYPE;
        this.mass = config.mass !== undefined ? config.mass : 1.0;
        this.invMass = config.invMass !== undefined ? config.invMass : 1.0;
        this.inertia = config.inertia !== undefined ? config.inertia : 500;
        this.invInertia = config.invInertia !== undefined ? config.invInertia : 0.002;
    }
}

export class CircleColliderComp extends Component {
    static TYPE = Component.register('CircleColliderComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = CircleColliderComp.TYPE;
        this.radius = config.radius !== undefined ? config.radius : 16;
        this.offsetX = config.offsetX !== undefined ? config.offsetX : 0;
        this.offsetY = config.offsetY !== undefined ? config.offsetY : 0;
        this.isTrigger = config.isTrigger !== undefined ? config.isTrigger : false;
    }
}

export class BoxColliderComp extends Component {
    static TYPE = Component.register('BoxColliderComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = BoxColliderComp.TYPE;
        this.width = config.width !== undefined ? config.width : 32;
        this.height = config.height !== undefined ? config.height : 32;
        this.offsetX = config.offsetX !== undefined ? config.offsetX : 0;
        this.offsetY = config.offsetY !== undefined ? config.offsetY : 0;
        this.isTrigger = config.isTrigger !== undefined ? config.isTrigger : false;
    }
}

export class PolygonColliderComp extends Component {
    static TYPE = Component.register('PolygonColliderComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = PolygonColliderComp.TYPE;
        this.vertices = config.vertices !== undefined ? config.vertices : [];
        this.isTrigger = config.isTrigger !== undefined ? config.isTrigger : false;
    }
}

export class SpriteComp extends Component {
    static TYPE = Component.register('SpriteComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = SpriteComp.TYPE;
        this.textureId = config.textureId !== undefined ? config.textureId : '';
        this.width = config.width !== undefined ? config.width : 32;
        this.height = config.height !== undefined ? config.height : 32;
        this.color = config.color !== undefined ? config.color : '#ffffff';
        this.flipX = config.flipX !== undefined ? config.flipX : false;
        this.flipY = config.flipY !== undefined ? config.flipY : false;
        this.layer = config.layer !== undefined ? config.layer : 0;
    }
}

export class AnimatedSpriteComp extends Component {
    static TYPE = Component.register('AnimatedSpriteComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = AnimatedSpriteComp.TYPE;
        this.currentAnim = config.currentAnim !== undefined ? config.currentAnim : 'idle';
        this.frameIndex = config.frameIndex !== undefined ? config.frameIndex : 0;
        this.frameTimer = config.frameTimer !== undefined ? config.frameTimer : 0;
        this.fps = config.fps !== undefined ? config.fps : 12;
        this.loop = config.loop !== undefined ? config.loop : true;
        this.playing = config.playing !== undefined ? config.playing : true;
    }
}

export class CameraFollowComp extends Component {
    static TYPE = Component.register('CameraFollowComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = CameraFollowComp.TYPE;
        this.target = config.target !== undefined ? config.target : null;
        this.smoothFactor = config.smoothFactor !== undefined ? config.smoothFactor : 0.1;
        this.leadDistance = config.leadDistance !== undefined ? config.leadDistance : 50;
        this.deadzoneX = config.deadzoneX !== undefined ? config.deadzoneX : 20;
        this.deadzoneY = config.deadzoneY !== undefined ? config.deadzoneY : 20;
    }
}

export class PointLightComp extends Component {
    static TYPE = Component.register('PointLightComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = PointLightComp.TYPE;
        this.radius = config.radius !== undefined ? config.radius : 200;
        this.color = config.color !== undefined ? config.color : '#ffffff';
        this.intensity = config.intensity !== undefined ? config.intensity : 1.0;
        this.flicker = config.flicker !== undefined ? config.flicker : false;
        this.flickerSpeed = config.flickerSpeed !== undefined ? config.flickerSpeed : 5.0;
    }
}

export class SpotLightComp extends Component {
    static TYPE = Component.register('SpotLightComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = SpotLightComp.TYPE;
        this.radius = config.radius !== undefined ? config.radius : 300;
        this.direction = config.direction !== undefined ? config.direction : 0;
        this.angle = config.angle !== undefined ? config.angle : Math.PI * 0.25;
        this.color = config.color !== undefined ? config.color : '#ffffff';
        this.intensity = config.intensity !== undefined ? config.intensity : 1.0;
    }
}

export class AudioSourceComp extends Component {
    static TYPE = Component.register('AudioSourceComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = AudioSourceComp.TYPE;
        this.soundId = config.soundId !== undefined ? config.soundId : '';
        this.volume = config.volume !== undefined ? config.volume : 1.0;
        this.loop = config.loop !== undefined ? config.loop : false;
        this.spatial = config.spatial !== undefined ? config.spatial : true;
        this.range = config.range !== undefined ? config.range : 600;
    }
}

export class HealthComp extends Component {
    static TYPE = Component.register('HealthComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = HealthComp.TYPE;
        this.current = config.current !== undefined ? config.current : 100;
        this.max = config.max !== undefined ? config.max : 100;
        this.regenRate = config.regenRate !== undefined ? config.regenRate : 1.0;
        this.invulnerable = config.invulnerable !== undefined ? config.invulnerable : false;
        this.invulnerableTimer = config.invulnerableTimer !== undefined ? config.invulnerableTimer : 0;
    }
}

export class ManaComp extends Component {
    static TYPE = Component.register('ManaComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = ManaComp.TYPE;
        this.current = config.current !== undefined ? config.current : 50;
        this.max = config.max !== undefined ? config.max : 50;
        this.regenRate = config.regenRate !== undefined ? config.regenRate : 2.0;
    }
}

export class StaminaComp extends Component {
    static TYPE = Component.register('StaminaComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = StaminaComp.TYPE;
        this.current = config.current !== undefined ? config.current : 100;
        this.max = config.max !== undefined ? config.max : 100;
        this.regenRate = config.regenRate !== undefined ? config.regenRate : 15.0;
        this.exhausted = config.exhausted !== undefined ? config.exhausted : false;
    }
}

export class InventoryComp extends Component {
    static TYPE = Component.register('InventoryComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = InventoryComp.TYPE;
        this.slots = config.slots !== undefined ? config.slots : new Array(20).fill(null);
        this.gold = config.gold !== undefined ? config.gold : 100;
        this.capacity = config.capacity !== undefined ? config.capacity : 20;
    }
}

export class WeaponComp extends Component {
    static TYPE = Component.register('WeaponComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = WeaponComp.TYPE;
        this.weaponId = config.weaponId !== undefined ? config.weaponId : 'plasma_gun';
        this.damage = config.damage !== undefined ? config.damage : 25;
        this.cooldown = config.cooldown !== undefined ? config.cooldown : 0.2;
        this.currentCooldown = config.currentCooldown !== undefined ? config.currentCooldown : 0;
        this.range = config.range !== undefined ? config.range : 400;
        this.bulletSpeed = config.bulletSpeed !== undefined ? config.bulletSpeed : 600;
    }
}

export class AIControllerComp extends Component {
    static TYPE = Component.register('AIControllerComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = AIControllerComp.TYPE;
        this.state = config.state !== undefined ? config.state : 'IDLE';
        this.targetEntity = config.targetEntity !== undefined ? config.targetEntity : null;
        this.aggroRadius = config.aggroRadius !== undefined ? config.aggroRadius : 250;
        this.attackRadius = config.attackRadius !== undefined ? config.attackRadius : 50;
        this.leashRadius = config.leashRadius !== undefined ? config.leashRadius : 600;
        this.patrolTimer = config.patrolTimer !== undefined ? config.patrolTimer : 0;
    }
}

export class PathFollowerComp extends Component {
    static TYPE = Component.register('PathFollowerComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = PathFollowerComp.TYPE;
        this.waypoints = config.waypoints !== undefined ? config.waypoints : [];
        this.currentWaypointIndex = config.currentWaypointIndex !== undefined ? config.currentWaypointIndex : 0;
        this.speed = config.speed !== undefined ? config.speed : 120;
        this.reachedTarget = config.reachedTarget !== undefined ? config.reachedTarget : false;
    }
}

export class TeamComp extends Component {
    static TYPE = Component.register('TeamComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = TeamComp.TYPE;
        this.teamId = config.teamId !== undefined ? config.teamId : 1;
        this.faction = config.faction !== undefined ? config.faction : 'players';
    }
}

export class LifetimeComp extends Component {
    static TYPE = Component.register('LifetimeComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = LifetimeComp.TYPE;
        this.remaining = config.remaining !== undefined ? config.remaining : 2.0;
        this.maxLifetime = config.maxLifetime !== undefined ? config.maxLifetime : 2.0;
        this.fadeOut = config.fadeOut !== undefined ? config.fadeOut : true;
    }
}

export class ParticleEmitterComp extends Component {
    static TYPE = Component.register('ParticleEmitterComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = ParticleEmitterComp.TYPE;
        this.presetId = config.presetId !== undefined ? config.presetId : 'sparks';
        this.rate = config.rate !== undefined ? config.rate : 30;
        this.active = config.active !== undefined ? config.active : true;
        this.timer = config.timer !== undefined ? config.timer : 0;
    }
}

export class SpatialTagComp extends Component {
    static TYPE = Component.register('SpatialTagComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = SpatialTagComp.TYPE;
        this.gridX = config.gridX !== undefined ? config.gridX : 0;
        this.gridY = config.gridY !== undefined ? config.gridY : 0;
        this.chunkId = config.chunkId !== undefined ? config.chunkId : '0:0';
    }
}

export class RenderLayerComp extends Component {
    static TYPE = Component.register('RenderLayerComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = RenderLayerComp.TYPE;
        this.order = config.order !== undefined ? config.order : 0;
        this.visible = config.visible !== undefined ? config.visible : true;
        this.blendMode = config.blendMode !== undefined ? config.blendMode : 'source-over';
        this.opacity = config.opacity !== undefined ? config.opacity : 1.0;
    }
}

export class ShadowCasterComp extends Component {
    static TYPE = Component.register('ShadowCasterComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = ShadowCasterComp.TYPE;
        this.shadowRadius = config.shadowRadius !== undefined ? config.shadowRadius : 16;
        this.shadowOpacity = config.shadowOpacity !== undefined ? config.shadowOpacity : 0.5;
        this.heightOffset = config.heightOffset !== undefined ? config.heightOffset : 10;
    }
}

export class InputReceiverComp extends Component {
    static TYPE = Component.register('InputReceiverComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = InputReceiverComp.TYPE;
        this.enabled = config.enabled !== undefined ? config.enabled : true;
        this.playerIndex = config.playerIndex !== undefined ? config.playerIndex : 0;
    }
}

export class DialogueTriggerComp extends Component {
    static TYPE = Component.register('DialogueTriggerComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = DialogueTriggerComp.TYPE;
        this.dialogueId = config.dialogueId !== undefined ? config.dialogueId : 'welcome';
        this.interactRadius = config.interactRadius !== undefined ? config.interactRadius : 60;
        this.promptText = config.promptText !== undefined ? config.promptText : '[E] Talk';
    }
}

export class QuestTargetComp extends Component {
    static TYPE = Component.register('QuestTargetComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = QuestTargetComp.TYPE;
        this.questId = config.questId !== undefined ? config.questId : 'q1';
        this.objectiveType = config.objectiveType !== undefined ? config.objectiveType : 'kill';
        this.requiredCount = config.requiredCount !== undefined ? config.requiredCount : 1;
    }
}

export class BuffContainerComp extends Component {
    static TYPE = Component.register('BuffContainerComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = BuffContainerComp.TYPE;
        this.buffs = config.buffs !== undefined ? config.buffs : [];
    }
}

export class StatusEffectComp extends Component {
    static TYPE = Component.register('StatusEffectComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = StatusEffectComp.TYPE;
        this.effects = config.effects !== undefined ? config.effects : new Map();
    }
}

export class FloatingCombatTextComp extends Component {
    static TYPE = Component.register('FloatingCombatTextComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = FloatingCombatTextComp.TYPE;
        this.texts = config.texts !== undefined ? config.texts : [];
    }
}

export class LevelDataComp extends Component {
    static TYPE = Component.register('LevelDataComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = LevelDataComp.TYPE;
        this.level = config.level !== undefined ? config.level : 1;
        this.experience = config.experience !== undefined ? config.experience : 0;
        this.nextLevelExp = config.nextLevelExp !== undefined ? config.nextLevelExp : 100;
        this.skillPoints = config.skillPoints !== undefined ? config.skillPoints : 0;
    }
}

export class Rigidbody2DComp extends Component {
    static TYPE = Component.register('Rigidbody2DComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = Rigidbody2DComp.TYPE;
        this.bodyType = config.bodyType !== undefined ? config.bodyType : 'dynamic';
        this.restitution = config.restitution !== undefined ? config.restitution : 0.3;
        this.friction = config.friction !== undefined ? config.friction : 0.4;
        this.linearDamping = config.linearDamping !== undefined ? config.linearDamping : 0.02;
        this.angularDamping = config.angularDamping !== undefined ? config.angularDamping : 0.05;
    }
}

export class CollisionResponseComp extends Component {
    static TYPE = Component.register('CollisionResponseComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = CollisionResponseComp.TYPE;
        this.collidingEntities = config.collidingEntities !== undefined ? config.collidingEntities : new Set();
        this.contactNormals = config.contactNormals !== undefined ? config.contactNormals : [];
    }
}

export class JointAttachmentComp extends Component {
    static TYPE = Component.register('JointAttachmentComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = JointAttachmentComp.TYPE;
        this.connectedEntity = config.connectedEntity !== undefined ? config.connectedEntity : null;
        this.anchorX = config.anchorX !== undefined ? config.anchorX : 0;
        this.anchorY = config.anchorY !== undefined ? config.anchorY : 0;
        this.restLength = config.restLength !== undefined ? config.restLength : 50;
    }
}

export class NavAgentComp extends Component {
    static TYPE = Component.register('NavAgentComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = NavAgentComp.TYPE;
        this.desiredVelocity = config.desiredVelocity !== undefined ? config.desiredVelocity : new Vector2();
        this.avoidancePriority = config.avoidancePriority !== undefined ? config.avoidancePriority : 1;
        this.maxAcceleration = config.maxAcceleration !== undefined ? config.maxAcceleration : 400;
    }
}

export class VisibilityMaskComp extends Component {
    static TYPE = Component.register('VisibilityMaskComp').typeId;
    constructor(config = {}) {
        super();
        this.typeId = VisibilityMaskComp.TYPE;
        this.revealed = config.revealed !== undefined ? config.revealed : false;
        this.visionRadius = config.visionRadius !== undefined ? config.visionRadius : 300;
    }
}

