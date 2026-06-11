import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/SEO";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BentoGrid from "./components/BentoGrid";
import ProfileCard from "./components/ProfileCard";
import ProjectCard from "./components/ProjectCard";
import SkillsCard from "./components/SkillsCard";
import ContactCard from "./components/ContactCard";
import SocialCard from "./components/SocialCard";
import { personalInfo, projects } from "./data/portfolioData";

function App() {
  const categories = ["Web App", "Game", "Tool", "Utility"];
  
  const groupedProjects = projects.reduce((acc, project) => {
    const cat = project.category || "Other";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(project);
    return acc;
  }, {});

  return (
    <HelmetProvider>
      <div className="bg-black text-white select-none min-h-screen font-sans">
        <SEO 
          title={`${personalInfo.name} | ${personalInfo.role}`}
          description={personalInfo.description}
        />
        <Navbar />
        <main className="pt-12 pb-20">
          <BentoGrid>
            <ProfileCard id="home" />
            <SkillsCard id="skills" />
            <ContactCard id="contact" />
            <SocialCard />
            
            <div id="projects" className="md:col-span-4" />
            {categories.map(category => (
              groupedProjects[category] && (
                <div key={category} className="md:col-span-4 mt-12 mb-4 contents">
                  <div className="md:col-span-4 flex items-center gap-4 px-2 pt-12 pb-4">
                    <h2 className="text-xl font-bold text-zinc-500 uppercase tracking-[0.3em]">
                      {category}s
                    </h2>
                    <div className="h-px bg-zinc-800 flex-grow"></div>
                    <span className="text-zinc-600 text-xs font-mono">
                      {groupedProjects[category].length.toString().padStart(2, '0')}
                    </span>
                  </div>
                  {[...groupedProjects[category]]
                    .sort((a, b) => {
                      if (a.gridSize === "md" && b.gridSize !== "md") return -1;
                      if (a.gridSize !== "md" && b.gridSize === "md") return 1;
                      return 0;
                    })
                    .map((project, index) => (
                      <ProjectCard key={`${category}-${index}`} project={project} />
                    ))}
                </div>
              )
            ))}
          </BentoGrid>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
