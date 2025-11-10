import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import FloatingBackground from "./components/FloatingBackground";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection.jsx";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeContext.jsx";
import { I18nProvider } from "./i18n/i18n.jsx";
import "./index.css";


const App = () => {
  const [config, setConfig] = useState({
    portfolio_name: "Sarah Chen",
    portfolio_title: "React Developer",
    hero_tagline:
      "Building the future with React & Tailwind CSS. Creating beautiful, responsive, and interactive web experiences.",
    contact_cta: "Let's build something amazing",
    footer_text: "© 2024 Sarah Chen. Built with React & Tailwind CSS",
  });

  useEffect(() => {
    const defaultConfig = {
      portfolio_name: "Sarah Chen",
      portfolio_title: "React Developer",
      hero_tagline:
        "Building the future with React & Tailwind CSS. Creating beautiful, responsive, and interactive web experiences.",
      contact_cta: "Let's build something amazing",
      footer_text: "© 2024 Sarah Chen. Built with React & Tailwind CSS",
      background_color: "#ffffff",
      surface_color: "#f8fafc",
      text_color: "#1a202c",
      primary_action_color: "#667eea",
      secondary_action_color: "#764ba2",
    };

    const onConfigChange = async (newConfig) => {
      setConfig((prevConfig) => ({ ...prevConfig, ...newConfig }));
    };

    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities: (config) => ({
          recolorables: [],
          borderables: [],
        }),
        mapToEditPanelValues: (config) =>
          new Map([
            ["portfolio_name", config.portfolio_name || defaultConfig.portfolio_name],
            ["portfolio_title", config.portfolio_title || defaultConfig.portfolio_title],
          ]),
      });
    }
  }, []);

  return (
    <ThemeProvider>
      <I18nProvider>
        <div className="min-h-screen">
          <FloatingBackground />
          <Header config={config} />
          <HeroSection config={config} />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection config={config} />
          <Footer config={config} />
        </div>
      </I18nProvider>
    </ThemeProvider>
  );
};

export default App;
