"use client";

import Link from "next/link";
import { useState } from "react";
import { commands } from "./Commands";
import type { HistoryItem } from "./Type";

export interface TerminalProps {
  onClose: () => void;
  size: {
    full: boolean;
    close: boolean;
    min: boolean;
  };
  toggleSize: (key: "full" | "close" | "min") => void;
  isMobile: boolean;
}

function Terminal({ onClose, size, toggleSize }: TerminalProps) {
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const getSizeClass = () => {
    if (size.full) {return "w-full h-full";}
    if (size.close) {return "w-0 h-0 overflow-hidden";}
    if (size.min) {return "w-[600px] h-[400px]";}
    return "w-[600px] h-[400px]";
  };

  const StyleSixe = `${getSizeClass()} border border-(--color-stroke)/20 bg-(--color-bg-terminal)`;

  const runCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") {return;}

    const cmd = input.trim();

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    type CommandKey = keyof typeof commands;

    const output =
      cmd in commands
        ? commands[cmd as CommandKey]
        : `command not found: ${cmd}`;

    setHistory((prev) => [
      ...prev,
      {
        command: cmd,
        output,
      },
    ]);

    setInput("");
  };

  return (
    <div className={StyleSixe} style={{ fontFamily: "'Courier New', monospace" }}>
      <div className="flex gap-2 justify-start items-center border-b border-(--color-stroke)/20 px-2 py-2 cursor-grab bg-(--color-bg-terminal)">
        <div className="flex gap-2">
          <span
            onClick={onClose}
            className="w-3 h-3 bg-(--color-red-terminal) rounded-full cursor-pointer hover:opacity-80 transition-opacity"
            title="Close"
          />
          <span
            onClick={() => toggleSize("min")}
            className="w-3 h-3 bg-(--color-yellow-terminal) rounded-full cursor-pointer hover:opacity-80 transition-opacity"
            title="Minimize"
          />
          <span
            onClick={() => toggleSize("full")}
            className="w-3 h-3 bg-(--color-green-terminal) rounded-full cursor-pointer hover:opacity-80 transition-opacity"
            title="Maximize"
          />
        </div>

        <Link
          href="/"
          className="text-(--color-stroke)/70 text-sm hover:underline ml-2 mt-0.5"
        >
          cipherunit.xyz/shell
        </Link>
      </div>

      <div className="p-4 text-sm overflow-y-auto h-[calc(100%-48px)] bg-(--color-bg-terminal)">
        {history.map((item, index) => (
          <div key={index} className="mb-2">
            <p className="text-(--color-terminal)">
              cipherunit@root:~#{" "}
              <span className="text-(--color-command-terminal)">{item.command}</span>
            </p>
            <p className="text-(--color-output-terminal) mt-1">{item.output}</p>
          </div>
        ))}

        <div className="flex items-center gap-2">
          <span className="text-(--color-terminal)">cipherunit@root:~#</span>

          <input
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={runCommand}
            className="bg-transparent outline-none flex-1 text-(--color-command-terminal) caret-(--color-bg-terminal)"
            spellCheck={false}
            style={{ caretColor: "var(--color-terminal)" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Terminal;


