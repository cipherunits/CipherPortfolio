"use client";

import Image from "next/image";

interface OpenTerminalProps {
  onClick: () => void;
}

function OpenTerminal({ onClick }: OpenTerminalProps) {
  return (
    <div
      className="fixed left-4 bottom-4 z-50 group cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute bottom-full mb-2 left-14 -translate-x-1/2 bg-(--color-bg) border border-(--color-stroke) text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Open Terminal
      </div>
      <Image
        src="/images/Terminalicon.png"
        alt="Terminal Logo"
        width={48}
        height={48}
        className="hover:scale-110 transition-transform drop-shadow-[0_0_12px_var(--color-shadow-primery)]"
      />
    </div>
  );
}

export default OpenTerminal;
