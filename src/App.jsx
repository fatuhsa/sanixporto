import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/SEO";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BentoGrid from "./components/BentoGrid";
import ProfileCard from "./components/ProfileCard";
import SocialCard from "./components/SocialCard";
import ProjectCard from "./components/ProjectCard";
import BentoCard from "./components/BentoCard";
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
            <SocialCard />
            <BentoCard className="md:col-span-1 md:row-span-1 flex items-center justify-center border-dashed border-zinc-700 bg-transparent">
               <span className="text-zinc-500 font-medium">Available for Work</span>
            </BentoCard>
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
