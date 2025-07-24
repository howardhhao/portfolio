import React from "react";

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects"  className="py-24 px-6 bg-transparent text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-5 text-white tracking-tight">
          Featured Projects
        </h2>
        <p className="text-center text-gray-400 text-base md:text-lg mb-8">
 Projects that highlight my skills across design, development and deployment
</p>

        {/* Project Cards - Horizontal Scroll */}
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-once="false" className="flex overflow-x-auto gap-6 px-2 py-2 no-scrollbar snap-x snap-mandatory">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="w-[90vw] sm:min-w-[420px] max-w-[420px] min-h-[420px] flex-shrink-0
                         bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5
                         hover:shadow-lg hover:border-white/20"
            >
              <div className="flex flex-col h-full">
                {/* Image */}
                <div className="mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover object-top rounded-xl shadow-md"
                  />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4 line-clamp-4">
                  {project.desc}
                </p>

                {/* Push tech + link to bottom */}
                <div className="flex-grow" />

                {/* Tech Icons */}
                <div className="flex flex-wrap gap-3 text-xl text-white mb-2">
                  {project.tech.map((icon, i) => (
                    <span key={i} className="hover:scale-110 transition-transform">
                      {icon}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-gray-400 font-medium hover:underline hover:opacity-90"
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
