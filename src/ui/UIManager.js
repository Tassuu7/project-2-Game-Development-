/**
 * NovaForge Game Engine & Arcade Studio
 * Screen Transition Manager, Menus & Settings Overlay
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class UIManager {
    constructor() {
        this.activeModals = [];
        this.currentScreen = 'hub';
    }

    showScreen(screenId) {
        document.querySelectorAll('.app-screen').forEach(el => el.classList.remove('active'));
        const target = document.getElementById(screenId);
        if (target) {
            target.classList.add('active');
            this.currentScreen = screenId;
        }
    }

    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('open');
            this.activeModals.push(modalId);
        }
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('open');
            this.activeModals = this.activeModals.filter(id => id !== modalId);
        }
    }
}
