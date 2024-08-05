"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

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

  const [showPages, setShowPages] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 z-50 px-8 py-4 flex items-center w-full bg-zinc-50"
      initial={{
        opacity: 0,
        y: -24,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
    >
      <Link href="#home">
        <div className="w-12 h-12 -skew-x-[16deg] rounded-md bg-zinc-900 flex items-center justify-center">
          <h5 className="text-white font-bold tracking-widest skew-x-[16deg]">
            WL
          </h5>
        </div>
      </Link>
      <nav className="ml-auto hidden sm:block">
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
      <button
        onClick={() => setShowPages(!showPages)}
        className="relative ml-auto sm:hidden h-12 w-12 flex"
      >
        <div
          className={`absolute top-[calc(50%-4px)] h-1 w-8 bg-zinc-900 rounded-full ${
            showPages && "rotate-45 translate-y-1"
          } transition`}
        />
        <div
          className={`absolute top-[calc(50%+4px)] h-1 w-8 bg-zinc-900 rounded-full ${
            showPages && "-rotate-45 -translate-y-1"
          } transition`}
        />
      </button>
      <AnimatePresence>
        {showPages && (
          <motion.nav
            className="absolute flex fixed h-[calc(100vh-80px)] w-screen top-[80px] right-0 bg-zinc-900"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <ul className="relative flex-1 flex flex-col justify-around text-zinc-50 ml-8 uppercase text-2xl font-bold tracking-wider italic">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
