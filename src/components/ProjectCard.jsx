import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import BentoCard from "./BentoCard";

export default function ProjectCard({ project }) {
  const spanClass = project.gridSize === "md" ? "md:col-span-2 md:row-span-1" : "md:col-span-1 md:row-span-1";
  const Icon = project.icon;

  return (
    <BentoCard className={`${spanClass} flex flex-col justify-between group`}>
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-zinc-800 rounded-2xl group-hover:bg-zinc-700 transition-colors">
          <Icon className="text-2xl" />
        </div>
        <div className="flex gap-3">
          {project.sourceUrl && project.sourceUrl !== "#" && (
            <a 
              href={project.sourceUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
              title="View Source"
            >
              <FaGithub className="text-xl" />
            </a>
          )}
          {project.liveUrl && project.liveUrl !== "#" && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
              title="Live Demo"
            >
              <FaExternalLinkAlt className="text-lg" />
            </a>
          )}
        </div>
      </div>

      <div className="flex-grow">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-zinc-400 text-sm line-clamp-3 mb-4">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.techStack?.map((tech) => (
          <span 
            key={tech} 
            className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-zinc-800 text-zinc-400 rounded-md border border-zinc-700/50"
          >
            {tech}
          </span>
        ))}
      </div>
    </BentoCard>
  );
}
