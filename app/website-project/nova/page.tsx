import Link from "next/link";
import { NavbarDemo } from "@/component/NavBar";
import { IconArrowLeft } from "@tabler/icons-react";

const features = [
  "Smart product comparison",
  "Clear technical hierarchy",
  "Premium electronics storefront",
  "Responsive browsing for all screens",
  "Confident decision-making UX",
];

const novaScreenshots = [
  "/nova/Screenshot%202026-08-26%20at%2000-52-16%20Nova%20tech.webp",
  "/nova/Screenshot%202026-08-26%20at%2000-52-23%20Nova%20tech.webp",
  "/nova/Screenshot%202026-08-26%20at%2000-52-32%20Nova%20tech.webp",
  "/nova/Screenshot%202026-08-26%20at%2000-52-41%20Shopping%20Cart%20-%20Nova%20tech.webp",
  "/nova/Screenshot%202026-08-26%20at%2000-52-50%20Personal%20Information%20-%20NOVA-tech.webp",
  "/nova/Screenshot%202026-08-26%20at%2000-55-57%20Product%20Details%20-%20Nova%20tech.webp",
  "/nova/Screenshot%202026-08-26%20at%2000-56-14%20Services%20-%20Nova%20tech.webp",
  "/nova/Screenshot%202026-08-26%20at%2001-01-23%20Product%20Details%20-%20Nova%20tech.webp",
];

export default function NovaProjectPage() {
  return (
    <>
      <NavbarDemo />

      <main className="min-h-screen bg-black px-5 pb-20 pt-28 text-white sm:px-10">
        <div className="mx-auto lg:max-w-6xl xl:mx-10 xl:max-w-[100%]">
          <div className="mb-10 flex items-center justify-between gap-4 lg:mx-30">
            <Link
              href="/website-project"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-white/20 hover:text-white"
            >
              <IconArrowLeft size={20} stroke={1.8} />
              <span>Back to projects</span>
            </Link>

          </div>

          <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/80 p-6 shadow-[0_0_30px_rgba(34,211,238,0.15)] md:p-8 lg:mx-20">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                    Nova
                  </h1>
                  <p className="mt-4 max-w-xl text-base text-slate-300 md:text-lg">
                    Nova is a modern e-commerce experience for laptops and
                    smartphones, designed to simplify product discovery and help
                    customers compare options with confidence.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 text-sm text-slate-200">
                  <span className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1.5">
                    Tech commerce
                  </span>
                  <span className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1.5">
                    Comparison UX
                  </span>
                  <span className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1.5">
                    Premium product flow
                  </span>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end lg:pr-15">
                <div className="overflow-hidden p-3">
                  <img
                    src="/nova/nova_logo.png"
                    alt="Nova logo"
                    className="h-56 w-56 rounded-full bg-white object-contain "
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="mt-12 grid gap-6 md:grid-cols-3  lg:mx-30">
            {[
              {
                label: "Focus",
                value: "Clarity",
                detail:
                  "Translate technical details into clear buying decisions.",
              },
              {
                label: "Approach",
                value: "Comparison UX",
                detail: "Make product differences easy to scan and understand.",
              },
              {
                label: "Outcome",
                value: "Confident buys",
                detail:
                  "Reduce hesitation with a structured, premium browsing flow.",
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

          <section className="mt-12">
            <div className="grid gap-7 xl:grid-cols-2  xl:max-w-full mx-auto">
              {novaScreenshots.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`Nova project screenshot ${index + 1}`}
                  className="w-full rounded-xl object-cover shadow-[0_0_25px_rgba(34,211,238,0.15)]"
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
