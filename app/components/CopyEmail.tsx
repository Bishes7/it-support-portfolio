"use client";

import { useState } from "react";
import Icon from "./Icon";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:border-white/40 hover:bg-white/5"
    >
      <Icon name={copied ? "check" : "copy"} className="h-4 w-4" />
      {copied ? "Copied!" : "Copy email"}
    </button>
  );
}
