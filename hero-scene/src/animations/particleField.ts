import { PARTICLE_CONFIG } from "../constants/hero";

export interface ParticleSpec {
  id: number;
  leftPct: number;
  topPct: number;
  sizePx: number;
  durationS: number;
  delayS: number;
  driftXPx: number;
  color: string;
}

/** Generates a stable particle field once per mount; each particle drifts and fades on a loop. */
export function generateParticles(count: number = PARTICLE_CONFIG.count): ParticleSpec[] {
  return Array.from({ length: count }, (_, id) => {
    const { minSizePx, maxSizePx, minDurationS, maxDurationS, colors } = PARTICLE_CONFIG;
    return {
      id,
      leftPct: Math.random() * 100,
      topPct: Math.random() * 100,
      sizePx: minSizePx + Math.random() * (maxSizePx - minSizePx),
      durationS: minDurationS + Math.random() * (maxDurationS - minDurationS),
      delayS: Math.random() * maxDurationS * -1,
      driftXPx: (Math.random() - 0.5) * 80,
      color: colors[id % colors.length],
    };
  });
}
