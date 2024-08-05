"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const navLinks = [
    {
      name: "about",
      href: "#about",
    },
    {
      name: "projects",
      href: "#projects",
    },
    {
      name: "experience",
      href: "#experience",
    },
    {
      name: "contact",
      href: "#contact",
    },
  ];

  const linkDot = {
    inactive: {
      opacity: 0,
      y: 8,
    },
    active: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 z-50 px-8 py-4 flex items-center w-full bg-zinc-50"
      initial={{
        opacity: 0,
        y: -24
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
    >
      <Link href="#home">
        <div className="w-12 h-12 -skew-x-[16deg] rounded-md bg-zinc-900 flex items-center justify-center">
          <h5 className="text-white font-bold tracking-widest skew-x-[16deg]">WL</h5>
        </div>
      </Link>
      <nav className="ml-auto">
        <ul className="flex gap-x-4 uppercase">
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              initial="inactive"
              whileHover="active"
              className="flex flex-col items-center hover:font-bold transition"
            >
              <Link href={link.href}>{link.name}</Link>
              <motion.div
                variants={linkDot}
                className="w-2 h-2 rounded-full bg-zinc-900"
              />
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
