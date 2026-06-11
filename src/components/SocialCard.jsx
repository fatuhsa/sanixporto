import BentoCard from "./BentoCard";
import { socialLinks } from "../data/portfolioData";
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";

export default function SocialCard() {
  return (
    <BentoCard className="md:col-span-1 md:row-span-1 flex flex-wrap gap-6 items-center justify-center">
      <a href={socialLinks.github} target="_blank" className="text-3xl hover:text-white transition-colors"><FaGithub /></a>
      <a href={socialLinks.instagram} target="_blank" className="text-3xl hover:text-white transition-colors"><FaInstagram /></a>
      <a href={socialLinks.telegram} target="_blank" className="text-3xl hover:text-white transition-colors"><FaTelegram /></a>
    </BentoCard>
  );
}
