import React, { useState, useEffect, useRef, useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { useTranslation } from "../i18n/i18n";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const sectionRef = useRef();
  const { translations } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const notification = document.createElement("div");
    notification.className =
      "fixed top-6 right-6 bg-gradient-primary text-white px-6 py-4 rounded-2xl shadow-2xl z-50 transform translate-x-full transition-transform duration-500 flex items-center gap-3";
    notification.innerHTML = `
      <span class="text-2xl">🎉</span>
      <span class="font-semibold">Thanks ${formData.name}! I'll get back to you soon.</span>
    `;
    document.body.appendChild(notification);

    setTimeout(() => (notification.style.transform = "translateX(0)"), 100);
    setTimeout(() => {
      notification.style.transform = "translateX(100%)";
      setTimeout(() => notification.remove(), 500);
    }, 4000);

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section ref={sectionRef} id="contact" className="py-20 px-6 transition-colors duration-500 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4 text-gray-900 dark:text-gray-100">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Info */}
          <div className={`space-y-8 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div>
              <h3 className="text-3xl font-bold gradient-text mb-4 text-gray-900 dark:text-gray-100">
                { translations.hero.name }
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm passionate about creating exceptional digital experiences and would love to discuss your next project.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: "📧", title: "Email", value: translations.contact.info.email },
                { icon: "📱", title: "Phone", value: translations.contact.info.phone },
                { icon: "🌍", title: "Location", value: translations.contact.info.location },
              ].map((contact) => (
                <div
                  key={contact.title}
                  className="flex items-center gap-4 p-4 rounded-2xl shadow-lg hover-lift border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800"
                >
                  <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center text-2xl shadow-lg">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-100">{contact.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 transition-colors duration-500"
            >
              <div className="space-y-6">
                {[
                  { name: "name", type: "text", label: "Full Name", placeholder: "Your name" },
                  { name: "email", type: "email", label: "Email Address", placeholder: "your@email.com" },
                  { name: "subject", type: "text", label: "Subject", placeholder: "Project discussion" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:border-primary-500 focus:bg-white dark:focus:bg-gray-600 transition-all duration-300 focus:scale-105"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:border-primary-500 focus:bg-white dark:focus:bg-gray-600 transition-all duration-300 focus:scale-105 resize-none"
                  />
                </div>

                <button className="w-full py-4 bg-gradient-primary text-white font-bold text-lg rounded-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 ripple">
                  Send Message ✨
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
