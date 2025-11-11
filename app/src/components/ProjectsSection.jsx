import React, { useState, useEffect, useRef, useContext } from 'react';
import { useTranslation } from '../i18n/i18n';


    const ProjectsSection = () => {
      const [isVisible, setIsVisible] = useState(false);
      const sectionRef = useRef();
      const { translations } = useTranslation();

      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          },
          { threshold: 0.1 }
        );

        if (sectionRef.current) {
          observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
      }, []);

      const projects = [
    {
      title: 'Adoptly',
      description:
        translations.projects.project1_desc,
      icon: '🐾',
      tags: ['Node.js', 'Express.js', 'CSS', 'React.js', 'MongoDB', 'Socket.io', 'OpenAI Deepseek API', 'JWT'],
      gradient: 'from-amber-500 to-orange-600',
      link: "https://github.com/ArminVejzovic/adoptly"
    },
    {
      title: 'Foodie',
      description:
        translations.projects.project2_desc,
      icon: '🍔',
      tags: ['FastAPI', 'CSS', 'Next.js', 'PostgreSQL'],
      gradient: 'from-red-500 to-yellow-600',
      link: "https://github.com/ArminVejzovic/foodie"
    },
    {
      title: 'Project Records',
      description:
        translations.projects.project3_desc,
      icon: '📂',
      tags: ['Node.js', 'Express.js', 'CSS', 'EJS', 'PostgreSQL'],
      gradient: 'from-indigo-500 to-blue-600',
      link: "https://github.com/ArminVejzovic/Project-Records"
    },
  ];
      return (
        <section ref={sectionRef} id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4"> { translations.projects.title }</h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className={`bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl hover-lift border border-gray-100 dark:border-gray-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl relative overflow-hidden ripple`}>
                    {project.icon}
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a href={ project.link } target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 font-bold transition-colors flex items-center group">
                        { translations.projects.code }
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <a
                href="https://github.com/ArminVejzovic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                View More Projects on GitHub
              </a>
            </div>
          </div>
        </section>
      );
    };

    export default ProjectsSection;