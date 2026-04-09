import { personalInfo, socialLinks } from "../data/portfolioData";

const Introduction = () => {
  return (
    <section
      id="intro"
      className="min-h-screen w-full flex flex-col items-center justify-center pt-24"
    >
      <div className="content-container">
        <p className="press-start-2p-regular text-gray-500 text-[10px] md:text-xs mb-8 animate-pulse tracking-widest uppercase">
          &gt; Welcome to my space :D
        </p>
        
        <div className="glass-effect p-8 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="text-9xl font-bold tracking-tighter">SANI</span>
          </div>
          
          <div className="relative z-10">
            <div className="roboto-thin mb-4 text-gray-400 uppercase tracking-widest text-xs">Principal Developer</div>
            <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter leading-none">
              {personalInfo.name.split(' ')[0]}<br/>
              <span className="text-gray-500">{personalInfo.name.split(' ').slice(1).join(' ')}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 max-w-2xl font-light">
              {personalInfo.description}
            </p>
            
            <div className="flex flex-wrap gap-6">
              <a
                href="#contact"
                className="px-10 py-4 bg-white text-black rounded-full hover:bg-black hover:text-white ring-1 ring-white transition-all duration-500 font-bold uppercase tracking-widest text-xs"
              >
                Hire me
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-transparent text-white rounded-full ring-1 ring-white/20 hover:ring-white transition-all duration-500 font-bold uppercase tracking-widest text-xs"
              >
                Repositories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
