import React from 'react';
import { Monitor, Code, Cpu, Layout } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Layout size={32} />,
    title: "Web Design & Development",
    description: "Creating responsive, user-friendly websites using HTML, CSS, JavaScript, and React.js with clean design and seamless UX."
  },
  {
    icon: <Monitor size={32} />,
    title: "Portfolio & Business Websites",
    description: "Building custom portfolio and small business websites (e.g., gym & fitness) with attention to brand identity and user engagement."
  },
  {
    icon: <Cpu size={32} />,
    title: "AI Tools for Content Creators",
    description: "Developing AI-powered productivity tools tailored to streamline workflows for creators, from ideation to publishing."
  },
  {
    icon: <Code size={32} />,
    title: "Custom Development Solutions",
    description: "Providing tailored development solutions to meet specific business requirements and technical challenges."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Services</h2>
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-1 w-24 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I offer a range of services to help businesses and individuals establish a strong digital presence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-indigo-500/20"
            >
              <div className="w-16 h-16 rounded-full bg-indigo-600/20 flex items-center justify-center text-indigo-500 mb-6 mx-auto">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-4">{service.title}</h3>
              <p className="text-gray-400 text-center">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl overflow-hidden">
            <div className="bg-gray-900/90 backdrop-blur-sm p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-2/3 mb-8 md:mb-0 md:pr-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Let's Work Together</h3>
                  <p className="text-gray-300 mb-6">
                    I'm currently available for freelance work. If you have a project that you want to get started or need help with something, feel free to reach out.
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <span className="mr-2 text-indigo-400">✓</span>
                      Responsive, mobile-first designs
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-indigo-400">✓</span>
                      Custom functionality and integrations
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-indigo-400">✓</span>
                      User-focused experience and interface
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-indigo-400">✓</span>
                      Fast, optimized performance
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/3">
                  <a 
                    href="#contact" 
                    className="block w-full py-4 px-6 text-center font-medium rounded-lg bg-white text-indigo-600 hover:bg-gray-100 transition-colors"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;