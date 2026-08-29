/**
 * NovaForge Game Engine & Arcade Studio
 * Client-Side Persistence Layer (LocalStorage & IndexedDB Engine)
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class StorageManager {
    constructor(namespace = 'novaforge_engine_v2') {
        this.namespace = namespace;
        this.memoryStore = new Map();
        this.hasLocalStorage = this._checkLocalStorage();
        this.dbName = `${namespace}_db`;
        this.dbVersion = 1;
        this.indexedDBInstance = null;
    }

    _checkLocalStorage() {
        try {
            if (typeof window === 'undefined' || !window.localStorage) return false;
            const testKey = `__nf_test_${Date.now()}`;
            window.localStorage.setItem(testKey, '1');
            window.localStorage.removeItem(testKey);
            return true;
        } catch (e) {
            console.warn('[StorageManager] LocalStorage unavailable, falling back to memory store.');
            return false;
        }
    }

    async initIndexedDB() {
        if (typeof window === 'undefined' || !window.indexedDB) {
            return false;
        }

        return new Promise((resolve) => {
            const request = window.indexedDB.open(this.dbName, this.dbVersion);

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains('saves')) {
                    db.createObjectStore('saves', { keyPath: 'key' });
                }
                if (!db.objectStoreNames.contains('levels')) {
                    db.createObjectStore('levels', { keyPath: 'id' });
                }
            };

            request.onsuccess = (event) => {
                this.indexedDBInstance = event.target.result;
                resolve(true);
            };

            request.onerror = (event) => {
                console.warn('[StorageManager] IndexedDB init error:', event.target.error);
                resolve(false);
            };
        });
    }

    _getPrefixedKey(key) {
        return `${this.namespace}:${key}`;
    }

    setItem(key, value) {
        const payload = JSON.stringify({
            data: value,
            savedAt: Date.now(),
            version: '2.4.0'
        });

        this.memoryStore.set(key, value);

        if (this.hasLocalStorage) {
            try {
                window.localStorage.setItem(this._getPrefixedKey(key), payload);
                return true;
            } catch (err) {
                console.error('[StorageManager] Failed to write to localStorage:', err);
                return false;
            }
        }
        return true;
    }

    getItem(key, defaultValue = null) {
        if (this.hasLocalStorage) {
            try {
                const raw = window.localStorage.getItem(this._getPrefixedKey(key));
                if (raw !== null) {
                    const parsed = JSON.parse(raw);
                    return parsed.data !== undefined ? parsed.data : parsed;
                }
            } catch (err) {
                console.error(`[StorageManager] Failed reading '${key}':`, err);
            }
        }

        if (this.memoryStore.has(key)) {
            return this.memoryStore.get(key);
        }

        return defaultValue;
    }

    removeItem(key) {
        this.memoryStore.delete(key);
        if (this.hasLocalStorage) {
            try {
                window.localStorage.removeItem(this._getPrefixedKey(key));
                return true;
            } catch (err) {
                console.error('[StorageManager] Failed to remove item:', err);
            }
        }
        return false;
    }

    saveGameSlot(slotNumber, gameId, gameState) {
        const slotKey = `slot_${slotNumber}_${gameId}`;
        const record = {
            slot: slotNumber,
            gameId,
            gameState,
            timestamp: Date.now(),
            formattedDate: new Date().toLocaleString()
        };
        return this.setItem(slotKey, record);
    }

    loadGameSlot(slotNumber, gameId) {
        const slotKey = `slot_${slotNumber}_${gameId}`;
        return this.getItem(slotKey, null);
    }

    listGameSlots(gameId) {
        const slots = [];
        for (let i = 1; i <= 5; i++) {
            const data = this.loadGameSlot(i, gameId);
            slots.push({
                slot: i,
                hasData: !!data,
                timestamp: data ? data.timestamp : null,
                formattedDate: data ? data.formattedDate : 'Empty Slot'
            });
        }
        return slots;
    }

    exportAllData() {
        const exportData = {};
        if (this.hasLocalStorage) {
            for (let i = 0; i < window.localStorage.length; i++) {
                const key = window.localStorage.key(i);
                if (key && key.startsWith(this.namespace)) {
                    const cleanKey = key.replace(`${this.namespace}:`, '');
                    exportData[cleanKey] = this.getItem(cleanKey);
                }
            }
        } else {
            for (const [k, v] of this.memoryStore.entries()) {
                exportData[k] = v;
            }
        }
        return JSON.stringify(exportData, null, 2);
    }

    importAllData(jsonString) {
        try {
            const parsed = JSON.parse(jsonString);
            for (const [k, v] of Object.entries(parsed)) {
                this.setItem(k, v);
            }
            return true;
        } catch (e) {
            console.error('[StorageManager] Failed to import data:', e);
            return false;
        }
    }

    clearNamespace() {
        this.memoryStore.clear();
        if (this.hasLocalStorage) {
            const keysToRemove = [];
            for (let i = 0; i < window.localStorage.length; i++) {
                const key = window.localStorage.key(i);
                if (key && key.startsWith(this.namespace)) {
                    keysToRemove.push(key);
                }
            }
            keysToRemove.forEach(k => window.localStorage.removeItem(k));
        }
    }
}
