import Link from "next/link";
import {
    IconArrowLeft,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { NavbarDemo } from "@/component/NavBar";

const contactLinks = [
  {
    label: "Email",
    value: "charaf.aoues@gmail.com",
    href: "mailto:charaf.aoues@gmail.com",
    icon: IconMail,
  },
  {
    label: "Instagram",
    value: "@aoues_charafeddine",
    href: "https://www.instagram.com/aoues_charafeddine/",
    icon: IconBrandInstagram,
  },
  {
    label: "LinkedIn",
    value: "Aoues Charaf Eddine",
    href: "https://www.linkedin.com/in/aoues-charaf-eddine-68ba68361/",
    icon: IconBrandLinkedin,
  },

];

export default function ContactPage() {
  return (
    <>
      <NavbarDemo />
      <main className="min-h-screen bg-black px-5 pb-20 pt-28 text-white sm:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 flex items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-white/20 hover:text-white"
            >
              <IconArrowLeft size={20} stroke={1.8} />
              <span>Back to home</span>
            </Link>

          </div>

          <section className="p-6 md:p-10">
            <div className="max-w-2xl">

              <h1 className="mt-4 text-3xl font-inter font-bold leading-tight text-white md:text-5xl">
                I&apos;m open to design, product, and front-end opportunities.
              </h1>
              <p className="mt-5 font-inter text-base leading-8 text-slate-300 md:text-lg">
                If you&apos;re looking for someone who can combine visual
                thinking, user-focused design, and clean front-end execution,
                I&apos;d love to hear about your project.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {contactLinks.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="group rounded-2xl border border-white/10 bg-slate-950/70 p-5 transition hover:border-cyan-400/30 hover:bg-slate-900"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-500/10 text-cyan-200">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                        {label}
                      </p>
                      <p className="mt-1 text-base font-medium text-white">
                        {value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
