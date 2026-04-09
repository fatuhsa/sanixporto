import { useState, useEffect } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 glass-effect" : "py-6 bg-transparent"
      }`}
    >
      <div className="content-container flex justify-between items-center">
        <a href="#intro" className="font-bold text-2xl tracking-tighter hover:opacity-80 transition-opacity">
          SANI<span className="text-gray-500">X</span>
        </a>
        <div className="flex space-x-8">
          <a href="#projects" className="nav-link font-medium">
            Projects
          </a>
          <a href="#contact" className="nav-link font-medium">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
