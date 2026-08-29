/**
 * NovaForge Responsive Mobile Virtual D-Pad & Button Layout Manager
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */
export class VirtualDPadLayout {
    static getResponsiveLayout(screenWidth, screenHeight) {
        return {
            joystickRadius: screenWidth < 768 ? 40 : 55,
            buttonRadius: screenWidth < 768 ? 35 : 45
        };
    }
}
