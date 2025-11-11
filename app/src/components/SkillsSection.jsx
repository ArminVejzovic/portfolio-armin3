import React, { useState, useEffect, useRef, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["JavaScript", "Python", "C++"],
    },
    {
      title: "Frontend Development",
      icon: "⚡",
      skills: ["HTML", "CSS", "React.js", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      icon: "🧠",
      skills: ["Node.js", "Express.js", "FastAPI"],
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
    },
    {
      title: "Mobile Development",
      icon: "📱",
      skills: ["Android Jetpack Compose (Kotlin)"],
    },
    {
      title: "Tools & Other",
      icon: "🧰",
      skills: ["Git", "GitHub", "Redis", "CI/CD Pipelines", "Agile & Scrum"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A blend of technical precision and creative problem-solving —
            constantly learning, building, and improving.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-xl p-8 transform transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{category.icon}</span>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gradient-primary hover:text-white hover:scale-105 transition-all duration-300 cursor-default shadow-sm"
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
