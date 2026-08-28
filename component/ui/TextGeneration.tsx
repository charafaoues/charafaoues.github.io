"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";
import { FlipWords } from "./flip-word";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string[];
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const [showRole, setShowRole] = useState(false);

  useEffect(() => {
    const revealTimer = setTimeout(() => setShowRole(true), 2200);
    return () => clearTimeout(revealTimer);
  }, []);

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.15),
      },
    );
  }, [animate, duration, filter]);

  const firstLine = "Hi, I'm Aoues Charaf Eddine.\nI bring ideas to life as a";
  const wordsArray = firstLine.split(" ");

  return (
    <div className="font-bold">
      <div className="mt-4">
        <div
          className={cn(
            "dark:text-white text-black leading-snug tracking-wide",
            className,
          )}
        >
          <motion.div ref={scope}>
            {wordsArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                className="opacity-0"
                style={{ filter: filter ? "blur(10px)" : "none" }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.div>

          {showRole && (
            <div className="mt-2 flex items-baseline gap-2">
              
              <FlipWords
                words={words}
                duration={1200}
                className="px-0 text-white text-[2rem] sm:text-4xl xl:text-4xl 2xl:text-5xl leading-none text-blue-600" 
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
