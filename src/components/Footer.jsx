import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";
import { personalInfo, socialLinks } from "../data/portfolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-black py-24 border-t border-white/10">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20">
          <div className="space-y-8">
            <h4 className="text-5xl md:text-6xl font-bold tracking-tighter leading-none">LET&apos;S<br/><span className="text-gray-500 text-4xl md:text-5xl">CONNECT</span></h4>
            <p className="text-gray-400 max-w-md text-lg leading-relaxed font-light">
              Always looking for new challenges and interesting projects to work on. 
              Let&apos;s build something exceptional together.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-block text-2xl font-light border-b border-white/20 hover:border-white transition-all duration-500 pb-2"
            >
              {personalInfo.email}
            </a>
          </div>
          
          <div className="flex flex-col md:items-end justify-between py-2">
            <div className="space-y-6">
              <span className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.3em]">SOCIAL ARCHIVE</span>
              <div className="flex gap-8">
                <a href={socialLinks.facebook} className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={24} />
                </a>
                <a href={socialLinks.instagram} className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={24} />
                </a>
                <a href={socialLinks.youtube} className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <FaYoutube size={24} />
                </a>
                <a href={socialLinks.telegram} className="text-gray-400 hover:text-white transition-colors" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
                  <FaTelegramPlane size={24} />
                </a>
              </div>
            </div>
            
            <div className="mt-12 md:mt-0 text-left md:text-right">
              <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">Location</p>
              <p className="text-gray-400 font-light">Remote / Indonesia</p>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-[10px] uppercase tracking-widest font-bold">
          <p>&copy; {currentYear} {personalInfo.name}</p>
          <div className="flex items-center gap-4">
            <span>Powered by SaniX</span>
            <div className="w-8 h-px bg-white/10"></div>
            <span>V 2.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
