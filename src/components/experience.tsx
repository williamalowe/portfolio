import Link from "next/link";
import { BsCaretDownFill } from "react-icons/bs";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen w-full flex flex-col bg-zinc-50 text-zinc-900 justify-center"
    >
      <div className="flex flex-col mt-24">
        {/* content here */}
        
      </div>

      <Link className="absolute bottom-2 left-[50%]" href="#contact">
        <BsCaretDownFill />
      </Link>
      <h3 className="absolute -left-24 bottom-28 text-4xl text-zinc-950/40 font-bold tracking-wide uppercase -rotate-90">
        Experiences
      </h3>
      <div className="absolute left-[calc(50%-120px)] top-[calc(50%-120px)] aspect-square w-[240px] bg-white rounded-full" />
    </section>
  );
}
