import BentoCard from "./BentoCard";

export default function ProjectCard({ project }) {
  const spanClass = project.gridSize === "md" ? "md:col-span-2 md:row-span-1" : "md:col-span-1 md:row-span-1";
  const Icon = project.icon;

  return (
    <BentoCard className={`${spanClass} flex flex-col justify-between group`}>
      <div className="flex justify-between items-start">
        <div className="p-3 bg-zinc-800 rounded-2xl group-hover:bg-zinc-700 transition-colors">
          <Icon className="text-2xl" />
        </div>
        <a href={project.link} target="_blank" className="text-zinc-500 hover:text-white transition-colors">
           <span className="sr-only">Visit</span>
           ↗
        </a>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
        <p className="text-zinc-400 text-sm line-clamp-2">{project.description}</p>
      </div>
    </BentoCard>
  );
}
