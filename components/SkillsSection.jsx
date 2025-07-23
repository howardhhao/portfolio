import { useState } from "react";
import SkillItem from "./SkillItem";

import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaGitAlt, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiSqlite, SiMysql, SiTypescript, SiNextdotjs, SiFlutter, SiDart, SiTailwindcss, SiFirebase, SiVercel, SiCplusplus, SiExpo, SiMongodb, SiPostgresql, SiSupabase, SiExpress, SiBootstrap, SiFlask, SiStreamlit, SiAndroid, SiAndroidstudio, SiGo } from "react-icons/si";
const skillsByCategory = {
  "Web & Mobile Development": [
    { icon: <FaReact className="text-sky-500" />, label: "React JS" },
    { icon: <SiNextdotjs className="text-black dark:text-white" />, label: "Next JS" },
    { icon: <FaReact className="text-indigo-400" />, label: "React Native" },
    { icon: <FaHtml5 className="text-orange-500" />, label: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-600" />, label: "CSS3" },
    { icon: <SiTailwindcss className="text-cyan-500" />, label: "Tailwind CSS" },
    { icon: <SiBootstrap className="text-purple-600" />, label: "Bootstrap" },
    { icon: <SiAndroid className="text-green-700" />, label: "Android SDK" },
    { icon: <SiAndroidstudio className="text-green-600" />, label: "Android Studio" },
    { icon: <SiFlutter className="text-blue-400" />, label: "Flutter" }, 
  ],
  "Programming Languages": [
    { icon: <FaJs className="text-yellow-400" />, label: "JavaScript" },
    { icon: <FaPython className="text-blue-500" />, label: "Python" },
    { icon: <FaJava className="text-red-600" />, label: "Java" },
    { icon: <SiCplusplus className="text-purple-500" />, label: "C++" },
    { icon: <SiGo className="text-cyan-600" />, label: "Go" },
    { icon: <SiDart className="text-blue-500" />, label: "Dart" },
    { icon: <SiTypescript className="text-blue-600" />, label: "TypeScript" },
    { icon: <SiMysql className="text-orange-500" />, label: "SQL" },
  ],
  "Backend": [
    { icon: <FaNodeJs className="text-green-700" />, label: "Node.js" },   
    { icon: <SiExpress className="text-gray-800 dark:text-white" />, label: "Express.js" },
    { icon: <SiFlask className="text-black dark:text-white" />, label: "Flask" },
    { icon: <SiStreamlit className="text-red-500" />, label: "Streamlit" },    
  ],
    "Databases": [
    { icon: <SiFirebase className="text-yellow-500" />, label: "Firebase" },
    { icon: <SiPostgresql className="text-blue-700" />, label: "PostgreSQL" }, 
    { icon: <SiMongodb className="text-green-600" />, label: "MongoDB" },      
    { icon: <SiSupabase className="text-green-500" />, label: "Supabase" },   
    { icon: <SiSqlite className="text-sky-600" />, label: "SQLite" },

  ],
  "CI/CD": [
    { icon: <FaGitAlt className="text-orange-600" />, label: "Git" },
    { icon: <FaGithub className="text-black dark:text-white" />, label: "GitHub" },
    { icon: <SiVercel className="text-black dark:text-white" />, label: "Vercel" },
    { icon: <SiExpo className="text-black dark:text-white" />, label: "Expo Go" },
  ],
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("Web & Mobile Development");

  return (
    <section id="skills" className="py-24 px-6 text-left bg-white dark:bg-gray-800 text-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mt-20 mb-12 text-gray-800 dark:text-white tracking-tight">
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
