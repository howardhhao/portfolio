import { useState } from "react";
import SkillItem from "./SkillItem";
import { skillsByCategory } from "../data/skillsByCategory"; 

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("Web & Mobile Development");

  return (
    <section id="skills" className="py-24 px-6 text-left bg-white dark:bg-gray-800 text-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mt-12 mb-12 text-gray-800 dark:text-white tracking-tight">
          Skills
        </h2>

        {/* Tabs */}
<div className="flex justify-center mb-6">
  <div className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-1 flex flex-wrap justify-center gap-2">
    {Object.keys(skillsByCategory).map((category) => (
      <button
  key={category}
  onClick={() => setActiveTab(category)}
  className={`px-4 py-2 rounded-lg font-medium transition text-sm md:text-base ${
    activeTab === category
      ? "bg-black text-white dark:bg-white dark:text-black"
      : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
  }`}
>
  {category}
</button>

    ))}
  </div>
</div>

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-4 justify-center">
          {skillsByCategory[activeTab].map((skill, idx) => (
            <SkillItem
              key={idx}
              icon={
                <div className="text-3xl hover:scale-110 transform transition-transform duration-300">
                  {skill.icon}
                </div>
              }
              label={skill.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
