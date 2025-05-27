import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from './Link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="text-2xl font-bold text-white">
              Mani<span className="text-indigo-500">sen</span>
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#portfolio">Portfolio</Link>
            <Link href="#services">Services</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Manisen Gupta. All rights reserved.
          </p>
          
          <p className="text-gray-400 flex items-center">
            Made with <Heart size={16} className="mx-1 text-red-500" /> by Manisen Gupta
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;