// bearingCapacity.js

// input : Pl , depth of fondation D, poid volimique sec gamma D, largeur de la fondation B
// factor KP , facteur de securite , la forme de la fondation

function calculateBearingCapacity(limitPressure, kp = 2.5) {
  if (!limitPressure || limitPressure <= 0) {
    throw new Error("Invalid limit pressure value");
  }

  // Ultimate Bearing Capacity
  const qu = kp * limitPressure;

  // Safe Bearing Capacity (assuming FS = 3)
  const qs = qu / 3;

  return {
    ultimateBearingCapacity: qu,
    safeBearingCapacity: qs,
  };
}

module.exports = { calculateBearingCapacity };
