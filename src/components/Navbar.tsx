import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from './Link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <Link href="#home" className="text-2xl font-bold text-white">
            Mani<span className="text-indigo-500">sen</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#portfolio">Portfolio</Link>
            <Link href="#services">Services</Link>
            <Link href="#contact">Contact</Link>
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com/ManisenGupta" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://in.linkedin.com/in/manisen-gupta-40a60133b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:guptankit90047@gmail.com" 
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-md z-50 flex flex-col justify-center items-center">
            <button 
              className="absolute top-5 right-5 text-white focus:outline-none"
              onClick={closeMenu}
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
            
            <div className="flex flex-col items-center space-y-6 text-xl">
              <Link href="#home" onClick={closeMenu}>Home</Link>
              <Link href="#about" onClick={closeMenu}>About</Link>
              <Link href="#portfolio" onClick={closeMenu}>Portfolio</Link>
              <Link href="#services" onClick={closeMenu}>Services</Link>
              <Link href="#contact" onClick={closeMenu}>Contact</Link>
            </div>
            
            <div className="flex items-center space-x-6 mt-8">
              <a 
                href="https://github.com/ManisenGupta" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://in.linkedin.com/in/manisen-gupta-40a60133b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:guptankit90047@gmail.com" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;