/**
 * NovaForge Game Engine & Arcade Studio
 * Branching Typewriter Dialogue Box with Choices
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
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
