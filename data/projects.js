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
    title: "Family Plan Subscription Manager",
    desc: "Developed a cross-platform mobile app using React Native to help users manage 'family-shared' subscriptions, with user roles and payment status tracking.",
    image: "/subshare.jpg",
    tech: [
      <FaReact title="React Native" className="text-indigo-400" />,
      <SiSupabase title="Supabase" className="text-green-500" />,
      <SiPostgresql title="PostgreSQL" className="text-blue-700" />,
      <SiExpo title="Expo" className="text-white" />,
    ],
    link: "#",
  },
  {
    title: "TBMDelivery",
    desc: "Built a real-time communication dashboard for logistics operations using React Native, Firebase & socket-based messaging.",
    image: "/projects/tbmdelivery.png",
    tech: [
      <SiTypescript title="TypeScript" className="text-blue-600" />,
      <FaNodeJs title="Node.js" className="text-green-600" />,
      <FaReact title="React" className="text-sky-500" />,
      <SiFirebase title="Firebase" className="text-yellow-500" />,
      <SiGooglemaps title="Google Maps" className="text-red-500" />,
      <SiExpo title="Expo" className="text-white" />,
    ],
    link: "#",
  },
  {
  title: "Student MicroLoan System",
  desc: "A backend MVP system using Go and PostgreSQL that allows university students to request, track and repay microloans. Includes role-based auth and admin approval features.",
  image: "/projects/microloan.png",
  tech: [
    <SiTypescript title="TypeScript" className="text-blue-600" />,
    <SiGo title="Go" className="text-cyan-600" />,
    <SiPostgresql title="PostgreSQL" className="text-blue-500" />,
    <SiGin title="Gin" className="text-pink-500" />,
  ],
  link: "#",
},
  {
    title: "UMLIB Room Reservation",
    desc: "Created a mobile app for study room bookings using React Native with Firebase integration for backend operations.",
    image: "umlib.jpg",
    tech: [
      <FaReact title="React Native" className="text-indigo-400" />,
      <SiFirebase title="Firebase" className="text-yellow-500" />,
      <SiExpo title="Expo" className="text-white" />,
    ],
    link: "#",
  },
  {
    title: "UniJobs",
    desc: "Developed the payment module and integrated JWT-based authentication for a job portal using the MERN stack.",
    image: "/projects/unijobs.png",
    tech: [
      <SiMongodb title="MongoDB" className="text-green-600" />,
      <FaNodeJs title="Node.js" className="text-green-600" />,
      <SiExpress title="Express.js" className="text-white" />,
      <FaReact title="React" className="text-sky-500" />,
      <FaCss3Alt title="CSS3" className="text-blue-600" />,
    ],
    link: "#",
  },
  {
    title: "MyHomeCircle",
    desc: "Built the Community Module for a mobile app enabling technician bookings using Android (Java/Kotlin) and Firebase.",
    image: "/projects/myhomecircle.png",
    tech: [
      <SiFirebase title="Firebase" className="text-yellow-500" />,
      <FaAndroid title="Android Studio" className="text-green-700" />,
      <FaJava title="Java" className="text-red-600" />,
    ],
    link: "#",
  },
  {
    title: "JOJOLand Game",
    desc: "Create a virtual game world using key data structures like priority queues, trees, and graphs.",
    image: "/projects/jojoland.png",
    tech: [<FaJava title="Java" className="text-red-600" />],
    link: "#",
  },
  {
    title: "Slurm Analysis Web Dashboard",
    desc: "Process given SLURM dataset using Java and create a web dashboard using React JS to visualize the SLURM analysis.",
    image: "/slurm.png",
    tech: [
      <FaJava title="Java" className="text-red-600" />,
      <FaReact title="React" className="text-sky-500" />,
      <FaCss3Alt title="CSS3" className="text-blue-600" />,
    ],
    link: "https://github.com/howardhhao/SLURM_Analysis",
  },
];
