"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

export default function ProjectItem({
  title,
  desc,
  tech,
  index,
  imgURL,
  demoURL,
}: {
  title: string;
  desc: string;
  tech: string;
  index: number;
  imgURL: string;
  demoURL: string;
}) {
  const arrow = {
    inactive: {
      x: 0,
    },
    active: {
      x: 8,
    },
  };
  const parent = {
    notHovered: {
      height: "160px",
    },
    hovered: {
      height: "320px",
    },
  };
  const image = {
    notHovered: {
      opacity: 0,
    },
    hovered: {
      opacity: 1,
    },
  };
  return (
    <motion.div
      className="relative group bg-zinc-400/20 hover:bg-zinc-50 flex items-center transition overflow-hidden"
      variants={parent}
      initial="notHovered"
      whileHover="hovered"
    >
      <div className="w-[200px] h-[2px] bg-zinc-400/40" />
      <h5 className="ml-2 text-zinc-400 text-lg">0{index}</h5>
      <div className="ml-12 relative w-full flex-1">
        <h3 className="text-zinc-800 font-bold group-hover:text-4xl transition">
          {title}
        </h3>
        <p className="absolute text-xs top-6 w-fit text-zinc-600 group-hover:top-12 transition">
          <span className="font-bold">{desc}</span>: {tech}
        </p>
      </div>
      <div className="flex flex-1 h-[160px] items-center">
        <motion.a
          href={demoURL}
          target="_blank"
          className="z-20 flex items-center text-zinc-600 font-bold gap-x-4 ml-auto mr-12 px-4 py-2 tracking-wider rounded-full bg-zinc-50 border border-zinc-400/40 text-xs uppercase pr-6"
          initial="inactive"
          whileHover="active"
        >
          View Project
          <motion.div variants={arrow}>
            <BsArrowRight />
          </motion.div>
        </motion.a>
        <motion.div
          className="absolute flex-1 items-center justify-end w-full h-[400px] top-8 rounded-tl overflow-hidden"
          variants={image}
        >
          <Image
            src={imgURL}
            alt={`${title} screenshot`}
            width={500}
            height={500}
            className="object-contain rotate-6 w-auto"
          ></Image>
        </motion.div>
      </div>
    </motion.div>
  );
}
