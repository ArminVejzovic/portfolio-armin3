import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";
import { useTranslation } from "../i18n/i18n";

const Footer = () => {

  const { translations } = useTranslation();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
          { translations.footer.text }
        </p>
        <div className="flex justify-center gap-4 mb-6">
          {['💼', '🐙', '🐦', '🎨'].map((icon, index) => (
            <a
              key={index}
              href="#"
              className="w-12 h-12 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full flex items-center justify-center text-xl hover:bg-gradient-primary hover:text-white hover:scale-110 transition-all duration-300 shadow-lg"
            >
              {icon}
            </a>
          ))}
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-14 h-14 bg-gradient-primary text-white rounded-full flex items-center justify-center text-2xl hover:scale-110 hover:shadow-2xl transition-all duration-300 mx-auto"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};
    
    export default Footer;