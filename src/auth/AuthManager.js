/**
 * NovaForge Game Engine & Arcade Studio
 * Client-Side Authentication, Session Management & Cloud-Sync Profile
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class AuthManager {
    constructor() {
        this.storageKey = 'novaforge_users_db_v2';
        this.sessionKey = 'novaforge_active_session_v2';
        this.currentUser = null;
        this.onAuthChange = null;

        this._initDatabase();
        this._restoreSession();
    }

    _initDatabase() {
        if (typeof window === 'undefined' || !window.localStorage) return;
        if (!localStorage.getItem(this.storageKey)) {
            const defaultDb = {
                users: [
                    {
                        username: 'PlayerOne',
                        email: 'player@novaforge.dev',
                        passwordHash: this._hashPassword('password123'),
                        avatar: 'cyber_hero',
                        level: 5,
                        credits: 1500,
                        highScores: {
                            cosmic_vanguard: 12500,
                            shadow_quest: 8400,
                            cyber_runner: 6200,
                            dungeon_raycast3d: 4500,
                            gravity_sandbox: 1000,
                            neon_tower_defense: 9800,
                            chrono_puzzle: 3200,
                            rhythm_blaster: 18400
                        },
                        unlockedAchievements: ['ach_0001', 'ach_0002', 'ach_0005'],
                        createdAt: Date.now()
                    }
                ]
            };
            localStorage.setItem(this.storageKey, JSON.stringify(defaultDb));
        }
    }

    _hashPassword(password) {
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return `nf_hash_${Math.abs(hash).toString(16)}`;
    }

    _getUsers() {
        try {
            const raw = localStorage.getItem(this.storageKey);
            return raw ? JSON.parse(raw).users : [];
        } catch (e) {
            return [];
        }
    }

    _saveUsers(users) {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify({ users }));
        } catch (e) {
            console.error('[AuthManager] Save users failed:', e);
        }
    }

    _restoreSession() {
        try {
            const rawSession = localStorage.getItem(this.sessionKey);
            if (rawSession) {
                const session = JSON.parse(rawSession);
                const user = this._getUsers().find(u => u.username === session.username);
                if (user) {
                    this.currentUser = user;
                    return;
                }
            }
        } catch (e) {}

        // Fallback Guest session
        this.currentUser = {
            username: 'Guest_Pilot',
            email: 'guest@novaforge.local',
            isGuest: true,
            avatar: 'guest_bot',
            level: 1,
            credits: 200,
            highScores: {},
            unlockedAchievements: []
        };
    }

    register(username, email, password) {
        if (!username || username.trim().length < 3) {
            return { success: false, message: 'Username must be at least 3 characters.' };
        }
        if (!password || password.length < 6) {
            return { success: false, message: 'Password must be at least 6 characters.' };
        }

        const users = this._getUsers();
        if (users.some(u => u.username.toLowerCase() === username.toLowerCase())) {
            return { success: false, message: 'Username already taken.' };
        }
        if (email && users.some(u => u.email && u.email.toLowerCase() === email.toLowerCase())) {
            return { success: false, message: 'Email already registered.' };
        }

        const newUser = {
            username: username.trim(),
            email: email.trim(),
            passwordHash: this._hashPassword(password),
            avatar: 'cyber_hero',
            level: 1,
            credits: 500,
            highScores: {},
            unlockedAchievements: [],
            createdAt: Date.now()
        };

        users.push(newUser);
        this._saveUsers(users);

        // Auto login
        return this.login(username, password);
    }

    login(username, password) {
        const users = this._getUsers();
        const hash = this._hashPassword(password);
        const user = users.find(u =>
            (u.username.toLowerCase() === username.toLowerCase() || (u.email && u.email.toLowerCase() === username.toLowerCase())) &&
            u.passwordHash === hash
        );

        if (!user) {
            return { success: false, message: 'Invalid username/email or password.' };
        }

        this.currentUser = user;
        try {
            localStorage.setItem(this.sessionKey, JSON.stringify({ username: user.username, token: Date.now() }));
        } catch (e) {}

        if (typeof this.onAuthChange === 'function') {
            this.onAuthChange(this.currentUser);
        }

        return { success: true, user: this.currentUser };
    }

    logout() {
        try {
            localStorage.removeItem(this.sessionKey);
        } catch (e) {}

        this.currentUser = {
            username: 'Guest_Pilot',
            email: 'guest@novaforge.local',
            isGuest: true,
            avatar: 'guest_bot',
            level: 1,
            credits: 200,
            highScores: {},
            unlockedAchievements: []
        };

        if (typeof this.onAuthChange === 'function') {
            this.onAuthChange(this.currentUser);
        }
    }

    recordHighScore(gameId, score) {
        if (!this.currentUser) return;
        const currentBest = this.currentUser.highScores[gameId] || 0;
        if (score > currentBest) {
            this.currentUser.highScores[gameId] = score;

            if (!this.currentUser.isGuest) {
                const users = this._getUsers();
                const idx = users.findIndex(u => u.username === this.currentUser.username);
                if (idx !== -1) {
                    users[idx] = this.currentUser;
                    this._saveUsers(users);
                }
            }
        }
    }

    addCredits(amount) {
        if (!this.currentUser) return;
        this.currentUser.credits = (this.currentUser.credits || 0) + amount;
        if (!this.currentUser.isGuest) {
            const users = this._getUsers();
            const idx = users.findIndex(u => u.username === this.currentUser.username);
            if (idx !== -1) {
                users[idx] = this.currentUser;
                this._saveUsers(users);
            }
        }
    }
}
