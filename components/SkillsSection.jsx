import { useState } from "react";
import SkillItem from "./SkillItem";

import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava,
  FaGitAlt, FaGithub, FaNodeJs
} from "react-icons/fa";
import {
  SiGin, SiSqlite, SiMysql, SiTypescript, SiNextdotjs,
  SiFlutter, SiDart, SiTailwindcss, SiFirebase, SiVercel,
  SiCplusplus, SiExpo, SiMongodb, SiPostgresql, SiSupabase,
  SiExpress, SiBootstrap, SiFlask, SiStreamlit, SiAndroid,
  SiAndroidstudio, SiGo
} from "react-icons/si";

const skillsByCategory = {
  "Web & Mobile Development": [
    { icon: <FaReact className="text-sky-500" />, label: "React JS" },
    { icon: <SiNextdotjs className="text-white" />, label: "Next JS" },
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
    { icon: <SiGo className="text-cyan-600" />, label: "Golang" },
    { icon: <SiDart className="text-blue-500" />, label: "Dart" },
    { icon: <SiTypescript className="text-blue-600" />, label: "TypeScript" },
    { icon: <SiMysql className="text-orange-500" />, label: "SQL" },
  ],
  "Backend": [
    { icon: <FaNodeJs className="text-green-700" />, label: "Node.js" },
    { icon: <SiExpress className="text-white" />, label: "Express.js" },
    { icon: <SiFlask className="text-white" />, label: "Flask" },
    { icon: <SiStreamlit className="text-red-500" />, label: "Streamlit" },
    { icon: <SiGin className="text-cyan-600" />, label: "Gin (Go)" },
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
    { icon: <FaGithub className="text-white" />, label: "GitHub" },
    { icon: <SiVercel className="text-white" />, label: "Vercel" },
    { icon: <SiExpo className="text-white" />, label: "Expo Go" },
  ],
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("Web & Mobile Development");

  return (
    <section
      id="skills"
      className="py-24 px-6 text-left bg-transparent text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">
          Skills
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-transparent border border-gray-700 rounded-xl p-2 flex flex-wrap justify-center gap-2">
            {Object.keys(skillsByCategory).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 rounded-lg font-medium transition text-sm md:text-base ${
                  activeTab === category
                    ? "bg-white text-black"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

          {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-start">
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
