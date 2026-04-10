import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dot, setDot] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setDot({ x: e.clientX, y: e.clientY });
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    const handleHover = () => {
      const hoverEls = document.querySelectorAll("a, button, [role='button'], input, textarea");
      hoverEls.forEach((el) => {
        el.addEventListener("mouseenter", () => setHovering(true));
        el.addEventListener("mouseleave", () => setHovering(false));
      });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    handleHover();
    const interval = setInterval(handleHover, 2000);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      clearInterval(interval);
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border border-primary/50 transition-transform duration-200 ease-out"
        style={{
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          transform: `translate(${pos.x - (hovering ? 24 : 16)}px, ${pos.y - (hovering ? 24 : 16)}px) scale(${clicking ? 0.8 : 1})`,
          background: hovering ? "hsla(199, 89%, 48%, 0.08)" : "transparent",
          mixBlendMode: "difference",
        }}
      />
      <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-primary"
        style={{
          width: 6,
          height: 6,
          transform: `translate(${dot.x - 3}px, ${dot.y - 3}px)`,
          boxShadow: "0 0 10px hsla(199, 89%, 48%, 0.6)",
        }}
      />
      <style>{`* { cursor: none !important; }`}</style>
    </>
  );
};

export default CustomCursor;
