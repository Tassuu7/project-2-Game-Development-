/**
 * NovaForge ECS Archetype Query Cache
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */
export class ArchetypeRegistry {
    static queryMask(mask, entities) {
        return entities.filter(e => (e.componentMask & mask) === mask);
    }
}
