import Link from "next/link";
import Image from "next/image";
import {
  IconAtom,
  IconBrandAdobeIllustrator,
  IconBrandFigma,
  IconBrandGithub,
  IconBrush,
  IconCode,
  IconDeviceDesktop,
  IconFileCode,
  IconGitBranch,
  IconLayout,
  IconPalette,
  IconSparkles,
  IconWand,
  IconPhoto,
  IconArrowLeft,
} from "@tabler/icons-react";
import { NavbarDemo } from "@/component/NavBar";

const aboutHighlights = [
  { label: "Field", value: "CS Engineering" },
  { label: "Focus", value: "UX + Product" },
  { label: "Mindset", value: "Build & iterate" },
];

const skillGroups = [
  {
    title: "Brand & Visual Identity",
    icon: IconPalette,
    items: [
      "Logo Design",
      "Visual Identity",
      "Brand Guidelines",
      "Typography & Color Systems",
      "Art Direction",
    ],
  },
  {
    title: "Social Media Design",
    icon: IconSparkles,
    items: [
      "Social Media Posts",
      "Campaign Visuals",
      "Promotional Graphics",
      "Content Design",
      "Social Media Branding",
    ],
  },
  {
    title: "UI/UX & Web Design",
    icon: IconLayout,
    items: [
      "UI Design",
      "UX Design",
      "Responsive Design",
      "Design Systems",
      "Landing Pages",
      "Web Prototyping",
    ],
  },
  {
    title: "Front-End Development",
    icon: IconCode,
    items: [
      "Responsive Development",
      "Interactive Interfaces",
      "Performance Optimization",
    ],
  },
];

const toolGroups = [
  {
    title: "Design",
    icon: IconBrush,
    items: [
      { src: "/figma.png" },
      { src: "/adobe-photoshop-icon(1).png" },
      { src: "/500px-Adobe_Illustrator_CC_icon.svg.png" },
      { src: "/500px-Adobe_After_Effects_CC_icon.svg.png" },
      { src: "/canva-icon.png" },
    ],
  },
  {
    title: "Development",
    icon: IconDeviceDesktop,
    items: [
      { src: "/visual-studio-code-icon.png" },
      { src: "/git-icon.png" },
      { src: "/react-js-icon.png" },
      { src: "/nextjs-icon.png" },
      { src: "/tailwind-css-icon.png" },
      { src: "/javascript-programming-language-icon.png" },
      { src: "/typescript-programming-language-icon.png" },
    ],
  },
];

export default function AboutPage() {
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
            <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[500px] overflow-hidden rounded-4xl ">
                <Image
                  src="/my_picture.png"
                  alt="Aoues Charaf Eddine"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h1 className="mt-4 text-3xl font-bold font-inter  text-white md:text-4xl">
                    I’m studying computer science engineering and building
                    digital experiences that combine design with technology.
                  </h1>
                </div>

                <p className="max-w-xl text-base font-inter leading-8 text-slate-300 md:text-lg">
                  My name is Aoues Charaf Eddine, and I’m currently pursuing a
                  degree in computer science engineering. I enjoy creating
                  thoughtful digital products where technical logic meets visual
                  clarity, whether that means designing interfaces, developing
                  front-end experiences, or shaping a product from concept to
                  execution.
                </p>

                <p className="max-w-xl text-base leading-8 text-slate-300 md:text-lg">
                  I like solving real problems with clean structure, strong
                  communication, and a user-first mindset. My work sits at the
                  intersection of design, engineering, and product thinking.
                </p>

                <div className="flex flex-wrap gap-3 text-sm text-slate-200">
                  <span className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1.5">
                    Computer Science
                  </span>
                  <span className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1.5">
                    Product Design
                  </span>
                  <span className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1.5">
                    Front-end Development
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {aboutHighlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-slate-950/70 p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-3 text-lg font-semibold text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-12 space-y-6">
            <div className="rounded-[1.75rem]  p-6">
              <h2 className="text-6xl font-bold w-full text-center  text-white">
                Skills
              </h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {skillGroups.map(({ title, icon: Icon, items }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-cyan-400/15 bg-slate-950/60 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-500/10 text-cyan-200">
                        <Icon size={18} />
                      </span>
                      <h3 className="text-lg font-semibold text-white">
                        {title}
                      </h3>
                    </div>

                    <ul className="mt-4 space-y-2.5 text-sm text-slate-200">
                      {items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] p-6">
              <h2 className="text-6xl font-bold w-full text-center text-white">
                Tools
              </h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {toolGroups.map(({ title, icon: Icon, items }) => (
                  <div key={title} className="rounded-2xlp-5">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/25 bg-violet-500/10 text-violet-200">
                        <Icon size={18} />
                      </span>
                      <h3 className="text-lg font-semibold text-white">
                        {title}
                      </h3>
                    </div>

                    <div className="mt-4 flex flex-wrap justify-center gap-3 sm:justify-start">
                      {items.map((item, index) => (
                        <div
                          key={`${title}-${index}`}
                          className="flex h-16 w-16 items-center justify-center p-2"
                        >
                          <Image
                            src={item.src}
                            alt={title}
                            width={52}
                            height={52}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
