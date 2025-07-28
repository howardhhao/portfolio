import React from "react";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { FiChevronDown } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";
import ParticlesBackground from "@/components/ParticlesBackground";
import RollingNumber from './RollingNumber';

const HeroSection = () => {
  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero-about"
      className="relative text-white min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 md:py-24 overflow-hidden"
    >
      <ParticlesBackground />

      <div className="relative z-10 ml-0 sm:ml-12 md:ml-24 lg:ml-36 xl:ml-44 max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <p className="text-lg text-blue-400 font-semibold">Hello, I’m</p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="text-blue-400">
              <Typewriter
                words={["Wen Hao"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto md:mx-0">
            Final-year Computer Science student at{" "}
            <span className="font-semibold text-blue-300">Universiti Malaya</span>, majoring in{" "}
            <span className="font-semibold text-blue-300">Software Engineering</span>. This website
            highlights my personal background, technical skills, project experiences and competition
            involvements.
          </p>

          <a
  href="/resume.docx"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg shadow-md border border-white/10 hover:border-white/20 transition-all duration-300"
>
  <HiOutlineDocumentText className="text-2xl" />
  Download CV
</a>


          {/* Stats Section */}
<div data-aos="fade-left" data-aos-duration="1500" className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-8 text-center md:text-left text-gray-300">
  <div>
    <p className="text-3xl font-bold text-white transition-colors duration-300 hover:text-blue-300">
      <RollingNumber value="8+" />
    </p>
    <p className="text-sm sm:text-base mt-1">Projects</p>
  </div>
  <div>
    <p className="text-3xl font-bold text-white transition-colors duration-300 hover:text-blue-300">
      <RollingNumber value="9+" />
    </p>
    <p className="text-sm sm:text-base mt-1">Hackathons</p>
  </div>
  <div>
    <p className="text-3xl font-bold text-white transition-colors duration-300 hover:text-blue-300">
      <RollingNumber value="3+" />
    </p>
    <p className="text-sm sm:text-base mt-1">Years Experience</p>
  </div>
  <div>
    <p className="text-3xl font-bold text-white transition-colors duration-300 hover:text-blue-300">
      <RollingNumber value="3.73" />
    </p>
    <p className="text-sm sm:text-base mt-1">CGPA</p>
  </div>
</div>

        </div>

        {/* Image Section */}
<div data-aos="fade-up" data-aos-duration="1500" className="flex-1 flex justify-center items-center">
  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-white/10 overflow-hidden shadow-lg ring-2 ring-white/10 transition-transform duration-500 ease-in-out hover:scale-105 hover:ring-blue-400/30 hover:shadow-2xl group">
    <img
      src="/avatar.png"
      alt="Wen Hao"
      className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
      loading="lazy"
    />
  </div>
</div>
      </div>

      {/* Scroll Down Icon */}
      <button
        onClick={scrollToSkills}
        aria-label="Scroll to Skills section"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
      >
        <FiChevronDown className="text-white text-3xl opacity-70" />
      </button>
    </section>
  );
};

export default HeroSection;
