import { useState, useEffect, useRef } from "react";
import { useTranslation } from "../i18n/i18n";
import emailjs from "@emailjs/browser";

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

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(formData.email)) {
    alert("Please enter a valid email!");
    return;
  }

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message
  };

   emailjs.send(
    "service_2e5de6v",
    "template_cfkydn4",
    {
      from_name: formData.name,
      from_email: formData.email,
      to_email: "29armin.vejzovic@gmail.com",
      subject: formData.subject,
      message: formData.message,
    },
    "ovnlFxIspWuKkRVeL"
  )


  .then((response) => {
    console.log('SUCCESS!', response.status, response.text);

    const notification = document.createElement("div");
    notification.className =
      "fixed top-6 right-6 bg-gradient-primary text-white px-6 py-4 rounded-2xl shadow-2xl z-50 flex items-center gap-3";
    notification.innerHTML = `
      <span class="text-2xl">🎉</span>
      <span class="font-semibold">Thanks ${formData.name}! Your message has been sent.</span>
    `;
    document.body.appendChild(notification);

    setTimeout(() => notification.remove(), 4000);

    // Reset forme
    setFormData({ name: "", email: "", subject: "", message: "" });
  })
  .catch((err) => {

    const errorNotification = document.createElement("div");
    errorNotification.className =
      "fixed top-6 right-6 bg-red-600 text-white px-6 py-4 rounded-2xl shadow-2xl z-50 transform translate-x-full transition-transform duration-500 flex items-center gap-3";
    errorNotification.innerHTML = `
      <span class="text-2xl">⚠️</span>
      <span class="font-semibold">Oops! Something went wrong. Please try again later.</span>
    `;
    document.body.appendChild(errorNotification);

    setTimeout(() => (errorNotification.style.transform = "translateX(0)"), 100);
    setTimeout(() => {
      errorNotification.style.transform = "translateX(100%)";
      setTimeout(() => errorNotification.remove(), 500);
    }, 4000);
  });
};

  const showNotification = (message) => {
    const notification = document.createElement("div");
    notification.className =
      "fixed top-6 right-6 bg-gradient-primary text-white px-6 py-4 rounded-2xl shadow-2xl z-50 transform translate-x-full transition-transform duration-500 flex items-center gap-3";
    notification.innerHTML = `<span class="text-2xl">🎉</span><span class="font-semibold">${message}</span>`;
    document.body.appendChild(notification);

    setTimeout(() => (notification.style.transform = "translateX(0)"), 100);
    setTimeout(() => {
      notification.style.transform = "translateX(100%)";
      setTimeout(() => notification.remove(), 500);
    }, 4000);
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section ref={sectionRef} id="contact" className="py-20 px-6 bg-white dark:bg-gray-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl lg:text-5xl font-black gradient-text mb-4 text-gray-900 dark:text-gray-100">
            {translations.contact.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`space-y-8 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div>
              <h3 className="text-3xl font-bold gradient-text mb-4 text-gray-900 dark:text-gray-100">
                {translations.hero.name}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {translations.contact.description}
              </p>
            </div>
          </div>

          <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 transition-colors duration-500"
            >
              <div className="space-y-6">
                {[
                  { name: "name", type: "text", label: translations.contact.fields.name, placeholder: translations.contact.placeholders.name },
                  { name: "email", type: "email", label: translations.contact.fields.email, placeholder: translations.contact.placeholders.email },
                  { name: "subject", type: "text", label: translations.contact.fields.subject, placeholder: translations.contact.placeholders.subject },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{field.label}</label>
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
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{translations.contact.fields.message}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={translations.contact.placeholders.message}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:border-primary-500 focus:bg-white dark:focus:bg-gray-600 transition-all duration-300 focus:scale-105 resize-none"
                  />
                </div>

                <button className="w-full py-4 bg-gradient-primary text-white font-bold text-lg rounded-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 ripple">
                  {translations.contact.fields.send}
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
