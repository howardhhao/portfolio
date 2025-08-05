import {
  FaReact,
  FaCss3Alt,
  FaJava,
  FaAndroid,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiSupabase,
  SiExpo,
  SiGooglemaps,
  SiTypescript,
  SiVercel,
  SiGo,
  SiGin,
  SiKotlin,
} from "react-icons/si";

export const projects = [
  {
    title: "Personal Portfolio Website",
    desc: "Developed a responsive personal website using Next.js & Tailwind CSS, showcasing my skills and projects.",
    image: "/portfolio.png",
    tech: [
      <SiNextdotjs title="Next.js" className="text-white" />,
      <SiTailwindcss title="Tailwind CSS" className="text-sky-500" />,
      <SiVercel title="Vercel" className="text-white" />,
    ],
    link: "https://github.com/howardhhao/portfolio",
  },
  
  {
    title: "SubShare",
    desc: "Developed a cross-platform mobile app to help users manage 'family-shared' subscriptions, with user roles and payment status tracking.",
    image: "/subshare.jpg",
    tech: [
      <FaReact title="React Native" className="text-indigo-400" />,
      <SiSupabase title="Supabase" className="text-green-500" />,
      <SiPostgresql title="PostgreSQL" className="text-blue-700" />,
      <SiExpo title="Expo" className="text-white" />,
    ],
    link: "https://github.com/howardhhao/subshare",
  },
  {
    title: "TBMDelivery",
    desc: "A cross-platform mobile app to check orders and schedules, provide real time services tracking and communication between installers and customers.",
    image: "/TBMDelivery.jpg",
    tech: [
      <FaReact title="React" className="text-sky-500" />,
      <SiTypescript title="TypeScript" className="text-blue-600" />,
      <SiFirebase title="Firebase" className="text-yellow-500" />,
      <FaNodeJs title="Node.js" className="text-green-600" />,
      <SiGooglemaps title="Google Maps" className="text-red-500" />,
      <SiExpo title="Expo" className="text-white" />,
    ],
    link: "#",
  },
    {
  title: "FinAI",
  desc: "A personal finance mobile app that can track daily expenses via OCR receipt scanning, with a smart AI budget coach that analyzes weekly spending against personalized budget goals.",
  image: "/finAI.jpg",
  tech: [
    <FaReact title="React Native" className="text-sky-500" />,
    <SiTypescript title="TypeScript" className="text-blue-600" />,
    <SiSupabase title="Supabase" className="text-green-500" />,
    <SiPostgresql title="PostgreSQL" className="text-blue-500" />,
    <SiExpo title="Expo" className="text-white" />,
  ],
  link: "https://github.com/howardhhao/FinAI",
},
  {
    title: "UMLIB Room Reservation",
    desc: "A cross-platform mobile app for study room bookings.",
    image: "umlib.jpg",
    tech: [
      <FaReact title="React Native" className="text-indigo-400" />,
      <SiFirebase title="Firebase" className="text-yellow-500" />,
      <SiExpo title="Expo" className="text-white" />,
    ],
    link: "https://github.com/howardhhao/umlib",
  },
  {
    title: "UniJobs",
    desc: "Developed the payment module and integrated JWT-based authentication for a university studnets freelance job portal using the MERN stack.",
    image: "/unijobs.png",
    tech: [
      <FaReact title="React" className="text-sky-500" />,
      <SiMongodb title="MongoDB" className="text-green-600" />,
      <FaNodeJs title="Node.js" className="text-green-600" />,
      <SiExpress title="Express.js" className="text-white" />,
      <FaCss3Alt title="CSS3" className="text-blue-600" />,
    ],
    link: "https://github.com/howardhhao/UM-WIF2003_WEB",
  },
  {
    title: "MyHomeCircle",
    desc: "Built the Community Module for a mobile app enabling technician bookings using Android (Java/Kotlin) and Firebase.",
    image: "/myhomecircle.png",
    tech: [
      <FaAndroid title="Android Studio" className="text-green-700" />,
      <SiFirebase title="Firebase" className="text-yellow-500" />,
      <FaJava title="Java" className="text-red-600" />,
      <SiKotlin title="Kotlin" className="text-indigo-500" />,
      
    ],
    link: "https://github.com/howardhhao/myHomeCircle",
  },
  {
    title: "JOJOLand Game",
    desc: "Create a virtual game world run in console using data structures like priority queues, trees, and graphs.",
    image: "/jojoland.png",
    tech: [<FaJava title="Java" className="text-red-600" />],
    link: "https://github.com/howardhhao/jojoland",
  },
  {
    title: "Slurm Analysis Web Dashboard",
    desc: "Process given SLURM dataset using Java and create a web dashboard using React JS to visualize the SLURM analysis.",
    image: "/slurm.png",
    tech: [
      <FaJava title="Java" className="text-red-600" />,
      <FaReact title="React" className="text-sky-500" />,
    ],
    link: "https://github.com/howardhhao/SLURM_Analysis",
  },
];
