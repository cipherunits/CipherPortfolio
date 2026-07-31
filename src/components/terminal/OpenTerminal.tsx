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
      <div className="pointer-events-none absolute bottom-full left-14 mb-2 -translate-x-1/2 rounded-md border border-(--color-stroke)/40 bg-(--color-surface) px-3 py-1.5 text-xs whitespace-nowrap text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
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
