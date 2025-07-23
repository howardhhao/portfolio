import React from "react";

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800 dark:text-white tracking-tight">
          Featured Projects
        </h2>

        {/* Project Cards - Horizontal Scroll */}
        <div className="flex overflow-x-auto gap-7 px-1 py-2 no-scrollbar">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="min-w-[450px] max-w-[380px] min-h-[480px] flex-shrink-0 bg-white dark:bg-white/5 backdrop-blur-md dark:backdrop-blur-lg
                         border border-gray-200 dark:border-white/10 rounded-2xl p-5 
                         shadow-md dark:shadow-[0_4px_30px_rgba(255,255,255,0.05)]
                         hover:shadow-lg hover:scale-[1.03] transition-all duration-300 ease-in-out"
            >
              <div className="flex flex-col h-full">
                {/* Enlarged Image */}
                <div className="mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-xl shadow-md"
                  />
                </div>

                {/* Title + Desc */}
                <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-4">
                  {project.desc}
                </p>

                {/* Spacer to push tech icons and link to bottom */}
                <div className="flex-grow" />

                {/* Tech Icons */}
                <div className="flex flex-wrap gap-3 text-xl dark:text-white mb-2">
                  {project.tech.map((icon, i) => (
                    <span key={i} className="hover:scale-110 transition-transform">{icon}</span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline hover:opacity-90"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
