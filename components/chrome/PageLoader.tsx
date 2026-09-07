"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { KingMark } from "@/components/icons/KingMark";

gsap.registerPlugin(useGSAP);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function PageLoader() {
  const pathname = usePathname();
  const overlay = useRef<HTMLDivElement>(null);
  const piece = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const root = overlay.current;
      const mark = piece.current;
      if (!root || !mark) return;

      const done = () => {
        window.dispatchEvent(new Event("page-ready"));
        overlay.current?.classList.add("is-gone");
      };

      overlay.current?.classList.remove("is-gone");

      gsap.killTweensOf([root, mark]);

      if (prefersReducedMotion()) {
        gsap.set(root, { autoAlpha: 0 });
        done();
        return;
      }

      const timeline = gsap.timeline({
        onComplete: done,
      });

      gsap.set(root, { autoAlpha: 1 });
      gsap.set(mark, { y: -18, scale: 0.82, autoAlpha: 0 });

      timeline
        .to(mark, {
          y: 0,
          scale: 1,
          autoAlpha: 1,
          duration: 0.34,
          ease: "power3.out",
        })
        .to(mark, {
          y: 2,
          duration: 0.1,
          ease: "power1.in",
        })
        .to(
          root,
          {
            autoAlpha: 0,
            duration: 0.28,
            ease: "power2.inOut",
          },
          "+=0.06",
        );
    },
    { dependencies: [pathname] },
  );

  return (
    <div
      ref={overlay}
      className="page-loader"
      aria-hidden
    >
      <span ref={piece} className="page-loader-piece">
        <KingMark className="page-loader-mark" title="" />
      </span>
    </div>
  );
}
