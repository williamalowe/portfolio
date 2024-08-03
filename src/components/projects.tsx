import React from "react";
import ProjectItem from "./project-item";
import { projects } from "@/_lib/data";
import { BsArrowRight } from "react-icons/bs";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen w-full flex flex-col bg-zinc-50 text-zinc-900 justify-center"
    >
      <div className="flex flex-col mt-24">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            desc={project.description}
            tech={project.tech}
            index={index + 1}
            imgURL={project.imageURL}
            demoURL={project.demoURL}
          />
        ))}
      </div>
      <div className="flex-1 min-h-[320px] flex flex-col gap-y-4 justify-center px-24">
        <h5 className="text-zinc-600 uppercase tracking-wide text-sm">There&apos;s More</h5>
        <a 
          href="https://github.com/williamalowe"
          className="group flex text-4xl gap-x-8 font-bold tracking-wider"
        >
          view all projects. <BsArrowRight className="text-zinc-400 group-hover:translate-x-8 transition" />
        </a>
      </div>
    </section>
  );
}
