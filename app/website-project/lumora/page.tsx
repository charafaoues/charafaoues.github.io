import Link from "next/link";
import { NavbarDemo } from "@/component/NavBar";
import { IconArrowLeft } from "@tabler/icons-react";

const features = [
  "Multi-vendor storefront layout",
  "Beauty-first category browsing",
  "High-conversion product storytelling",
  "Responsive shopping experience",
  "Curated discovery and comparison flow",
];

export default function LumoraProjectPage() {
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

          <section className="lg:mx-20 overflow-hidden rounded-[2rem] border border-pink-800/90 bg-gradient-to-br  from-pink-500 to-pink-700/20 p-6 shadow-[0_0_30px_rgba(236,72,153,0.15)] md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                    Lumora
                  </h1>
                  <p className="mt-4 max-w-xl text-base text-slate-300 md:text-lg">
                    Lumora brings multiple beauty and cosmetics stores together
                    in one premium digital marketplace, allowing customers to
                    discover brands, compare products, and shop without
                    friction.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 text-sm text-slate-200">
                  <span className="rounded-full bg-white text-pink-800 px-3 py-1.5">
                    Marketplace UX
                  </span>
                  <span className="rounded-full bg-white text-pink-800 px-3 py-1.5">
                    Beauty e-commerce
                  </span>
                  <span className="rounded-full bg-white text-pink-800 px-3 py-1.5">
                    Brand curation
                  </span>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end lg:pr-15">
                <div className="overflow-hidden p-3">
                  <img
                    src="/lumora/lumora_logo.png"
                    alt="Lumora logo"
                    className="h-56 w-56 rounded-full bg-white object-contain p-5"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="mt-12 grid gap-6 md:grid-cols-3 max-w-[90%] mx-auto">
            {[
              {
                label: "Focus",
                value: "Discovery",
                detail: "Help customers find the right beauty brands faster.",
              },
              {
                label: "Approach",
                value: "Curated flow",
                detail: "Create a smoother path between browsing and purchase.",
              },
              {
                label: "Outcome",
                value: "Trust + ease",
                detail:
                  "Build confidence with a refined and premium marketplace feel.",
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

          <section className="px-10">
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
          </section>

          <section className="mt-12 grid gap-7 xl:grid-cols-2 lg:max-w-[90%] xl:max-w-[100%] mx-auto">
            <img
              src="/lumora/login.webp"
              alt=""
              className="w-full rounded-3xl object-cover"
            />
            <img
              src="/lumora/Sign up.webp"
              alt=""
              className=" w-full rounded-3xl object-cover"
            />
            <img
              src="/lumora/lANDING3.webp"
              alt=""
              className="w-full rounded-3xl object-cover"
            />
            <img
              src="/lumora/show the details.webp"
              alt=""
              className="w-full rounded-3xl object-cover"
            />
            <img
              src="/lumora/paiment.webp"
              alt=""
              className="w-full rounded-3xl object-cover"
            />
            <img
              src="/lumora/profile.webp"
              alt=""
              className="w-full rounded-3xl object-cover"
            />
            <img
              src="/lumora/ADMIN profile.webp"
              alt=""
              className="w-full rounded-3xl object-cover"
            />
            <img
              src="/lumora/dashbord admin.webp"
              alt=""
              className="w-full rounded-3xl object-cover"
            />
            <img
              src="/lumora/shop.webp"
              alt=""
              className="w-full rounded-3xl object-cover"
            />
            <img
              src="/lumora/contracts.webp"
              alt=""
              className="w-full rounded-3xl object-cover"
            />
            <img
              src="/lumora/admin login.webp"
              alt=""
              className="w-full rounded-3xl object-cover"
            />
            <img
              src="/lumora/list of customer.webp"
              alt=""
              className="w-full rounded-3xl object-cover"
            />
          </section>
        </div>
      </main>
    </>
  );
}
