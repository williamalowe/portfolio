import { education, professional } from "@/_lib/data";
import Link from "next/link";
import { BsCaretDownFill } from "react-icons/bs";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen w-full flex flex-col bg-zinc-50 text-zinc-900"
    >
      <div className="flex flex-col px-24 mt-24">
        <div className="relative flex items-center w-fit">
          <div className="absolute w-16 h-16 bg-zinc-900/10 rounded-full right-0" />
          <h3 className="text-4xl font-bold tracking-wider">Qualifications.</h3>
        </div>
        <ul className="mt-8 flex flex-col gap-y-2">
          {education.map((edu) => (
            <li key={edu.qualification}>
              <div className="flex items-center">
                <div className="bg-zinc-400 w-8 h-[2px]"/>
                <h3 className="uppercase font-bold ml-2">{edu.qualification}</h3>
              </div>
              <h5 className="ml-16">{edu.institute}</h5>
              <p className="ml-16">Completed: <span className="italic">{edu.completion}</span></p>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="flex flex-col items-end justify-end px-24 mt-24">
        <div className="relative flex flex-row items-center w-fit">
          <h3 className="text-4xl font-bold tracking-wider">Professional.</h3>
          <div className="absolute w-16 h-16 bg-zinc-900/10 rounded-full left-0" />
        </div>
        <ul className="mt-8 flex flex-col items-end justify-end gap-y-2">
          {professional.map((prof) => (
            <li key={prof.role} className="text-right">
              <div className="flex items-center ">
                <h3 className="uppercase font-bold">{prof.role}</h3>
                <div className="bg-zinc-400 w-8 h-[2px] ml-2"/>
              </div>
              <h5 className="ml-16">{edu.institute}</h5>
              <p className="ml-16">Completed: <span className="italic">{edu.completion}</span></p>
            </li>
          ))}
        </ul>
      </div> */}

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
