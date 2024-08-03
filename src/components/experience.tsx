import { education, professional } from "@/_lib/data";
import Link from "next/link";
import { BsCaretDownFill } from "react-icons/bs";
import ReturnArrow from "./return-arrow";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen w-full flex flex-col bg-zinc-50 text-zinc-900"
    >
      <div className="flex flex-col mt-24 pb-12">
        <div className="h-[240px] flex flex-col justify-center gap-y-4 px-24 bg-zinc-900 text-zinc-50">
          <div className="flex gap-x-8 items-center">
            <h3 className="text-4xl font-bold tracking-wider">
              Always building, always learning.
            </h3>
            <div className="w-[60px] h-[2px] bg-zinc-600 rounded-full" />
          </div>
          <h5 className="text-zinc-600 tracking-wide text-sm">
            Here is a small sample of my recent projects.
          </h5>
        </div>
        <div className="flex px-24 mt-16">
          <div className="flex flex-col">
            <div className="relative flex flex-row items-center">
              <h3 className="text-4xl font-bold tracking-wider">
                Recent Work.
              </h3>
              <div className="absolute w-16 h-16 bg-zinc-900/10 rounded-full left-0" />
            </div>
            <ul className="mt-8 flex flex-col gap-y-4">
              {professional.map((prof) => (
                <li key={prof.role}>
                  <div className="flex items-center ">
                    <div className="bg-zinc-400 w-8 h-[2px]" />
                    <h3 className="uppercase font-bold ml-2">{prof.role}</h3>
                  </div>
                  <h5 className=" ml-16">{prof.organisation}</h5>
                  <p className="italic ml-16">{prof.date}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="ml-auto flex flex-col items-end">
            <div className="relative flex items-center justify-end">
              <div className="absolute w-16 h-16 bg-zinc-900/10 rounded-full right-0" />
              <h3 className="text-4xl font-bold tracking-wider">
                Qualifications.
              </h3>
            </div>
            <ul className="mt-8 flex flex-col gap-y-2 items-end text-right">
              {education.map((edu) => (
                <li key={edu.qualification}>
                  <div className="flex items-center justify-end">
                    <h3 className="uppercase font-bold mr-2">
                      {edu.qualification}
                    </h3>
                    <div className="bg-zinc-400 w-8 h-[2px]" />
                  </div>
                  <h5 className="mr-12">{edu.institute}</h5>
                  <p className="mr-12">
                    Completed: <span className="italic">{edu.completion}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute top-16 right-0">
        <ReturnArrow isDark={true} />
      </div>
      <Link
        className="absolute bottom-2 left-[50%]"
        href="#contact"
      >
        <BsCaretDownFill />
      </Link>
      <div className="-z-10 absolute left-[calc(50%-120px)] top-[calc(50%-120px)] aspect-square w-[240px] bg-white rounded-full" />
    </section>
  );
}
