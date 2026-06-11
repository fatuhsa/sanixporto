import BentoCard from "./BentoCard";
import { personalInfo } from "../data/portfolioData";

export default function ProfileCard() {
  return (
    <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-end gap-4">
      <h1 className="text-4xl md:text-5xl font-bold">{personalInfo.name}</h1>
      <p className="text-zinc-400 text-lg leading-relaxed">{personalInfo.description}</p>
    </BentoCard>
  );
}
