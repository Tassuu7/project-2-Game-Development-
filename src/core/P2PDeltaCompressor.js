/**
 * NovaForge P2P Netcode State Delta Compression
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */
export class P2PDeltaCompressor {
    static compressState(prevState, nextState) {
        const delta = {};
        for (const k in nextState) {
            if (nextState[k] !== prevState[k]) delta[k] = nextState[k];
        }
        return delta;
    }
}
