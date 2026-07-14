"use client";

import { useRef, useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const blobs = container.querySelectorAll<HTMLElement>("[data-parallax]");
      blobs.forEach((blob) => {
        const speed = parseFloat(blob.getAttribute("data-parallax") || "0");
        const section = blob.closest("section");
        if (!section) return;
        gsap.to(blob, {
          y: speed * 200,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      const counters = container.querySelectorAll<HTMLElement>("[data-count-to]");
      counters.forEach((el) => {
        const target = parseFloat(el.getAttribute("data-count-to") || "0");
        const suffix = el.getAttribute("data-count-suffix") || "";
        const hasCommas = el.getAttribute("data-count-commas") === "true";
        const section = el.closest("section");
        if (!section) return;

        if (el.getAttribute("data-count-done") === "true") return;
        el.setAttribute("data-count-done", "true");

        ScrollTrigger.create({
          trigger: section,
          start: "top 80%",
          once: true,
          onEnter: () => {
            const obj = { val: 0 };
            gsap.to(obj, {
              val: target,
              duration: 2,
              ease: "power2.out",
              onUpdate: () => {
                let display: string;
                if (hasCommas) {
                  display = Math.floor(obj.val).toLocaleString();
                } else if (Number.isInteger(target)) {
                  display = Math.floor(obj.val).toString();
                } else {
                  display = obj.val.toFixed(1);
                }
                el.textContent = display + suffix;
              },
            });
          },
        });
      });
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
