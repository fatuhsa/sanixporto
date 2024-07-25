import React from "react";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <HelmetProvider>
      <div className="bg-black text-white select-none min-h-screen flex flex-col justify-center items-center">
        <Navbar />
        <Header />
        <Introduction />
        <Projects />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
