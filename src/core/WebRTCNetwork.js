/**
 * NovaForge Game Engine - Peer-to-Peer WebRTC Multiplayer State Synchronization
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class WebRTCNetwork {
    constructor() {
        this.peerConnection = null;
        this.dataChannel = null;
        this.isConnected = false;
        this.latency = 0;
        this.pingTimestamp = 0;
    }

    createRoom() {
        if (typeof RTCPeerConnection === 'undefined') return;
        this.peerConnection = new RTCPeerConnection({
            iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
        });

        this.dataChannel = this.peerConnection.createDataChannel('gameSync', {
            ordered: false,
            maxRetransmits: 0
        });

        this._setupDataChannel();
    }

    _setupDataChannel() {
        if (!this.dataChannel) return;
        this.dataChannel.onopen = () => {
            this.isConnected = true;
            console.log('[WebRTC] DataChannel connected for multiplayer sync.');
        };
        this.dataChannel.onmessage = (event) => {
            this._handleNetworkMessage(event.data);
        };
    }

    _handleNetworkMessage(rawData) {
        try {
            const msg = JSON.parse(rawData);
            if (msg.type === 'ping') {
                this.sendPacket({ type: 'pong', timestamp: msg.timestamp });
            } else if (msg.type === 'pong') {
                this.latency = Date.now() - msg.timestamp;
            }
        } catch (e) {}
    }

    sendPacket(packet) {
        if (this.dataChannel && this.dataChannel.readyState === 'open') {
            this.dataChannel.send(JSON.stringify(packet));
        }
    }
}
