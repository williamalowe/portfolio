import { BsArrowRight, BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import ReturnArrow from "./return-arrow";
import Link from "next/link";
import Socials from "./socials";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative h-screen w-full flex bg-zinc-900 text-zinc-50 px-24 pt-24"
    >
      <div className="flex-1 flex flex-col max-w-[1200px] gap-y-12">
        <div className="relative flex flex-col">
          <h3 className="z-10 text-4xl tracking-wider leading-[4rem] font-bold">
            Let&apos;s work together.
          </h3>
          <p className="z-10 text-zinc-100">
            This could be the start of something great!
          </p>
          <div className="top-0 left-0 absolute h-[120px] w-[120px] bg-[repeating-linear-gradient(-45deg,transparent,#52525b,transparent_2px,transparent_12px)] rounded-full" />
        </div>
        <div className="flex-1 flex flex-col gap-y-4 justify-center">        
          <div>
            <h3 className="text-2xl font-bold text-zinc-400/40">Email</h3>
            <p className="ml-8 italic">WilliamLoweDev@Gmail.com</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-zinc-400/40">GitHub</h3>
            <a href="https://github.com/williamalowe" className="ml-8 italic">github.com/williamalowe</a>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-zinc-400/40">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/william-lowe-b08707297/" className="ml-8 italic">linkedin.com/in/william-lowe-b08707297/</a>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-zinc-400/40">Instagram</h3>
            <a href="https://www.instagram.com/will.lowe.webdev/" className="ml-8 italic">instagram.com/will.lowe.webdev/</a>
          </div>
        </div>
      </div>
      <Link className="absolute bottom-2 left-[50%]" href="#projects">
        <BsCaretUpFill />
      </Link>
    </section>
  );
}
