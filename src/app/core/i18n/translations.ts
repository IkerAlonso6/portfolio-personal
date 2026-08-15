import type { Lang } from '../models/profile.model';

export const TRANSLATIONS: Record<Lang, Record<string, string>> = {
  es: {
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.work': 'Cómo trabajo',
    'nav.education': 'Formación',
    'nav.contact': 'Contacto',

    'hero.badge': 'Abierto a oportunidades',
    'hero.roles.0': 'Desarrollador Full Stack',
    'hero.roles.1': 'Java · Spring Boot · Angular',
    'hero.roles.2': 'APIs REST y bases de datos',
    'hero.roles.3': 'Arquitectura y testing',
    'hero.tagline':
      'Construyo aplicaciones de gestión de punta a punta: modelo el dominio, diseño la base de datos, levanto la API y termino la interfaz. Trabajo con arquitectura hexagonal y tests que sostienen las reglas de negocio.',
    'hero.ctaProjects': 'Ver proyectos',
    'hero.ctaContact': 'Contáctame',
    'hero.ctaCv': 'Descargar CV',

    'about.title': 'Sobre mí',
    'about.subtitle': 'Quién soy y cómo trabajo',
    'about.p1':
      'Soy desarrollador full stack. Construyo sistemas de gestión con Java y Spring Boot del lado del servidor y Angular del lado del cliente, y me siento igual de cómodo modelando una base de datos que puliendo una interfaz.',
    'about.p2':
      'Buena parte de mi trabajo salió de un mismo negocio real, una panadería, para el que desarrollé tres sistemas: uno que calcula el costo real de producción y sugiere precios, otro que controla el inventario y detecta el consumo no registrado, y un tercero que reemplazó el circuito de pedidos por WhatsApp y boletas en papel. Entender el problema antes de escribir código es la parte que más me interesa.',
    'about.p3':
      'También desarrollé el sitio de un estudio de arquitectura por encargo, y trabajé en equipo en proyectos grandes con control de calidad automatizado. Me formo en la Tecnicatura Universitaria en Programación de la UTN Facultad Regional Córdoba.',

    'projects.title': 'Proyectos',
    'projects.subtitle': 'Aplicaciones full stack, de la base de datos a la interfaz',
    'projects.featured': 'Destacados',
    'projects.more': 'Más proyectos',
    'projects.filterAll': 'Todos',
    'projects.filterFullstack': 'Full stack',
    'projects.filterBackend': 'Backend',
    'projects.filterFrontend': 'Frontend',
    'projects.filterDesktop': 'Escritorio',
    'projects.problem': 'El problema',
    'projects.role': 'Rol',
    'projects.view': 'Ver',
    'projects.repo': 'Repositorio',
    'projects.demo': 'Ver demo',
    'projects.docs': 'Documentación',
    'projects.empty': 'No hay proyectos en esta categoría.',

    'skills.title': 'Habilidades',
    'skills.subtitle': 'Tecnologías y herramientas que uso',

    'work.title': 'Cómo trabajo',
    'work.subtitle': 'Criterios de ingeniería que aplico en cada proyecto',
    'work.kicker': 'Prácticas',

    'education.title': 'Formación',
    'education.subtitle': 'Base académica y cursos',
    'education.courses': 'Cursos',

    'contact.title': 'Contacto',
    'contact.subtitle': '¿Hablamos?',
    'contact.send': 'Enviar email',
    'contact.cv': 'Descargar CV',

    'footer.rights': 'Todos los derechos reservados.',
    'footer.backToTop': 'Volver arriba'
  },
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.work': 'How I work',
    'nav.education': 'Education',
    'nav.contact': 'Contact',

    'hero.badge': 'Open to opportunities',
    'hero.roles.0': 'Full Stack Developer',
    'hero.roles.1': 'Java · Spring Boot · Angular',
    'hero.roles.2': 'REST APIs and databases',
    'hero.roles.3': 'Architecture and testing',
    'hero.tagline':
      'I build management applications end to end: I model the domain, design the database, stand up the API and finish the interface. I work with hexagonal architecture and tests that hold the business rules in place.',
    'hero.ctaProjects': 'View projects',
    'hero.ctaContact': 'Contact me',
    'hero.ctaCv': 'Download CV',

    'about.title': 'About me',
    'about.subtitle': 'Who I am and how I work',
    'about.p1':
      'I am a full stack developer. I build management systems with Java and Spring Boot on the server and Angular on the client, and I am equally at home modelling a database or polishing an interface.',
    'about.p2':
      'Much of my work came out of one real business, a bakery, for which I built three systems: one that computes true production cost and suggests prices, another that controls inventory and surfaces unregistered consumption, and a third that replaced an order flow running on WhatsApp and paper receipts. Understanding the problem before writing code is the part I care about most.',
    'about.p3':
      'I also built the site of an architecture studio on commission, and worked in teams on large projects with automated quality gates. I am studying Programming at UTN Facultad Regional Córdoba.',

    'projects.title': 'Projects',
    'projects.subtitle': 'Full stack applications, from the database to the interface',
    'projects.featured': 'Featured',
    'projects.more': 'More projects',
    'projects.filterAll': 'All',
    'projects.filterFullstack': 'Full stack',
    'projects.filterBackend': 'Backend',
    'projects.filterFrontend': 'Frontend',
    'projects.filterDesktop': 'Desktop',
    'projects.problem': 'The problem',
    'projects.role': 'Role',
    'projects.view': 'View',
    'projects.repo': 'Repository',
    'projects.demo': 'View demo',
    'projects.docs': 'Documentation',
    'projects.empty': 'No projects in this category.',

    'skills.title': 'Skills',
    'skills.subtitle': 'Technologies and tools I use',

    'work.title': 'How I work',
    'work.subtitle': 'Engineering principles I apply on every project',
    'work.kicker': 'Practices',

    'education.title': 'Education',
    'education.subtitle': 'Academic background and courses',
    'education.courses': 'Courses',

    'contact.title': 'Contact',
    'contact.subtitle': 'Let\'s talk',
    'contact.send': 'Send email',
    'contact.cv': 'Download CV',

    'footer.rights': 'All rights reserved.',
    'footer.backToTop': 'Back to top'
  }
};
