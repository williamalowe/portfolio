"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ReturnArrow() {
  return (
    <Link href="#home">
      <motion.div
        className="flex flex-col items-center gap-y-12"
        initial={{
          y: 48,
        }}
        animate={{
          y: 32,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="relative w-[2px] h-16">
          <div className="absolute top-0 left-0 w-[2px] h-16 bg-zinc-50" />
          <div className="absolute top-0 -left-[4px] w-[2px] h-4 bg-zinc-50 rotate-[30deg]" />
        </div>
        <p className="-rotate-90 uppercase tracking-wider">Return Home</p>
      </motion.div>
    </Link>
  );
}
