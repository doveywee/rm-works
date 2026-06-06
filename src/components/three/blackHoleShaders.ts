// Accretion-disk shader for the Vantage Systems black hole.
// The disk is a flat ring in its local XY plane; we read radius/angle from the
// vertex position to draw glowing spiral arms with a hot inner lip. Rendered with
// additive blending over a near-black core sphere so the silhouette reads as a hole.

export const diskVertex = /* glsl */ `
varying vec2 vPos;
void main() {
  vPos = position.xy;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const diskFragment = /* glsl */ `
precision highp float;

uniform float uTime;
uniform float uScroll;
uniform vec3 uColorA;
uniform vec3 uColorB;

varying vec2 vPos;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

void main() {
  float r = length(vPos);
  float ang = atan(vPos.y, vPos.x);
  float rn = clamp((r - 1.1) / (2.9 - 1.1), 0.0, 1.0);

  // spiral arms — inner material orbits faster
  float spin = uTime * (0.5 + uScroll * 1.8);
  float arms = sin(ang * 2.0 + spin * (2.0 / (r * 0.6)));
  float band = 0.5 + 0.5 * arms;

  float n = noise(vec2(ang * 2.0 + spin * 0.5, r * 4.0 - uTime * 0.6));

  float glow = 1.0 - rn;                       // brighter toward the center
  float innerLip = smoothstep(1.28, 1.1, r) * 1.7; // hot edge at the horizon
  float intensity = glow * (0.35 + 0.65 * band) * (0.55 + 0.6 * n) + innerLip;

  // fade the inner and outer edges of the ring
  intensity *= smoothstep(1.1, 1.2, r);
  intensity *= 1.0 - smoothstep(2.6, 2.9, r);
  // brighten as the hole "feeds" on scroll
  intensity *= 0.8 + uScroll * 1.3;

  vec3 col = mix(vec3(1.0, 0.96, 1.0), uColorA, smoothstep(0.0, 0.5, rn));
  col = mix(col, uColorB, smoothstep(0.5, 1.0, rn));
  col *= intensity;

  gl_FragColor = vec4(col, intensity);
}
`;
