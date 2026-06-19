"use client";

import Link from "next/link";
import { useState } from "react";
import { commands } from "./Commands";
import { HistoryItem } from "./Type";

export interface TerminalProps {
  onClose: () => void;
}

function Terminal({ onClose }: TerminalProps) {
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [size, setSize] = useState({
    full: false,
    close: false,
    min: true,
  });

  const getSizeClass = () => {
    if (size.full) return "h-screen w-screen";
    if (size.close) return "w-0 h-0 overflow-hidden";
    if (size.min) return "w-[600px] h-[400px]";
    return "w-[600px] h-[400px]";
  };

  const StyleSixe = `${getSizeClass()} border border-(--color-stroke) bg-(--color-bg)`;

  const toggleSize = (key: "full" | "close" | "min") => {
    setSize((prev) => {
      if (prev[key]) {
        return { full: false, close: true, min: false };
      }
      return {
        full: key === "full",
        close: key === "close",
        min: key === "min",
      };
    });
  };

  const runCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

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
    <div className={StyleSixe}>
      <div className="flex gap-2 justify-start items-center border-b border-(--color-stroke) px-2 py-2 cursor-grab">
        <div className="flex gap-2">
          <span
            onClick={onClose}
            className="w-3 h-3 bg-[#FF5F57] rounded-full cursor-pointer hover:opacity-80 transition-opacity"
            title="Close"
          />
          <span
            onClick={() => toggleSize("min")}
            className="w-3 h-3 bg-[#FFBD2E] rounded-full cursor-pointer hover:opacity-80 transition-opacity"
            title="Minimize"
          />
          <span
            onClick={() => toggleSize("full")}
            className="w-3 h-3 bg-[#28C840] rounded-full cursor-pointer hover:opacity-80 transition-opacity"
            title="Maximize"
          />
        </div>

        <Link
          href="/"
          className="text-(--color-stroke)/70 text-sm hover:underline"
        >
          cipherunit.xyz/shell
        </Link>
      </div>

      <div className="p-4 font-mono text-sm overflow-y-auto h-[calc(100%-48px)]">
        {history.map((item, index) => (
          <div key={index} className="mb-2">
            <p className="text-(--color-secondary)">
              cipherunit@root:~#{" "}
              <span className="text-white/90">{item.command}</span>
            </p>
            <p className="text-(--color-stroke) mt-2">{item.output}</p>
          </div>
        ))}

        <div className="flex items-center gap-2">
          <span className="text-(--color-secondary)">cipherunit@root:~#</span>

          <input
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={runCommand}
            className="bg-transparent outline-none flex-1 text-white/90 caret-(--color-primery) caret-w-4"
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
}

export default Terminal;
