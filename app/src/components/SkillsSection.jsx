import React, { useState, useEffect, useRef, useContext } from 'react';
import { ThemeContext } from './ThemeContext';

    const SkillsSection = () => {
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

      const skillCategories = [
        {
          title: 'Frontend Magic',
          icon: '⚡',
          skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux', 'GraphQL']
        },
        {
          title: 'Backend Power',
          icon: '🚀',
          skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'AWS']
        },
        {
          title: 'Design & Tools',
          icon: '🎨',
          skills: ['Figma', 'Adobe XD', 'Git', 'Webpack', 'Jest', 'Cypress', 'Storybook']
        }
      ];

      return (
        <section ref={sectionRef} id="skills" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4">Skills & Expertise</h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <div
                  key={category.title}
                  className={`bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover-lift border border-gray-100 dark:border-gray-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4 animate-pulse">{category.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-semibold hover:bg-gradient-primary hover:text-white transition-all duration-300 cursor-pointer hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default SkillsSection;