import type {
  AboutFact,
  ContactItem,
  Course,
  EducationItem,
  HeroMetric,
  Project,
  Skill,
  SkillGroup,
  WorkPractice
} from '../models/profile.model';

export const PROFILE = {
  name: 'Iker Guillermo Alonso',
  firstName: 'Iker',
  lastName: 'Alonso',
  initials: 'IGA',
  cvPath: 'cv-iker-alonso.pdf',
  cvAvailable: false,
  roles: [
    'hero.roles.0',
    'hero.roles.1',
    'hero.roles.2',
    'hero.roles.3'
  ]
};

/**
 * Orden de las secciones de la página. Es la única fuente de verdad:
 * de acá salen los links del navbar y el número que muestra cada encabezado.
 */
export const SECTION_ORDER = [
  'about',
  'projects',
  'skills',
  'work',
  'education',
  'contact'
] as const;

export type SectionId = (typeof SECTION_ORDER)[number];

/** Devuelve el ordinal de la sección ya formateado, p. ej. `02`. */
export function sectionNumber(id: SectionId): string {
  return String(SECTION_ORDER.indexOf(id) + 1).padStart(2, '0');
}

export const HERO_METRICS: HeroMetric[] = [
  {
    value: '10+',
    label: { es: 'aplicaciones full stack', en: 'full stack applications' }
  },
  {
    value: '4',
    label: { es: 'lenguajes principales', en: 'core languages' }
  },
  {
    value: '155',
    label: { es: 'tests en el proyecto principal', en: 'tests in the main project' }
  },
  {
    value: '8',
    label: { es: 'motores de base de datos', en: 'database engines' }
  }
];

export const ABOUT_FACTS: AboutFact[] = [
  {
    label: { es: 'Ubicación', en: 'Location' },
    value: { es: 'Córdoba, Argentina', en: 'Córdoba, Argentina' }
  },
  {
    label: { es: 'Foco', en: 'Focus' },
    value: { es: 'Java · Spring Boot · Angular', en: 'Java · Spring Boot · Angular' }
  },
  {
    label: { es: 'Disponibilidad', en: 'Availability' },
    value: { es: 'Full time · híbrido o remoto', en: 'Full time · hybrid or remote' }
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
    id: 'backend',
    title: { es: 'Backend', en: 'Backend' },
    skills: [
      SKILL('Java', 'openjdk'),
      SKILL('Spring Boot', 'springboot'),
      SKILL('Spring Security', 'spring'),
      SKILL('Hibernate / JPA', 'hibernate'),
      SKILL('C# / .NET', 'dotnet'),
      SKILL('Node.js', 'nodedotjs'),
      SKILL('WebSocket / STOMP')
    ]
  },
  {
    id: 'frontend',
    title: { es: 'Frontend', en: 'Frontend' },
    skills: [
      SKILL('Angular', 'angular'),
      SKILL('TypeScript', 'typescript'),
      SKILL('JavaScript', 'javascript'),
      SKILL('RxJS', 'rxjs'),
      SKILL('Angular Material', 'materialdesign'),
      SKILL('Tailwind CSS', 'tailwindcss'),
      SKILL('SCSS', 'sass'),
      SKILL('HTML5', 'html5')
    ]
  },
  {
    id: 'data',
    title: { es: 'Datos', en: 'Data' },
    skills: [
      SKILL('PostgreSQL', 'postgresql'),
      SKILL('SQL Server', 'microsoftsqlserver'),
      SKILL('MySQL', 'mysql'),
      SKILL('MongoDB', 'mongodb'),
      SKILL('Redis', 'redis'),
      SKILL('Neo4j', 'neo4j'),
      SKILL('Cassandra', 'apachecassandra'),
      SKILL('Flyway', 'flyway')
    ]
  },
  {
    id: 'quality',
    title: { es: 'Calidad', en: 'Quality' },
    skills: [
      SKILL('JUnit 5'),
      SKILL('Mockito'),
      SKILL('Vitest', 'vitest'),
      SKILL('Jest', 'jest'),
      SKILL('JaCoCo'),
      SKILL('Checkstyle'),
      SKILL('PMD')
    ]
  },
  {
    id: 'tools',
    title: { es: 'Herramientas', en: 'Tools' },
    skills: [
      SKILL('Git', 'git'),
      SKILL('GitHub', 'github'),
      SKILL('Docker', 'docker'),
      SKILL('Maven', 'apachemaven'),
      SKILL('Postman', 'postman'),
      SKILL('OpenAPI', 'swagger'),
      SKILL('Jira', 'jira')
    ]
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'bready',
    name: 'Bready',
    category: 'fullstack',
    featured: true,
    tagline: {
      es: 'Costeo real de producción y precio sugerido para una panadería',
      en: 'True production costing and suggested pricing for a bakery'
    },
    problem: {
      es: 'Una panadería no es rentable cubriendo sólo la materia prima: el costo real incluye mano de obra, planta y estructura. Repartir esos indirectos según el costo de materiales sub-costea las medialunas y sobre-costea las tortas.',
      en: 'A bakery is not profitable covering raw materials alone: the real cost includes labour, plant and overhead. Allocating those indirect costs by material cost under-prices croissants and over-prices cakes.'
    },
    description: {
      es: 'Aplicación multi-tenant donde cada usuario administra su propia panadería: insumos, recetas, empleados, costos fijos y parámetros de costeo. Calcula el costo real por producto y sugiere el precio de venta según el margen objetivo.',
      en: 'Multi-tenant application where each user manages their own bakery: inputs, recipes, employees, fixed costs and costing settings. It computes the real cost per product and suggests a sale price from a target margin.'
    },
    role: { es: 'Desarrollo completo', en: 'Solo build' },
    metrics: [
      { value: '155', label: { es: 'tests', en: 'tests' } },
      { value: '122', label: { es: 'clases backend', en: 'backend classes' } },
      { value: '8', label: { es: 'documentos de diseño', en: 'design documents' } }
    ],
    highlights: [
      {
        es: 'Modelo de costeo que reasigna indirectos por base causal en vez de por costo de materiales',
        en: 'Costing model that allocates overhead by a causal base instead of by material cost'
      },
      {
        es: 'Arquitectura hexagonal con dominio puro, sin anotaciones de framework',
        en: 'Hexagonal architecture with a pure domain, free of framework annotations'
      },
      {
        es: 'Autenticación JWT y aislamiento de datos por usuario',
        en: 'JWT authentication and per-user data isolation'
      },
      {
        es: 'Migraciones versionadas con Flyway',
        en: 'Versioned migrations with Flyway'
      }
    ],
    stack: ['Java 11', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Flyway', 'Angular 21', 'Angular Material'],
    links: [
      {
        label: { es: 'Repositorio', en: 'Repository' },
        url: 'https://github.com/IkerAlonso6/Bakery-cost-calculator-bready',
        type: 'repo'
      }
    ],
    year: '2026',
    accent: '#ffb454',
    initials: 'BR'
  },
  {
    id: 'pedidos-panaderia',
    name: {
      es: 'Sistema de Pedidos',
      en: 'Order Management System'
    },
    category: 'fullstack',
    featured: true,
    tagline: {
      es: 'Digitaliza el circuito de pedidos y reparto de una panadería',
      en: 'Digitises the order and delivery flow of a bakery'
    },
    problem: {
      es: 'El negocio operaba de forma completamente analógica: los pedidos llegaban por WhatsApp la noche anterior, el repartidor verificaba stock a mano y otro sector leía boleta por boleta en papel para armar los resúmenes de cobro.',
      en: 'The business ran entirely on paper: orders arrived by WhatsApp the night before, the driver checked stock by hand, and another team read receipt by receipt to build the billing summaries.'
    },
    description: {
      es: 'Sistema de gestión con dos perfiles de uso: una vista móvil para el repartidor, que carga pedidos y confirma entregas, y una vista de escritorio para administración, con ABM completo, métricas de venta y resúmenes de cobro.',
      en: 'Management system with two usage profiles: a mobile view for the delivery driver, who loads orders and confirms deliveries, and a desktop view for administration, with full CRUD, sales metrics and billing summaries.'
    },
    role: { es: 'Desarrollo completo', en: 'Solo build' },
    metrics: [
      { value: '79', label: { es: 'clases backend', en: 'backend classes' } },
      { value: '~8k', label: { es: 'líneas', en: 'lines' } }
    ],
    highlights: [
      {
        es: 'Plantillas de pedido automáticas según tipo de día: hábil, fin de semana o feriado',
        en: 'Automatic order templates by day type: weekday, weekend or holiday'
      },
      {
        es: 'Tarifas específicas por combinación de cliente y producto',
        en: 'Per client-product pricing'
      },
      {
        es: 'Boletas con o sin precios según el tipo de facturación del cliente',
        en: 'Receipts with or without prices depending on the customer billing type'
      },
      {
        es: 'Control de stock con alertas y resúmenes de cobro por período',
        en: 'Stock control with alerts and period billing summaries'
      }
    ],
    stack: ['Java 21', 'Spring Boot 3.2', 'Hibernate / JPA', 'PostgreSQL', 'JavaScript', 'API REST'],
    links: [],
    note: { es: 'Código disponible a pedido', en: 'Code available on request' },
    year: '2026',
    accent: '#e07a5f',
    initials: 'SP'
  },
  {
    id: 'portfolio-arquitectura',
    name: {
      es: 'Portfolio de arquitectura',
      en: 'Architecture portfolio'
    },
    category: 'frontend',
    featured: true,
    tagline: {
      es: 'Sitio de obra para un estudio de arquitectura',
      en: 'Project showcase site for an architecture studio'
    },
    problem: {
      es: 'La clienta necesitaba mostrar su obra con memorias, cortes y renders, sin que el resultado se leyera como un CV: cada proyecto tenía que poder recorrerse por capítulos.',
      en: 'The client needed to present her work with design notes, sections and renders, without the result reading like a CV: each project had to be browsable chapter by chapter.'
    },
    description: {
      es: 'Single page application en JavaScript sin frameworks, con router propio y contenido gobernado por un archivo JSON, de modo que sumar un proyecto no requiere tocar código.',
      en: 'Single page application in framework-free JavaScript, with a hand-written router and content driven by a JSON file, so adding a project requires no code changes.'
    },
    role: { es: 'Encargo de clienta · desarrollo completo', en: 'Client commission · solo build' },
    metrics: [
      { value: '100%', label: { es: 'sin frameworks', en: 'framework-free' } },
      { value: '4', label: { es: 'proyectos publicados', en: 'published projects' } }
    ],
    highlights: [
      {
        es: 'Router de cliente escrito a mano, sin dependencias',
        en: 'Hand-written client router, dependency free'
      },
      {
        es: 'Contenido desacoplado en JSON, con detalle por capítulos',
        en: 'Content decoupled into JSON, with chapter-based detail views'
      },
      {
        es: 'Modo claro y oscuro con preferencia persistida',
        en: 'Light and dark mode with persisted preference'
      },
      {
        es: 'Carga diferida de imágenes y video de renders',
        en: 'Lazy loading of images and render videos'
      }
    ],
    stack: ['JavaScript', 'HTML5', 'CSS3', 'JSON'],
    links: [
      {
        label: { es: 'Repositorio', en: 'Repository' },
        url: 'https://github.com/IkerAlonso6/Portfolio-Martina-Costa-Fonseca',
        type: 'repo'
      }
    ],
    year: '2026',
    accent: '#c792ea',
    initials: 'AR'
  },
  {
    id: 'pokemon-tcg',
    name: 'Pokémon TCG',
    category: 'fullstack',
    featured: true,
    tagline: {
      es: 'Juego de cartas en tiempo real con motor de reglas desacoplado',
      en: 'Real-time card game with a decoupled rules engine'
    },
    problem: {
      es: 'Las reglas de un juego de cartas cambian seguido y son difíciles de testear si viven mezcladas con los controllers. El desafío era poder ejercitar el juego completo sin levantar la red ni la base de datos.',
      en: 'Card game rules change often and are hard to test when they live tangled with controllers. The challenge was exercising the whole game without booting the network or the database.'
    },
    description: {
      es: 'Juego de cartas coleccionables donde los usuarios arman barajas con cartas sincronizadas desde la API pública de Pokémon TCG y se enfrentan en partidas en tiempo real, con chat incluido.',
      en: 'Trading card game where users build decks from cards synced from the public Pokémon TCG API and battle in real-time matches, chat included.'
    },
    role: { es: 'Equipo · backend y frontend', en: 'Team · backend and frontend' },
    metrics: [
      { value: '159', label: { es: 'clases backend', en: 'backend classes' } },
      { value: '~17k', label: { es: 'líneas Java', en: 'lines of Java' } }
    ],
    highlights: [
      {
        es: 'Motor de juego aislado de REST, WebSocket y persistencia: reglas, combate, turnos y condiciones de victoria',
        en: 'Game engine isolated from REST, WebSocket and persistence: rules, combat, turns and victory conditions'
      },
      {
        es: 'Transporte híbrido: REST para autenticación y barajas, STOMP sobre SockJS para la partida',
        en: 'Hybrid transport: REST for auth and decks, STOMP over SockJS for in-game commands'
      },
      {
        es: 'Integración y cacheo de la API externa pokemontcg.io',
        en: 'Integration and caching of the external pokemontcg.io API'
      },
      {
        es: 'Checkstyle, PMD y cobertura JaCoCo como puertas de calidad',
        en: 'Checkstyle, PMD and JaCoCo coverage as quality gates'
      }
    ],
    stack: ['Java 21', 'Spring Boot 4', 'WebSocket / STOMP', 'MySQL', 'Angular 20', 'OpenAPI'],
    links: [
      {
        label: { es: 'Repositorio', en: 'Repository' },
        url: 'https://github.com/2026-P3-BE/tpi-pokemon-2w2-11',
        type: 'repo'
      }
    ],
    year: '2026',
    accent: '#3ecf8e',
    initials: 'PK'
  },
  {
    id: 'gestion-stock',
    name: { es: 'Gestión de Stock', en: 'Stock Management' },
    category: 'fullstack',
    featured: false,
    tagline: {
      es: 'Inventario de insumos con detección de consumo no registrado',
      en: 'Supply inventory with unregistered consumption detection'
    },
    description: {
      es: 'Gestor de insumos y movimientos de stock con recuento físico mensual. Al cerrar el mes compara el stock teórico contra el contado y expone la diferencia como consumo no registrado, que es donde suelen esconderse las pérdidas.',
      en: 'Supply and stock movement manager with a monthly physical count. On month close it compares theoretical against counted stock and surfaces the gap as unregistered consumption, which is where losses usually hide.'
    },
    role: { es: 'Desarrollo completo', en: 'Solo build' },
    highlights: [
      {
        es: 'Recuento mensual que corrige el stock y genera reporte de consumo por insumo',
        en: 'Monthly count that corrects stock and generates per-item consumption reports'
      },
      {
        es: 'Movimientos con fecha real y fecha de registro separadas, para auditoría',
        en: 'Movements with separate real and record dates, for auditing'
      },
      {
        es: 'Exportación e importación de Excel con ExcelJS',
        en: 'Excel export and import with ExcelJS'
      }
    ],
    stack: ['Java 11', 'Spring Boot', 'PostgreSQL', 'Flyway', 'Angular 21', 'ExcelJS', 'Vitest'],
    links: [
      {
        label: { es: 'Repositorio', en: 'Repository' },
        url: 'https://github.com/IkerAlonso6/gestion-stock',
        type: 'repo'
      }
    ],
    year: '2026',
    accent: '#8fd65f',
    initials: 'GS'
  },
  {
    id: 'drugstore-app',
    name: 'DrugstoreApp',
    category: 'desktop',
    featured: false,
    tagline: {
      es: 'Punto de venta y control de stock de escritorio',
      en: 'Desktop point of sale and stock control'
    },
    description: {
      es: 'Sistema de gestión para un drugstore: caja, ventas, comprobantes, gastos, proveedores y movimientos de stock, con usuarios por rol y contraseñas hasheadas. Sostenido a lo largo de cuatro meses de desarrollo continuo.',
      en: 'Management system for a drugstore: register, sales, receipts, expenses, suppliers and stock movements, with role-based users and hashed passwords. Sustained over four months of continuous development.'
    },
    role: { es: 'Desarrollo completo', en: 'Solo build' },
    metrics: [
      { value: '96', label: { es: 'commits', en: 'commits' } },
      { value: '~13k', label: { es: 'líneas', en: 'lines' } }
    ],
    highlights: [
      {
        es: 'Capas separadas con interfaces, repositorios y una fábrica de servicios',
        en: 'Layered design with interfaces, repositories and a service factory'
      },
      {
        es: 'Login por roles con hash BCrypt',
        en: 'Role-based login with BCrypt hashing'
      },
      {
        es: 'Cierre de caja, comprobantes y gráficos de venta',
        en: 'Register close, receipts and sales charts'
      }
    ],
    stack: ['C#', '.NET Framework', 'WinForms', 'Entity Framework 6', 'SQLite', 'BCrypt'],
    links: [
      {
        label: { es: 'Repositorio', en: 'Repository' },
        url: 'https://github.com/411999-Alonso/DrugstoreApp',
        type: 'repo'
      }
    ],
    year: '2025',
    accent: '#ff8fa3',
    initials: 'DS'
  },
  {
    id: 'teg',
    name: 'TEG',
    category: 'fullstack',
    featured: false,
    tagline: {
      es: 'Juego de estrategia por turnos sobre un mapa de 50 países',
      en: 'Turn-based strategy game over a 50-country map'
    },
    description: {
      es: 'Versión digital del clásico juego de estrategia: gestión de turnos, combate por dados, canje de cartas, objetivos secretos y bonus por continente, con partidas multijugador y estadísticas por jugador.',
      en: 'Digital version of the classic strategy board game: turn management, dice combat, card trading, secret objectives and continent bonuses, with multiplayer matches and per-player statistics.'
    },
    role: { es: 'Equipo de 7', en: 'Team of 7' },
    highlights: [
      {
        es: 'Patrón State para el ciclo de vida de la partida',
        en: 'State pattern for the match lifecycle'
      },
      {
        es: 'Strategy para tres niveles de dificultad de los bots',
        en: 'Strategy pattern for three bot difficulty levels'
      },
      {
        es: 'Observer para notificaciones e historial de eventos',
        en: 'Observer pattern for notifications and event history'
      },
      {
        es: 'Camino más corto ponderado sobre el grafo de países',
        en: 'Weighted shortest path over the country graph'
      }
    ],
    stack: ['Java 17', 'Spring Boot 3.1', 'PostgreSQL', 'H2', 'Angular', 'Tailwind CSS'],
    links: [
      {
        label: { es: 'Repositorio', en: 'Repository' },
        url: 'https://github.com/2025-P3-FE-2W2-2/tpi-teg-grupo-06',
        type: 'repo'
      }
    ],
    year: '2025',
    accent: '#4fb3ff',
    initials: 'TEG'
  },
  {
    id: 'camino-mortal',
    name: 'Camino Mortal',
    category: 'fullstack',
    featured: false,
    tagline: {
      es: 'Juego de tablero con combate, efectos de estado y bots',
      en: 'Board game with combat, status effects and bots'
    },
    description: {
      es: 'Juego por turnos gobernado por dados, con zonas especiales, efectos que persisten entre turnos y oponentes controlados por la máquina. El dominio se mantiene libre de código de framework, aislado de la capa web y de la persistencia.',
      en: 'Turn-based game driven by dice, with special zones, effects that persist across turns and machine-controlled opponents. The domain stays free of framework code, isolated from the web and persistence layers.'
    },
    role: { es: 'Desarrollo completo', en: 'Solo build' },
    highlights: [
      {
        es: 'Dominio separado en modelo, combate, dados, efectos, turnos y bots',
        en: 'Domain split into model, combat, dice, effects, turns and bots'
      },
      {
        es: 'Capas application, web e infrastructure alrededor de un núcleo puro',
        en: 'Application, web and infrastructure layers around a pure core'
      },
      {
        es: 'Frontend probado con Vitest',
        en: 'Frontend tested with Vitest'
      }
    ],
    stack: ['Java', 'Spring Boot', 'H2', 'Angular 21', 'Vitest'],
    links: [
      {
        label: { es: 'Repositorio', en: 'Repository' },
        url: 'https://github.com/2026-P3-FE/be-fe-exam-camino-mortal-411999-Alonso',
        type: 'repo'
      }
    ],
    year: '2026',
    accent: '#f78c6c',
    initials: 'CM'
  },
  {
    id: 'monolitos',
    name: {
      es: 'Monolitos Cromáticos',
      en: 'Chromatic Monoliths'
    },
    category: 'fullstack',
    featured: false,
    tagline: {
      es: 'Puzzle con generador que garantiza solución',
      en: 'Puzzle with a solution-guaranteeing generator'
    },
    description: {
      es: 'Rompecabezas de 36 prismas hexagonales que deben apilarse en una torre estable: cada cara unida tiene que coincidir en figura y diferir en color, con restricciones encadenadas sobre colores y figuras consecutivas.',
      en: 'Puzzle of 36 hexagonal prisms to be stacked into a stable tower: every joined face must match in figure and differ in colour, with chained constraints over consecutive colours and figures.'
    },
    role: { es: 'Desarrollo completo', en: 'Solo build' },
    highlights: [
      {
        es: 'El generador demuestra que existe una solución válida antes de mezclar y presentar el desafío',
        en: 'The generator proves a valid solution exists before shuffling and presenting the challenge'
      },
      {
        es: 'Motor de reglas separado de la generación y del estado de partida',
        en: 'Rules engine separated from generation and match state'
      },
      {
        es: 'Objetivo de cobertura del 95% con JaCoCo',
        en: '95% coverage target with JaCoCo'
      }
    ],
    stack: ['Java', 'Spring Boot 3', 'H2', 'Angular 18', 'JaCoCo'],
    links: [
      {
        label: { es: 'Repositorio', en: 'Repository' },
        url: 'https://github.com/2026-P3-BE/recu-be-fe-p3-monoliths-411999-Alonso',
        type: 'repo'
      }
    ],
    year: '2026',
    accent: '#82aaff',
    initials: 'MC'
  },
  {
    id: 'jurassic-pharm',
    name: 'JurassicPharm',
    category: 'fullstack',
    featured: false,
    tagline: {
      es: 'Gestión de una cadena de farmacias multi-sucursal',
      en: 'Multi-branch pharmacy chain management'
    },
    description: {
      es: 'Sistema de administración para una cadena de farmacias: clientes, empleados, proveedores, stock por sucursal, recetas con médicos y obras sociales, y facturación con detalle de líneas.',
      en: 'Administration system for a pharmacy chain: clients, employees, suppliers, per-branch stock, prescriptions with doctors and health insurers, and invoicing with line detail.'
    },
    role: { es: 'Desarrollo completo', en: 'Solo build' },
    highlights: [
      {
        es: 'API REST en capas con DTOs por dominio y documentación Swagger',
        en: 'Layered REST API with per-domain DTOs and Swagger documentation'
      },
      {
        es: 'Stored procedure y vista en SQL Server para reportes de proveedores y facturación',
        en: 'SQL Server stored procedure and view for supplier and billing reports'
      },
      {
        es: 'Autenticación JWT con hash BCrypt',
        en: 'JWT authentication with BCrypt hashing'
      }
    ],
    stack: ['C#', '.NET 8', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'Swagger'],
    links: [],
    note: { es: 'Código disponible a pedido', en: 'Code available on request' },
    year: '2025',
    accent: '#7fdbca',
    initials: 'JP'
  },
  {
    id: 'escoba',
    name: {
      es: 'La Escoba de 15',
      en: 'Escoba de 15'
    },
    category: 'backend',
    featured: false,
    tagline: {
      es: 'Motor completo del juego de cartas español',
      en: 'Complete engine for the Spanish card game'
    },
    description: {
      es: 'Implementación del tradicional juego de cartas: baraja española de 40 cartas, barridos de la mesa sumando quince y el recuento de puntos con todas sus variantes de desempate.',
      en: 'Implementation of the traditional card game: 40-card Spanish deck, sweeping the table by summing to fifteen, and point counting with all its tie-breaking variants.'
    },
    role: { es: 'Desarrollo completo', en: 'Solo build' },
    highlights: [
      {
        es: 'Búsqueda de todas las combinaciones de mesa que suman quince',
        en: 'Search for every table combination summing to fifteen'
      },
      {
        es: 'Reglas de puntuación y desempate cubiertas con tests',
        en: 'Scoring and tie-breaking rules covered by tests'
      }
    ],
    stack: ['Java', 'Maven', 'JUnit 5'],
    links: [
      {
        label: { es: 'Repositorio', en: 'Repository' },
        url: 'https://github.com/2025-P3-BE-2W2/practica-examen-escoba-411999-Alonso',
        type: 'repo'
      }
    ],
    year: '2025',
    accent: '#ddd06a',
    initials: 'E15'
  }
];

export const WORK_PRACTICES: WorkPractice[] = [
  {
    icon: '◱',
    title: { es: 'Arquitectura hexagonal', en: 'Hexagonal architecture' },
    description: {
      es: 'El dominio no conoce a Spring ni a la base de datos: entidades puras, puertos en la capa de aplicación y mappers escritos a mano. Cambiar de motor o de transporte no toca las reglas de negocio.',
      en: 'The domain knows nothing about Spring or the database: pure entities, ports in the application layer and hand-written mappers. Swapping engine or transport never touches business rules.'
    }
  },
  {
    icon: '✓',
    title: { es: 'Tests como red de seguridad', en: 'Tests as a safety net' },
    description: {
      es: 'La lógica de negocio se cubre antes de darla por terminada: 155 tests en el proyecto principal, y Checkstyle, PMD y cobertura JaCoCo como puertas de calidad en los proyectos de equipo.',
      en: 'Business logic gets covered before it is called done: 155 tests in the main project, plus Checkstyle, PMD and JaCoCo coverage as quality gates on team projects.'
    }
  },
  {
    icon: '⇡',
    title: { es: 'Migraciones versionadas', en: 'Versioned migrations' },
    description: {
      es: 'El esquema evoluciona con migraciones Flyway numeradas y nunca a mano. Cualquiera puede levantar el proyecto desde cero y llegar exactamente al mismo estado.',
      en: 'The schema evolves through numbered Flyway migrations, never by hand. Anyone can boot the project from scratch and land on exactly the same state.'
    }
  },
  {
    icon: '❖',
    title: { es: 'Diseñar antes de escribir', en: 'Design before writing' },
    description: {
      es: 'Los proyectos grandes arrancan por el documento: modelo de dominio, esquema de datos, reglas de negocio y estándares de código. El código llega después, y sale más corto.',
      en: 'Large projects start with the document: domain model, data schema, business rules and coding standards. The code comes after, and comes out shorter.'
    }
  },
  {
    icon: '⚖',
    title: { es: 'Decisiones explícitas', en: 'Explicit decisions' },
    description: {
      es: 'BigDecimal y nunca coma flotante para montos. Optional en lugar de null. Los controllers devuelven DTOs, jamás entidades. Cada convención queda escrita para que el equipo la sostenga.',
      en: 'BigDecimal and never floating point for money. Optional instead of null. Controllers return DTOs, never entities. Every convention is written down so the team can hold the line.'
    }
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
    id: 'github',
    label: 'GitHub',
    value: 'IkerAlonso6',
    href: 'https://github.com/IkerAlonso6'
  }
];
