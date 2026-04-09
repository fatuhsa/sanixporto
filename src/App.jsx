import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/SEO";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { personalInfo } from "./data/portfolioData";

function App() {
  return (
    <HelmetProvider>
      <div className="bg-black text-white select-none min-h-screen">
        <SEO 
          title={`${personalInfo.name} | ${personalInfo.role}`}
          description={personalInfo.description}
        />
        <Navbar />
        <main>
          <Introduction />
          <Projects />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
