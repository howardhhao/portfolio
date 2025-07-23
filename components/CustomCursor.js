import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      const offsetX = 6; // adjust X hotspot offset (e.g., shift right)
      const offsetY = 6; // adjust Y hotspot offset (e.g., shift down)

      cursor.style.left = `${e.clientX - offsetX}px`;
      cursor.style.top = `${e.clientY - offsetY}px`;
    };

    document.body.style.cursor = "none";
    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "default";
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-8 h-8 pointer-events-none z-[9999] transition-transform duration-150 
                 bg-no-repeat bg-contain bg-center dark:invert"
      style={{
        top: 0,
        left: 0,
        backgroundImage: "url('/cursor.png')",
      }}
    />
  );
};

export default CustomCursor;
