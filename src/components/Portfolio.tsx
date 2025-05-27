import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Button from './Button';

interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  githubLink?: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    title: "Responsive Gym Website",
    category: "Web Development",
    description: "A fully responsive gym website featuring class schedules, trainer profiles, and membership plans. The site focuses on mobile compatibility and user experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    githubLink: "https://github.com/ManisenGupta",
  },
  {
    title: "Professional Portfolio Website",
    category: "Web Development",
    description: "A clean, professional portfolio website built to showcase skills, projects, and contact information with a smooth user experience.",
    technologies: ["React.js", "Node.js", "Tailwind CSS"],
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    githubLink: "https://github.com/ManisenGupta",
  },
  {
    title: "AI Tools for Content Creators",
    category: "AI Development",
    description: "An AI-powered platform that consolidates content creation tasks like ideation, writing assistance, scheduling, and editing into a single tool.",
    technologies: ["Python", "React.js", "OpenAI API"],
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    githubLink: "https://github.com/ManisenGupta",
  },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter.toLowerCase());

  return (
    <section id="portfolio" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Portfolio</h2>
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-1 w-24 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Check out some of my recent projects showcasing my skills in web development, app development, and AI tools.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {["all", "Web Development", "App Development", "AI Development"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  filter === category 
                    ? "bg-indigo-600 text-white" 
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category === "all" ? "All Projects" : category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-indigo-500/20 hover:shadow-xl"
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                  <div className="flex gap-4">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors"
                        aria-label="Live Project"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-indigo-600/10 text-indigo-400 rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" href="https://github.com/ManisenGupta" className="mx-auto">
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;