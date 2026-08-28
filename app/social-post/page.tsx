import Link from "next/link";
import { NavbarDemo } from "@/component/NavBar";
import { IconArrowLeft } from "@tabler/icons-react";
import Image from "next/image";
export default function SocialPostPage() {
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

          <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_0_30px_rgba(59,130,246,0.22)]   ">
            <div className="grid gap-8 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-10">
              <div className="space-y-6 pt-7">


                <div className="space-y-4">
                  <h1 className="text-4xl font-bold font-inter tracking-tight text-white md:text-6xl">
                    Social post concept for a product launch
                  </h1>
                  <p className="max-w-xl text-base text-slate-300 md:text-lg">
                    A high-contrast visual system designed to turn a technical
                    feature into a clear, scroll-stopping story for social media
                    audiences.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 text-sm text-slate-200">
                  <span className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1.5">
                    Creative direction
                  </span>
                  <span className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1.5">
                    Social design
                  </span>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-blue-500/20 via-slate-950 to-cyan-500/20 p-4">
                <div className="rounded-[1.25rem] border border-white/10 bg-slate-950 p-4 shadow-inner">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-800 to-cyan-400" />
                      <div>
                        <p className="font-medium text-white">
                          Aoues charaf eddine
                        </p>
                        <p className="text-xs text-slate-400">
                          @Aoues_charafeddine
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400">2 min ago</span>
                  </div>

                  <div className="mb-4 h-72 rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.7),_transparent_35%),linear-gradient(135deg,_#0f172a,_#111827_45%,_#1d4ed8)] p-4">
                    <div className="flex h-full items-end justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                          New launch
                        </p>
                        <h2 className="mt-2 text-3xl font-bold text-white">
                          Build smarter.
                          <br />
                          Ship faster.
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-slate-300">
                    <p>• Design + development in one flow</p>
                    <p>• Built for creative teams</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-10">
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
              <img
                src="/posts/random/random1.webp"
                alt=""
                className=" object-cover rounded-xl"
              />
              <img
                src="/posts/random/random2.webp"
                alt=""
                className="object-cover rounded-xl"
              />
            </div>

            <div className="mt-12 grid  gap-7 sm:grid-cols-2 md:grid-cols-3 gap-7">
              <img
                src="/posts/ecopluse/EcoPluse_01.webp"
                alt=""
                className=" object-cover rounded-xl"
              />
              <img
                src="/posts/ecopluse/EcoPluse_02.webp"
                alt=""
                className="object-cover rounded-xl"
              />
              <img
                src="/posts/ecopluse/EcoPluse_03.webp"
                alt=""
                className="object-cover rounded-xl"
              />
              <img
                src="/posts/ecopluse/EcoPluse_04.webp"
                alt=""
                className=" object-cover rounded-xl"
              />
              <img
                src="/posts/ecopluse/EcoPluse_05.webp"
                alt=""
                className="object-cover rounded-xl"
              />
              <img
                src="/posts/ecopluse/EcoPluse_06.webp"
                alt=""
                className="object-cover rounded-xl"
              />
            </div>

            <div className="mt-12 grid  gap-7 sm:grid-cols-2 md:grid-cols-3 gap-7">
              <img
                src="/posts/lumora/Lumora_01.webp"
                alt=""
                className=" object-cover rounded-xl"
              />
              <img
                src="/posts/lumora/Lumora_02.webp"
                alt=""
                className="object-cover rounded-xl"
              />
              <img
                src="/posts/lumora/Lumora_03.webp"
                alt=""
                className="object-cover rounded-xl"
              />
              <img
                src="/posts/lumora/Lumora_04.webp"
                alt=""
                className=" object-cover rounded-xl"
              />
              <img
                src="/posts/lumora/Lumora_05.webp"
                alt=""
                className="object-cover rounded-xl"
              />
              <img
                src="/posts/lumora/Lumora_06.webp"
                alt=""
                className="object-cover rounded-xl"
              />
            </div>
            <div className="mt-12 grid gap-7 sm:grid-cols-2 md:grid-cols-3 gap-7">
              <img
                src="/posts/your logo/Untitled-1_01.webp"
                alt=""
                className=" object-cover rounded-xl"
              />
              <img
                src="/posts/your logo/Untitled-1_02.webp"
                alt=""
                className="object-cover rounded-xl"
              />
              <img
                src="/posts/your logo/Untitled-1_03.webp"
                alt=""
                className="object-cover rounded-xl"
              />
              <img
                src="/posts/your logo/Untitled-1_04.webp"
                alt=""
                className=" object-cover rounded-xl"
              />
              <img
                src="/posts/your logo/Untitled-1_05.webp"
                alt=""
                className="object-cover rounded-xl"
              />
              <img
                src="/posts/your logo/Untitled-1_06.webp"
                alt=""
                className="object-cover rounded-xl"
              />
            </div>
          </section>

          <section className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] ">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-2xl font-semibold text-white">
                Creative objective
              </h3>
              <ul className="mt-5 space-y-4 text-slate-300">
                <li>
                  • Position the product as premium, useful, and immediately
                  understandable.
                </li>
                <li>
                  • Communicate the value proposition in a format optimized for
                  short-form attention.
                </li>
                <li>
                  • Build a strong visual identity that can scale across reels,
                  stories, and ads.
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950/80 p-6">
              <h3 className="text-2xl font-semibold text-white">
                Why it works
              </h3>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-medium text-cyan-200">Clarity</p>
                  <p className="mt-2 text-sm text-slate-300">
                    The message speaks to the user in plain language before
                    introducing technical detail.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-medium text-violet-200">
                    Visual rhythm
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    Strong contrast and smart spacing keep the focus on the most
                    important feature.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-medium text-emerald-200">
                    Authority
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    The layout suggests confidence and professionalism, which
                    supports conversion.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-medium text-amber-200">
                    Scalability
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    The design works across multiple content formats without
                    losing brand consistency.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
