import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-gray-950 shadow-md z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={40} height={40} priority />
          </Link>

          {/* Right section */}
          <div className="flex items-center space-x-4 text-gray-300">
            {/* Hamburger Menu */}
<button
  onClick={() => setMenuOpen(true)}
  className="hover:text-blue-400 transition transform hover:scale-110 hover:-rotate-12 duration-200 ease-in-out"
>
  <Menu className="w-6 h-6" />
</button>
          </div>
        </nav>
      </header>

      {/* Fullscreen Menu Modal */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50 animate-fade-scale">
         {/* Close button */}
<button
  onClick={() => setMenuOpen(false)}
  className="absolute top-6 right-6 text-gray-300 hover:text-blue-400 transition transform hover:scale-110 hover:rotate-12 duration-200 ease-in-out"
>
  <X className="w-7 h-7" />
</button>

          {/* Centered nav items */}
          <div className="flex flex-col items-center gap-8 text-2xl font-semibold text-gray-300">
            <button onClick={() => scrollTo('skills')} className="hover:text-blue-400 transition">
              Skills
            </button>
            <button onClick={() => scrollTo('projects')} className="hover:text-blue-400 transition">
              Projects
            </button>
            <button onClick={() => scrollTo('experiences')} className="hover:text-blue-400 transition">
              Experiences
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
