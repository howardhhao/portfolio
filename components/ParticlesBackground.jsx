// components/ParticlesBackground.jsx
import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/engine";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 z-0"
      options={{
        fullScreen: false,
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#ffffff" },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
            opacity: 0.2,
            width: 1,
          },
          move: { enable: true, speed: 1, outModes: { default: "bounce" } },
          number: { value: 50, density: { enable: true, area: 800 } },
          opacity: { value: 0.3 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 4 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
