"use client";

import { useRef, useState, useCallback } from "react";
import Terminal from "@/components/terminal/Terminal";

export interface TerminalPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TerminalPage({ isOpen, onClose }: TerminalPageProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (!isOpen) return;
      dragging.current = true;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      offset.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      };
    },
    [isOpen, position],
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

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0" onPointerMove={onPointerMove}>
        <div
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          style={{
            left: "50%",
            top: "50%",
            transform: `translate3d(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px), 0)`,
            width: 600,
            height: 400,
          }}
          className="absolute will-change-transform"
        >
          <Terminal onClose={onClose} />
        </div>
      </div>
    </div>
  );
}
