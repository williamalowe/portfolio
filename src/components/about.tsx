import { BsCaretDown, BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import AboutImage from "./about-image";
import LinksArrow from "./links-arrow";
import Link from "next/link";

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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit non
            numquam quasi fugiat quisquam iusto ipsa recusandae quia repellendus
            itaque dolor perferendis vitae nihil officia, dolorum hic beatae
            ducimus facilis.
          </p>
        </div>
      </div>
      <h3 className="absolute -left-8 bottom-12 text-4xl text-zinc-950/40 font-bold tracking-wide uppercase -rotate-90">
        About
      </h3>
      <Link className="absolute bottom-2 left-[50%]" href="#projects">
        <BsCaretDownFill />
      </Link>
    </section>
  );
}
