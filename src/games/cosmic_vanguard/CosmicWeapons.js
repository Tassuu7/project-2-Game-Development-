/**
 * NovaForge Cosmic Vanguard Weapon Arsenal & Ballistic Calculation Systems
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Vector2 } from '../../math/Vector2.js';

export class CosmicWeapons {
    static fireWeapon_01(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (1 % 5);
        const spread = 0.08 * (1 % 4);
        const speed = 400 + (1 * 8) + (level * 25);
        const damage = 15 + (1 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w1_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (1 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][1 % 5],
                piercing: (1 % 6 === 0),
                homing: (1 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_02(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (2 % 5);
        const spread = 0.08 * (2 % 4);
        const speed = 400 + (2 * 8) + (level * 25);
        const damage = 15 + (2 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w2_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (2 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][2 % 5],
                piercing: (2 % 6 === 0),
                homing: (2 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_03(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (3 % 5);
        const spread = 0.08 * (3 % 4);
        const speed = 400 + (3 * 8) + (level * 25);
        const damage = 15 + (3 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w3_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (3 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][3 % 5],
                piercing: (3 % 6 === 0),
                homing: (3 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_04(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (4 % 5);
        const spread = 0.08 * (4 % 4);
        const speed = 400 + (4 * 8) + (level * 25);
        const damage = 15 + (4 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w4_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (4 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][4 % 5],
                piercing: (4 % 6 === 0),
                homing: (4 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_05(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (5 % 5);
        const spread = 0.08 * (5 % 4);
        const speed = 400 + (5 * 8) + (level * 25);
        const damage = 15 + (5 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w5_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (5 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][5 % 5],
                piercing: (5 % 6 === 0),
                homing: (5 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_06(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (6 % 5);
        const spread = 0.08 * (6 % 4);
        const speed = 400 + (6 * 8) + (level * 25);
        const damage = 15 + (6 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w6_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (6 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][6 % 5],
                piercing: (6 % 6 === 0),
                homing: (6 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_07(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (7 % 5);
        const spread = 0.08 * (7 % 4);
        const speed = 400 + (7 * 8) + (level * 25);
        const damage = 15 + (7 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w7_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (7 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][7 % 5],
                piercing: (7 % 6 === 0),
                homing: (7 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_08(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (8 % 5);
        const spread = 0.08 * (8 % 4);
        const speed = 400 + (8 * 8) + (level * 25);
        const damage = 15 + (8 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w8_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (8 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][8 % 5],
                piercing: (8 % 6 === 0),
                homing: (8 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_09(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (9 % 5);
        const spread = 0.08 * (9 % 4);
        const speed = 400 + (9 * 8) + (level * 25);
        const damage = 15 + (9 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w9_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (9 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][9 % 5],
                piercing: (9 % 6 === 0),
                homing: (9 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_10(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (10 % 5);
        const spread = 0.08 * (10 % 4);
        const speed = 400 + (10 * 8) + (level * 25);
        const damage = 15 + (10 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w10_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (10 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][10 % 5],
                piercing: (10 % 6 === 0),
                homing: (10 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_11(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (11 % 5);
        const spread = 0.08 * (11 % 4);
        const speed = 400 + (11 * 8) + (level * 25);
        const damage = 15 + (11 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w11_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (11 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][11 % 5],
                piercing: (11 % 6 === 0),
                homing: (11 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_12(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (12 % 5);
        const spread = 0.08 * (12 % 4);
        const speed = 400 + (12 * 8) + (level * 25);
        const damage = 15 + (12 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w12_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (12 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][12 % 5],
                piercing: (12 % 6 === 0),
                homing: (12 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_13(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (13 % 5);
        const spread = 0.08 * (13 % 4);
        const speed = 400 + (13 * 8) + (level * 25);
        const damage = 15 + (13 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w13_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (13 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][13 % 5],
                piercing: (13 % 6 === 0),
                homing: (13 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_14(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (14 % 5);
        const spread = 0.08 * (14 % 4);
        const speed = 400 + (14 * 8) + (level * 25);
        const damage = 15 + (14 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w14_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (14 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][14 % 5],
                piercing: (14 % 6 === 0),
                homing: (14 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_15(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (15 % 5);
        const spread = 0.08 * (15 % 4);
        const speed = 400 + (15 * 8) + (level * 25);
        const damage = 15 + (15 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w15_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (15 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][15 % 5],
                piercing: (15 % 6 === 0),
                homing: (15 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_16(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (16 % 5);
        const spread = 0.08 * (16 % 4);
        const speed = 400 + (16 * 8) + (level * 25);
        const damage = 15 + (16 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w16_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (16 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][16 % 5],
                piercing: (16 % 6 === 0),
                homing: (16 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_17(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (17 % 5);
        const spread = 0.08 * (17 % 4);
        const speed = 400 + (17 * 8) + (level * 25);
        const damage = 15 + (17 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w17_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (17 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][17 % 5],
                piercing: (17 % 6 === 0),
                homing: (17 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_18(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (18 % 5);
        const spread = 0.08 * (18 % 4);
        const speed = 400 + (18 * 8) + (level * 25);
        const damage = 15 + (18 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w18_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (18 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][18 % 5],
                piercing: (18 % 6 === 0),
                homing: (18 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_19(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (19 % 5);
        const spread = 0.08 * (19 % 4);
        const speed = 400 + (19 * 8) + (level * 25);
        const damage = 15 + (19 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w19_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (19 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][19 % 5],
                piercing: (19 % 6 === 0),
                homing: (19 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_20(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (20 % 5);
        const spread = 0.08 * (20 % 4);
        const speed = 400 + (20 * 8) + (level * 25);
        const damage = 15 + (20 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w20_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (20 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][20 % 5],
                piercing: (20 % 6 === 0),
                homing: (20 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_21(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (21 % 5);
        const spread = 0.08 * (21 % 4);
        const speed = 400 + (21 * 8) + (level * 25);
        const damage = 15 + (21 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w21_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (21 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][21 % 5],
                piercing: (21 % 6 === 0),
                homing: (21 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_22(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (22 % 5);
        const spread = 0.08 * (22 % 4);
        const speed = 400 + (22 * 8) + (level * 25);
        const damage = 15 + (22 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w22_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (22 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][22 % 5],
                piercing: (22 % 6 === 0),
                homing: (22 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_23(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (23 % 5);
        const spread = 0.08 * (23 % 4);
        const speed = 400 + (23 * 8) + (level * 25);
        const damage = 15 + (23 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w23_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (23 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][23 % 5],
                piercing: (23 % 6 === 0),
                homing: (23 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_24(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (24 % 5);
        const spread = 0.08 * (24 % 4);
        const speed = 400 + (24 * 8) + (level * 25);
        const damage = 15 + (24 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w24_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (24 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][24 % 5],
                piercing: (24 % 6 === 0),
                homing: (24 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_25(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (25 % 5);
        const spread = 0.08 * (25 % 4);
        const speed = 400 + (25 * 8) + (level * 25);
        const damage = 15 + (25 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w25_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (25 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][25 % 5],
                piercing: (25 % 6 === 0),
                homing: (25 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_26(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (26 % 5);
        const spread = 0.08 * (26 % 4);
        const speed = 400 + (26 * 8) + (level * 25);
        const damage = 15 + (26 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w26_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (26 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][26 % 5],
                piercing: (26 % 6 === 0),
                homing: (26 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_27(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (27 % 5);
        const spread = 0.08 * (27 % 4);
        const speed = 400 + (27 * 8) + (level * 25);
        const damage = 15 + (27 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w27_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (27 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][27 % 5],
                piercing: (27 % 6 === 0),
                homing: (27 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_28(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (28 % 5);
        const spread = 0.08 * (28 % 4);
        const speed = 400 + (28 * 8) + (level * 25);
        const damage = 15 + (28 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w28_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (28 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][28 % 5],
                piercing: (28 % 6 === 0),
                homing: (28 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_29(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (29 % 5);
        const spread = 0.08 * (29 % 4);
        const speed = 400 + (29 * 8) + (level * 25);
        const damage = 15 + (29 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w29_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (29 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][29 % 5],
                piercing: (29 % 6 === 0),
                homing: (29 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_30(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (30 % 5);
        const spread = 0.08 * (30 % 4);
        const speed = 400 + (30 * 8) + (level * 25);
        const damage = 15 + (30 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w30_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (30 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][30 % 5],
                piercing: (30 % 6 === 0),
                homing: (30 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_31(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (31 % 5);
        const spread = 0.08 * (31 % 4);
        const speed = 400 + (31 * 8) + (level * 25);
        const damage = 15 + (31 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w31_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (31 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][31 % 5],
                piercing: (31 % 6 === 0),
                homing: (31 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_32(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (32 % 5);
        const spread = 0.08 * (32 % 4);
        const speed = 400 + (32 * 8) + (level * 25);
        const damage = 15 + (32 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w32_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (32 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][32 % 5],
                piercing: (32 % 6 === 0),
                homing: (32 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_33(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (33 % 5);
        const spread = 0.08 * (33 % 4);
        const speed = 400 + (33 * 8) + (level * 25);
        const damage = 15 + (33 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w33_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (33 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][33 % 5],
                piercing: (33 % 6 === 0),
                homing: (33 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_34(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (34 % 5);
        const spread = 0.08 * (34 % 4);
        const speed = 400 + (34 * 8) + (level * 25);
        const damage = 15 + (34 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w34_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (34 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][34 % 5],
                piercing: (34 % 6 === 0),
                homing: (34 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_35(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (35 % 5);
        const spread = 0.08 * (35 % 4);
        const speed = 400 + (35 * 8) + (level * 25);
        const damage = 15 + (35 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w35_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (35 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][35 % 5],
                piercing: (35 % 6 === 0),
                homing: (35 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_36(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (36 % 5);
        const spread = 0.08 * (36 % 4);
        const speed = 400 + (36 * 8) + (level * 25);
        const damage = 15 + (36 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w36_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (36 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][36 % 5],
                piercing: (36 % 6 === 0),
                homing: (36 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_37(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (37 % 5);
        const spread = 0.08 * (37 % 4);
        const speed = 400 + (37 * 8) + (level * 25);
        const damage = 15 + (37 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w37_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (37 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][37 % 5],
                piercing: (37 % 6 === 0),
                homing: (37 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_38(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (38 % 5);
        const spread = 0.08 * (38 % 4);
        const speed = 400 + (38 * 8) + (level * 25);
        const damage = 15 + (38 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w38_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (38 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][38 % 5],
                piercing: (38 % 6 === 0),
                homing: (38 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_39(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (39 % 5);
        const spread = 0.08 * (39 % 4);
        const speed = 400 + (39 * 8) + (level * 25);
        const damage = 15 + (39 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w39_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (39 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][39 % 5],
                piercing: (39 % 6 === 0),
                homing: (39 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_40(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (40 % 5);
        const spread = 0.08 * (40 % 4);
        const speed = 400 + (40 * 8) + (level * 25);
        const damage = 15 + (40 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w40_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (40 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][40 % 5],
                piercing: (40 % 6 === 0),
                homing: (40 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_41(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (41 % 5);
        const spread = 0.08 * (41 % 4);
        const speed = 400 + (41 * 8) + (level * 25);
        const damage = 15 + (41 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w41_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (41 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][41 % 5],
                piercing: (41 % 6 === 0),
                homing: (41 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_42(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (42 % 5);
        const spread = 0.08 * (42 % 4);
        const speed = 400 + (42 * 8) + (level * 25);
        const damage = 15 + (42 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w42_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (42 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][42 % 5],
                piercing: (42 % 6 === 0),
                homing: (42 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_43(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (43 % 5);
        const spread = 0.08 * (43 % 4);
        const speed = 400 + (43 * 8) + (level * 25);
        const damage = 15 + (43 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w43_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (43 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][43 % 5],
                piercing: (43 % 6 === 0),
                homing: (43 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_44(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (44 % 5);
        const spread = 0.08 * (44 % 4);
        const speed = 400 + (44 * 8) + (level * 25);
        const damage = 15 + (44 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w44_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (44 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][44 % 5],
                piercing: (44 % 6 === 0),
                homing: (44 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_45(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (45 % 5);
        const spread = 0.08 * (45 % 4);
        const speed = 400 + (45 * 8) + (level * 25);
        const damage = 15 + (45 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w45_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (45 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][45 % 5],
                piercing: (45 % 6 === 0),
                homing: (45 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_46(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (46 % 5);
        const spread = 0.08 * (46 % 4);
        const speed = 400 + (46 * 8) + (level * 25);
        const damage = 15 + (46 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w46_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (46 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][46 % 5],
                piercing: (46 % 6 === 0),
                homing: (46 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_47(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (47 % 5);
        const spread = 0.08 * (47 % 4);
        const speed = 400 + (47 * 8) + (level * 25);
        const damage = 15 + (47 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w47_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (47 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][47 % 5],
                piercing: (47 % 6 === 0),
                homing: (47 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_48(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (48 % 5);
        const spread = 0.08 * (48 % 4);
        const speed = 400 + (48 * 8) + (level * 25);
        const damage = 15 + (48 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w48_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (48 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][48 % 5],
                piercing: (48 % 6 === 0),
                homing: (48 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_49(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (49 % 5);
        const spread = 0.08 * (49 % 4);
        const speed = 400 + (49 * 8) + (level * 25);
        const damage = 15 + (49 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w49_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (49 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][49 % 5],
                piercing: (49 % 6 === 0),
                homing: (49 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_50(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (50 % 5);
        const spread = 0.08 * (50 % 4);
        const speed = 400 + (50 * 8) + (level * 25);
        const damage = 15 + (50 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w50_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (50 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][50 % 5],
                piercing: (50 % 6 === 0),
                homing: (50 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_51(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (51 % 5);
        const spread = 0.08 * (51 % 4);
        const speed = 400 + (51 * 8) + (level * 25);
        const damage = 15 + (51 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w51_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (51 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][51 % 5],
                piercing: (51 % 6 === 0),
                homing: (51 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_52(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (52 % 5);
        const spread = 0.08 * (52 % 4);
        const speed = 400 + (52 * 8) + (level * 25);
        const damage = 15 + (52 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w52_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (52 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][52 % 5],
                piercing: (52 % 6 === 0),
                homing: (52 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_53(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (53 % 5);
        const spread = 0.08 * (53 % 4);
        const speed = 400 + (53 * 8) + (level * 25);
        const damage = 15 + (53 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w53_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (53 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][53 % 5],
                piercing: (53 % 6 === 0),
                homing: (53 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_54(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (54 % 5);
        const spread = 0.08 * (54 % 4);
        const speed = 400 + (54 * 8) + (level * 25);
        const damage = 15 + (54 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w54_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (54 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][54 % 5],
                piercing: (54 % 6 === 0),
                homing: (54 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_55(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (55 % 5);
        const spread = 0.08 * (55 % 4);
        const speed = 400 + (55 * 8) + (level * 25);
        const damage = 15 + (55 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w55_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (55 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][55 % 5],
                piercing: (55 % 6 === 0),
                homing: (55 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_56(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (56 % 5);
        const spread = 0.08 * (56 % 4);
        const speed = 400 + (56 * 8) + (level * 25);
        const damage = 15 + (56 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w56_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (56 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][56 % 5],
                piercing: (56 % 6 === 0),
                homing: (56 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_57(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (57 % 5);
        const spread = 0.08 * (57 % 4);
        const speed = 400 + (57 * 8) + (level * 25);
        const damage = 15 + (57 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w57_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (57 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][57 % 5],
                piercing: (57 % 6 === 0),
                homing: (57 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_58(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (58 % 5);
        const spread = 0.08 * (58 % 4);
        const speed = 400 + (58 * 8) + (level * 25);
        const damage = 15 + (58 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w58_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (58 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][58 % 5],
                piercing: (58 % 6 === 0),
                homing: (58 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_59(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (59 % 5);
        const spread = 0.08 * (59 % 4);
        const speed = 400 + (59 * 8) + (level * 25);
        const damage = 15 + (59 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w59_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (59 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][59 % 5],
                piercing: (59 % 6 === 0),
                homing: (59 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
    static fireWeapon_60(playerX, playerY, targetX, targetY, level = 1) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - playerY, targetX - playerX);
        const count = 1 + (60 % 5);
        const spread = 0.08 * (60 % 4);
        const speed = 400 + (60 * 8) + (level * 25);
        const damage = 15 + (60 * 3) + (level * 8);

        for (let j = 0; j < count; j++) {
            const angle = baseAngle + (j - (count - 1) * 0.5) * spread;
            bullets.push({
                id: 'bullet_w60_' + Date.now() + '_' + j,
                x: playerX,
                y: playerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                damage: damage,
                radius: 3 + (60 % 4),
                color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#ff8800'][60 % 5],
                piercing: (60 % 6 === 0),
                homing: (60 % 4 === 0),
                lifetime: 2.0
            });
        }
        return bullets;
    }
}
