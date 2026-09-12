"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { orgs } from "@/lib/data";
import { site } from "@/lib/site";
import { scrollToSection } from "@/lib/scroll";
import { OrgMark } from "@/components/icons/OrgMark";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const pieces = root.current?.querySelectorAll("[data-hero-fade]");
      if (!pieces?.length) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(pieces, { opacity: 1, y: 0 });
        return;
      }

      // Plays straight away: the headline should be readable within about
      // half a second, with no loader in front of it.
      gsap.fromTo(
        pieces,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power2.out" },
      );
    },
    { scope: root },
  );

  const marqueeOrgs = orgs.filter((org) => org.logo);
  const loop = [...marqueeOrgs, ...marqueeOrgs];

  return (
    <header ref={root} className="hero">
      <div className="hero-center">
        <p className="hero-greet" data-hero-fade>
          Hey, I&apos;m
          <Image
            className="hero-face"
            src={site.portrait}
            alt=""
            width={96}
            height={52}
            loading="eager"
          />
          {site.name.split(" ")[0]}
        </p>
        <h1 className="hero-lead" data-hero-fade>
          I help labs and product teams ship agent platforms, conversion-ready
          apps, and models that hold their shape under pressure.
        </h1>
        <div className="marquee" data-hero-fade>
          <div className="marquee-track">
            {loop.map((org, index) => (
              <OrgMark
                key={`${org.name}-${index}`}
                name={org.name}
                src={org.logo}
                width={org.logoWidth}
                height={org.logoHeight}
                href={org.url}
                hidden={index >= marqueeOrgs.length}
                className="marquee-item"
              />
            ))}
          </div>
        </div>
      </div>

      <a
        href="#works"
        className="hero-scroll"
        data-hero-fade
        onClick={(event) => {
          event.preventDefault();
          scrollToSection("works");
        }}
      >
        Selected work
        <span aria-hidden>⌄</span>
      </a>
    </header>
  );
}
