# Physics Engine & Numerical Simulation Guide

## 1. Velocity Verlet Integration
NovaForge employs Velocity Verlet numerical integration for stable, energy-conserving physics updates:

```javascript
// Step 1: Update velocities by half delta time
velocity += acceleration * (dt * 0.5);

// Step 2: Update positions
position += velocity * dt;

// Step 3: Compute new accelerations from forces
acceleration = forceAccumulator * invMass + gravity;

// Step 4: Finalize velocities
velocity += acceleration * (dt * 0.5);
```

## 2. Separating Axis Theorem (SAT)
Collision detection projects all vertices onto potential separating axes (edge normals). If projections overlap on all axes, a collision is guaranteed, with the minimum overlap defining the Minimum Translation Vector (MTV).
