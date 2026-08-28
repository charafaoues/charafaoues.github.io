"use client";
import React from "react";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className=" bg-black px-6 backdrop-blur-xl text-white shadow-[0_0_22px_rgba(59,130,246,0.07),0_0_90px_rgba(96,165,250,0.1)]">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="flex-1">
            <div className="text-2xl font-bold">Aoues Charaf Eddine</div>
            <p className="mt-3 max-w-md text-sm text-slate-300">
              Designer & Developer building memorable digital experiences 
              focused on clarity, performance and delightful interactions.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <h4 className="font-semibold mb-3">Explore</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <a href="/website-project" className="hover:text-white">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="flex flex-col items-start">
            <h4 className="font-semibold mb-3">Contact</h4>
            <div className="flex gap-3">
              <a
                href="mailto:charaf.aoues@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-white/5 hover:bg-white/10"
                aria-label="email"
              >
                <IconMail size={18} />
              </a>
              <a
                href="https://www.instagram.com/aoues_charafeddine/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-white/5 hover:bg-white/10"
                aria-label="instagram"
              >
                <IconBrandInstagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/aoues-charaf-eddine-68ba68361/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-white/5 hover:bg-white/10"
                aria-label="linkedin"
              >
                <IconBrandLinkedin size={18} />
              </a>

            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-400 gap-3">
          <div>
            © {new Date().getFullYear()} Aoues Charaf Eddine. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
