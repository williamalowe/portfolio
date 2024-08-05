import { BsCaretDownFill } from "react-icons/bs";
import AboutImage from "./about-image";
import Link from "next/link";
import ReturnArrow from "./return-arrow";

export default function About() {
  return (
    <section
      id="about"
      className="relative h-screen w-full flex bg-zinc-900 text-zinc-50 justify-center px-24 pt-24"
    >
      <div className="flex items-center justify-center max-w-[1200px]">
        <div className="flex-1 flex items-center justify-center">
          <AboutImage />
        </div>
        <div className="flex-1 flex flex-col gap-y-4">
          <p className="text-4xl tracking-wider leading-[4rem]">
            I am a passionate{" "}
            <span className="font-bold">front-end developer</span> who loves
            bringing digital experiences to life.
          </p>
          <p className="leading-[2rem]">
            A soon-to-graduate Computer Science student, react developer, and classic big nerd. I have a wide range of educational 
            and professional experience with exposure to industries ranging from agriculture/farming to hospitality to government-level social and market research.
          </p>
        </div>
      </div>
      <Link className="absolute bottom-2 left-[50%]" href="#projects">
        <BsCaretDownFill />
      </Link>
    </section>
  );
}
