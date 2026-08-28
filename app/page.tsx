import Link from "next/link";
import Hero from "@/component/Hero";
import { InfiniteMovingCardsDemo } from "@/component/InfiniteMovingCardsDemo";
import { NavbarDemo } from "@/component/NavBar";
import Projects from "@/component/Projects";
import { BentoGridSecondDemo } from "@/component/ui/BentoGridSecondDemo";

export default function Home() {
  return (
    <>
      <NavbarDemo />
      <main className="relative  w-full overflow-x-hidden bg-black px-5 pt-28 sm:px-10 ">
        <Hero />
        <BentoGridSecondDemo />
        <Projects />
        <InfiniteMovingCardsDemo />
        <div className="mx-auto max-w-6xl pb-8 pt-4">
          
        </div>
      </main>
    </>
  );
}