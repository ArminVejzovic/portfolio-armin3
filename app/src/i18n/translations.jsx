const translations = {
  en: {
    header: {
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      name: "Armin Vejzovic",
      title: "Software Engineer",
      tagline: "I'm a Professional Specialist in Information Technologies from the Faculty of Natural Sciences and Mathematics in Sarajevo. Passionate about full-stack development, I enjoy creating dynamic, responsive web apps and learning new technologies.",
      view_projects: "View Projects",
      lets_connect: "Let's Connect",
    },
    skills: {
      title: "Skills & Expertise",
      description: "A blend of technical precision and creative problem-solving. Constantly learning, building, and improving.",
      programming_title: "Programming Languages",
      frontend_title: "Frontend Development",
      backend_title: "Backend Development",
      databases_title: "Databases",
      mobile_title: "Mobile Development",
      tools_title: "Tools & Other",
    },
    projects: {
      title: "Featured Projects",
      code: "Source Code",
      project1_desc: "Adoptly is a modern MERN web application that connects adopters with pet owners and animal shelters. It offers AI-powered pet recommendations, real-time chat, analytics, and full administration of the adoption process.",
      project2_desc: "A web application for food ordering and restaurant management, including menus and deliveries, featuring a modern user interface and full CRUD functionality.",
      project3_desc: "A project and user management system that enables creating, tracking, and updating all projects in real time.",
      more_projects: "View More Projects on GitHub",
    },
    contact: {  
      title: "Get In Touch",
      subtitle: "Let's build something amazing",
      description: "I'm passionate about creating exceptional digital experiences and would love to discuss your next project.",
      fields: {
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Message",
        send: "Send Message ✨",
      },
      placeholders: {
        name: "Your name",
        email: "your@email.com",
        subject: "Project discussion",
        message: "Tell me about your project...",
      },
      notification: (name) => `Thanks ${name}! I'll get back to you soon.`,
      info: {
        email: "29armin.vejzovic@gmail.com",
        phone: "+387 61 688 538",
        location: "Sarajevo, Bosnia and Herzegovina",
      },
      info_fields: {
        email: "Email",
        phone: "Phone",
        location: "Location",
      },
    },
    footer: {
      text: "© 2025 Armin Vejzovic. Built with React & Tailwind CSS",
    },
  },

  bs: {
    header: {
      skills: "Vještine",
      projects: "Projekti",
      contact: "Kontakt",
    },
    hero: {
      name: "Armin Vejzović",
      title: "React Developer",
      tagline: "Ja sam stručni specijalista za informacione tehnologije, diplomirao sam na Prirodno-matematičkom fakultetu u Sarajevu. Strastveno se bavim full-stack razvojem, uživam u kreiranju dinamičnih i responzivnih web aplikacija te u učenju novih tehnologija.",
      view_projects: "Pogledaj projekte",
      lets_connect: "Kontaktiraj me",
    },
    skills: {
      title: "Vještine i Stručnost",
      description: "Spoj tehničke preciznosti i kreativnog rješavanja problema. Stalno učim, gradim i napredujem.",
      programming_title: "Programski Jezici",
      frontend_title: "Frontend Razvoj",
      backend_title: "Backend Razvoj",
      databases_title: "Baze Podataka",
      mobile_title: "Mobilni Razvoj",
      tools_title: "Alati i Ostalo",
    },
    projects: {
      title: "Istaknuti Projekti",
      code: "Izvorni kod",
      project1_desc: "Adoptly je moderna MERN web aplikacija koja povezuje udomitelje sa vlasnicima i skloništima za životinje. Nudi AI preporuke ljubimaca, real-time chat, statistike i potpunu administraciju procesa udomljavanja.",
      project2_desc: "Web aplikacija za naručivanje hrane i upravljanje restoranima, menijima i dostavom, sa modernim korisničkim interfejsom i potpunim CRUD funkcionalnostima.",
      project3_desc: "Sistem za upravljanje projektima i evidencijom korisnika. Omogućava kreiranje, praćenje i ažuriranje svih projekata u realnom vremenu.",
      more_projects: "Pogledaj više projekata na GitHubu",
    },
    contact: {
      title: "Kontaktiraj me",
      subtitle: "Napravimo zajedno nešto sjajno",
      description: "Strastven sam u kreiranju vrhunskih digitalnih iskustava i volio bih razgovarati o tvom sljedećem projektu.",
      fields: {
        name: "Ime i Prezime",
        email: "Email Adresa",
        subject: "Naslov",
        message: "Poruka",
        send: "Pošalji Poruku ✨",
      },
      placeholders: {
        name: "Tvoje ime",
        email: "tvoj@email.com",
        subject: "Diskusija o projektu",
        message: "Reci mi više o projektu...",
      },
      notification: (name) => `Hvala ${name}! Uskoro ću ti se javiti.`,
      info: {
        email: "29armin.vejzovic@gmail.com",
        phone: "+387 61 688 538",
        location: "Sarajevo, Bosna i Hercegovina",
      },
      info_fields: {
        email: "Email",
        phone: "Broj telefona",
        location: "Lokacija",
      },
    },
    footer: {
      text: "© 2025 Armin Vejzović. Napravljeno pomoću React-a i Tailwind CSS-a",
    },
  },
};

export default translations;
