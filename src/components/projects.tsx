import React from 'react'
import ProjectItem from './project-item'

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen w-full flex flex-col bg-zinc-50 text-zinc-900 justify-center pt-24"
    >
      <div className="flex flex-col flex-1">
          <ProjectItem 
            title="Project A" 
            index={1} 
            imgURL={'abc'} 
            demoURL={'abc'}          
          />
          <ProjectItem 
            title="Project B" 
            index={2} 
            imgURL={'abc'} 
            demoURL={'abc'}          
          />
          <ProjectItem 
            title="Project C" 
            index={3} 
            imgURL={'abc'} 
            demoURL={'abc'}          
          />
          <ProjectItem 
            title="Project D" 
            index={4} 
            imgURL={'abc'} 
            demoURL={'abc'}          
          />
      </div>
    </section>
  )
}
