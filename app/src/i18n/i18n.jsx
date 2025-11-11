import { createContext, useState, useContext, useEffect } from 'react';
import translations from './translations';

const I18nContext = createContext();

const SUPPORTED_LANGUAGES = ['en', 'bs'];

export const I18nProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const stored = localStorage.getItem('language');
    return SUPPORTED_LANGUAGES.includes(stored) ? stored : 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const changeLanguage = (lang) => {
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      setLanguage(lang);
    }
  };

  return (
    <I18nContext.Provider value={{ language, changeLanguage, translations: translations[language] }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = () => useContext(I18nContext);
