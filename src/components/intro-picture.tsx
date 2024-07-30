"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../../public/me.png";

export default function IntroPicture() {
  return (
    <div className="relative flex-1 flex items-center justify-center">
      <div className="text-[400px] font-extrabold text-zinc-800">WL</div>
      <motion.div 
        className="absolute top-0"
        initial={{
          y: 10,
        }}
        animate={{
          y: -10
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
      <Image
        src={profilePic}
        alt="Profile picture of me"
        width={500}
        height={500}
        priority
        className="w-400 h-400 grayscale opacity-95 rounded-full brightness-0 invert hover:brightness-100 hover:invert-0 hover:opacity-100 transition duration-300"
      />
      </motion.div>
    </div>
  );
}
