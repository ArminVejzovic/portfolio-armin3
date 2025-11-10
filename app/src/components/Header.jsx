import { useState, useContext, useEffect, useRef } from "react";
import { ThemeContext } from "./ThemeContext";
import { useTranslation } from "../i18n/i18n";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const { language, changeLanguage, translations } = useTranslation();
  const headerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 w-full glass-effect z-50 border-b border-gray-200 dark:border-gray-700"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex items-center gap-2 text-2xl font-bold transition-transform duration-300 hover:scale-105"
            aria-label="Scroll to top"
          >
            <img
              src="/logo.png"
              alt="Armin Vejzovic Logo"
              className="h-9 w-auto drop-shadow-md group-hover:drop-shadow-xl transition-all duration-300"
            />
          </a>


          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#skills"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors relative group"
            >
              { translations.header.skills }
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#projects"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors relative group"
            >
              { translations.header.projects }
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors relative group"
            >
              { translations.header.contact }
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          <div className="hidden md:flex justify-end items-center gap-4">
            <button
              onClick={toggleTheme}
              className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xl hover:scale-110 hover:rotate-180 transition-all duration-500 shadow-lg hover:shadow-xl"
            >
              {isDark ? "☀️" : "🌙"}
            </button>

            <button 
              onClick={() => changeLanguage(language === "en" ? "bs" : "en")}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-primary hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-xl"
            >
              <img 
                src={language === "en" ? "/flags/bih.png" : "/flags/usa.png"} 
                alt="Language flag" 
                className="w-7 h-7"
              />
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300 text-2xl hover:text-primary-500 transition-colors"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {isMenuOpen && (
          <div className="text-center md:hidden mt-4 pb-4 space-y-4 border-t border-gray-200 dark:border-gray-700 pt-4">
            <a
              href="#skills"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 dark:text-gray-300 hover:text-primary-500 font-medium transition-colors"
            >
              { translations.header.skills }
            </a>
            <a
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 dark:text-gray-300 hover:text-primary-500 font-medium transition-colors"
            >
              { translations.header.projects }
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 dark:text-gray-300 hover:text-primary-500 font-medium transition-colors"
            >
              { translations.header.contact }
            </a>

            <div className="flex justify-center items-center gap-4 pt-2">
              <button
                onClick={toggleTheme}
                className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xl hover:scale-110 hover:rotate-180 transition-all duration-500 shadow-lg hover:shadow-xl"
              >
                {isDark ? "☀️" : "🌙"}
              </button>

              <button 
                onClick={() => changeLanguage(language === "en" ? "bs" : "en")}
                className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-primary hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-xl"
              >
                <img 
                  src={language === "en" ? "/flags/bih.png" : "/flags/usa.png"} 
                  alt="Language flag" 
                  className="w-7 h-7"
                />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
