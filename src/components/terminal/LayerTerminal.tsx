"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Terminal from "@/components/terminal/Terminal";

export interface TerminalPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TerminalPage({ isOpen, onClose }: TerminalPageProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({
    full: false,
    close: false,
    min: true,
  });
  const [isMobile, setIsMobile] = useState(false);
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile && size.min) {
      setSize({ full: true, close: false, min: false });
    }
  }, [isMobile, size.min]);

  const toggleSize = (key: "full" | "close" | "min") => {
    if (isMobile && key === "min") {
      return;
    }

    setSize((prev) => {
      if (prev[key]) {
        return prev;
      }
      return {
        full: key === "full",
        close: key === "close",
        min: key === "min",
      };
    });
  };

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (!isOpen || size.full) return;
      dragging.current = true;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      offset.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      };
    },
    [isOpen, position, size.full],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging.current) return;
      setPosition({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y,
      });
    },
    [],
  );

  const onPointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  if (!isOpen) return null;

  const wrapperStyle = size.full
    ? {
        left: 0,
        top: 0,
        transform: "none",
        width: "100%",
        height: "100%",
      }
    : {
        left: "50%",
        top: "50%",
        transform: `translate3d(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px), 0)`,
        width: 600,
        height: 400,
      };

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0" onPointerMove={onPointerMove}>
        <div
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          style={wrapperStyle}
          className="absolute will-change-transform"
        >
          <Terminal onClose={onClose} size={size} toggleSize={toggleSize} isMobile={isMobile} />
        </div>
      </div>
    </div>
  );
}
