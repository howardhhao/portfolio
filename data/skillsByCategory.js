import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaGitAlt, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiSqlite, SiMysql, SiTypescript, SiNextdotjs, SiFlutter, SiDart, SiTailwindcss, SiFirebase, SiVercel, SiCplusplus, SiExpo, SiMongodb, SiPostgresql, SiSupabase, SiExpress, SiBootstrap, SiFlask, SiStreamlit, SiAndroid, SiAndroidstudio, SiGo } from "react-icons/si";
export const skillsByCategory = {
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
