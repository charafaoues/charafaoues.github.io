"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { NavbarDemo } from "@/component/NavBar";
import { IconArrowLeft } from "@tabler/icons-react";

const features = [
  "Brand-led homepage design",
  "Responsive portfolio sections",
  "Clear service and project storytelling",
  "Performance-focused structure",
  "Conversion-ready contact experience",
];

export default function WebsiteProjectPage() {
  return (
    <>
      <NavbarDemo />

      <main className="min-h-screen bg-black px-5 pb-20 pt-28 text-white sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-white/20 hover:text-white"
            >
              <IconArrowLeft size={20} stroke={1.8} />
              <span>Back to home</span>
            </Link>

          </div>

          <section className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950/80 p-6 shadow-[0_0_30px_rgba(34,211,238,0.15)] md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="space-y-6"
              >


                <div>
                  <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                    className="text-4xl font-inter font-bold text-white md:text-6xl"
                  >
                    A sharp digital presence for personal brand work
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
                    className="mt-4 max-w-xl text-base text-slate-300 md:text-lg"
                  >
                    This project focuses on a premium, easy-to-navigate website
                    experience that communicates expertise, builds trust, and
                    highlights the work with clarity.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
                  className="flex flex-wrap gap-3 text-sm text-slate-200"
                >
                  <span className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1.5">
                    UX strategy
                  </span>
                  <span className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1.5">
                    Web design
                  </span>
                  <span className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1.5">
                    Front-end build
                  </span>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-4"
              >
                <div className="rounded-[1rem] border border-white/10 bg-[#0b1120] p-4">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>

                  <div className="space-y-3">
                    <div className="h-3 w-28 rounded-full bg-slate-700" />
                    <div className="h-3 w-48 rounded-full bg-slate-700" />
                    <div className="mt-6 grid gap-3 md:grid-cols-2">
                      <div className="h-24 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-600/40" />
                      <div className="h-24 rounded-xl bg-gradient-to-br from-violet-500/30 to-purple-600/40" />
                    </div>
                    <div className="space-y-2 pt-3">
                      <div className="h-3 w-full rounded-full bg-slate-700" />
                      <div className="h-3 w-11/12 rounded-full bg-slate-700" />
                      <div className="h-3 w-10/12 rounded-full bg-slate-700" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                label: "Focus",
                value: "Brand clarity",
                detail: "Clear positioning and a stronger personal story",
              },
              {
                label: "Approach",
                value: "Design system",
                detail: "Consistent layouts and modular UI patterns",
              },
              {
                label: "Outcome",
                value: "Trust + flow",
                detail: "A smoother path from interest to contact",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-sm text-slate-400">{item.label}</p>
                <p className="mt-3 text-2xl font-bold text-white">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
              </div>
            ))}
          </section>

          <section className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] ">
            <div className="transition-transform duration-300 hover:scale-105 col-span-2 flex md:flex-row items-center flex-col gap-15 bg-linear-to-r from-pink-500 to-transparent pl-5 py-10 rounded-4xl">
              <div className=" flex-shrink-0 ">
                <img
                  className="bg-white rounded-full h-48"
                  src="/lumora/lumora_logo.png"
                  alt="Lumora"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Lumora
                </h2>

                <p className="mt-2 text-slate-300 pr-7">
                  Lumora is a modern multi-vendor e-commerce platform designed
                  to bring multiple cosmetics and beauty stores together in one
                  seamless digital marketplace. Customers can explore products
                  from different stores, discover new beauty brands, compare
                  offerings, and shop through a unified and intuitive
                  experience.
                </p>

                <Link
                  href={"/website-project/lumora"}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
                >
                  Discover project
                </Link>
              </div>
            </div>
            <div className="transition-transform duration-300 hover:scale-105 col-span-2 flex md:flex-row  flex-col  items-center gap-15 bg-linear-to-r from-blue-500 to-transparent pl-5 py-10 rounded-4xl">
              <div className=" flex-shrink-0 w-48  h-48 bg-white rounded-full">
                <img className=" w-fit" src="/nova/nova_logo.png" alt="nova" />
              </div>
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Nova
                </h2>

                <p className="mt-2 text-slate-300 pr-5">
                  Nova is a modern e-commerce platform specialized in laptops
                  and smartphones, designed to provide customers with a smooth,
                  flexible, and intuitive shopping experience. Customers can
                  easily explore products, compare options, discover detailed
                  specifications, and browse the store across desktop and mobile
                  devices.
                </p>

                <Link
                  href={"/website-project/nova"}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
                >
                  Discover project
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 ">
              <h3 className="text-2xl font-semibold text-white">
                Key features
              </h3>
              <ul className="mt-5 space-y-4 text-slate-300">
                {features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-950/80 via-slate-950 to-blue-950/70 p-6">
              <h3 className="text-2xl font-semibold text-white">
                Project direction
              </h3>
              <div className="mt-5 space-y-4 text-slate-300">
                <p>
                  The site balances visual depth with usability. Each section is
                  designed to reduce friction, elevate the portfolio, and give
                  visitors a strong reason to explore the work further.
                </p>
                <p>
                  The result is a premium, modern website that feels confident
                  on first glance while remaining practical for clients, hiring
                  teams, and collaborators.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
