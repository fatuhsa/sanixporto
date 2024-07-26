import React, { Suspense, lazy } from "react";
import image1 from "/images.png";
import image2 from "/images2.png";
import image3 from "/images3.png";

const ProjectItem = lazy(() => import("./ProjectItem"));

const projects = [
  {
    title: "Ceki",
    description: "A calculator for Ceki",
    link: "https://ceki.vercel.app/",
    thumbnail: image1
  },
  {
    title: "Age calculator",
    description: "How long have you lived?",
    link: "https://agelatoria.vercel.app/",
    thumbnail: image3
  },
  {
    title: "Telegram Bot",
    description: "A simple bot for Telegram",
    link: "https://github.com/fatuhsa/sanix-bot",
    thumbnail: "https://via.placeholder.com/300x300?text=Telegram+Bot"
  },
  {
    title: "Simple Calculator",
    description: "A basic calculator app",
    link: "https://sanix-calculator.vercel.app/",
    thumbnail: image2
  }
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="project min-h-screen w-full flex flex-col items-center justify-center bg-black py-16 border-b-2"
    >
      <div className="lists text-center p-6 bg-opacity-10 bg-white rounded-lg shadow-lg w-11/12 md:w-3/4">
        <p className="font-bold text-3xl mb-6">Projects</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Suspense fallback={<div>Loading...</div>}>
            {projects.map((project, index) => (
              <div key={index} className="flex justify-center">
                <ProjectItem
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  thumbnail={project.thumbnail}
                />
              </div>
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Projects;
