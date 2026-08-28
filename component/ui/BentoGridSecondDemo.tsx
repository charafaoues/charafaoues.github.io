import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { FlipWords } from "./flip-word";
import { LayoutTextFlip } from "./layout-text-flip";
import { div } from "motion/react-client";

export function BentoGridSecondDemo() {
  return (
    <div className=" mt-[200px] sm:mt-20 w-full font-inter">
      <div className="mb-8 text-center">
        <div>
          <LayoutTextFlip
            text="The workflow is "
            words={["Idea", "Architecture", "component", "styling"]}
          />
        </div>
        <p className="mt-2 text-sm text-slate-400 pt-3">
          How I take an idea from concept to polished product
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <BentoGrid className="md:auto-rows-[20rem]">
          <BentoGridItem
            title="1| Ideation & Asset Creation"
            description="This is where the concept takes shape. You can showcase how you draft custom graphics, logos, and high-fidelity mockups before any code is written."
            header={
              <img
                src="ideation.png"
                alt="Dawn of Innovation"
                className="w-full h-40 object-cover rounded-md"
              />
            }
            className="md:col-span-2 "
          />

          <BentoGridItem
            title="2| Architecture & Logic"
            description="Once the design is locked in, the transition to development begins by setting up a robust, scalable environment and defining the core data structures."
            header={
              <img
                src="architecture.jpg"
                alt="Digital Revolution"
                className="w-full h-40 object-cover rounded-md"
              />
            }
            className="md:col-span-1"
          />

          <BentoGridItem
            title="3| Component Development"
            description="Here, the static designs are broken down into modular, reusable pieces. This step demonstrates your ability to bring static UI elements to life with state management and dynamic logic."
            header={
              <img
                src="component.jpg"
                alt="Art of Design"
                className="w-full h-40 object-cover rounded-md"
              />
            }
            className="md:col-span-1"
          />

          <BentoGridItem
            title="4| Styling & Polish"
            description="The final development step ensures the coded product matches the original design exactly, adapting flawlessly across all screen sizes and devices."
            header={
              <img
                src="styling.jpg"
                alt="Power of Communication"
                className="w-full h-40 object-cover rounded-md"
              />
            }
            className="md:col-span-2"
          />
        </BentoGrid>
      </div>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
