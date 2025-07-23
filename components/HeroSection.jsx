import React from "react";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  return (
    <section
      id="hero-about"
      className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-800 text-gray-900 dark:text-white"
    >
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 max-w-7xl mx-auto gap-3 animate-fade-scale">
        
        {/* Image Section */}
        <div className="flex-1 hidden md:flex justify-center items-center">
          <div className="w-80 h-80 rounded-full border-8 border-white dark:border-white/20 p-1 shadow-lg dark:shadow-white/10 overflow-hidden">
            <img
              src="/avatar.png"
              alt="Wen Hao illustration"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left mr-16">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
  Hi, I'm{" "}
  <span className="text-blue-700 dark:text-blue-400">
    <Typewriter
      words={['Wen Hao']}
      loop={false}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={40}
      delaySpeed={1500}
    />
  </span>
</h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
            Final-year Computer Science student at{" "}
            <span className="font-semibold text-blue-700 dark:text-blue-300">
              Universiti Malaya
            </span>
            , majoring in{" "}
            <span className="font-semibold text-blue-700 dark:text-blue-300">
              Software Engineering
            </span>
            . This website highlights my personal background, 
            technical skills, project experiences & involvement in various competitions.
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group font-bold inline-flex items-center gap-3 px-8 py-3 border-2 border-blue-500 text-blue-700 dark:text-blue-300 rounded-lg
              bg-white dark:bg-transparent transition-all duration-300 ease-in-out
              hover:bg-blue-600 hover:text-white hover:scale-105 hover:shadow-blue-400 hover:shadow-lg transform text-lg"
          >
            <HiOutlineDocumentText className="text-2xl group-hover:-translate-y-1 transition-transform" />
            Download CV
          </a>
        </div>
      </div>
      
      {/* About Blurb */}
      <div className="py-10 px-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Always thinking, always building.
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 mt-16 mb-8">
  {[
    { title: "Hackathons Participated", number: "10" },
    { title: "Projects Built", number: "8" },
    { title: "Years of Experience", number: "3+" },
  ].map(({ title, number }) => (
    <div
      key={title}
      className="group relative w-64 rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105"
    >
      <div className="absolute inset-0 rounded-3xl p-[2px] bg-[conic-gradient(from_0deg,_#4f46e5_0%,_transparent_25%,_#4f46e5_50%,_transparent_75%,_#4f46e5_100%)] bg-[length:200%_200%] animate-border-spin group-hover:animate-border-hover-spin blur-sm opacity-70 transition-all duration-500" />
      
      <div className="relative z-10 rounded-3xl border border-gray-300 dark:border-white/20 p-8 md:p-10 bg-white/50 dark:bg-white/10 backdrop-blur-md text-black dark:text-gray-100 h-full text-center shadow-xl space-y-2 transition-all duration-300 group-hover:shadow-indigo-400/40">
        <div className="text-3xl md:text-4xl font-bold">{number}</div>
        <p className="text-lg md:text-xl font-medium leading-relaxed">{title}</p>
      </div>
    </div>
  ))}
</div>


        </div>
      </div>
    </section>
  );
};

export default HeroSection;
