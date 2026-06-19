"use client";

import { useState } from "react";
import OpenTerminal from "@/components/terminal/OpenTerminal";
import TerminalPage from "@/components/terminal/LayerTerminal";

export default function TerminalManager() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <OpenTerminal onClick={() => setIsOpen((prev) => !prev)} />
      <TerminalPage isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
