/**
 * NovaForge Shadow Quest Elemental Magic Casting & Spell Mechanics
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Vector2 } from '../../math/Vector2.js';

export class SpellEngine {
    static castSpell_01_Fire(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (1 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (1 % 6) * 30;
        const damage = 20 + 1 * 4;
        const duration = 1.5 + (1 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_01',
            element: 'Fire',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (1 % 5),
            color: 'Fire' === 'Fire' ? '#ff3300' : 'Fire' === 'Frost' ? '#00e5ff' : 'Fire' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'fire_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_02_Frost(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (2 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (2 % 6) * 30;
        const damage = 20 + 2 * 4;
        const duration = 1.5 + (2 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_02',
            element: 'Frost',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (2 % 5),
            color: 'Frost' === 'Fire' ? '#ff3300' : 'Frost' === 'Frost' ? '#00e5ff' : 'Frost' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'frost_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_03_Lightning(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (3 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (3 % 6) * 30;
        const damage = 20 + 3 * 4;
        const duration = 1.5 + (3 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_03',
            element: 'Lightning',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (3 % 5),
            color: 'Lightning' === 'Fire' ? '#ff3300' : 'Lightning' === 'Frost' ? '#00e5ff' : 'Lightning' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'lightning_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_04_Arcane(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (4 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (4 % 6) * 30;
        const damage = 20 + 4 * 4;
        const duration = 1.5 + (4 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_04',
            element: 'Arcane',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (4 % 5),
            color: 'Arcane' === 'Fire' ? '#ff3300' : 'Arcane' === 'Frost' ? '#00e5ff' : 'Arcane' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'arcane_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_05_Holy(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (5 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (5 % 6) * 30;
        const damage = 20 + 5 * 4;
        const duration = 1.5 + (5 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_05',
            element: 'Holy',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (5 % 5),
            color: 'Holy' === 'Fire' ? '#ff3300' : 'Holy' === 'Frost' ? '#00e5ff' : 'Holy' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'holy_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_06_Shadow(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (6 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (6 % 6) * 30;
        const damage = 20 + 6 * 4;
        const duration = 1.5 + (6 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_06',
            element: 'Shadow',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (6 % 5),
            color: 'Shadow' === 'Fire' ? '#ff3300' : 'Shadow' === 'Frost' ? '#00e5ff' : 'Shadow' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'shadow_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_07_Earth(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (7 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (7 % 6) * 30;
        const damage = 20 + 7 * 4;
        const duration = 1.5 + (7 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_07',
            element: 'Earth',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (7 % 5),
            color: 'Earth' === 'Fire' ? '#ff3300' : 'Earth' === 'Frost' ? '#00e5ff' : 'Earth' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'earth_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_08_Poison(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (8 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (8 % 6) * 30;
        const damage = 20 + 8 * 4;
        const duration = 1.5 + (8 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_08',
            element: 'Poison',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (8 % 5),
            color: 'Poison' === 'Fire' ? '#ff3300' : 'Poison' === 'Frost' ? '#00e5ff' : 'Poison' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'poison_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_09_Fire(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (9 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (9 % 6) * 30;
        const damage = 20 + 9 * 4;
        const duration = 1.5 + (9 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_09',
            element: 'Fire',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (9 % 5),
            color: 'Fire' === 'Fire' ? '#ff3300' : 'Fire' === 'Frost' ? '#00e5ff' : 'Fire' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'fire_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_10_Frost(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (10 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (10 % 6) * 30;
        const damage = 20 + 10 * 4;
        const duration = 1.5 + (10 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_10',
            element: 'Frost',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (10 % 5),
            color: 'Frost' === 'Fire' ? '#ff3300' : 'Frost' === 'Frost' ? '#00e5ff' : 'Frost' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'frost_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_11_Lightning(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (11 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (11 % 6) * 30;
        const damage = 20 + 11 * 4;
        const duration = 1.5 + (11 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_11',
            element: 'Lightning',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (11 % 5),
            color: 'Lightning' === 'Fire' ? '#ff3300' : 'Lightning' === 'Frost' ? '#00e5ff' : 'Lightning' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'lightning_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_12_Arcane(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (12 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (12 % 6) * 30;
        const damage = 20 + 12 * 4;
        const duration = 1.5 + (12 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_12',
            element: 'Arcane',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (12 % 5),
            color: 'Arcane' === 'Fire' ? '#ff3300' : 'Arcane' === 'Frost' ? '#00e5ff' : 'Arcane' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'arcane_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_13_Holy(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (13 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (13 % 6) * 30;
        const damage = 20 + 13 * 4;
        const duration = 1.5 + (13 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_13',
            element: 'Holy',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (13 % 5),
            color: 'Holy' === 'Fire' ? '#ff3300' : 'Holy' === 'Frost' ? '#00e5ff' : 'Holy' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'holy_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_14_Shadow(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (14 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (14 % 6) * 30;
        const damage = 20 + 14 * 4;
        const duration = 1.5 + (14 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_14',
            element: 'Shadow',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (14 % 5),
            color: 'Shadow' === 'Fire' ? '#ff3300' : 'Shadow' === 'Frost' ? '#00e5ff' : 'Shadow' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'shadow_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_15_Earth(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (15 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (15 % 6) * 30;
        const damage = 20 + 15 * 4;
        const duration = 1.5 + (15 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_15',
            element: 'Earth',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (15 % 5),
            color: 'Earth' === 'Fire' ? '#ff3300' : 'Earth' === 'Frost' ? '#00e5ff' : 'Earth' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'earth_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_16_Poison(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (16 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (16 % 6) * 30;
        const damage = 20 + 16 * 4;
        const duration = 1.5 + (16 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_16',
            element: 'Poison',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (16 % 5),
            color: 'Poison' === 'Fire' ? '#ff3300' : 'Poison' === 'Frost' ? '#00e5ff' : 'Poison' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'poison_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_17_Fire(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (17 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (17 % 6) * 30;
        const damage = 20 + 17 * 4;
        const duration = 1.5 + (17 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_17',
            element: 'Fire',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (17 % 5),
            color: 'Fire' === 'Fire' ? '#ff3300' : 'Fire' === 'Frost' ? '#00e5ff' : 'Fire' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'fire_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_18_Frost(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (18 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (18 % 6) * 30;
        const damage = 20 + 18 * 4;
        const duration = 1.5 + (18 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_18',
            element: 'Frost',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (18 % 5),
            color: 'Frost' === 'Fire' ? '#ff3300' : 'Frost' === 'Frost' ? '#00e5ff' : 'Frost' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'frost_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_19_Lightning(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (19 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (19 % 6) * 30;
        const damage = 20 + 19 * 4;
        const duration = 1.5 + (19 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_19',
            element: 'Lightning',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (19 % 5),
            color: 'Lightning' === 'Fire' ? '#ff3300' : 'Lightning' === 'Frost' ? '#00e5ff' : 'Lightning' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'lightning_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_20_Arcane(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (20 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (20 % 6) * 30;
        const damage = 20 + 20 * 4;
        const duration = 1.5 + (20 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_20',
            element: 'Arcane',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (20 % 5),
            color: 'Arcane' === 'Fire' ? '#ff3300' : 'Arcane' === 'Frost' ? '#00e5ff' : 'Arcane' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'arcane_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_21_Holy(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (21 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (21 % 6) * 30;
        const damage = 20 + 21 * 4;
        const duration = 1.5 + (21 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_21',
            element: 'Holy',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (21 % 5),
            color: 'Holy' === 'Fire' ? '#ff3300' : 'Holy' === 'Frost' ? '#00e5ff' : 'Holy' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'holy_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_22_Shadow(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (22 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (22 % 6) * 30;
        const damage = 20 + 22 * 4;
        const duration = 1.5 + (22 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_22',
            element: 'Shadow',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (22 % 5),
            color: 'Shadow' === 'Fire' ? '#ff3300' : 'Shadow' === 'Frost' ? '#00e5ff' : 'Shadow' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'shadow_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_23_Earth(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (23 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (23 % 6) * 30;
        const damage = 20 + 23 * 4;
        const duration = 1.5 + (23 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_23',
            element: 'Earth',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (23 % 5),
            color: 'Earth' === 'Fire' ? '#ff3300' : 'Earth' === 'Frost' ? '#00e5ff' : 'Earth' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'earth_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_24_Poison(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (24 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (24 % 6) * 30;
        const damage = 20 + 24 * 4;
        const duration = 1.5 + (24 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_24',
            element: 'Poison',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (24 % 5),
            color: 'Poison' === 'Fire' ? '#ff3300' : 'Poison' === 'Frost' ? '#00e5ff' : 'Poison' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'poison_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_25_Fire(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (25 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (25 % 6) * 30;
        const damage = 20 + 25 * 4;
        const duration = 1.5 + (25 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_25',
            element: 'Fire',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (25 % 5),
            color: 'Fire' === 'Fire' ? '#ff3300' : 'Fire' === 'Frost' ? '#00e5ff' : 'Fire' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'fire_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_26_Frost(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (26 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (26 % 6) * 30;
        const damage = 20 + 26 * 4;
        const duration = 1.5 + (26 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_26',
            element: 'Frost',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (26 % 5),
            color: 'Frost' === 'Fire' ? '#ff3300' : 'Frost' === 'Frost' ? '#00e5ff' : 'Frost' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'frost_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_27_Lightning(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (27 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (27 % 6) * 30;
        const damage = 20 + 27 * 4;
        const duration = 1.5 + (27 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_27',
            element: 'Lightning',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (27 % 5),
            color: 'Lightning' === 'Fire' ? '#ff3300' : 'Lightning' === 'Frost' ? '#00e5ff' : 'Lightning' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'lightning_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_28_Arcane(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (28 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (28 % 6) * 30;
        const damage = 20 + 28 * 4;
        const duration = 1.5 + (28 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_28',
            element: 'Arcane',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (28 % 5),
            color: 'Arcane' === 'Fire' ? '#ff3300' : 'Arcane' === 'Frost' ? '#00e5ff' : 'Arcane' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'arcane_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_29_Holy(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (29 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (29 % 6) * 30;
        const damage = 20 + 29 * 4;
        const duration = 1.5 + (29 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_29',
            element: 'Holy',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (29 % 5),
            color: 'Holy' === 'Fire' ? '#ff3300' : 'Holy' === 'Frost' ? '#00e5ff' : 'Holy' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'holy_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_30_Shadow(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (30 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (30 % 6) * 30;
        const damage = 20 + 30 * 4;
        const duration = 1.5 + (30 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_30',
            element: 'Shadow',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (30 % 5),
            color: 'Shadow' === 'Fire' ? '#ff3300' : 'Shadow' === 'Frost' ? '#00e5ff' : 'Shadow' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'shadow_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_31_Earth(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (31 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (31 % 6) * 30;
        const damage = 20 + 31 * 4;
        const duration = 1.5 + (31 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_31',
            element: 'Earth',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (31 % 5),
            color: 'Earth' === 'Fire' ? '#ff3300' : 'Earth' === 'Frost' ? '#00e5ff' : 'Earth' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'earth_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_32_Poison(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (32 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (32 % 6) * 30;
        const damage = 20 + 32 * 4;
        const duration = 1.5 + (32 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_32',
            element: 'Poison',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (32 % 5),
            color: 'Poison' === 'Fire' ? '#ff3300' : 'Poison' === 'Frost' ? '#00e5ff' : 'Poison' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'poison_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_33_Fire(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (33 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (33 % 6) * 30;
        const damage = 20 + 33 * 4;
        const duration = 1.5 + (33 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_33',
            element: 'Fire',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (33 % 5),
            color: 'Fire' === 'Fire' ? '#ff3300' : 'Fire' === 'Frost' ? '#00e5ff' : 'Fire' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'fire_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_34_Frost(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (34 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (34 % 6) * 30;
        const damage = 20 + 34 * 4;
        const duration = 1.5 + (34 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_34',
            element: 'Frost',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (34 % 5),
            color: 'Frost' === 'Fire' ? '#ff3300' : 'Frost' === 'Frost' ? '#00e5ff' : 'Frost' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'frost_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_35_Lightning(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (35 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (35 % 6) * 30;
        const damage = 20 + 35 * 4;
        const duration = 1.5 + (35 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_35',
            element: 'Lightning',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (35 % 5),
            color: 'Lightning' === 'Fire' ? '#ff3300' : 'Lightning' === 'Frost' ? '#00e5ff' : 'Lightning' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'lightning_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_36_Arcane(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (36 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (36 % 6) * 30;
        const damage = 20 + 36 * 4;
        const duration = 1.5 + (36 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_36',
            element: 'Arcane',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (36 % 5),
            color: 'Arcane' === 'Fire' ? '#ff3300' : 'Arcane' === 'Frost' ? '#00e5ff' : 'Arcane' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'arcane_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_37_Holy(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (37 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (37 % 6) * 30;
        const damage = 20 + 37 * 4;
        const duration = 1.5 + (37 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_37',
            element: 'Holy',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (37 % 5),
            color: 'Holy' === 'Fire' ? '#ff3300' : 'Holy' === 'Frost' ? '#00e5ff' : 'Holy' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'holy_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_38_Shadow(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (38 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (38 % 6) * 30;
        const damage = 20 + 38 * 4;
        const duration = 1.5 + (38 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_38',
            element: 'Shadow',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (38 % 5),
            color: 'Shadow' === 'Fire' ? '#ff3300' : 'Shadow' === 'Frost' ? '#00e5ff' : 'Shadow' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'shadow_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_39_Earth(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (39 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (39 % 6) * 30;
        const damage = 20 + 39 * 4;
        const duration = 1.5 + (39 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_39',
            element: 'Earth',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (39 % 5),
            color: 'Earth' === 'Fire' ? '#ff3300' : 'Earth' === 'Frost' ? '#00e5ff' : 'Earth' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'earth_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_40_Poison(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (40 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (40 % 6) * 30;
        const damage = 20 + 40 * 4;
        const duration = 1.5 + (40 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_40',
            element: 'Poison',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (40 % 5),
            color: 'Poison' === 'Fire' ? '#ff3300' : 'Poison' === 'Frost' ? '#00e5ff' : 'Poison' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'poison_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_41_Fire(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (41 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (41 % 6) * 30;
        const damage = 20 + 41 * 4;
        const duration = 1.5 + (41 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_41',
            element: 'Fire',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (41 % 5),
            color: 'Fire' === 'Fire' ? '#ff3300' : 'Fire' === 'Frost' ? '#00e5ff' : 'Fire' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'fire_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_42_Frost(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (42 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (42 % 6) * 30;
        const damage = 20 + 42 * 4;
        const duration = 1.5 + (42 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_42',
            element: 'Frost',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (42 % 5),
            color: 'Frost' === 'Fire' ? '#ff3300' : 'Frost' === 'Frost' ? '#00e5ff' : 'Frost' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'frost_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_43_Lightning(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (43 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (43 % 6) * 30;
        const damage = 20 + 43 * 4;
        const duration = 1.5 + (43 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_43',
            element: 'Lightning',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (43 % 5),
            color: 'Lightning' === 'Fire' ? '#ff3300' : 'Lightning' === 'Frost' ? '#00e5ff' : 'Lightning' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'lightning_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_44_Arcane(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (44 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (44 % 6) * 30;
        const damage = 20 + 44 * 4;
        const duration = 1.5 + (44 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_44',
            element: 'Arcane',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (44 % 5),
            color: 'Arcane' === 'Fire' ? '#ff3300' : 'Arcane' === 'Frost' ? '#00e5ff' : 'Arcane' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'arcane_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_45_Holy(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (45 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (45 % 6) * 30;
        const damage = 20 + 45 * 4;
        const duration = 1.5 + (45 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_45',
            element: 'Holy',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (45 % 5),
            color: 'Holy' === 'Fire' ? '#ff3300' : 'Holy' === 'Frost' ? '#00e5ff' : 'Holy' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'holy_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_46_Shadow(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (46 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (46 % 6) * 30;
        const damage = 20 + 46 * 4;
        const duration = 1.5 + (46 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_46',
            element: 'Shadow',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (46 % 5),
            color: 'Shadow' === 'Fire' ? '#ff3300' : 'Shadow' === 'Frost' ? '#00e5ff' : 'Shadow' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'shadow_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_47_Earth(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (47 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (47 % 6) * 30;
        const damage = 20 + 47 * 4;
        const duration = 1.5 + (47 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_47',
            element: 'Earth',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (47 % 5),
            color: 'Earth' === 'Fire' ? '#ff3300' : 'Earth' === 'Frost' ? '#00e5ff' : 'Earth' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'earth_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_48_Poison(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (48 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (48 % 6) * 30;
        const damage = 20 + 48 * 4;
        const duration = 1.5 + (48 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_48',
            element: 'Poison',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (48 % 5),
            color: 'Poison' === 'Fire' ? '#ff3300' : 'Poison' === 'Frost' ? '#00e5ff' : 'Poison' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'poison_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_49_Fire(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (49 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (49 % 6) * 30;
        const damage = 20 + 49 * 4;
        const duration = 1.5 + (49 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_49',
            element: 'Fire',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (49 % 5),
            color: 'Fire' === 'Fire' ? '#ff3300' : 'Fire' === 'Frost' ? '#00e5ff' : 'Fire' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'fire_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_50_Frost(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (50 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (50 % 6) * 30;
        const damage = 20 + 50 * 4;
        const duration = 1.5 + (50 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_50',
            element: 'Frost',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (50 % 5),
            color: 'Frost' === 'Fire' ? '#ff3300' : 'Frost' === 'Frost' ? '#00e5ff' : 'Frost' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'frost_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_51_Lightning(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (51 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (51 % 6) * 30;
        const damage = 20 + 51 * 4;
        const duration = 1.5 + (51 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_51',
            element: 'Lightning',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (51 % 5),
            color: 'Lightning' === 'Fire' ? '#ff3300' : 'Lightning' === 'Frost' ? '#00e5ff' : 'Lightning' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'lightning_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_52_Arcane(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (52 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (52 % 6) * 30;
        const damage = 20 + 52 * 4;
        const duration = 1.5 + (52 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_52',
            element: 'Arcane',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (52 % 5),
            color: 'Arcane' === 'Fire' ? '#ff3300' : 'Arcane' === 'Frost' ? '#00e5ff' : 'Arcane' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'arcane_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_53_Holy(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (53 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (53 % 6) * 30;
        const damage = 20 + 53 * 4;
        const duration = 1.5 + (53 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_53',
            element: 'Holy',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (53 % 5),
            color: 'Holy' === 'Fire' ? '#ff3300' : 'Holy' === 'Frost' ? '#00e5ff' : 'Holy' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'holy_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_54_Shadow(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (54 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (54 % 6) * 30;
        const damage = 20 + 54 * 4;
        const duration = 1.5 + (54 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_54',
            element: 'Shadow',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (54 % 5),
            color: 'Shadow' === 'Fire' ? '#ff3300' : 'Shadow' === 'Frost' ? '#00e5ff' : 'Shadow' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'shadow_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_55_Earth(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (55 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (55 % 6) * 30;
        const damage = 20 + 55 * 4;
        const duration = 1.5 + (55 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_55',
            element: 'Earth',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (55 % 5),
            color: 'Earth' === 'Fire' ? '#ff3300' : 'Earth' === 'Frost' ? '#00e5ff' : 'Earth' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'earth_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_56_Poison(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (56 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (56 % 6) * 30;
        const damage = 20 + 56 * 4;
        const duration = 1.5 + (56 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_56',
            element: 'Poison',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (56 % 5),
            color: 'Poison' === 'Fire' ? '#ff3300' : 'Poison' === 'Frost' ? '#00e5ff' : 'Poison' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'poison_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_57_Fire(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (57 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (57 % 6) * 30;
        const damage = 20 + 57 * 4;
        const duration = 1.5 + (57 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_57',
            element: 'Fire',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (57 % 5),
            color: 'Fire' === 'Fire' ? '#ff3300' : 'Fire' === 'Frost' ? '#00e5ff' : 'Fire' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'fire_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_58_Frost(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (58 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (58 % 6) * 30;
        const damage = 20 + 58 * 4;
        const duration = 1.5 + (58 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_58',
            element: 'Frost',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (58 % 5),
            color: 'Frost' === 'Fire' ? '#ff3300' : 'Frost' === 'Frost' ? '#00e5ff' : 'Frost' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'frost_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_59_Lightning(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (59 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (59 % 6) * 30;
        const damage = 20 + 59 * 4;
        const duration = 1.5 + (59 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_59',
            element: 'Lightning',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (59 % 5),
            color: 'Lightning' === 'Fire' ? '#ff3300' : 'Lightning' === 'Frost' ? '#00e5ff' : 'Lightning' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'lightning_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_60_Arcane(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (60 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (60 % 6) * 30;
        const damage = 20 + 60 * 4;
        const duration = 1.5 + (60 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_60',
            element: 'Arcane',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (60 % 5),
            color: 'Arcane' === 'Fire' ? '#ff3300' : 'Arcane' === 'Frost' ? '#00e5ff' : 'Arcane' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'arcane_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_61_Holy(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (61 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (61 % 6) * 30;
        const damage = 20 + 61 * 4;
        const duration = 1.5 + (61 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_61',
            element: 'Holy',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (61 % 5),
            color: 'Holy' === 'Fire' ? '#ff3300' : 'Holy' === 'Frost' ? '#00e5ff' : 'Holy' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'holy_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_62_Shadow(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (62 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (62 % 6) * 30;
        const damage = 20 + 62 * 4;
        const duration = 1.5 + (62 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_62',
            element: 'Shadow',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (62 % 5),
            color: 'Shadow' === 'Fire' ? '#ff3300' : 'Shadow' === 'Frost' ? '#00e5ff' : 'Shadow' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'shadow_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_63_Earth(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (63 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (63 % 6) * 30;
        const damage = 20 + 63 * 4;
        const duration = 1.5 + (63 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_63',
            element: 'Earth',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (63 % 5),
            color: 'Earth' === 'Fire' ? '#ff3300' : 'Earth' === 'Frost' ? '#00e5ff' : 'Earth' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'earth_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_64_Poison(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (64 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (64 % 6) * 30;
        const damage = 20 + 64 * 4;
        const duration = 1.5 + (64 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_64',
            element: 'Poison',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (64 % 5),
            color: 'Poison' === 'Fire' ? '#ff3300' : 'Poison' === 'Frost' ? '#00e5ff' : 'Poison' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'poison_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_65_Fire(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (65 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (65 % 6) * 30;
        const damage = 20 + 65 * 4;
        const duration = 1.5 + (65 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_65',
            element: 'Fire',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (65 % 5),
            color: 'Fire' === 'Fire' ? '#ff3300' : 'Fire' === 'Frost' ? '#00e5ff' : 'Fire' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'fire_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_66_Frost(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (66 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (66 % 6) * 30;
        const damage = 20 + 66 * 4;
        const duration = 1.5 + (66 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_66',
            element: 'Frost',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (66 % 5),
            color: 'Frost' === 'Fire' ? '#ff3300' : 'Frost' === 'Frost' ? '#00e5ff' : 'Frost' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'frost_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_67_Lightning(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (67 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (67 % 6) * 30;
        const damage = 20 + 67 * 4;
        const duration = 1.5 + (67 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_67',
            element: 'Lightning',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (67 % 5),
            color: 'Lightning' === 'Fire' ? '#ff3300' : 'Lightning' === 'Frost' ? '#00e5ff' : 'Lightning' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'lightning_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_68_Arcane(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (68 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (68 % 6) * 30;
        const damage = 20 + 68 * 4;
        const duration = 1.5 + (68 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_68',
            element: 'Arcane',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (68 % 5),
            color: 'Arcane' === 'Fire' ? '#ff3300' : 'Arcane' === 'Frost' ? '#00e5ff' : 'Arcane' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'arcane_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_69_Holy(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (69 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (69 % 6) * 30;
        const damage = 20 + 69 * 4;
        const duration = 1.5 + (69 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_69',
            element: 'Holy',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (69 % 5),
            color: 'Holy' === 'Fire' ? '#ff3300' : 'Holy' === 'Frost' ? '#00e5ff' : 'Holy' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'holy_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_70_Shadow(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (70 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (70 % 6) * 30;
        const damage = 20 + 70 * 4;
        const duration = 1.5 + (70 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_70',
            element: 'Shadow',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (70 % 5),
            color: 'Shadow' === 'Fire' ? '#ff3300' : 'Shadow' === 'Frost' ? '#00e5ff' : 'Shadow' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'shadow_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_71_Earth(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (71 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (71 % 6) * 30;
        const damage = 20 + 71 * 4;
        const duration = 1.5 + (71 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_71',
            element: 'Earth',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (71 % 5),
            color: 'Earth' === 'Fire' ? '#ff3300' : 'Earth' === 'Frost' ? '#00e5ff' : 'Earth' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'earth_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_72_Poison(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (72 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (72 % 6) * 30;
        const damage = 20 + 72 * 4;
        const duration = 1.5 + (72 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_72',
            element: 'Poison',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (72 % 5),
            color: 'Poison' === 'Fire' ? '#ff3300' : 'Poison' === 'Frost' ? '#00e5ff' : 'Poison' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'poison_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_73_Fire(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (73 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (73 % 6) * 30;
        const damage = 20 + 73 * 4;
        const duration = 1.5 + (73 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_73',
            element: 'Fire',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (73 % 5),
            color: 'Fire' === 'Fire' ? '#ff3300' : 'Fire' === 'Frost' ? '#00e5ff' : 'Fire' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'fire_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_74_Frost(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (74 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (74 % 6) * 30;
        const damage = 20 + 74 * 4;
        const duration = 1.5 + (74 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_74',
            element: 'Frost',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (74 % 5),
            color: 'Frost' === 'Fire' ? '#ff3300' : 'Frost' === 'Frost' ? '#00e5ff' : 'Frost' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'frost_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_75_Lightning(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (75 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (75 % 6) * 30;
        const damage = 20 + 75 * 4;
        const duration = 1.5 + (75 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_75',
            element: 'Lightning',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (75 % 5),
            color: 'Lightning' === 'Fire' ? '#ff3300' : 'Lightning' === 'Frost' ? '#00e5ff' : 'Lightning' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'lightning_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_76_Arcane(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (76 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (76 % 6) * 30;
        const damage = 20 + 76 * 4;
        const duration = 1.5 + (76 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_76',
            element: 'Arcane',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (76 % 5),
            color: 'Arcane' === 'Fire' ? '#ff3300' : 'Arcane' === 'Frost' ? '#00e5ff' : 'Arcane' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'arcane_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_77_Holy(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (77 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (77 % 6) * 30;
        const damage = 20 + 77 * 4;
        const duration = 1.5 + (77 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_77',
            element: 'Holy',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (77 % 5),
            color: 'Holy' === 'Fire' ? '#ff3300' : 'Holy' === 'Frost' ? '#00e5ff' : 'Holy' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'holy_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_78_Shadow(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (78 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (78 % 6) * 30;
        const damage = 20 + 78 * 4;
        const duration = 1.5 + (78 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_78',
            element: 'Shadow',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (78 % 5),
            color: 'Shadow' === 'Fire' ? '#ff3300' : 'Shadow' === 'Frost' ? '#00e5ff' : 'Shadow' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'shadow_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_79_Earth(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (79 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (79 % 6) * 30;
        const damage = 20 + 79 * 4;
        const duration = 1.5 + (79 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_79',
            element: 'Earth',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (79 % 5),
            color: 'Earth' === 'Fire' ? '#ff3300' : 'Earth' === 'Frost' ? '#00e5ff' : 'Earth' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'earth_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
    static castSpell_80_Poison(casterX, casterY, dirX, dirY, casterMana = 100) {
        const manaCost = 10 + (80 % 10) * 3;
        if (casterMana < manaCost) return { success: false, manaCost: 0, projectiles: [] };

        const projectiles = [];
        const speed = 250 + (80 % 6) * 30;
        const damage = 20 + 80 * 4;
        const duration = 1.5 + (80 % 4) * 0.5;

        projectiles.push({
            spellId: 'spell_80',
            element: 'Poison',
            x: casterX,
            y: casterY,
            vx: dirX * speed,
            vy: dirY * speed,
            damage: damage,
            radius: 8 + (80 % 5),
            color: 'Poison' === 'Fire' ? '#ff3300' : 'Poison' === 'Frost' ? '#00e5ff' : 'Poison' === 'Lightning' ? '#ffe600' : '#b026ff',
            statusEffect: 'poison_burn',
            duration: duration
        });

        return { success: true, manaCost, projectiles };
    }
}
