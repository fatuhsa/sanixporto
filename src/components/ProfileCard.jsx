import BentoCard from "./BentoCard";
import { personalInfo } from "../data/portfolioData";
import { FaFileDownload } from "react-icons/fa";

export default function ProfileCard(props) {
  return (
    <BentoCard {...props} className={`md:col-span-2 md:row-span-2 p-8 flex flex-col justify-between group overflow-hidden relative ${props.className || ""}`}>
      <div className="z-10">
        <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-2 block">
          {personalInfo.role}
        </span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-4">
          SANIX
        </h1>
        <p className="text-xl md:text-2xl font-medium text-zinc-100 mb-6 max-w-md">
          Building digital experiences with precision and passion.
        </p>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-lg mb-8">
          {personalInfo.description}
        </p>
      </div>

      <div className="z-10 flex flex-wrap gap-4">
        <a
          href="https://drive.google.com/file/d/19WJloNPi9ZwIyCgdgMyUrAbQvY3dlSmq/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-zinc-200 transition-colors"
        >
          <FaFileDownload />
          Download CV
        </a>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-colors" />
    </BentoCard>
  );
}
