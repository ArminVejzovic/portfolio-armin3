import React, { useState, useEffect, useRef, useContext } from 'react';
import { ThemeContext } from './ThemeContext';


    const ProjectsSection = () => {
      const [isVisible, setIsVisible] = useState(false);
      const sectionRef = useRef();
      const { isDark, toggleTheme } = useContext(ThemeContext);

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
          title: 'AI-Powered Dashboard',
          description: 'A comprehensive analytics platform with real-time data visualization, machine learning insights, and interactive charts built with React and D3.js.',
          icon: '🤖',
          tags: ['React', 'TypeScript', 'D3.js', 'Python', 'TensorFlow'],
          gradient: 'from-blue-500 to-purple-600'
        },
        {
          title: 'E-Commerce Platform',
          description: 'Full-stack e-commerce solution with payment integration, inventory management, and modern UI/UX design patterns.',
          icon: '🛒',
          tags: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS'],
          gradient: 'from-green-500 to-teal-600'
        },
        {
          title: 'Social Media App',
          description: 'Real-time social media application with live messaging, file sharing, and responsive design for all devices.',
          icon: '📱',
          tags: ['React Native', 'Socket.io', 'Node.js', 'PostgreSQL'],
          gradient: 'from-pink-500 to-rose-600'
        }
      ];

      return (
        <section ref={sectionRef} id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">Featured Projects</h2>
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
                      <a href="#" className="text-primary-500 hover:text-primary-600 font-bold transition-colors flex items-center group">
                        Live Demo
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                      <a href="#" className="text-primary-500 hover:text-primary-600 font-bold transition-colors flex items-center group">
                        Source Code
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default ProjectsSection;