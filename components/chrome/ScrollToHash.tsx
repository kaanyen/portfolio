"use client";

import { useEffect } from "react";
import { scrollToSection } from "@/lib/scroll";

export function ScrollToHash() {
  useEffect(() => {
    const id = window.location.hash.replace(/^#/, "");
    if (!id) return;

    const timer = window.setTimeout(() => scrollToSection(id), 80);
    return () => window.clearTimeout(timer);
  }, []);

  return null;
}
