# Procedural Web Audio Synthesis Manual

## 1. Sound FX Synthesis Pipeline
All audio in NovaForge is generated programmatically in real-time without relying on external `.wav` or `.mp3` files:
- **Lasers / Blasters**: Exponential frequency decay on sawtooth oscillators.
- **Explosions**: White noise buffer passed through a resonant lowpass filter with decaying cutoff frequency.
- **Coins / Pickups**: Two-tone sequential sine wave pitch arpeggios.
