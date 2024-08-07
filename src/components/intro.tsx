"use client"

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import IntroPicture from "./intro-picture";
import Socials from "./socials";
import LinksArrow from "./links-arrow";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-8 sm:px-24 pb-12"
    >
      <motion.div className="mt-[80px] flex flex-col sm:flex-row items-center justify-center max-w-[1200px] gap-x-4"
      initial={{
        opacity: 0,
        y: 24
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        delay: 0.15
      }}>
        <div className="flex-1">
          <h1 className="text-2xl sm:text-6xl font-bold tracking-[0.20rem] sm:leading-[5rem] w-[80%]">
            a fresh & creative react developer
          </h1>
          <p className="mt-8 leading-[2rem] text-zinc-600">
            Hi I&apos;m William Lowe. A Melbourne-based web developer with a
            focus on <span className="italic">NextJS</span>, <span className="italic">TypeScript</span> and <span className="italic">Tailwind</span>.
          </p>
          <Link
            href="#projects"
            className="mb-8 group relative mt-8 w-fit px-4 py-2 flex items-center gap-x-2 uppercase font-bold tracking-wide"
          >
            See my works
            <BsArrowRight className="opacity-80 group-hover:translate-x-2 transition duration-300" />
            <div className="absolute w-12 h-12 bg-zinc-900/10 rounded-full left-0 group-hover:scale-110 transition duration-300" />
          </Link>
        </div>
        <IntroPicture />
      </motion.div>
      <motion.div className="w-full max-w-[1200px] flex items-start mt-16"
      initial={{
        opacity: 0,
        y: 24
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        delay: 0.25
      }}>
        <Socials />
      </motion.div>
      <motion.div className="absolute hidden sm:block bottom-[20%] right-0"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 0.25
      }}>
        <LinksArrow 
          href="#about"
        />
      </motion.div>
    </section>
  );
}
