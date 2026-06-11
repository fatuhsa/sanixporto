import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/SEO";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BentoGrid from "./components/BentoGrid";
import ProfileCard from "./components/ProfileCard";
import ProjectCard from "./components/ProjectCard";
import SkillsCard from "./components/SkillsCard";
import ContactCard from "./components/ContactCard";
import { personalInfo, projects } from "./data/portfolioData";

function App() {
  return (
    <HelmetProvider>
      <div className="bg-black text-white select-none min-h-screen font-sans">
        <SEO 
          title={`${personalInfo.name} | ${personalInfo.role}`}
          description={personalInfo.description}
        />
        <Navbar />
        <main className="pb-20">
          <BentoGrid>
            <ProfileCard />
            <SkillsCard />
            <ContactCard />
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </BentoGrid>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
