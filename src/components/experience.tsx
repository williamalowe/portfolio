import Link from "next/link";
import { BsCaretDownFill } from "react-icons/bs";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen w-full flex flex-col bg-zinc-50 text-zinc-900 justify-center"
    >
      <div className="flex flex-col mt-24"></div>

      <Link className="absolute bottom-2 left-[50%]" href="#contact">
        <BsCaretDownFill />
      </Link>
    </section>
  );
}
