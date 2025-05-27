import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Button from './Button';
import { Link } from './Link';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gray-900">
      {/* Animated background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-600/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-500/10 rounded-full text-indigo-400 mb-6 animate-fadeIn">
              <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2 animate-pulse"></span>
              Available for Freelance Work
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              <span className="block mb-2 animate-slideIn">Hello, I'm</span>
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text animate-slideIn delay-100">
                Manisen Gupta
              </span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 animate-fadeIn delay-200">
              A passionate B.Tech student specializing in Computer Science and Engineering, 
              crafting innovative solutions through web development, AI tools, and creative problem-solving.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 animate-fadeIn delay-300">
              <Button 
                variant="primary" 
                size="lg" 
                href="#portfolio"
                className="min-w-[160px]"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                href="#contact"
                className="min-w-[160px]"
              >
                Let's Talk
              </Button>
            </div>

            <div className="flex items-center gap-6 justify-center lg:justify-start animate-fadeIn delay-400">
              <a 
                href="https://github.com/ManisenGupta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://in.linkedin.com/in/manisen-gupta-40a60133b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:guptankit90047@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Animated gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient bg-gradient-size"></div>
              
              <div className="relative bg-gray-900 rounded-full p-2">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
                  <img 
                    src="https://i.postimg.cc/tRMBsrDY/MANI.jpg" 
                    alt="Manisen Gupta" 
                    className="w-full h-full object-cover filter saturate-[0.9] group-hover:saturate-100 transition duration-300"
                  />
                </div>
              </div>

              {/* Floating skill badges */}
              <div className="absolute -right-4 top-1/4 bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg animate-float">
                <span className="text-indigo-400">React.js</span>
              </div>
              <div className="absolute -left-4 top-2/3 bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg animate-float delay-150">
                <span className="text-purple-400">Node.js</span>
              </div>
              <div className="absolute right-0 bottom-8 bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg animate-float delay-300">
                <span className="text-indigo-400">Python</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-slow">
          <Link href="#about" className="flex flex-col items-center opacity-75 hover:opacity-100 transition-opacity">
            <span className="mb-2 text-sm">Scroll Down</span>
            <ArrowDown size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;