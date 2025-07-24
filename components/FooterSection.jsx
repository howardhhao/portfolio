import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-gray-950 text-center text-gray-300 py-10 border-t border-white/10 mt-10">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-xl font-semibold mb-6">Let’s Connect</h3>

        <div className="flex justify-center gap-6 mb-6 text-2xl">
          <a
            href="https://github.com/howardhhao"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/wong-wen-hao-9036b6258/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:wongwenhao19@email.com"
            className="hover:text-red-400 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="tel:+60138505210"
            className="hover:text-green-400 transition"
          >
            <FaPhone />
          </a>
        </div>

        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Wen Hao. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
