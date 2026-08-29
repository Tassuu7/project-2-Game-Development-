# -*- coding: utf-8 -*-
from scripts.code_gen_lib import write_file

def build_partA():
    # 1. src/ui/UIManager.js
    write_file("src/ui/UIManager.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Screen Transition Manager, Menus & Settings Overlay
 * @author NovaForge Engineering Team
 * @license MIT
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
""")

    # 2. src/ui/HUDController.js
    write_file("src/ui/HUDController.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Heads-Up Display Controller (Health, Mana, Score, Boss Bar)
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class HUDController {
    constructor() {
        this.health = 100;
        this.maxHealth = 100;
        this.score = 0;
        this.level = 1;
    }

    setHealth(current, max) {
        this.health = current;
        this.maxHealth = max;
    }

    addScore(points) {
        this.score += points;
    }
}
""")

    # 3. src/ui/DialogueBox.js
    write_file("src/ui/DialogueBox.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Branching Typewriter Dialogue Box with Choices
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class DialogueBox {
    constructor() {
        this.isOpen = false;
        this.currentText = '';
        this.displayedText = '';
        this.charIndex = 0;
        this.typeSpeed = 30; // ms per char
        this.choices = [];
    }

    startDialogue(speaker, text, choices = [], onChoice = null) {
        this.isOpen = true;
        this.speaker = speaker;
        this.currentText = text;
        this.displayedText = '';
        this.charIndex = 0;
        this.choices = choices;
        this.onChoice = onChoice;
    }

    update(dt) {
        if (!this.isOpen || this.charIndex >= this.currentText.length) return;
        this.charIndex++;
        this.displayedText = this.currentText.substring(0, this.charIndex);
    }
}
""")

    # 4. src/ui/InventoryGrid.js
    write_file("src/ui/InventoryGrid.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Drag-and-Drop Equipment & Item Inventory Grid
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class InventoryGrid {
    constructor(slotsCount = 20) {
        this.slots = new Array(slotsCount).fill(null);
    }

    addItem(item) {
        for (let i = 0; i < this.slots.length; i++) {
            if (this.slots[i] === null) {
                this.slots[i] = item;
                return true;
            }
        }
        return false;
    }

    removeItem(index) {
        const item = this.slots[index];
        this.slots[index] = null;
        return item;
    }
}
""")

    # 5. src/ui/NotificationSystem.js
    write_file("src/ui/NotificationSystem.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Toast Notification & Achievement Pop-up System
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class NotificationSystem {
    static notify(message, type = 'info', duration = 3000) {
        console.log(`[NOTIFICATION - ${type.toUpperCase()}] ${message}`);
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast-message toast-${type}`;
        toast.textContent = message;
        container.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, duration);
    }
}
""")
