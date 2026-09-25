"use client";

import { useEffect, useState } from "react";

const COMMAND = "whoami --verbose";

const OUTPUT: { key: string; value: string; accent?: boolean }[] = [
  { key: "name", value: "Bishes Adhikari" },
  { key: "role", value: "IT Support · Service Desk (L1/L2)" },
  { key: "location", value: "Launceston, TAS 🇦🇺" },
  { key: "certs", value: "AZ-900 ✓ MS-900 ✓ SC-900 ✓ AZ-104 …" },
  { key: "work_rights", value: "Full-time (485 visa)" },
  { key: "status", value: "● Available for immediate start", accent: true },
];

// Hero terminal that "types" the command, then prints the output line by line.
export default function Terminal() {
  const [typed, setTyped] = useState(0);
  const [lines, setLines] = useState(0);

  useEffect(() => {
    // With reduced motion every step fires immediately, so the full output just appears.
    const speed = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 1;
    const timers: number[] = [];
    const start = 700 * speed;
    for (let i = 1; i <= COMMAND.length; i++) {
      timers.push(window.setTimeout(() => setTyped(i), start + i * 65 * speed));
    }
    const outputStart = start + (COMMAND.length * 65 + 400) * speed;
    for (let i = 1; i <= OUTPUT.length; i++) {
      timers.push(window.setTimeout(() => setLines(i), outputStart + i * 220 * speed));
    }
    return () => timers.forEach(clearTimeout);
  }, []);

  const done = lines === OUTPUT.length;

  return (
    <div className="terminal glass relative w-full overflow-hidden rounded-2xl text-left font-mono text-[13px] leading-relaxed sm:text-sm">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-slate-400">bishes@helpdesk: ~</span>
      </div>
      <div className="min-h-[248px] p-5">
        <p>
          <span className="text-emerald-400">bishes@helpdesk</span>
          <span className="text-slate-500">:</span>
          <span className="text-sky-400">~</span>
          <span className="text-slate-500">$ </span>
          <span className="text-slate-100">{COMMAND.slice(0, typed)}</span>
          {typed < COMMAND.length && <span className="caret" />}
        </p>
        <div className="mt-3 space-y-1">
          {OUTPUT.slice(0, lines).map((line) => (
            <p key={line.key} className="terminal-line flex gap-3">
              <span className="w-28 shrink-0 text-violet-300">{line.key}</span>
              <span className={line.accent ? "text-emerald-400" : "text-slate-200"}>
                {line.value}
              </span>
            </p>
          ))}
        </div>
        {done && (
          <p className="terminal-line mt-3">
            <span className="text-emerald-400">bishes@helpdesk</span>
            <span className="text-slate-500">:</span>
            <span className="text-sky-400">~</span>
            <span className="text-slate-500">$ </span>
            <span className="caret" />
          </p>
        )}
      </div>
    </div>
  );
}
