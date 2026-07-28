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
  { value: 25, prefix: '+', label: 'proyectos', description: 'Sitios diseñados para comunicar valor y generar confianza.' },
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
    url: 'https://aretearte.com',
  },
  {
    name: 'Los 4 Ases Música',
    category: 'Web institucional',
    description:
      'Presencia digital pensada para mostrar servicios, captar consultas y reforzar una imagen artística profesional.',
    technologies: ['Next.js', 'SEO', 'Animations'],
    image: assetUrl('project-ases.svg'),
    url: 'https://los4asesmusica.com',
  },
  {
    name: 'Barber Studio',
    category: 'Landing de reservas',
    description:
      'Interfaz orientada a conversión con foco en velocidad, presentación visual y contacto inmediato por WhatsApp.',
    technologies: ['Vite', 'JavaScript', 'Conversion UX'],
    image: assetUrl('project-barber.svg'),
    url: 'https://barber-drab-psi.vercel.app',
  },
];

export const services = [
  {
    title: 'Landing Page',
    subtitle: 'Perfecta para campañas, anuncios y captación rápida de leads.',
  },
  {
    title: 'Web Institucional',
    subtitle: 'Ideal para marcas que necesitan transmitir confianza y autoridad.',
  },
  {
    title: 'Tienda Online',
    subtitle: 'Pensada para vender productos o servicios con una experiencia cuidada.',
  },
];

export const serviceIncludes = [
  'Diseño moderno',
  'Responsive',
  'SEO básico',
  'Reservas online',
  'Catálogo de productos o servicios',
  'Integración con WhatsApp',
  'Panel administrativo',
  'Dominio incluido durante 1 año',
  'Hosting',
  'Mantenimiento',
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
      'Depende del alcance, pero una landing premium suele estar lista en pocas semanas. Un sitio institucional o una tienda online puede requerir más tiempo según contenido, revisiones e integraciones.',
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
