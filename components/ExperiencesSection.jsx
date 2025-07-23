import React from "react";
import ExperienceCard from "../components/ExperienceCard";

const ExperiencesSection = ({ experienceList }) => {
  return (
    <section id="experiences" className="py-24 px-6 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-800 dark:text-white tracking-tight">
          Experiences
        </h2>

        {/* Responsive Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {experienceList.map((exp, i) => (
            <ExperienceCard key={i} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
