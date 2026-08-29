/**
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
