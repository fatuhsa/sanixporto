import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";

const ProjectItem = ({ title, description, link, tags, icon: Icon }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 border-b border-white/10 hover:bg-white/5 transition-all duration-300 first:border-t"
    >
      {/* Small top-right icon */}
      {Icon && (
        <div className="absolute top-4 right-4 text-gray-700 group-hover:text-gray-400 transition-colors duration-300">
          <Icon size={14} />
        </div>
      )}

      <div className="flex-1 pr-4">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h3 className="text-xl md:text-2xl font-bold group-hover:text-gray-300 transition-colors tracking-tight">
            {title}
          </h3>
          <div className="flex gap-2">
            {tags && tags.map((tag, i) => (
              <span key={i} className="text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 border border-white/10 rounded-sm text-gray-600 group-hover:border-white/20 group-hover:text-gray-400 transition-all">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="text-gray-400 text-sm md:text-base line-clamp-1 font-light group-hover:text-gray-300 transition-colors">
          {description}
        </p>
      </div>
      
      <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
        <FaArrowRight className="text-white text-xl" />
      </div>
    </a>
  );
};

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.elementType,
};

export default ProjectItem;
