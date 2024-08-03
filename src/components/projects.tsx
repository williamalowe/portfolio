import React from "react";
import ProjectItem from "./project-item";
import { projects } from "@/_lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen w-full flex flex-col bg-zinc-50 text-zinc-900 justify-center pt-24"
    >
      <div className="flex flex-col flex-1">
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
    </section>
  );
}
