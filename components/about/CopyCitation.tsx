"use client";

import { useState } from "react";

// Copies the BibTeX entry and confirms in place for two seconds.
export function CopyCitation({ bibtex }: { bibtex: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can be blocked; hand over the text to copy by hand.
      window.prompt("Copy the citation:", bibtex);
    }
  }

  return (
    <button type="button" className="pub-button" onClick={copy}>
      <span aria-live="polite">
        {copied ? "Citation copied" : "Copy citation (BibTeX)"}
      </span>
    </button>
  );
}
