import React, { createContext, useContext, useState } from 'react';


// Contexto de Idioma
// -----------------------------------------------------------------------------
const translations = {
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'btn.contact-now': 'Contactar Ahora',

    // Hero
    'hero.greeting': 'Hola, soy',
    'hero.role': 'Analista de Sistemas y Desarrollador Web',
    'hero.description': 'Desarrollador especializado en crear soluciones web modernas y sistemas personalizados. Con experiencia en React, Node.js, Bases de datos y tecnologías frontend/backend para transformar ideas en realidad digital.',
    'hero.available': 'Disponible para proyectos',
    'hero.view-projects': 'Ver Proyectos',
    'hero.contact': 'Contactar',
    'hero.email': 'ulisacosta@gmail.com',
    'hero.location': 'Argentina 🇦🇷',
    'hero.availability': 'Disponible para proyectos',

    // Services
    'services.title': 'Servicios Tecnológicos',
    'services.subtitle': 'Soluciones tecnológicas avanzadas para llevar tu negocio al siguiente nivel digital',
    'services.fullstack.title': 'Desarrollo Full Stack',
    'services.fullstack.desc': 'Aplicaciones web completas con React, Node.js y arquitecturas modernas',
    'services.backend.title': 'Backend & APIs',
    'services.backend.desc': 'Desarrollo de APIs REST, servicios backend con Node.js y bases de datos',
    'services.cloud.title': 'Cloud & DevOps',
    'services.cloud.desc': 'Implementación en la nube, CI/CD y automatización de procesos',
    'services.systems.title': 'Sistemas Inteligentes',
    'services.systems.desc': 'Soluciones tecnológicas avanzadas con procesamiento de datos en tiempo real',

    // Projects
    'projects.title': 'Proyectos Destacados',
    'projects.subtitle': 'Soluciones tecnológicas que demuestran mi experiencia en desarrollo full stack',
    'projects.web-system.title': 'Sistema de Gestión Web',
    'projects.web-system.desc': 'Aplicación real con Ejs, Express y MySQL para gestión empresarial',
    'projects.wallets.title': 'Movimientos bancarios personales',
    'projects.wallets.desc': 'Seguimiento de gastos e ingresos para un mejor control financiero.',
    'projects.stock.title': 'Sistema de Gestión de Stock',
    'projects.stock.desc': 'Sistema de gestión de inventarios con funcionalidades avanzadas',
    'projects.movies.title': 'Películas más populares',
    'projects.movies.desc': 'Una aplicación sencilla para ver las películas más populares del momento utilizando una API pública.',
    'projects.draganddrop.title': 'Drag and Drop',
    'projects.draganddrop.desc': 'Una aplicación sencilla para demostrar la funcionalidad de arrastrar y soltar imagen y cargar.',
    'projects.btn.code': 'Código',
    'projects.btn.demo': 'Demo',

    // About
    'about.title': 'Sobre Mí',
    'about.p1': 'Soy Analista de Sistemas con conocimientos en desarrollo de software y la creación de soluciones tecnológicas innovadoras. Mi experiencia abarca desde el desarrollo frontend con React hasta la construcción de APIs robustas con Node.js.',
    'about.p2': 'Dispuesto a colaborar con clientes locales e internacionales, siempre enfocado en entregar código limpio, escalable y soluciones que realmente resuelvan de manera efectiva.',
    'about.stats.projects': 'Proyectos',
    'about.stats.years': 'Años Exp.',
    'about.stats.tech': 'Tecnologías',

    // Contact
    'contact.title': '¿Listo para crear algo increíble?',
    'contact.subtitle': 'Estoy disponible para nuevos proyectos y colaboraciones tecnológicas. Si tienes una idea innovadora o necesitas desarrollar una solución, ¡conectemos!',
    'contact.btn.email': 'Enviar Email',
    'contact.btn.linkedin': 'LinkedIn',
    'contact.email': 'Email',
    'contact.location': 'Ubicación',
    'contact.availability': 'Disponibilidad',
    'contact.available': 'Disponible para proyectos',

    // Footer
    'footer.role': 'Desarrollador Full Stack • Argentina 🇦🇷',
  },
  /* ENGLISH */
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'btn.contact-now': 'Contact Now',

    // Hero
    'hero.greeting': 'Hi, I\'m',
    'hero.role': 'Systems Analyst & Web Developer',
    'hero.description': 'Developer specialized in creating modern web solutions and custom systems. With experience in React, Node.js, Databases and frontend/backend technologies to transform ideas into digital reality.',
    'hero.available': 'Available for projects',
    'hero.view-projects': 'View Projects',
    'hero.contact': 'Contact',
    'hero.email': 'ulisacosta@gmail.com',
    'hero.location': 'Argentina 🇦🇷',
    'hero.availability': 'Available for projects',

    // Services
    'services.title': 'Technology Services',
    'services.subtitle': 'Advanced technological solutions to take your business to the next digital level',
    'services.fullstack.title': 'Full Stack Development',
    'services.fullstack.desc': 'Complete web applications with React, Node.js and modern architectures',
    'services.backend.title': 'Backend & APIs',
    'services.backend.desc': 'REST API development, Node.js backend services and databases',
    'services.cloud.title': 'Cloud & DevOps',
    'services.cloud.desc': 'Cloud deployment, CI/CD and process automation',
    'services.systems.title': 'Smart Systems',
    'services.systems.desc': 'Advanced technology solutions with real-time data processing',

    // Projects
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Technology solutions that demonstrate my full stack development experience',
    'projects.web-system.title': 'Web Management System',
    'projects.web-system.desc': 'Real application with Ejs, Express and MySQL for business management',
    'projects.wallets.title': 'Personal Financial Tracker',
    'projects.wallets.desc': 'Track expenses and income for better financial control.',
    'projects.stock.title': 'Stock System',
    'projects.stock.desc': 'System for inventory management with advanced features',
    'projects.movies.title': 'Movie App',
    'projects.movies.desc': 'A simple app to view most popular movies using a public API.',
    'projects.draganddrop.title': 'Drag and Drop',
    'projects.draganddrop.desc': 'A simple app to demonstrate drag and drop image and upload functionality.',
    'projects.btn.code': 'Code',
    'projects.btn.demo': 'Demo',

    // About
    'about.title': 'About Me',
    'about.p1': 'I am a Systems Analyst with knowledge in software development and the creation of innovative technological solutions. My experience ranges from frontend development with React to building robust APIs with Node.js.',
    'about.p2': 'Willing to work with local and international clients, always focused on delivering clean, scalable code and solutions that truly solve business problems.',
    'about.stats.projects': 'Projects',
    'about.stats.years': 'Years Exp.',
    'about.stats.tech': 'Technologies',

    // Contact
    'contact.title': 'Ready to create something amazing?',
    'contact.subtitle': 'I\'m available for new projects and technology collaborations. If you have an innovative idea or need to develop a solution, let\'s connect!',
    'contact.btn.email': 'Send Email',
    'contact.btn.linkedin': 'LinkedIn',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.availability': 'Availability',
    'contact.available': 'Available for projects',

    // Footer
    'footer.role': 'Full Stack Developer • Argentina 🇦🇷',
  }
};

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es');

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}