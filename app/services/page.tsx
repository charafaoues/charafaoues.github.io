import Link from "next/link";
import {
  IconArrowLeft,
  IconBrush,
  IconCode,
  IconLayout,
  IconSpeakerphone,
  IconSparkles,
} from "@tabler/icons-react";
import { NavbarDemo } from "@/component/NavBar";

const services = [
  {
    title: "Brand & Visual Identity",
    description:
      "I create distinctive brand systems that help businesses communicate clearly and feel memorable across every touchpoint.",
    icon: IconSparkles,
  },
  {
    title: "Social Media Design",
    description:
      "From content-first visuals to campaign graphics, I design scroll-stopping assets that keep your brand consistent and engaging.",
    icon: IconSpeakerphone,
  },
  {
    title: "UI/UX & Web Design",
    description:
      "I design thoughtful interfaces and product experiences that are easy to use, visually refined, and built around user behavior.",
    icon: IconLayout,
  },
  {
    title: "Front-End Development",
    description:
      "I turn polished designs into responsive, high-performing web experiences using modern front-end technologies and clean implementation.",
    icon: IconCode,
  },
];

export default function ServicesPage() {
  return (
    <>
      <NavbarDemo />
      <main className="min-h-screen bg-black px-5 pb-20 pt-28 text-white sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-white/20 hover:text-white"
            >
              <IconArrowLeft size={20} stroke={1.8} />
              <span>Back to home</span>
            </Link>
          </div>

          <section className="rounded-[2rem] p-6 md:p-10">
            <div className="max-w-3xl">

              <h1 className="mt-4 text-3xl font-bold  font-inter text-white md:text-5xl">
                Design systems, digital experiences, and front-end craft.
              </h1>
              <p className="mt-5 text-base leading-8 font-inter text-slate-300 md:text-lg">
                I help brands and products turn ideas into clear, compelling,
                and conversion-aware experiences through thoughtful design and
                modern front-end execution.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 transition hover:border-cyan-400/30 hover:bg-slate-900"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-500/10 text-cyan-200">
                    <Icon size={22} />
                  </div>

                  <h2 className="mt-5 text-xl font-semibold text-white">
                    {title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
