/**
 * NovaForge Programmatic Web Audio Synthesizer Instrument Presets
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export const SYNTH_PATCHES = [
    {
        patchId: 'patch_001',
        name: 'Cosmic Lead 1',
        category: 'lead',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][1 % 4],
            detune: (1 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (1 % 10) * 0.02,
            decay: 0.05 + (1 % 8) * 0.04,
            sustain: 0.2 + (1 % 6) * 0.1,
            release: 0.1 + (1 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 1 * 50,
            resonance: 1.0 + (1 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_002',
        name: 'Sub Bass 808 2',
        category: '808',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][2 % 4],
            detune: (2 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (2 % 10) * 0.02,
            decay: 0.05 + (2 % 8) * 0.04,
            sustain: 0.2 + (2 % 6) * 0.1,
            release: 0.1 + (2 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 2 * 50,
            resonance: 1.0 + (2 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_003',
        name: 'Retro Chiptune Square 3',
        category: 'square',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][3 % 4],
            detune: (3 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (3 % 10) * 0.02,
            decay: 0.05 + (3 % 8) * 0.04,
            sustain: 0.2 + (3 % 6) * 0.1,
            release: 0.1 + (3 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 3 * 50,
            resonance: 1.0 + (3 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_004',
        name: 'Warm Poly Pad 4',
        category: 'pad',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][4 % 4],
            detune: (4 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (4 % 10) * 0.02,
            decay: 0.05 + (4 % 8) * 0.04,
            sustain: 0.2 + (4 % 6) * 0.1,
            release: 0.1 + (4 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 4 * 50,
            resonance: 1.0 + (4 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_005',
        name: 'Acid Bassline 5',
        category: 'bassline',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][5 % 4],
            detune: (5 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (5 % 10) * 0.02,
            decay: 0.05 + (5 % 8) * 0.04,
            sustain: 0.2 + (5 % 6) * 0.1,
            release: 0.1 + (5 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 5 * 50,
            resonance: 1.0 + (5 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_006',
        name: 'Hyperion Brass 6',
        category: 'brass',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][6 % 4],
            detune: (6 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (6 % 10) * 0.02,
            decay: 0.05 + (6 % 8) * 0.04,
            sustain: 0.2 + (6 % 6) * 0.1,
            release: 0.1 + (6 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 6 * 50,
            resonance: 1.0 + (6 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_007',
        name: 'Crystal Bell 7',
        category: 'bell',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][7 % 4],
            detune: (7 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (7 % 10) * 0.02,
            decay: 0.05 + (7 % 8) * 0.04,
            sustain: 0.2 + (7 % 6) * 0.1,
            release: 0.1 + (7 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 7 * 50,
            resonance: 1.0 + (7 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_008',
        name: 'Noise Snare 8',
        category: 'snare',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][8 % 4],
            detune: (8 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (8 % 10) * 0.02,
            decay: 0.05 + (8 % 8) * 0.04,
            sustain: 0.2 + (8 % 6) * 0.1,
            release: 0.1 + (8 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 8 * 50,
            resonance: 1.0 + (8 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_009',
        name: 'Laser Blaster 9',
        category: 'blaster',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][9 % 4],
            detune: (9 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (9 % 10) * 0.02,
            decay: 0.05 + (9 % 8) * 0.04,
            sustain: 0.2 + (9 % 6) * 0.1,
            release: 0.1 + (9 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 9 * 50,
            resonance: 1.0 + (9 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_010',
        name: 'Cyber Arpeggio 10',
        category: 'arpeggio',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][10 % 4],
            detune: (10 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (10 % 10) * 0.02,
            decay: 0.05 + (10 % 8) * 0.04,
            sustain: 0.2 + (10 % 6) * 0.1,
            release: 0.1 + (10 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 10 * 50,
            resonance: 1.0 + (10 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_011',
        name: 'Cosmic Lead 11',
        category: 'lead',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][11 % 4],
            detune: (11 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (11 % 10) * 0.02,
            decay: 0.05 + (11 % 8) * 0.04,
            sustain: 0.2 + (11 % 6) * 0.1,
            release: 0.1 + (11 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 11 * 50,
            resonance: 1.0 + (11 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_012',
        name: 'Sub Bass 808 12',
        category: '808',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][12 % 4],
            detune: (12 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (12 % 10) * 0.02,
            decay: 0.05 + (12 % 8) * 0.04,
            sustain: 0.2 + (12 % 6) * 0.1,
            release: 0.1 + (12 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 12 * 50,
            resonance: 1.0 + (12 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_013',
        name: 'Retro Chiptune Square 13',
        category: 'square',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][13 % 4],
            detune: (13 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (13 % 10) * 0.02,
            decay: 0.05 + (13 % 8) * 0.04,
            sustain: 0.2 + (13 % 6) * 0.1,
            release: 0.1 + (13 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 13 * 50,
            resonance: 1.0 + (13 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_014',
        name: 'Warm Poly Pad 14',
        category: 'pad',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][14 % 4],
            detune: (14 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (14 % 10) * 0.02,
            decay: 0.05 + (14 % 8) * 0.04,
            sustain: 0.2 + (14 % 6) * 0.1,
            release: 0.1 + (14 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 14 * 50,
            resonance: 1.0 + (14 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_015',
        name: 'Acid Bassline 15',
        category: 'bassline',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][15 % 4],
            detune: (15 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (15 % 10) * 0.02,
            decay: 0.05 + (15 % 8) * 0.04,
            sustain: 0.2 + (15 % 6) * 0.1,
            release: 0.1 + (15 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 15 * 50,
            resonance: 1.0 + (15 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_016',
        name: 'Hyperion Brass 16',
        category: 'brass',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][16 % 4],
            detune: (16 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (16 % 10) * 0.02,
            decay: 0.05 + (16 % 8) * 0.04,
            sustain: 0.2 + (16 % 6) * 0.1,
            release: 0.1 + (16 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 16 * 50,
            resonance: 1.0 + (16 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_017',
        name: 'Crystal Bell 17',
        category: 'bell',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][17 % 4],
            detune: (17 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (17 % 10) * 0.02,
            decay: 0.05 + (17 % 8) * 0.04,
            sustain: 0.2 + (17 % 6) * 0.1,
            release: 0.1 + (17 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 17 * 50,
            resonance: 1.0 + (17 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_018',
        name: 'Noise Snare 18',
        category: 'snare',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][18 % 4],
            detune: (18 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (18 % 10) * 0.02,
            decay: 0.05 + (18 % 8) * 0.04,
            sustain: 0.2 + (18 % 6) * 0.1,
            release: 0.1 + (18 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 18 * 50,
            resonance: 1.0 + (18 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_019',
        name: 'Laser Blaster 19',
        category: 'blaster',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][19 % 4],
            detune: (19 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (19 % 10) * 0.02,
            decay: 0.05 + (19 % 8) * 0.04,
            sustain: 0.2 + (19 % 6) * 0.1,
            release: 0.1 + (19 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 19 * 50,
            resonance: 1.0 + (19 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_020',
        name: 'Cyber Arpeggio 20',
        category: 'arpeggio',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][20 % 4],
            detune: (20 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (20 % 10) * 0.02,
            decay: 0.05 + (20 % 8) * 0.04,
            sustain: 0.2 + (20 % 6) * 0.1,
            release: 0.1 + (20 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 20 * 50,
            resonance: 1.0 + (20 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_021',
        name: 'Cosmic Lead 21',
        category: 'lead',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][21 % 4],
            detune: (21 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (21 % 10) * 0.02,
            decay: 0.05 + (21 % 8) * 0.04,
            sustain: 0.2 + (21 % 6) * 0.1,
            release: 0.1 + (21 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 21 * 50,
            resonance: 1.0 + (21 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_022',
        name: 'Sub Bass 808 22',
        category: '808',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][22 % 4],
            detune: (22 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (22 % 10) * 0.02,
            decay: 0.05 + (22 % 8) * 0.04,
            sustain: 0.2 + (22 % 6) * 0.1,
            release: 0.1 + (22 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 22 * 50,
            resonance: 1.0 + (22 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_023',
        name: 'Retro Chiptune Square 23',
        category: 'square',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][23 % 4],
            detune: (23 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (23 % 10) * 0.02,
            decay: 0.05 + (23 % 8) * 0.04,
            sustain: 0.2 + (23 % 6) * 0.1,
            release: 0.1 + (23 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 23 * 50,
            resonance: 1.0 + (23 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_024',
        name: 'Warm Poly Pad 24',
        category: 'pad',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][24 % 4],
            detune: (24 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (24 % 10) * 0.02,
            decay: 0.05 + (24 % 8) * 0.04,
            sustain: 0.2 + (24 % 6) * 0.1,
            release: 0.1 + (24 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 24 * 50,
            resonance: 1.0 + (24 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_025',
        name: 'Acid Bassline 25',
        category: 'bassline',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][25 % 4],
            detune: (25 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (25 % 10) * 0.02,
            decay: 0.05 + (25 % 8) * 0.04,
            sustain: 0.2 + (25 % 6) * 0.1,
            release: 0.1 + (25 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 25 * 50,
            resonance: 1.0 + (25 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_026',
        name: 'Hyperion Brass 26',
        category: 'brass',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][26 % 4],
            detune: (26 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (26 % 10) * 0.02,
            decay: 0.05 + (26 % 8) * 0.04,
            sustain: 0.2 + (26 % 6) * 0.1,
            release: 0.1 + (26 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 26 * 50,
            resonance: 1.0 + (26 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_027',
        name: 'Crystal Bell 27',
        category: 'bell',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][27 % 4],
            detune: (27 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (27 % 10) * 0.02,
            decay: 0.05 + (27 % 8) * 0.04,
            sustain: 0.2 + (27 % 6) * 0.1,
            release: 0.1 + (27 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 27 * 50,
            resonance: 1.0 + (27 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_028',
        name: 'Noise Snare 28',
        category: 'snare',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][28 % 4],
            detune: (28 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (28 % 10) * 0.02,
            decay: 0.05 + (28 % 8) * 0.04,
            sustain: 0.2 + (28 % 6) * 0.1,
            release: 0.1 + (28 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 28 * 50,
            resonance: 1.0 + (28 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_029',
        name: 'Laser Blaster 29',
        category: 'blaster',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][29 % 4],
            detune: (29 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (29 % 10) * 0.02,
            decay: 0.05 + (29 % 8) * 0.04,
            sustain: 0.2 + (29 % 6) * 0.1,
            release: 0.1 + (29 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 29 * 50,
            resonance: 1.0 + (29 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_030',
        name: 'Cyber Arpeggio 30',
        category: 'arpeggio',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][30 % 4],
            detune: (30 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (30 % 10) * 0.02,
            decay: 0.05 + (30 % 8) * 0.04,
            sustain: 0.2 + (30 % 6) * 0.1,
            release: 0.1 + (30 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 30 * 50,
            resonance: 1.0 + (30 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_031',
        name: 'Cosmic Lead 31',
        category: 'lead',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][31 % 4],
            detune: (31 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (31 % 10) * 0.02,
            decay: 0.05 + (31 % 8) * 0.04,
            sustain: 0.2 + (31 % 6) * 0.1,
            release: 0.1 + (31 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 31 * 50,
            resonance: 1.0 + (31 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_032',
        name: 'Sub Bass 808 32',
        category: '808',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][32 % 4],
            detune: (32 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (32 % 10) * 0.02,
            decay: 0.05 + (32 % 8) * 0.04,
            sustain: 0.2 + (32 % 6) * 0.1,
            release: 0.1 + (32 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 32 * 50,
            resonance: 1.0 + (32 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_033',
        name: 'Retro Chiptune Square 33',
        category: 'square',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][33 % 4],
            detune: (33 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (33 % 10) * 0.02,
            decay: 0.05 + (33 % 8) * 0.04,
            sustain: 0.2 + (33 % 6) * 0.1,
            release: 0.1 + (33 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 33 * 50,
            resonance: 1.0 + (33 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_034',
        name: 'Warm Poly Pad 34',
        category: 'pad',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][34 % 4],
            detune: (34 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (34 % 10) * 0.02,
            decay: 0.05 + (34 % 8) * 0.04,
            sustain: 0.2 + (34 % 6) * 0.1,
            release: 0.1 + (34 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 34 * 50,
            resonance: 1.0 + (34 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_035',
        name: 'Acid Bassline 35',
        category: 'bassline',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][35 % 4],
            detune: (35 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (35 % 10) * 0.02,
            decay: 0.05 + (35 % 8) * 0.04,
            sustain: 0.2 + (35 % 6) * 0.1,
            release: 0.1 + (35 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 35 * 50,
            resonance: 1.0 + (35 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_036',
        name: 'Hyperion Brass 36',
        category: 'brass',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][36 % 4],
            detune: (36 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (36 % 10) * 0.02,
            decay: 0.05 + (36 % 8) * 0.04,
            sustain: 0.2 + (36 % 6) * 0.1,
            release: 0.1 + (36 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 36 * 50,
            resonance: 1.0 + (36 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_037',
        name: 'Crystal Bell 37',
        category: 'bell',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][37 % 4],
            detune: (37 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (37 % 10) * 0.02,
            decay: 0.05 + (37 % 8) * 0.04,
            sustain: 0.2 + (37 % 6) * 0.1,
            release: 0.1 + (37 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 37 * 50,
            resonance: 1.0 + (37 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_038',
        name: 'Noise Snare 38',
        category: 'snare',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][38 % 4],
            detune: (38 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (38 % 10) * 0.02,
            decay: 0.05 + (38 % 8) * 0.04,
            sustain: 0.2 + (38 % 6) * 0.1,
            release: 0.1 + (38 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 38 * 50,
            resonance: 1.0 + (38 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_039',
        name: 'Laser Blaster 39',
        category: 'blaster',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][39 % 4],
            detune: (39 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (39 % 10) * 0.02,
            decay: 0.05 + (39 % 8) * 0.04,
            sustain: 0.2 + (39 % 6) * 0.1,
            release: 0.1 + (39 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 39 * 50,
            resonance: 1.0 + (39 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_040',
        name: 'Cyber Arpeggio 40',
        category: 'arpeggio',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][40 % 4],
            detune: (40 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (40 % 10) * 0.02,
            decay: 0.05 + (40 % 8) * 0.04,
            sustain: 0.2 + (40 % 6) * 0.1,
            release: 0.1 + (40 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 40 * 50,
            resonance: 1.0 + (40 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_041',
        name: 'Cosmic Lead 41',
        category: 'lead',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][41 % 4],
            detune: (41 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (41 % 10) * 0.02,
            decay: 0.05 + (41 % 8) * 0.04,
            sustain: 0.2 + (41 % 6) * 0.1,
            release: 0.1 + (41 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 41 * 50,
            resonance: 1.0 + (41 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_042',
        name: 'Sub Bass 808 42',
        category: '808',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][42 % 4],
            detune: (42 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (42 % 10) * 0.02,
            decay: 0.05 + (42 % 8) * 0.04,
            sustain: 0.2 + (42 % 6) * 0.1,
            release: 0.1 + (42 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 42 * 50,
            resonance: 1.0 + (42 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_043',
        name: 'Retro Chiptune Square 43',
        category: 'square',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][43 % 4],
            detune: (43 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (43 % 10) * 0.02,
            decay: 0.05 + (43 % 8) * 0.04,
            sustain: 0.2 + (43 % 6) * 0.1,
            release: 0.1 + (43 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 43 * 50,
            resonance: 1.0 + (43 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_044',
        name: 'Warm Poly Pad 44',
        category: 'pad',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][44 % 4],
            detune: (44 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (44 % 10) * 0.02,
            decay: 0.05 + (44 % 8) * 0.04,
            sustain: 0.2 + (44 % 6) * 0.1,
            release: 0.1 + (44 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 44 * 50,
            resonance: 1.0 + (44 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_045',
        name: 'Acid Bassline 45',
        category: 'bassline',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][45 % 4],
            detune: (45 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (45 % 10) * 0.02,
            decay: 0.05 + (45 % 8) * 0.04,
            sustain: 0.2 + (45 % 6) * 0.1,
            release: 0.1 + (45 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 45 * 50,
            resonance: 1.0 + (45 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_046',
        name: 'Hyperion Brass 46',
        category: 'brass',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][46 % 4],
            detune: (46 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (46 % 10) * 0.02,
            decay: 0.05 + (46 % 8) * 0.04,
            sustain: 0.2 + (46 % 6) * 0.1,
            release: 0.1 + (46 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 46 * 50,
            resonance: 1.0 + (46 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_047',
        name: 'Crystal Bell 47',
        category: 'bell',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][47 % 4],
            detune: (47 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (47 % 10) * 0.02,
            decay: 0.05 + (47 % 8) * 0.04,
            sustain: 0.2 + (47 % 6) * 0.1,
            release: 0.1 + (47 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 47 * 50,
            resonance: 1.0 + (47 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_048',
        name: 'Noise Snare 48',
        category: 'snare',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][48 % 4],
            detune: (48 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (48 % 10) * 0.02,
            decay: 0.05 + (48 % 8) * 0.04,
            sustain: 0.2 + (48 % 6) * 0.1,
            release: 0.1 + (48 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 48 * 50,
            resonance: 1.0 + (48 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_049',
        name: 'Laser Blaster 49',
        category: 'blaster',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][49 % 4],
            detune: (49 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (49 % 10) * 0.02,
            decay: 0.05 + (49 % 8) * 0.04,
            sustain: 0.2 + (49 % 6) * 0.1,
            release: 0.1 + (49 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 49 * 50,
            resonance: 1.0 + (49 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_050',
        name: 'Cyber Arpeggio 50',
        category: 'arpeggio',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][50 % 4],
            detune: (50 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (50 % 10) * 0.02,
            decay: 0.05 + (50 % 8) * 0.04,
            sustain: 0.2 + (50 % 6) * 0.1,
            release: 0.1 + (50 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 50 * 50,
            resonance: 1.0 + (50 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_051',
        name: 'Cosmic Lead 51',
        category: 'lead',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][51 % 4],
            detune: (51 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (51 % 10) * 0.02,
            decay: 0.05 + (51 % 8) * 0.04,
            sustain: 0.2 + (51 % 6) * 0.1,
            release: 0.1 + (51 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 51 * 50,
            resonance: 1.0 + (51 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_052',
        name: 'Sub Bass 808 52',
        category: '808',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][52 % 4],
            detune: (52 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (52 % 10) * 0.02,
            decay: 0.05 + (52 % 8) * 0.04,
            sustain: 0.2 + (52 % 6) * 0.1,
            release: 0.1 + (52 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 52 * 50,
            resonance: 1.0 + (52 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_053',
        name: 'Retro Chiptune Square 53',
        category: 'square',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][53 % 4],
            detune: (53 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (53 % 10) * 0.02,
            decay: 0.05 + (53 % 8) * 0.04,
            sustain: 0.2 + (53 % 6) * 0.1,
            release: 0.1 + (53 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 53 * 50,
            resonance: 1.0 + (53 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_054',
        name: 'Warm Poly Pad 54',
        category: 'pad',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][54 % 4],
            detune: (54 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (54 % 10) * 0.02,
            decay: 0.05 + (54 % 8) * 0.04,
            sustain: 0.2 + (54 % 6) * 0.1,
            release: 0.1 + (54 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 54 * 50,
            resonance: 1.0 + (54 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_055',
        name: 'Acid Bassline 55',
        category: 'bassline',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][55 % 4],
            detune: (55 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (55 % 10) * 0.02,
            decay: 0.05 + (55 % 8) * 0.04,
            sustain: 0.2 + (55 % 6) * 0.1,
            release: 0.1 + (55 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 55 * 50,
            resonance: 1.0 + (55 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_056',
        name: 'Hyperion Brass 56',
        category: 'brass',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][56 % 4],
            detune: (56 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (56 % 10) * 0.02,
            decay: 0.05 + (56 % 8) * 0.04,
            sustain: 0.2 + (56 % 6) * 0.1,
            release: 0.1 + (56 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 56 * 50,
            resonance: 1.0 + (56 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_057',
        name: 'Crystal Bell 57',
        category: 'bell',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][57 % 4],
            detune: (57 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (57 % 10) * 0.02,
            decay: 0.05 + (57 % 8) * 0.04,
            sustain: 0.2 + (57 % 6) * 0.1,
            release: 0.1 + (57 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 57 * 50,
            resonance: 1.0 + (57 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_058',
        name: 'Noise Snare 58',
        category: 'snare',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][58 % 4],
            detune: (58 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (58 % 10) * 0.02,
            decay: 0.05 + (58 % 8) * 0.04,
            sustain: 0.2 + (58 % 6) * 0.1,
            release: 0.1 + (58 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 58 * 50,
            resonance: 1.0 + (58 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_059',
        name: 'Laser Blaster 59',
        category: 'blaster',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][59 % 4],
            detune: (59 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (59 % 10) * 0.02,
            decay: 0.05 + (59 % 8) * 0.04,
            sustain: 0.2 + (59 % 6) * 0.1,
            release: 0.1 + (59 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 59 * 50,
            resonance: 1.0 + (59 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_060',
        name: 'Cyber Arpeggio 60',
        category: 'arpeggio',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][60 % 4],
            detune: (60 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (60 % 10) * 0.02,
            decay: 0.05 + (60 % 8) * 0.04,
            sustain: 0.2 + (60 % 6) * 0.1,
            release: 0.1 + (60 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 60 * 50,
            resonance: 1.0 + (60 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_061',
        name: 'Cosmic Lead 61',
        category: 'lead',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][61 % 4],
            detune: (61 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (61 % 10) * 0.02,
            decay: 0.05 + (61 % 8) * 0.04,
            sustain: 0.2 + (61 % 6) * 0.1,
            release: 0.1 + (61 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 61 * 50,
            resonance: 1.0 + (61 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_062',
        name: 'Sub Bass 808 62',
        category: '808',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][62 % 4],
            detune: (62 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (62 % 10) * 0.02,
            decay: 0.05 + (62 % 8) * 0.04,
            sustain: 0.2 + (62 % 6) * 0.1,
            release: 0.1 + (62 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 62 * 50,
            resonance: 1.0 + (62 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_063',
        name: 'Retro Chiptune Square 63',
        category: 'square',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][63 % 4],
            detune: (63 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (63 % 10) * 0.02,
            decay: 0.05 + (63 % 8) * 0.04,
            sustain: 0.2 + (63 % 6) * 0.1,
            release: 0.1 + (63 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 63 * 50,
            resonance: 1.0 + (63 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_064',
        name: 'Warm Poly Pad 64',
        category: 'pad',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][64 % 4],
            detune: (64 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (64 % 10) * 0.02,
            decay: 0.05 + (64 % 8) * 0.04,
            sustain: 0.2 + (64 % 6) * 0.1,
            release: 0.1 + (64 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 64 * 50,
            resonance: 1.0 + (64 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_065',
        name: 'Acid Bassline 65',
        category: 'bassline',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][65 % 4],
            detune: (65 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (65 % 10) * 0.02,
            decay: 0.05 + (65 % 8) * 0.04,
            sustain: 0.2 + (65 % 6) * 0.1,
            release: 0.1 + (65 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 65 * 50,
            resonance: 1.0 + (65 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_066',
        name: 'Hyperion Brass 66',
        category: 'brass',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][66 % 4],
            detune: (66 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (66 % 10) * 0.02,
            decay: 0.05 + (66 % 8) * 0.04,
            sustain: 0.2 + (66 % 6) * 0.1,
            release: 0.1 + (66 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 66 * 50,
            resonance: 1.0 + (66 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_067',
        name: 'Crystal Bell 67',
        category: 'bell',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][67 % 4],
            detune: (67 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (67 % 10) * 0.02,
            decay: 0.05 + (67 % 8) * 0.04,
            sustain: 0.2 + (67 % 6) * 0.1,
            release: 0.1 + (67 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 67 * 50,
            resonance: 1.0 + (67 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_068',
        name: 'Noise Snare 68',
        category: 'snare',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][68 % 4],
            detune: (68 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (68 % 10) * 0.02,
            decay: 0.05 + (68 % 8) * 0.04,
            sustain: 0.2 + (68 % 6) * 0.1,
            release: 0.1 + (68 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 68 * 50,
            resonance: 1.0 + (68 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_069',
        name: 'Laser Blaster 69',
        category: 'blaster',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][69 % 4],
            detune: (69 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (69 % 10) * 0.02,
            decay: 0.05 + (69 % 8) * 0.04,
            sustain: 0.2 + (69 % 6) * 0.1,
            release: 0.1 + (69 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 69 * 50,
            resonance: 1.0 + (69 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_070',
        name: 'Cyber Arpeggio 70',
        category: 'arpeggio',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][70 % 4],
            detune: (70 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (70 % 10) * 0.02,
            decay: 0.05 + (70 % 8) * 0.04,
            sustain: 0.2 + (70 % 6) * 0.1,
            release: 0.1 + (70 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 70 * 50,
            resonance: 1.0 + (70 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_071',
        name: 'Cosmic Lead 71',
        category: 'lead',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][71 % 4],
            detune: (71 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (71 % 10) * 0.02,
            decay: 0.05 + (71 % 8) * 0.04,
            sustain: 0.2 + (71 % 6) * 0.1,
            release: 0.1 + (71 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 71 * 50,
            resonance: 1.0 + (71 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_072',
        name: 'Sub Bass 808 72',
        category: '808',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][72 % 4],
            detune: (72 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (72 % 10) * 0.02,
            decay: 0.05 + (72 % 8) * 0.04,
            sustain: 0.2 + (72 % 6) * 0.1,
            release: 0.1 + (72 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 72 * 50,
            resonance: 1.0 + (72 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_073',
        name: 'Retro Chiptune Square 73',
        category: 'square',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][73 % 4],
            detune: (73 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (73 % 10) * 0.02,
            decay: 0.05 + (73 % 8) * 0.04,
            sustain: 0.2 + (73 % 6) * 0.1,
            release: 0.1 + (73 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 73 * 50,
            resonance: 1.0 + (73 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_074',
        name: 'Warm Poly Pad 74',
        category: 'pad',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][74 % 4],
            detune: (74 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (74 % 10) * 0.02,
            decay: 0.05 + (74 % 8) * 0.04,
            sustain: 0.2 + (74 % 6) * 0.1,
            release: 0.1 + (74 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 74 * 50,
            resonance: 1.0 + (74 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_075',
        name: 'Acid Bassline 75',
        category: 'bassline',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][75 % 4],
            detune: (75 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (75 % 10) * 0.02,
            decay: 0.05 + (75 % 8) * 0.04,
            sustain: 0.2 + (75 % 6) * 0.1,
            release: 0.1 + (75 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 75 * 50,
            resonance: 1.0 + (75 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_076',
        name: 'Hyperion Brass 76',
        category: 'brass',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][76 % 4],
            detune: (76 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (76 % 10) * 0.02,
            decay: 0.05 + (76 % 8) * 0.04,
            sustain: 0.2 + (76 % 6) * 0.1,
            release: 0.1 + (76 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 76 * 50,
            resonance: 1.0 + (76 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_077',
        name: 'Crystal Bell 77',
        category: 'bell',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][77 % 4],
            detune: (77 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (77 % 10) * 0.02,
            decay: 0.05 + (77 % 8) * 0.04,
            sustain: 0.2 + (77 % 6) * 0.1,
            release: 0.1 + (77 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 77 * 50,
            resonance: 1.0 + (77 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_078',
        name: 'Noise Snare 78',
        category: 'snare',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][78 % 4],
            detune: (78 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (78 % 10) * 0.02,
            decay: 0.05 + (78 % 8) * 0.04,
            sustain: 0.2 + (78 % 6) * 0.1,
            release: 0.1 + (78 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 78 * 50,
            resonance: 1.0 + (78 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_079',
        name: 'Laser Blaster 79',
        category: 'blaster',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][79 % 4],
            detune: (79 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (79 % 10) * 0.02,
            decay: 0.05 + (79 % 8) * 0.04,
            sustain: 0.2 + (79 % 6) * 0.1,
            release: 0.1 + (79 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 79 * 50,
            resonance: 1.0 + (79 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_080',
        name: 'Cyber Arpeggio 80',
        category: 'arpeggio',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][80 % 4],
            detune: (80 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (80 % 10) * 0.02,
            decay: 0.05 + (80 % 8) * 0.04,
            sustain: 0.2 + (80 % 6) * 0.1,
            release: 0.1 + (80 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 80 * 50,
            resonance: 1.0 + (80 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_081',
        name: 'Cosmic Lead 81',
        category: 'lead',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][81 % 4],
            detune: (81 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (81 % 10) * 0.02,
            decay: 0.05 + (81 % 8) * 0.04,
            sustain: 0.2 + (81 % 6) * 0.1,
            release: 0.1 + (81 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 81 * 50,
            resonance: 1.0 + (81 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_082',
        name: 'Sub Bass 808 82',
        category: '808',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][82 % 4],
            detune: (82 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (82 % 10) * 0.02,
            decay: 0.05 + (82 % 8) * 0.04,
            sustain: 0.2 + (82 % 6) * 0.1,
            release: 0.1 + (82 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 82 * 50,
            resonance: 1.0 + (82 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_083',
        name: 'Retro Chiptune Square 83',
        category: 'square',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][83 % 4],
            detune: (83 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (83 % 10) * 0.02,
            decay: 0.05 + (83 % 8) * 0.04,
            sustain: 0.2 + (83 % 6) * 0.1,
            release: 0.1 + (83 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 83 * 50,
            resonance: 1.0 + (83 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_084',
        name: 'Warm Poly Pad 84',
        category: 'pad',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][84 % 4],
            detune: (84 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (84 % 10) * 0.02,
            decay: 0.05 + (84 % 8) * 0.04,
            sustain: 0.2 + (84 % 6) * 0.1,
            release: 0.1 + (84 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 84 * 50,
            resonance: 1.0 + (84 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_085',
        name: 'Acid Bassline 85',
        category: 'bassline',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][85 % 4],
            detune: (85 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (85 % 10) * 0.02,
            decay: 0.05 + (85 % 8) * 0.04,
            sustain: 0.2 + (85 % 6) * 0.1,
            release: 0.1 + (85 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 85 * 50,
            resonance: 1.0 + (85 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_086',
        name: 'Hyperion Brass 86',
        category: 'brass',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][86 % 4],
            detune: (86 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (86 % 10) * 0.02,
            decay: 0.05 + (86 % 8) * 0.04,
            sustain: 0.2 + (86 % 6) * 0.1,
            release: 0.1 + (86 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 86 * 50,
            resonance: 1.0 + (86 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_087',
        name: 'Crystal Bell 87',
        category: 'bell',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][87 % 4],
            detune: (87 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (87 % 10) * 0.02,
            decay: 0.05 + (87 % 8) * 0.04,
            sustain: 0.2 + (87 % 6) * 0.1,
            release: 0.1 + (87 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 87 * 50,
            resonance: 1.0 + (87 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_088',
        name: 'Noise Snare 88',
        category: 'snare',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][88 % 4],
            detune: (88 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (88 % 10) * 0.02,
            decay: 0.05 + (88 % 8) * 0.04,
            sustain: 0.2 + (88 % 6) * 0.1,
            release: 0.1 + (88 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 88 * 50,
            resonance: 1.0 + (88 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_089',
        name: 'Laser Blaster 89',
        category: 'blaster',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][89 % 4],
            detune: (89 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (89 % 10) * 0.02,
            decay: 0.05 + (89 % 8) * 0.04,
            sustain: 0.2 + (89 % 6) * 0.1,
            release: 0.1 + (89 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 89 * 50,
            resonance: 1.0 + (89 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_090',
        name: 'Cyber Arpeggio 90',
        category: 'arpeggio',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][90 % 4],
            detune: (90 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (90 % 10) * 0.02,
            decay: 0.05 + (90 % 8) * 0.04,
            sustain: 0.2 + (90 % 6) * 0.1,
            release: 0.1 + (90 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 90 * 50,
            resonance: 1.0 + (90 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_091',
        name: 'Cosmic Lead 91',
        category: 'lead',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][91 % 4],
            detune: (91 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (91 % 10) * 0.02,
            decay: 0.05 + (91 % 8) * 0.04,
            sustain: 0.2 + (91 % 6) * 0.1,
            release: 0.1 + (91 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 91 * 50,
            resonance: 1.0 + (91 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_092',
        name: 'Sub Bass 808 92',
        category: '808',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][92 % 4],
            detune: (92 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (92 % 10) * 0.02,
            decay: 0.05 + (92 % 8) * 0.04,
            sustain: 0.2 + (92 % 6) * 0.1,
            release: 0.1 + (92 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 92 * 50,
            resonance: 1.0 + (92 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_093',
        name: 'Retro Chiptune Square 93',
        category: 'square',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][93 % 4],
            detune: (93 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (93 % 10) * 0.02,
            decay: 0.05 + (93 % 8) * 0.04,
            sustain: 0.2 + (93 % 6) * 0.1,
            release: 0.1 + (93 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 93 * 50,
            resonance: 1.0 + (93 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_094',
        name: 'Warm Poly Pad 94',
        category: 'pad',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][94 % 4],
            detune: (94 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (94 % 10) * 0.02,
            decay: 0.05 + (94 % 8) * 0.04,
            sustain: 0.2 + (94 % 6) * 0.1,
            release: 0.1 + (94 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 94 * 50,
            resonance: 1.0 + (94 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_095',
        name: 'Acid Bassline 95',
        category: 'bassline',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][95 % 4],
            detune: (95 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (95 % 10) * 0.02,
            decay: 0.05 + (95 % 8) * 0.04,
            sustain: 0.2 + (95 % 6) * 0.1,
            release: 0.1 + (95 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 95 * 50,
            resonance: 1.0 + (95 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_096',
        name: 'Hyperion Brass 96',
        category: 'brass',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][96 % 4],
            detune: (96 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (96 % 10) * 0.02,
            decay: 0.05 + (96 % 8) * 0.04,
            sustain: 0.2 + (96 % 6) * 0.1,
            release: 0.1 + (96 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 96 * 50,
            resonance: 1.0 + (96 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_097',
        name: 'Crystal Bell 97',
        category: 'bell',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][97 % 4],
            detune: (97 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (97 % 10) * 0.02,
            decay: 0.05 + (97 % 8) * 0.04,
            sustain: 0.2 + (97 % 6) * 0.1,
            release: 0.1 + (97 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 97 * 50,
            resonance: 1.0 + (97 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_098',
        name: 'Noise Snare 98',
        category: 'snare',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][98 % 4],
            detune: (98 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (98 % 10) * 0.02,
            decay: 0.05 + (98 % 8) * 0.04,
            sustain: 0.2 + (98 % 6) * 0.1,
            release: 0.1 + (98 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 98 * 50,
            resonance: 1.0 + (98 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_099',
        name: 'Laser Blaster 99',
        category: 'blaster',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][99 % 4],
            detune: (99 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (99 % 10) * 0.02,
            decay: 0.05 + (99 % 8) * 0.04,
            sustain: 0.2 + (99 % 6) * 0.1,
            release: 0.1 + (99 % 10) * 0.05
        },
        filter: {
            type: 'highpass',
            cutoff: 400 + 99 * 50,
            resonance: 1.0 + (99 % 5) * 0.8
        }
    },
    {
        patchId: 'patch_100',
        name: 'Cyber Arpeggio 100',
        category: 'arpeggio',
        oscillator: {
            type: ['sawtooth', 'square', 'sine', 'triangle'][100 % 4],
            detune: (100 % 7) * 4 - 12
        },
        envelope: {
            attack: 0.005 + (100 % 10) * 0.02,
            decay: 0.05 + (100 % 8) * 0.04,
            sustain: 0.2 + (100 % 6) * 0.1,
            release: 0.1 + (100 % 10) * 0.05
        },
        filter: {
            type: 'lowpass',
            cutoff: 400 + 100 * 50,
            resonance: 1.0 + (100 % 5) * 0.8
        }
    },
];
