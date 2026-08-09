import type {
  AboutFact,
  ContactItem,
  Course,
  EducationItem,
  Project,
  Skill,
  SkillGroup
} from '../models/profile.model';

export const PROFILE = {
  name: 'Iker Guillermo Alonso',
  firstName: 'Iker',
  lastName: 'Alonso',
  initials: 'IGA',
  roles: [
    'hero.roles.0',
    'hero.roles.1',
    'hero.roles.2',
    'hero.roles.3'
  ]
};

export const ABOUT_FACTS: AboutFact[] = [
  {
    label: { es: 'Ubicación', en: 'Location' },
    value: { es: 'Córdoba, Argentina', en: 'Córdoba, Argentina' }
  },
  {
    label: { es: 'Estudios', en: 'Studies' },
    value: { es: 'TUP · UTN FRC', en: 'TUP · UTN FRC' }
  },
  {
    label: { es: 'Año académico', en: 'Academic year' },
    value: { es: '2° año (2026)', en: '2nd year (2026)' }
  },
  {
    label: { es: 'Idiomas', en: 'Languages' },
    value: { es: 'Español nativo · Inglés B2', en: 'Native Spanish · English B2' }
  }
];

const SKILL = (name: string, slug?: string): Skill => ({
  name,
  slug,
  initial: slug ? undefined : name.slice(0, 2)
});

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'languages',
    title: { es: 'Lenguajes', en: 'Languages' },
    skills: [
      SKILL('TypeScript', 'typescript'),
      SKILL('JavaScript', 'javascript'),
      SKILL('Java', 'openjdk'),
      SKILL('C# / .NET', 'dotnet'),
      SKILL('SQL / T-SQL', 'microsoftsqlserver'),
      SKILL('HTML5', 'html5'),
      SKILL('SCSS', 'sass')
    ]
  },
  {
    id: 'frontend',
    title: { es: 'Frontend', en: 'Frontend' },
    skills: [
      SKILL('Angular', 'angular'),
      SKILL('Angular Material', 'materialdesign'),
      SKILL('Tailwind CSS', 'tailwindcss'),
      SKILL('RxJS', 'rxjs'),
      SKILL('Bootstrap', 'bootstrap')
    ]
  },
  {
    id: 'backend',
    title: { es: 'Backend', en: 'Backend' },
    skills: [
      SKILL('Spring Boot', 'springboot'),
      SKILL('Spring Security', 'spring'),
      SKILL('Hibernate / JPA', 'hibernate'),
      SKILL('Node.js', 'nodedotjs'),
      SKILL('WebSocket / STOMP')
    ]
  },
  {
    id: 'databases',
    title: { es: 'Bases de datos', en: 'Databases' },
    skills: [
      SKILL('SQL Server', 'microsoftsqlserver'),
      SKILL('PostgreSQL', 'postgresql'),
      SKILL('MongoDB', 'mongodb'),
      SKILL('Redis', 'redis'),
      SKILL('Neo4j', 'neo4j'),
      SKILL('Cassandra', 'apachecassandra'),
      SKILL('Flyway', 'flyway')
    ]
  },
  {
    id: 'tools',
    title: { es: 'Herramientas y DevOps', en: 'Tools & DevOps' },
    skills: [
      SKILL('Git', 'git'),
      SKILL('GitHub', 'github'),
      SKILL('Docker', 'docker'),
      SKILL('Postman', 'postman'),
      SKILL('Swagger / OpenAPI', 'swagger'),
      SKILL('Jira', 'jira')
    ]
  },
  {
    id: 'practices',
    title: { es: 'Prácticas', en: 'Practices' },
    skills: [
      SKILL('Arquitectura hexagonal'),
      SKILL('Testing (JUnit, Vitest)', 'vitest'),
      SKILL('UML'),
      SKILL('Metodología ágil'),
      SKILL('WinForms', 'dotnet')
    ]
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'pokemon-tcg',
    name: { es: 'Pokémon TCG 2026', en: 'Pokémon TCG 2026' },
    tagline: {
      es: 'Proyecto Final Integrador · Backend y Frontend',
      en: 'Integrator Final Project · Backend and Frontend'
    },
    description: {
      es: 'Juego de cartas coleccionables Pokémon con sistema de usuarios, barajas y partidas. Desarrollo completo de la API REST y de la interfaz, trabajado en equipo.',
      en: 'Pokémon trading card game with user system, decks and matches. Full API REST and UI development, built as a team.'
    },
    highlights: [
      { es: 'Backend Spring Boot con OpenAPI y SQL Server', en: 'Spring Boot backend with OpenAPI and SQL Server' },
      { es: 'Frontend Angular 20 consumiendo la API REST', en: 'Angular 20 frontend consuming the REST API' },
      { es: 'Sistema de login, colección de cartas y partidas', en: 'Login, card collection and match system' }
    ],
    stack: ['Angular 20', 'Spring Boot 4', 'Java 21', 'SQL Server', 'OpenAPI'],
    links: [
      { label: { es: 'Repositorio', en: 'Repository' }, url: 'https://github.com/2026-P3-BE/tpi-pokemon-2w2-11' }
    ],
    year: '2026',
    accent: '#3ecf8e',
    initials: 'PK'
  },
  {
    id: 'teg',
    name: 'TEG',
    tagline: {
      es: 'Tecnología en Estrategia y Guerra · Trabajo Práctico Integrador',
      en: 'Strategy and War Technology · Integrator Project'
    },
    description: {
      es: 'Juego de estrategia por turnos con tablero, ejércitos y fichas, con sistema de login, partidas multijugador y estadísticas de jugadores.',
      en: 'Turn-based strategy game with board, armies and tokens, featuring login, multiplayer matches and player statistics.'
    },
    highlights: [
      { es: 'Backend Spring Boot con H2 y lógica de juego por turnos', en: 'Spring Boot backend with H2 and turn-based game logic' },
      { es: 'Frontend Angular 19 + Tailwind CSS', en: 'Angular 19 + Tailwind CSS frontend' },
      { es: 'Partidas multijugador y estadísticas', en: 'Multiplayer matches and statistics' }
    ],
    stack: ['Angular 19', 'Tailwind CSS', 'Spring Boot 3.1', 'Java 17', 'H2'],
    links: [
      { label: { es: 'Repositorio', en: 'Repository' }, url: 'https://github.com/2025-P3-FE-2W2-2/tpi-teg-grupo-06' }
    ],
    year: '2025',
    accent: '#4fb3ff',
    initials: 'TEG'
  },
  {
    id: 'bready',
    name: 'Bready',
    tagline: {
      es: 'BakeryCostCalculator · Calculadora de costos de panadería',
      en: 'BakeryCostCalculator · Bakery cost calculator'
    },
    description: {
      es: 'Aplicación para calcular costos de producción de panadería, con arquitectura hexagonal, autenticación JWT y 155 pruebas que respaldan la lógica de negocio.',
      en: 'Application to calculate bakery production costs, with hexagonal architecture, JWT auth and 155 tests backing the business logic.'
    },
    highlights: [
      { es: 'Arquitectura hexagonal desacoplada', en: 'Decoupled hexagonal architecture' },
      { es: 'Spring Boot + PostgreSQL con Flyway y JWT', en: 'Spring Boot + PostgreSQL with Flyway and JWT' },
      { es: '155 tests cubriendo la lógica de negocio', en: '155 tests covering the business logic' }
    ],
    stack: ['Angular 21', 'Angular Material', 'Spring Boot 2.7', 'Java 11', 'PostgreSQL', 'Flyway', 'JWT'],
    links: [
      { label: { es: 'Repositorio', en: 'Repository' }, url: 'https://github.com/IkerAlonso6/Bakery-cost-calculator-bready' }
    ],
    year: '2026',
    accent: '#ffb454',
    initials: 'BR'
  },
  {
    id: 'gestion-stock',
    name: { es: 'Gestión de Stock', en: 'Stock Management' },
    tagline: {
      es: 'Gestor de inventario con exportación a Excel',
      en: 'Inventory manager with Excel export'
    },
    description: {
      es: 'Gestor de stock completo con importación y exportación a Excel, arquitectura hexagonal, autenticación JWT y despliegue en la nube con Render y Neon.',
      en: 'Complete stock manager with Excel import/export, hexagonal architecture, JWT auth and cloud deployment with Render and Neon.'
    },
    highlights: [
      { es: 'Exportación e importación de Excel con ExcelJS', en: 'Excel export and import with ExcelJS' },
      { es: 'Angular 21 + Material con Vitest', en: 'Angular 21 + Material with Vitest' },
      { es: 'Deploy en Render con base de datos PostgreSQL (Neon)', en: 'Deployed on Render with PostgreSQL (Neon)' }
    ],
    stack: ['Angular 21', 'Angular Material', 'Spring Boot 2.7', 'Java 11', 'PostgreSQL', 'ExcelJS', 'Vitest'],
    links: [
      { label: { es: 'Repositorio', en: 'Repository' }, url: 'https://github.com/IkerAlonso6/gestion-stock' }
    ],
    year: '2026',
    accent: '#8fd65f',
    initials: 'GS'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: {
      es: 'Tecnicatura Universitaria en Programación',
      en: 'University Programming Degree'
    },
    institution: 'UTN · Facultad Regional Córdoba',
    period: '2024 — 2027',
    description: [
      {
        es: 'Programación III: Java, Spring Boot y Angular',
        en: 'Programming III: Java, Spring Boot and Angular'
      },
      {
        es: 'Bases de Datos II: PostgreSQL, MongoDB, Redis, Neo4j y Cassandra',
        en: 'Databases II: PostgreSQL, MongoDB, Redis, Neo4j and Cassandra'
      },
      {
        es: 'Metodología de Sistemas e Ingeniería: UML y proceso de software',
        en: 'Systems Methodology and Engineering: UML and software process'
      },
      {
        es: 'Programación I y II: C# / .NET y bases de SQL Server',
        en: 'Programming I and II: C# / .NET and SQL Server basics'
      }
    ]
  }
];

export const COURSES: Course[] = [
  {
    name: { es: 'FreeCodeCamp — Responsive Web Design', en: 'FreeCodeCamp — Responsive Web Design' },
    description: {
      es: 'HTML, CSS y diseño web accesible y adaptable.',
      en: 'HTML, CSS and accessible, responsive web design.'
    }
  },
  {
    name: { es: 'Mouredev — Desarrollo web', en: 'Mouredev — Web development' },
    description: {
      es: 'Formación complementaria en desarrollo web moderno.',
      en: 'Extra training in modern web development.'
    }
  },
  {
    name: { es: 'JavaScript y manipulación del DOM', en: 'JavaScript and DOM manipulation' },
    description: {
      es: 'Curso práctico de JavaScript aplicado a la interacción en el navegador.',
      en: 'Hands-on JavaScript applied to browser interaction.'
    }
  }
];

export const CONTACT_ITEMS: ContactItem[] = [
  {
    id: 'email',
    label: { es: 'Email', en: 'Email' },
    value: 'ikergmalonso@gmail.com',
    href: 'mailto:ikergmalonso@gmail.com'
  },
  {
    id: 'phone',
    label: { es: 'Teléfono', en: 'Phone' },
    value: '+54 351 203 5074',
    href: 'tel:+543512035074'
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'iker-guillermo-alonso-87b60b287',
    href: 'https://www.linkedin.com/in/iker-guillermo-alonso-87b60b287'
  },
  {
    id: 'instagram',
    label: 'Instagram',
    value: '@ikeralonso___',
    href: 'https://www.instagram.com/ikeralonso___/'
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'IkerAlonso6',
    href: 'https://github.com/IkerAlonso6'
  }
];
