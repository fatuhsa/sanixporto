import React from "react";

const Introduction = () => {
  return (
    <div
      id="intro"
      className="main min-h-screen w-full flex flex-col items-center justify-center"
    >
      <p className="press-start-2p-regular text-2xl">Welcome!</p>
      <div className="container flex items-center justify-center">
        <div className="roboto-thin m-3 text-left p-6 bg-opacity-10 bg-white rounded-lg shadow-lg">
          <p className="text-2xl">Hello, I'm</p>
          <p className="font-sans font-bold text-4xl">Fatuh Sani Ansori</p>
          <p className="text-xl mb-4">Web Developer</p>
          <p className="my-2 text-lg">
            I am a Computer Science student and a passionate tech enthusiast.
            Welcome to my portfolio website where I showcase my creations,
            projects, and anything else I want to share with the world.
          </p>
          <div className="mt-4 flex gap-4">
            <a
              href="#contact"
              className="bg-white text-black p-3 rounded-lg hover:bg-black hover:text-white hover:ring hover:ring-white font-bold transition duration-300"
            >
              Follow me
            </a>
            <a
              href="https://github.com/fatuhsa"
              className="bg-black text-white p-3 rounded-lg hover:bg-white hover:text-black hover:ring hover:ring-white font-bold transition duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
