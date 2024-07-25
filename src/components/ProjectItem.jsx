import React from "react";

const ProjectItem = ({ title, description, link, thumbnail }) => {
  return (
    <a
      href={link}
      className="block w-full bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 lg:hover:scale-105 hover:shadow-lg"
    >
      <div className="relative w-full h-48">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="font-bold text-xl">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-700 text-base mb-4">{description}</p>
      </div>
    </a>
  );
};

export default ProjectItem;