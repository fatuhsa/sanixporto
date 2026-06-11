import BentoCard from "./BentoCard";
import { personalInfo } from "../data/portfolioData";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactCard(props) {
  return (
    <BentoCard {...props} className={`md:col-span-1 md:row-span-1 flex flex-col justify-between ${props.className || ""}`}>
      <div>
        <h3 className="text-2xl font-bold text-white mb-2">Let&apos;s talk?</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Have a project in mind or just want to say hi?
        </p>
      </div>
      <a
        href={`mailto:${personalInfo.email}`}
        className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 rounded-xl font-bold hover:bg-zinc-200 transition-colors mt-4"
      >
        <FaPaperPlane className="text-sm" />
        Contact Me
      </a>
    </BentoCard>
  );
}
