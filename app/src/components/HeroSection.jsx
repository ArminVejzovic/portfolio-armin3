import React, { useState, useEffect, useContext } from 'react';
import { useTranslation } from "../i18n/i18n";

    const HeroSection = () => {
      const [isVisible, setIsVisible] = useState(false);
      const { translations } = useTranslation();

      useEffect(() => {
        setIsVisible(true);
      }, []);

      return (
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
                <h1 className="text-5xl lg:text-7xl font-black gradient-text leading-tight">
                  { translations.hero.name }
                </h1>
                <p className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 font-semibold">
                  { translations.hero.title }
                </p>
                <p className="text-lg lg:text-xl text-gray-500 dark:text-gray-500 leading-relaxed max-w-lg">
                  { translations.hero.tagline }
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="#projects" className="px-8 py-4 bg-gradient-primary text-white rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ripple">
                    { translations.hero.view_projects }
                  </a>
                  <a href="#contact" className="px-8 py-4 border-2 border-primary-500 text-primary-500 dark:text-primary-400 rounded-full font-bold text-lg hover:bg-primary-500 hover:text-white hover:scale-105 transition-all duration-300">
                    { translations.hero.lets_connect }
                  </a>
                </div>
              </div>

              <div className={`flex justify-center ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
                <div className="relative">
                  <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-primary rounded-full flex items-center justify-center text-8xl lg:text-9xl animate-float shadow-2xl animate-pulse-glow">
                    🚀
                  </div>
                  
                  <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/2 w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center text-2xl shadow-lg animate-orbit">
                      ⚡
                    </div>
                    <div className="absolute top-1/2 right-0 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl shadow-lg animate-orbit" style={{animationDelay: '2s'}}>
                      🎨
                    </div>
                    <div className="absolute bottom-0 left-1/2 w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center text-2xl shadow-lg animate-orbit" style={{animationDelay: '4s'}}>
                      💡
                    </div>
                    <div className="absolute top-1/2 left-0 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl shadow-lg animate-orbit" style={{animationDelay: '6s'}}>
                      🔥
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default HeroSection;