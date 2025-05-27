import React from 'react';
import { Calendar, GraduationCap, Briefcase, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-1 w-24 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-white mb-6">My Background</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm Manisen Gupta, a passionate B.Tech student currently in my second semester at Teerthanker Mahaveer University, specializing in Computer Science and Engineering. My journey in technology began with a strong foundation in academics at St. Mary's Convent School, Gajraula, Amroha, where I completed my Class 10 and 12.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Currently, I'm expanding my practical knowledge through a full-stack development internship at Future Interns, where I'm applying classroom learning to real-world projects. I'm particularly enthusiastic about building AI tools to support content creators, believing technology should enhance creative processes.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My goal is to combine technical expertise with creative problem-solving to develop innovative solutions that make a meaningful impact. I'm continuously learning and exploring new technologies to stay at the forefront of this rapidly evolving field.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-white mb-6">Education & Experience</h3>

            <div className="space-y-8">
              <div className="flex">
                <div className="mr-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white">
                    <GraduationCap size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-white">B.Tech in Computer Science and Engineering</h4>
                  <p className="text-indigo-400">Teerthanker Mahaveer University</p>
                  <p className="text-gray-400">2024 - Present (2nd Semester)</p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white">
                    <GraduationCap size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-white">Class 10 & 12</h4>
                  <p className="text-indigo-400">St. Mary's Convent School, Gajraula, Amroha</p>
                  <p className="text-gray-400">Completed</p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white">
                    <Briefcase size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-white">Full-Stack Development Internship</h4>
                  <p className="text-indigo-400">Future Interns</p>
                  <p className="text-gray-400">Current</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-white text-center mb-10">My Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Web Development", percentage: 85 },
              { name: "App Development", percentage: 75 },
              { name: "Python Programming", percentage: 80 },
              { name: "Data Structures & Algorithms", percentage: 70 },
              { name: "React.js", percentage: 75 },
              { name: "Node.js", percentage: 70 },
              { name: "HTML/CSS", percentage: 90 },
              { name: "JavaScript", percentage: 80 }
            ].map((skill, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-lg font-medium text-white">{skill.name}</h4>
                  <span className="text-indigo-400">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2.5 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;