import React, { createContext, useState, useContext, useEffect } from 'react';
import translations from './translations';

const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('language') || 'en';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <I18nContext.Provider value={{ language, changeLanguage, translations: translations[language] }}>
            {children}
        </I18nContext.Provider>
    );
};

export const useTranslation = () => useContext(I18nContext);