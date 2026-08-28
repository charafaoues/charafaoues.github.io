"use client";
import React from "react";
import { motion } from "motion/react";
import { Spotlight } from "./ui/Spotlight";
import { Grid } from "./ui/Grid";
import { TextGenerateEffect } from "./ui/TextGeneration";

function Hero() {
  return (
    <>
      <div className="w-full">
        <Spotlight
          className="h-[90vh] w-[50vw] top-10 left-full relative"
          fill="#041A53"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-80 top-28"
          fill="#041A53"
        />
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" />
      </div>

      <div className="absolute top-0 scale-150 w-[50vw] left-100 opacity-13 ">
        <Grid />
      </div>

      {/* Main Content Section */}
      <div className="absolute  inset-0  top-30  md:top-40  lg:top-30 ">
        <div className="flex flex-col gap-5 sm:flex-row  items-center h-fit justify-between sm:gap-12 px-8 md:px-8 lg:px-10 xl:px-20">
          {/* Text Section */}
          <div className="flex-1 ">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-[12px] sm:text-[14px] md:text-sm font-medium uppercase tracking-[0.25em] text-blue-200/80"
            >
              Designer • Developer • Creator
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              <TextGenerateEffect
                duration={2}
                filter={false}
                words={["Developer", "Designer"]}
                className="whitespace-pre-line font-inter text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-normal"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="mt-5 max-w-xl text-base leading-7 text-slate-200/85 sm:hidden md:block md:text-lg font-inter"
            >
              I build brands, design meaningful visuals, and turn ideas into
              digital experiences that look sharp and perform beautifully across
              social media.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="mt-6 sm:hidden md:block"
            >
              <a
                href="#projects"
                className="group relative inline-flex h-12 w-55 sm:h-15 sm:w-60 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#93C5FD_0%,#1E40AF_50%,#93C5FD_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 group-hover:bg-gradient-to-r group-hover:from-[#60A5FA] group-hover:via-[#2563EB] group-hover:to-[#1E3A8A] transition-colors duration-300 px-1 z-5 py-1 text-white backdrop-blur-3xl font-inter font-bold text-base md:text-lg">
                  Discover My Projects
                </span>
              </a>
            </motion.div>
          </div>
          {/* Image Section */}
          <div className="relative flex-shrink-0 ">
            <div className="absolute inset-[-12%] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.38)_0%,rgba(59,130,246,0.18)_22%,rgba(59,130,246,0.08)_38%,transparent_68%)] blur-2xl " />
            <motion.img
              initial={{ opacity: 0, x: 30, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              src="MyPhoto.png"
              alt="Aoues Charaf Eddine"
              className="relative z-10 -left-2 h-[90vw] max-h-[650] sm:max-h-[400] md:max-h-[450] lg:max-h-[500] xl:max-h-[550] 2xl:max-h-[625] w-auto"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 1.5%, rgba(0,0,0,1) 40%)",
                maskImage:
                  "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,1) 50%)",
              }}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="flex flex-col w-full px-10 align-center justify-center items-center text-center mt-10 md:mt-20 lg:mt-28 hidden sm:block md:hidden"
        >
          <p className="mt-5 text-center leading-7 text-slate-200/85 font-inter">
            I build brands, design meaningful visuals, and turn ideas into
            digital experiences that look sharp and perform beautifully across
            social media.
          </p>
          <motion.a
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            href="#projects"
            className="mt-5 group relative inline-flex h-15 w-60 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#93C5FD_0%,#1E40AF_50%,#93C5FD_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 group-hover:bg-gradient-to-r group-hover:from-[#60A5FA] group-hover:via-[#2563EB] group-hover:to-[#1E3A8A] transition-colors duration-300 px-3 py-1 text-white backdrop-blur-3xl font-inter font-bold text-base md:text-lg">
              Discover My Projects
            </span>
          </motion.a>
        </motion.div>
      </div>
    </>
  );
}

export default Hero;
