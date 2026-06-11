import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
  FaGithub,
} from "react-icons/fa";
import { personalInfo, socialLinks } from "../data/portfolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-zinc-950 py-24 border-t border-zinc-900">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20">
          <div className="space-y-8">
            <h4 className="text-5xl md:text-6xl font-bold tracking-tighter leading-none">
              LET&apos;S<br />
              <span className="text-zinc-600 text-4xl md:text-5xl">CONNECT</span>
            </h4>
            <p className="text-zinc-400 max-w-md text-lg leading-relaxed font-light">
              Always looking for new challenges and interesting projects to work on.
              Let&apos;s build something exceptional together.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-block text-2xl font-light border-b border-zinc-800 hover:border-white transition-all duration-500 pb-2"
            >
              {personalInfo.email}
            </a>
          </div>

          <div className="flex flex-col md:items-end justify-between py-2">
            <div className="space-y-6 w-full md:w-auto">
              <span className="text-zinc-500 font-bold text-[10px] uppercase tracking-[0.3em]">
                SOCIAL ARCHIVE
              </span>
              <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                <a
                  href={socialLinks.github}
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href={socialLinks.instagram}
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
                <a
                  href={socialLinks.facebook}
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">Facebook</span>
                </a>
                <a
                  href={socialLinks.youtube}
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">YouTube</span>
                </a>
                <a
                  href={socialLinks.telegram}
                  className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegramPlane size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">Telegram</span>
                </a>
              </div>
            </div>

            <div className="mt-12 md:mt-0 text-left md:text-right">
              <p className="text-zinc-600 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">
                Location
              </p>
              <p className="text-zinc-400 font-light">Remote / Indonesia</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-[10px] uppercase tracking-widest font-bold">
          <p>
            &copy; {currentYear} {personalInfo.name}
          </p>
          <div className="flex items-center gap-4">
            <span>Powered by SaniX</span>
            <div className="w-8 h-px bg-zinc-800"></div>
            <span>V 2.1.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
