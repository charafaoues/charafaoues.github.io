"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
  text = "Build Amazing",
  words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
  duration = 3000,
}: {
  text: string;
  words: string[];
  duration?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pillWidth, setPillWidth] = useState<number>(0);
  const wordMeasureRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, words.length]);

  useLayoutEffect(() => {
    const updateWidth = () => {
      const measuredWord = wordMeasureRefs.current[currentIndex];

      if (!measuredWord) {
        return;
      }

      setPillWidth(measuredWord.getBoundingClientRect().width);
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, [currentIndex, words]);

  return (
    <>
      <motion.span
        layoutId="subtext"
        className=" text-xl sm:text-2xl font-bold tracking-tight drop-shadow-lg md:text-4xl text-white"
      >
        {text}
      </motion.span>

      <motion.span
        layout
        className="relative inline-flex w-fit items-center justify-center overflow-hidden rounded-md border border-blue-300/20 px-4 py-2 font-sans text-xl sm:text-2xl font-bold tracking-tight text-white shadow-[0_20px_60px_rgba(2,6,23,0.45)] md:text-4xl"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #020617 0%, #081b46 48%, #0f2e6e 100%)",
          backgroundSize: "200% 200%",
          width: pillWidth ? `${pillWidth}px` : "auto",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          width: pillWidth,
        }}
        transition={{
          backgroundPosition: {
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          },
          width: { duration: 0.35, ease: "easeInOut" },
        }}
      >
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.2),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_35%)]"
          animate={{ opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)" }}
            animate={{
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            className={cn(
              "relative z-10 inline-block whitespace-nowrap px-2 text-center",
            )}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 -z-10 px-4 py-2 font-sans text-xl sm:text-2xl font-bold tracking-tight opacity-0 md:text-4xl"
        >
          {words.map((word, index) => (
            <span
              key={word + index}
              ref={(element) => {
                wordMeasureRefs.current[index] = element;
              }}
              className="inline-block whitespace-nowrap px-2"
            >
              {word}
            </span>
          ))}
        </span>
      </motion.span>
    </>
  );
};
