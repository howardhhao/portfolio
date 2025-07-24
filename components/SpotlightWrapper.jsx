import React, { useEffect, useRef } from "react";

const SpotlightWrapper = ({ children }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (wrapperRef.current) {
        wrapperRef.current.style.setProperty("--cursor-x", `${e.clientX}px`);
        wrapperRef.current.style.setProperty("--cursor-y", `${e.clientY}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative min-h-screen"
      style={{
        backgroundColor: "#0f0f0f",
        backgroundImage: `radial-gradient(
          600px circle at var(--cursor-x, 50%) var(--cursor-y, 50%),
          rgba(255,255,255,0.07),
          transparent 80%
        )`,
        transition: "background 0.1s ease",
      }}
    >
      {children}
    </div>
  );
};

export default SpotlightWrapper;
