import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import IntroPicture from "./intro-picture";
import Socials from "./socials";
import LinksArrow from "./links-arrow";

export default function Intro() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col items-center justify-center px-24"
    >
      <div className="flex items-center justify-center max-w-[1200px]">
        <div className="flex-1">
          <h1 className="text-6xl font-bold tracking-[0.20rem] leading-[5rem] w-[80%]">
            a fresh & creative react developer
          </h1>
          <p className="leading-[2rem] text-zinc-600">
            Hi I&apos;m William Lowe. A Melbourne-based web developer with a
            focus on NextJS, TypeScript and Tailwind.
          </p>
          <Link
            href="#projects"
            className="group relative mt-8 w-fit px-4 py-2 flex items-center gap-x-2 uppercase font-bold tracking-wide"
          >
            See my works
            <BsArrowRight className="opacity-80 group-hover:translate-x-2 transition duration-300" />
            <div className="absolute w-12 h-12 bg-zinc-900/10 rounded-full left-0 group-hover:scale-110 transition duration-300" />
          </Link>
        </div>
        <IntroPicture />
      </div>
      <div className="w-full max-w-[1200px] flex items-start mt-16">
        <Socials />
      </div>
      <div className="absolute bottom-[20%] right-0">
        <LinksArrow 
          href="#about"
        />
      </div>
    </section>
  );
}
