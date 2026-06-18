"use client";

import Link from "next/link";
import { useState } from "react";
import { commands } from "./Commands";
import { HistoryItem } from "./Type";

function Terminal() {
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
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
    <div className="w-150 h-100 border border-(--color-stroke)">
      <div className="flex justify-between items-center border-b border-(--color-stroke) px-2 py-2">
        <Link
          href="/"
          className="text-(--color-stroke)/80 text-sm hover:underline"
        >
          cipherunit.xyz/shell
        </Link>

        <div className="flex gap-2">
          <span className="w-3 h-3 bg-[#FF5F57] rounded-full" />
          <span className="w-3 h-3 bg-[#FFBD2E] rounded-full" />
          <span className="w-3 h-3 bg-[#28C840] rounded-full" />
        </div>
      </div>

      <div className="p-4 font-mono text-sm overflow-y-auto h-[calc(100%-48px)]">
        {history.map((item, index) => (
          <div key={index} className="mb-2">
            <p className="text-(--color-secondary)">
              cipherunit@root:~${" "}
              <span className="text-white/90">{item.command}</span>
            </p>
            <p className="text-(--color-stroke) mt-2">{item.output}</p>
          </div>
        ))}

        <div className="flex items-center gap-2">
          <span className="text-(--color-secondary)">cipherunit@root:~$</span>

          <input
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={runCommand}
            className="bg-transparent outline-none flex-1 text-white/90"
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
}

export default Terminal;
