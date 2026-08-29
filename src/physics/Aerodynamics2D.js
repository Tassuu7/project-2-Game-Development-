/**
 * NovaForge Aerodynamic Drag, Lift & Fluid Force Vector Math
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Vector2 } from '../math/Vector2.js';

export class Aerodynamics2D {
    static calculateAirfoilForce_001(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 1 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_002(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 2 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_003(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 3 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_004(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 4 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_005(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 0 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_006(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 1 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_007(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 2 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_008(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 3 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_009(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 4 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_010(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 0 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_011(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 1 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_012(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 2 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_013(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 3 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_014(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 4 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_015(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 0 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_016(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 1 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_017(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 2 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_018(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 3 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_019(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 4 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_020(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 0 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_021(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 1 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_022(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 2 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_023(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 3 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_024(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 4 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_025(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 0 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_026(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 1 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_027(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 2 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_028(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 3 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_029(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 4 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_030(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 0 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_031(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 1 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_032(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 2 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_033(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 3 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_034(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 4 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_035(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 0 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_036(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 1 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_037(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 2 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_038(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 3 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_039(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 4 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_040(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 0 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_041(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 1 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_042(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 2 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_043(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 3 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_044(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 4 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_045(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 0 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_046(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 1 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_047(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 2 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_048(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 3 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_049(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 4 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_050(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 0 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_051(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 1 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_052(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 2 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_053(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 3 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_054(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 4 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_055(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 0 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_056(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 1 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_057(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 2 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_058(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 3 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_059(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 4 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_060(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 0 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_061(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 1 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_062(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 2 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_063(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 3 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_064(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 4 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_065(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 0 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_066(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 1 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_067(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 2 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_068(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 3 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_069(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 4 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_070(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 0 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_071(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 1 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_072(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 2 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_073(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 3 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_074(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 4 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_075(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 0 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_076(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 1 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_077(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 2 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_078(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 3 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_079(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 4 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_080(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 0 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_081(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 1 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_082(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 2 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_083(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 3 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_084(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 4 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_085(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 0 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_086(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 1 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_087(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 2 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_088(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 3 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_089(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 4 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_090(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 0 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_091(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 1 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_092(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 2 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_093(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 3 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_094(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 4 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_095(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 0 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_096(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 1 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_097(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 2 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_098(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 3 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_099(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 4 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_100(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 0 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_101(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 1 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_102(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 2 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_103(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 3 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_104(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 4 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_105(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 0 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_106(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 1 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_107(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 2 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_108(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 3 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_109(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 4 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_110(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 0 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_111(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 1 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_112(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 2 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_113(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 3 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_114(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 4 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_115(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 0 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_116(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 1 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_117(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 2 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 1 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_118(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 3 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 2 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_119(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 4 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 3 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
    static calculateAirfoilForce_120(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + 0 * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + 0 * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }
}
