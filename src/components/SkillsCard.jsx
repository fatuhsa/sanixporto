import BentoCard from "./BentoCard";
import { skills } from "../data/portfolioData";

export default function SkillsCard() {
  return (
    <BentoCard className="md:col-span-2 md:row-span-1 flex flex-col justify-between">
      <div>
        <h3 className="text-xs uppercase text-zinc-500 font-semibold tracking-wider mb-4">
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 px-3 py-2 bg-zinc-800 rounded-xl border border-transparent hover:border-zinc-700 transition-all group"
            >
              <skill.icon className="text-xl text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-sm font-medium text-zinc-300 group-hover:text-white">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
