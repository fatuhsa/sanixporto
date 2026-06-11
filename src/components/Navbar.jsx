import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import { socialLinks } from "../data/portfolioData";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <nav 
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
          scrolled ? "py-4 glass-effect border-b border-zinc-800/50" : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="font-bold text-2xl tracking-tighter hover:opacity-80 transition-opacity">
            SANI<span className="text-zinc-500">X</span>
          </a>
          
          <button 
            onClick={toggleMenu}
            className="p-2 hover:bg-zinc-800 rounded-xl transition-colors group"
            aria-label="Toggle Menu"
          >
            <HiMenuAlt3 className="text-3xl group-hover:text-white text-zinc-400" />
          </button>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Sidebar Panel */}
      <aside 
        className={`fixed top-0 right-0 h-full w-full md:w-[400px] bg-zinc-950 z-[70] shadow-2xl border-l border-zinc-800 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-end">
            <button 
              onClick={toggleMenu}
              className="p-2 hover:bg-zinc-800 rounded-xl transition-colors group"
            >
              <HiX className="text-3xl group-hover:text-white text-zinc-400" />
            </button>
          </div>

          <div className="flex-grow flex flex-col justify-center gap-8">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold">Navigation</span>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-5xl md:text-6xl font-black tracking-tighter hover:text-blue-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-800">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold block mb-6">Socials</span>
            <div className="flex gap-6">
              <a href={socialLinks.github} target="_blank" rel="noreferrer" className="text-2xl text-zinc-400 hover:text-white transition-colors">
                <FaGithub />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="text-2xl text-zinc-400 hover:text-white transition-colors">
                <FaInstagram />
              </a>
              <a href={socialLinks.telegram} target="_blank" rel="noreferrer" className="text-2xl text-zinc-400 hover:text-white transition-colors">
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default NavBar;
