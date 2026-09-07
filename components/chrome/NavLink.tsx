"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { scrollToSection } from "@/lib/scroll";

type NavLinkProps = ComponentProps<typeof Link>;

function hashId(href: string) {
  if (!href.startsWith("/#")) return null;
  return href.slice(2);
}

export function NavLink({ href, onClick, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const target = typeof href === "string" ? hashId(href) : null;

  return (
    <Link
      href={href}
      onClick={(event) => {
        if (target && pathname === "/") {
          event.preventDefault();
          scrollToSection(target);
        }
        onClick?.(event);
      }}
      {...props}
    />
  );
}
