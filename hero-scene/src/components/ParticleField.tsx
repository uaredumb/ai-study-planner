import { useMemo } from "react";
import { motion } from "framer-motion";
import { generateParticles } from "../animations/particleField";

interface ParticleFieldProps {
  reduced?: boolean;
}

/** Subtle floating dust/light particles behind the orb. Static (no drift) when motion is reduced. */
export function ParticleField({ reduced = false }: ParticleFieldProps) {
  const particles = useMemo(() => generateParticles(reduced ? 24 : undefined), [reduced]);

  return (
    <div aria-hidden style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          style={{
            position: "absolute",
            left: `${particle.leftPct}%`,
            top: `${particle.topPct}%`,
            width: particle.sizePx,
            height: particle.sizePx,
            borderRadius: "50%",
            background: particle.color,
          }}
          initial={{ opacity: 0, y: 0, x: 0 }}
          animate={
            reduced
              ? { opacity: 0.25 }
              : {
                  opacity: [0, 0.6, 0],
                  y: [-20, 20],
                  x: [0, particle.driftXPx],
                }
          }
          transition={
            reduced
              ? { duration: 1 }
              : {
                  duration: particle.durationS,
                  delay: particle.delayS,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
        />
      ))}
    </div>
  );
}
