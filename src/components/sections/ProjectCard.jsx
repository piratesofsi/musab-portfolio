import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, description, tech, demo, github, tagline }) => {
  return (
    <div className="w-[300px] md:w-[340px] rounded-2xl p-[1px] 
    bg-gradient-to-br from-blue-500/30 to-purple-500/20
    hover:from-blue-500/60 hover:to-purple-500/40
    transition-all duration-300 h-full">

      {/* Inner Card */}
      <div className="rounded-2xl bg-[#0a0a0a] p-5 h-full flex flex-col
      hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(59,130,246,0.25)]
      transition-all duration-300 cursor-pointer group">

        {/* Title */}
        <h3 className="font-semibold text-[16px] text-white mb-1 
        group-hover:text-blue-400 transition">
          {title}
        </h3>

        {/* Tagline */}
        <p className="text-[11px] text-blue-400 mb-2">
          {tagline}
        </p>

        {/* Description */}
        <p className="text-gray-400 text-[13px] mb-4 min-h-[60px]">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <span 
              key={i}
              className="text-[11px] px-3 py-1 rounded-full 
              bg-blue-500/10 text-blue-400 
              hover:bg-blue-500/20 transition"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links (pushed to bottom) */}
        <div className="mt-auto flex items-center gap-4 text-[13px] text-blue-400">
          
          <a 
            href={demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline hover:scale-105 transition"
          >
            Live Demo
          </a>

          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline hover:scale-105 transition"
          >
            <FaGithub size={16} />
            Code
          </a>

        </div>

      </div>
    </div>
  );
};

export default ProjectCard;