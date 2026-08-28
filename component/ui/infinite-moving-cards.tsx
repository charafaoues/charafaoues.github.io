"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  useEffect(() => {
    addAnimation();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="group relative w-[350px] max-w-full shrink-0 overflow-hidden rounded-2xl border border-sky-200/0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.28),transparent_30%),linear-gradient(135deg,rgba(239,246,255,0.92),rgba(219,234,254,0.8),rgba(191,219,254,0.68))] px-8 py-6 shadow-[0_0_25px_rgba(59,130,246,0.18),0_0_35px_rgba(147,197,253,0.12)] backdrop-blur-xl md:w-[450px] dark:border-sky-400/15 dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_25%),linear-gradient(135deg,rgba(7,20,38,0.9),rgba(10,25,49,0.96),rgba(8,18,34,0.98))] dark:shadow-[0_0_22px_rgba(59,130,246,0.07),0_0_30px_rgba(96,165,250,0.05)]"
            key={item.title + idx}
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.18),transparent)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
            <blockquote className="relative z-10">
              <div className="flex flex-row items-center gap-3">
                <div className="flex flex-row items-center justify-center w-15 h-15  bg-black rounded-full ">
                  <img className="w-[80%]" src="logo.png" alt="" />
                </div>
                <div>
                  <span className="text-sm leading-[1.6] font-semibold text-sky-900 dark:text-sky-100">
                    Aoues Charaf Eddine
                  </span>
                  <p className="text-xs text-sky-500 dark:text-sky-400">
                    @Aoues_charafeddine
                  </p>
                </div>
              </div>
              <div className="relative z-20 mt-3 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-normal text-sky-700 dark:text-sky-300">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
            <div
              aria-hidden="true"
              className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)] rounded-[inherit]  opacity-80"
            ></div>
            <span className="relative z-20 text-sm leading-[1.6] font-normal text-sky-950 dark:text-sky-50">
              {item.quote}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
