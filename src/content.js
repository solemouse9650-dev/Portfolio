const assetUrl = (fileName) => `${import.meta.env.BASE_URL}${fileName}`;

export const siteConfig = {
  brand: 'Zentro Web',
  siteUrl: 'https://solemouse9650-dev.github.io/Portfolio/',
  email: 'contacto@zentroweb.com',
  whatsappUrl: 'https://wa.me/543758502801',
  instagramUrl: 'https://www.instagram.com/zentro_web.ar/',
  tiktokUrl: 'https://www.tiktok.com/@zentro_web',
  logo: assetUrl('zentro.jpeg'),
  heroImage: assetUrl('hero-preview.svg'),
  aboutImage: assetUrl('avatar-placeholder.svg'),
};

export const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
];

export const stats = [
  {
    displayValue: 'A medida',
    label: 'Atención personalizada',
    description: 'Cada proyecto recibe una solución alineada a sus objetivos y necesidades.',
  },
  { value: 100, suffix: '%', label: 'responsive', description: 'Experiencia pulida en desktop, tablet y móviles.' },
  { value: 95, suffix: '/100', label: 'SEO técnico', description: 'Base preparada para escalar posicionamiento y rendimiento.' },
  { value: 24, suffix: '/7', label: 'soporte continuo', description: 'Acompañamiento visual y técnico para seguir creciendo.' },
];

export const projects = [
  {
    name: 'Arete Arte',
    category: 'Web cultural',
    description:
      'Sitio visual enfocado en transmitir identidad, claridad de oferta y una experiencia elegante para audiencias creativas.',
    technologies: ['React', 'Tailwind CSS', 'Responsive UI'],
    image: assetUrl('project-arete.svg'),
    favicon: assetUrl('favicon-arete.png'),
    url: 'https://aretearte.com',
  },
  {
    name: 'Los 4 Ases Música',
    category: 'Web institucional',
    description:
      'Presencia digital pensada para mostrar servicios, captar consultas y reforzar una imagen artística profesional.',
    technologies: ['Next.js', 'SEO', 'Animations'],
    image: assetUrl('project-ases.svg'),
    favicon: assetUrl('favicon-ases.png'),
    url: 'https://los4asesmusica.com',
  },
  {
    name: 'Barber Studio',
    category: 'Landing de reservas',
    description:
      'Interfaz orientada a conversión con foco en velocidad, presentación visual y contacto inmediato por WhatsApp.',
    technologies: ['Vite', 'JavaScript', 'Conversion UX'],
    image: assetUrl('project-barber.svg'),
    favicon: assetUrl('favicon-barber.png'),
    url: 'https://barber-drab-psi.vercel.app',
  },
];

export const services = [
  {
    title: 'Landing Page',
    subtitle: 'Perfecta para campañas, anuncios y captación rápida de leads.',
    features: [
      'Diseño enfocado en conversión',
      'Formularios de contacto',
      'Integración con WhatsApp',
      'Llamados a la acción',
      'SEO básico',
      'Responsive',
    ],
  },
  {
    title: 'Web Institucional',
    subtitle: 'Ideal para marcas que necesitan transmitir confianza y autoridad.',
    features: [
      'Varias secciones',
      'Información empresarial',
      'Galería',
      'Formularios',
      'SEO',
      'Responsive',
      'Panel de contenido (si aplica)',
    ],
  },
  {
    title: 'Tienda Online',
    subtitle: 'Pensada para vender productos o servicios con una experiencia cuidada.',
    features: [
      'Catálogo completo',
      'Carrito',
      'Pagos online',
      'Gestión de productos',
      'Panel administrativo',
      'Control de stock',
      'Integración con WhatsApp',
      'SEO',
    ],
  },
];

export const processSteps = [
  { title: 'Analizamos tu negocio', text: 'Definimos objetivos, audiencia y oportunidades reales de conversión.' },
  { title: 'Diseñamos la propuesta', text: 'Construimos una dirección visual premium alineada a tu marca.' },
  { title: 'Desarrollamos el sitio', text: 'Implementamos una experiencia rápida, clara y lista para crecer.' },
  { title: 'Revisamos juntos', text: 'Ajustamos detalles clave para dejar todo afinado antes de publicar.' },
  { title: 'Publicamos', text: 'Dejamos la web optimizada, estable y preparada para posicionar.' },
  { title: 'Soporte continuo', text: 'Te acompañamos con mejoras, mantenimiento y futuras integraciones.' },
];

export const benefits = [
  'Más clientes',
  'Más confianza',
  'Mayor presencia online',
  'Disponible 24/7',
  'Carga rápida',
  'Compatible con celulares',
  'Diseño profesional',
  'Optimización para Google',
  'Escalable',
  'Seguridad',
];

export const techStack = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next.js',
  'Firebase',
  'Supabase',
  'Tailwind CSS',
  'Vercel',
  'GitHub',
];

export const faqs = [
  {
    question: '¿Cuánto tarda una web?',
    answer:
      'El tiempo depende del alcance, el contenido y las funcionalidades. Trabajo con un proceso rápido y organizado, manteniendo una comunicación clara para avanzar de forma eficiente sin comprometer la calidad.',
  },
  {
    question: '¿Cuánto cuesta?',
    answer:
      'El presupuesto depende del tipo de web, cantidad de secciones, funcionalidades y nivel de personalización. La idea es definir una solución alineada al objetivo comercial de tu negocio.',
  },
  {
    question: '¿Incluye dominio?',
    answer:
      'Sí, la propuesta puede contemplar el dominio durante el primer año para que lances tu proyecto con todo resuelto desde el inicio.',
  },
  {
    question: '¿Incluye hosting?',
    answer:
      'Sí, se puede incluir hosting optimizado y configuración inicial para que tu web cargue rápido y se mantenga estable.',
  },
  {
    question: '¿Tiene mantenimiento?',
    answer:
      'Sí, es posible sumar mantenimiento continuo para contenido, ajustes visuales, soporte técnico y futuras mejoras.',
  },
  {
    question: '¿Puedo editarla?',
    answer:
      'Sí, la base está pensada para que luego puedas integrar panel administrativo o gestionar contenido de forma simple según el tipo de proyecto.',
  },
  {
    question: '¿Cómo empiezo?',
    answer:
      'El primer paso es una charla breve para entender tu negocio, prioridades y objetivos. Desde ahí se arma una propuesta clara y personalizada.',
  },
];

export const socialLinks = [
  { label: 'WhatsApp', href: 'https://wa.me/543758502801' },
  { label: 'Instagram', href: 'https://www.instagram.com/zentro_web.ar/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@zentro_web' },
  { label: 'Email', href: 'mailto:contacto@zentroweb.com' },
];

export const legalPages = {
  privacidad: {
    title: 'Política de Privacidad',
    description: 'Cómo se tratan los datos personales al utilizar el sitio y sus canales de contacto.',
    updatedAt: '28 de julio de 2026',
    sections: [
      {
        title: '1. Responsable y alcance',
        paragraphs: [
          'Esta política explica el tratamiento de la información que puede compartirse al contactar con Zentro Web mediante el formulario, correo electrónico, WhatsApp o redes sociales.',
          'Las actividades comerciales realizadas por el desarrollador cuentan con la supervisión de un tutor responsable.',
        ],
      },
      {
        title: '2. Datos que se pueden recibir',
        paragraphs: [
          'El sitio puede recibir nombre, dirección de correo electrónico y el contenido del mensaje que la persona decida enviar. El formulario actual prepara la consulta para WhatsApp y no almacena información en una base de datos propia.',
        ],
      },
      {
        title: '3. Finalidad y conservación',
        paragraphs: [
          'Los datos se utilizan únicamente para responder consultas, preparar presupuestos y mantener comunicaciones relacionadas con un proyecto solicitado. No se venden ni se ceden con fines publicitarios.',
          'La información se conserva solo durante el tiempo necesario para atender la consulta o cumplir obligaciones legales aplicables.',
        ],
      },
      {
        title: '4. Servicios de terceros',
        paragraphs: [
          'El sitio contiene enlaces a WhatsApp, Instagram, TikTok, correo electrónico y proyectos externos. Cada servicio aplica sus propias condiciones y políticas de privacidad.',
        ],
      },
      {
        title: '5. Derechos y contacto',
        paragraphs: [
          'Puedes solicitar acceso, rectificación o eliminación de la información enviada escribiendo a contacto@zentroweb.com.',
        ],
      },
    ],
  },
  terminos: {
    title: 'Términos y Condiciones',
    description: 'Condiciones generales de uso del portfolio y de contratación de servicios.',
    updatedAt: '28 de julio de 2026',
    sections: [
      {
        title: '1. Uso del sitio',
        paragraphs: [
          'Este portfolio presenta servicios, procesos y ejemplos de diseño y desarrollo web. Su contenido es informativo y puede actualizarse para reflejar mejoras o cambios en la propuesta profesional.',
        ],
      },
      {
        title: '2. Presupuestos y contratación',
        paragraphs: [
          'Cada proyecto se cotiza de forma personalizada según alcance, contenido, funcionalidades y soporte requerido. Ningún contacto inicial implica una contratación automática.',
          'El alcance, precio, forma de pago, revisiones y condiciones de entrega se detallarán por escrito antes de comenzar.',
        ],
      },
      {
        title: '3. Supervisión responsable',
        paragraphs: [
          'El desarrollador es menor de edad. Las actividades comerciales, acuerdos y operaciones vinculadas con los servicios cuentan con la supervisión de un tutor responsable.',
        ],
      },
      {
        title: '4. Propiedad intelectual',
        paragraphs: [
          'El diseño, los textos y los recursos propios de este portfolio no pueden reproducirse sin autorización. Las marcas, favicons y contenidos de proyectos destacados pertenecen a sus respectivos titulares y se muestran como referencia profesional.',
        ],
      },
      {
        title: '5. Responsabilidad',
        paragraphs: [
          'Se trabaja para mantener información clara y un funcionamiento estable, pero no se garantiza la disponibilidad permanente de servicios externos ni de enlaces administrados por terceros.',
        ],
      },
    ],
  },
  cookies: {
    title: 'Política de Cookies',
    description: 'Información sobre el almacenamiento local y los recursos utilizados por este sitio.',
    updatedAt: '28 de julio de 2026',
    sections: [
      {
        title: '1. Uso actual',
        paragraphs: [
          'Este sitio no utiliza cookies publicitarias ni herramientas propias de seguimiento. Solo guarda una preferencia técnica de sesión para evitar repetir innecesariamente la animación inicial durante la misma visita.',
        ],
      },
      {
        title: '2. Recursos externos',
        paragraphs: [
          'La tipografía puede cargarse desde Google Fonts y los botones pueden dirigir a servicios externos como WhatsApp, Instagram o TikTok. Estos proveedores podrían aplicar sus propias tecnologías de almacenamiento al acceder a sus plataformas.',
        ],
      },
      {
        title: '3. Control desde el navegador',
        paragraphs: [
          'Puedes eliminar datos de sesión, bloquear cookies o modificar permisos desde la configuración de tu navegador. El sitio seguirá siendo navegable, aunque algunas preferencias podrían restablecerse.',
        ],
      },
      {
        title: '4. Cambios en esta política',
        paragraphs: [
          'Si en el futuro se incorporan analítica, personalización u otras tecnologías, esta política se actualizará antes de su implementación.',
        ],
      },
    ],
  },
};

export const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Zentro Web',
  description:
    'Servicio profesional de diseño y desarrollo web orientado a crear sitios rápidos, modernos y optimizados para convertir visitas en clientes.',
  url: 'https://solemouse9650-dev.github.io/Portfolio/',
  image: 'https://solemouse9650-dev.github.io/Portfolio/zentro.jpeg',
  logo: 'https://solemouse9650-dev.github.io/Portfolio/zentro.jpeg',
  areaServed: 'Argentina',
  email: 'contacto@zentroweb.com',
  sameAs: [
    'https://www.instagram.com/zentro_web.ar/',
    'https://www.tiktok.com/@zentro_web',
    'https://wa.me/543758502801',
  ],
  makesOffer: services.map((service) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: service.title,
      description: service.subtitle,
    },
  })),
};
