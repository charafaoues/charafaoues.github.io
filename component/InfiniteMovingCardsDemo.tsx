  "use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I don’t just design interfaces or write code. I transform ideas into digital experiences that feel intentional, intuitive, and alive. Every interaction has a purpose, every detail has a reason, and every line of code brings the vision one step closer to reality.",
    name: "Charles Dickens",
    title: "Beyond the Interface",
  },
  {
    quote:
      "Great ideas deserve more than a beautiful screen. They need structure, interaction, performance, and personality. I combine design and development to turn abstract concepts into digital experiences people can actually feel and remember.",
    title: "Where Ideas Become Real",
  },
  {
    quote:
      "Design is not about making things look good. It is about understanding the idea, simplifying the complexity, and creating meaning. I use code as my tool and design as my language to build experiences that are beautiful, functional, and intentional.",
    title: "Designed With Purpose",
  },
  {
    quote:
      "I believe great digital work lives between creativity and precision. Where imagination meets architecture, and aesthetics meet engineering. I obsess over the details that others overlook,  because the smallest decisions often create the biggest experiences.",
    title: "The Craft",
  },
  {
    quote:
      "Every project begins as an idea sometimes clear, sometimes undefined. My job is to give that idea a structure, a visual identity, and a life of its own. I design the experience, engineer the system, and transform imagination into something people can interact with.",
    title: "From Vision to Reality",
  },
];
