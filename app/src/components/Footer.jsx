import { useTranslation } from "../i18n/i18n";
import { FaLinkedin, FaGithub, FaTwitter, FaDribbble, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const { translations } = useTranslation();

  const socialLinks = [
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/armin-vejzovi%C4%87-a63b8b2b9/", label: "LinkedIn" },
    { icon: <FaGithub />, url: "https://github.com/ArminVejzovic", label: "GitHub" },
    { icon: <FaEnvelope />, url: "mailto:29armin.vejzovic@email.com", label: "Email" },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        

        <div className="flex justify-center flex-wrap gap-4 mb-6">
          {socialLinks.map(({ icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-12 h-12 rounded-full flex items-center justify-center
                        bg-gradient-to-br from-primary-500 to-secondary-500
                        text-white text-xl
                        shadow-lg
                        transform transition-all duration-300
                        hover:scale-110 hover:shadow-2xl hover:from-primary-600 hover:to-secondary-600"
            >
              {icon}
            </a>
          ))}
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-14 h-14 bg-gradient-primary text-white rounded-full flex items-center justify-center text-2xl hover:scale-110 hover:shadow-2xl transition-all duration-300 mx-auto"
          aria-label="Scroll to top"
        >
          ↑
        </button>
        <br></br>
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
          {translations.footer.text}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
