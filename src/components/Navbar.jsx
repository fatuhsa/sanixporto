import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#intro" className="font-bold text-xl">Home</a>
        <div className="space-x-4">
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;