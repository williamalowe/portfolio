"use client"

import { motion } from "framer-motion"

export default function LinksArrow() {
  return (
    <motion.div 
      className="absolute right-4 flex flex-col items-center gap-y-12"
      initial={{
        y: 32
      }}
      animate={{
        y: 48
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      <div className="relative w-[2px] h-32">
        <div className="absolute top-0 left-0 w-[2px] h-32 bg-zinc-600"/>
        <div className="absolute top-0 -left-[4px] w-[2px] h-4 bg-zinc-600 rotate-[30deg]"/>
      </div>
      <p className="-rotate-90 uppercase tracking-wider underline underline-offset-4">Click Links</p>
    </motion.div>
  )
}
