import React from "react";
import { ParallaxHeroImages } from "./ui/parallax-hero-images";

const images = [
  "/nova/nova.png",
  "https://assets.aceternity.com/components/3d-globe.webp",
  "https://assets.aceternity.com/components/keyboard-2.webp",
  "/lumora/login.webp",
];

function Projects() {
  return (
    <div
      id="projects"
      className="scroll-mt-28 relative flex h-[90vh] w-full items-start justify-center overflow-hidden mt-30"
    >
      <div className="relative flex w-7xl items-start justify-center overflow-hidden py-12 h-full">
        <ParallaxHeroImages className="mt-20" images={images} />
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-start gap-4 px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-800 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] md:text-6xl dark:text-neutral-100 dark:drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
            My Projects
          </h1>
          <p className="max-w-md text-neutral-600 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] dark:text-neutral-400 dark:drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]">
            Explore a curated selection of my projects, showcasing my skills in
            design, development, and creative problem-solving. Each project
            reflects my commitment to delivering high-quality work and
            innovative solutions.
          </p>
          <div className="mt-8 flex w-full flex-col gap-6 items-center">
            <a
              href="/social-post"
              aria-label="Show social media post details"
              className="group relative inline-flex w-full max-w-[420px] sm:w-auto overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#CBACF9_0%,#041A53_50%,#60A5FA_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 group-hover:bg-gradient-to-r group-hover:from-[#041A53] group-hover:via-[#CBACF9] group-hover:to-[#60A5FA] transition-colors duration-300 px-8 py-4 text-lg font-semibold text-white shadow-xl backdrop-blur-3xl font-inter">
                View Social Post
              </span>
            </a>

            <a
              href="/website-project"
              aria-label="Show website details"
              className="group relative inline-flex w-full max-w-[420px] sm:w-auto overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#041A53_0%,#CBACF9_50%,#0EA5A9_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 group-hover:bg-gradient-to-r group-hover:from-[#CBACF9] group-hover:via-[#041A53] group-hover:to-[#0EA5A9] transition-colors duration-300 px-8 py-4 text-lg font-semibold text-white shadow-xl backdrop-blur-3xl font-inter">
                View Website
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
