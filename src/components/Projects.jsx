import { Suspense, lazy } from "react";
import { projects } from "../data/portfolioData";

const ProjectItem = lazy(() => import("./ProjectItem"));

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-black py-32"
    >
      <div className="content-container">
        <header className="mb-20">
          <p className="press-start-2p-regular text-[10px] text-gray-500 mb-4 tracking-widest uppercase">
            &gt; Selected Works
          </p>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">PROJECTS</h2>
          <div className="h-1 w-24 bg-white/10 mt-8"></div>
        </header>
        
        <div className="flex flex-col border-t border-white/10">
          <Suspense fallback={<div className="py-20 text-gray-500 animate-pulse font-mono tracking-widest uppercase text-xs">Synchronizing...</div>}>
            {projects.map((project, index) => (
              <ProjectItem
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
                tags={project.tags}
                icon={project.icon}
              />
            ))}
          </Suspense>
        </div>
        
        <div className="mt-20">
          <a 
            href="https://github.com/fatuhsa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-all"
          >
            <span>Explore all repositories</span>
            <div className="w-12 h-px bg-gray-500 group-hover:w-20 group-hover:bg-white transition-all duration-500"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
