"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LinksArrow({ href }: { href: string }) {
  return (
    <Link href={href}>
      <motion.div
        className="flex flex-col items-center gap-y-12"
        initial={{
          y: 32,
        }}
        animate={{
          y: 48,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <p className="-rotate-90 uppercase text-xs tracking-wider">Scroll down</p>
        <div className="relative w-[2px] h-16">
          <div className="absolute top-0 left-0 w-[2px] h-16 bg-zinc-600" />
          <div className="absolute bottom-0 -left-[4px] w-[2px] h-4 bg-zinc-600 -rotate-[30deg]" />
        </div>
      </motion.div>
    </Link>
  );
}
