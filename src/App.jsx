import { useEffect, useMemo, useRef, useState } from 'react';
import {
  FaArrowRightLong,
  FaArrowUp,
  FaBolt,
  FaChartLine,
  FaCheck,
  FaClock,
  FaCode,
  FaComments,
  FaCss3Alt,
  FaEnvelope,
  FaGlobe,
  FaGoogle,
  FaHeadset,
  FaHtml5,
  FaInstagram,
  FaJs,
  FaMagnifyingGlass,
  FaMobileScreenButton,
  FaReact,
  FaRocket,
  FaShieldHalved,
  FaStore,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa6';
import { SiFirebase, SiNextdotjs, SiSupabase, SiTailwindcss, SiVercel } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import {
  benefits,
  faqs,
  navItems,
  processSteps,
  projects,
  schemaData,
  serviceIncludes,
  services,
  siteConfig,
  socialLinks,
  stats,
  techStack,
} from './content';

const techIconMap = {
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJs,
  React: FaReact,
  'Next.js': SiNextdotjs,
  Firebase: SiFirebase,
  Supabase: SiSupabase,
  'Tailwind CSS': SiTailwindcss,
  Vercel: SiVercel,
  GitHub: FaGithub,
};

const processIcons = [FaMagnifyingGlass, FaChartLine, FaCode, FaComments, FaRocket, FaHeadset];
const serviceIcons = [FaRocket, FaGlobe, FaStore];
const benefitIcons = [
  FaChartLine,
  FaShieldHalved,
  FaGlobe,
  FaClock,
  FaBolt,
  FaMobileScreenButton,
  FaChartLine,
  FaGoogle,
  FaCode,
  FaShieldHalved,
];

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function useAnimatedNumber(target) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    let animationFrame = 0;
    let hasStarted = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted) return;

        hasStarted = true;
        const start = performance.now();
        const duration = 1500;

        const animate = (time) => {
          const progress = Math.min((time - start) / duration, 1);
          const eased = 1 - (1 - progress) ** 4;
          setValue(Math.round(target * eased));

          if (progress < 1) {
            animationFrame = window.requestAnimationFrame(animate);
          }
        };

        animationFrame = window.requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.45 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, [target]);

  return { ref, value };
}

function StatCard({ stat, index }) {
  const { ref, value } = useAnimatedNumber(stat.value);

  return (
    <Reveal delay={index * 90}>
      <article ref={ref} className="stat-card surface-card">
        <span className="stat-value">
          {stat.prefix ?? ''}
          {value}
          {stat.suffix ?? ''}
        </span>
        <h3>{stat.label}</h3>
        <p>{stat.description}</p>
      </article>
    </Reveal>
  );
}

function InteractiveCard({ as: Component = 'article', className = '', children, ...props }) {
  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    event.currentTarget.style.setProperty('--pointer-x', `${x}%`);
    event.currentTarget.style.setProperty('--pointer-y', `${y}%`);
  };

  return (
    <Component onMouseMove={handleMove} className={`interactive-card ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [showTopButton, setShowTopButton] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });
  const scrollProgressRef = useRef(null);
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const hasSeenLoader = window.sessionStorage.getItem('zentro-loader-seen');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = window.setTimeout(
      () => {
        setIsReady(true);
        window.sessionStorage.setItem('zentro-loader-seen', 'true');
      },
      hasSeenLoader || reduceMotion ? 0 : 650,
    );
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    let animationFrame = 0;

    const handleScroll = () => {
      if (animationFrame) return;

      animationFrame = window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

        if (scrollProgressRef.current) {
          scrollProgressRef.current.style.transform = `scaleX(${progress})`;
        }

        setShowTopButton(scrollTop > 520);
        document.documentElement.style.setProperty('--scroll-y', `${scrollTop}`);
        animationFrame = 0;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormValues((previous) => ({ ...previous, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormStatus('loading');
    const text = [
      'Hola Zentro Web, quiero consultar por un proyecto.',
      '',
      `Nombre: ${formValues.name}`,
      `Email: ${formValues.email}`,
      `Mensaje: ${formValues.message}`,
    ].join('\n');

    window.open(`${siteConfig.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    window.setTimeout(() => setFormStatus('success'), 450);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <div className={`page-loader ${isReady ? 'is-hidden' : ''}`} aria-hidden={isReady}>
        <div className="loader-mark">
          <img src={siteConfig.logo} alt="" width="96" height="64" />
          <div className="loader-copy">
            <span>Zentro Web</span>
            <strong>Cargando experiencia premium</strong>
          </div>
        </div>
      </div>

      <div className="scroll-progress" aria-hidden="true">
        <span ref={scrollProgressRef} />
      </div>

      <a className="skip-link" href="#contenido-principal">
        Saltar al contenido
      </a>

      <div className="page-shell">
        <header className="site-header">
          <div className="container header-inner surface-glass">
            <a className="brand" href="#inicio" aria-label="Ir al inicio de Zentro Web">
              <img src={siteConfig.logo} alt="Logo de Zentro Web" width="66" height="44" />
              <span>
                <strong>Zentro</strong>
                <small>Web</small>
              </span>
            </a>

            <nav className="desktop-nav" aria-label="Navegación principal">
              {navItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="header-actions">
              <a className="button button-primary button-small" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
                Solicitar presupuesto
              </a>
              <button
                type="button"
                className={`menu-toggle ${menuOpen ? 'is-active' : ''}`}
                aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMenuOpen((previous) => !previous)}
              >
                <span />
                <span />
              </button>
            </div>
          </div>
        </header>

        <aside
          id="mobile-menu"
          className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}
          aria-hidden={!menuOpen}
          onClick={(event) => {
            if (event.target === event.currentTarget) setMenuOpen(false);
          }}
        >
          <div className="mobile-menu-panel surface-glass">
            <nav aria-label="Menú móvil">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
            </nav>
            <a className="button button-primary" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
              Solicitar presupuesto
            </a>
          </div>
        </aside>

        <main id="contenido-principal">
          <section id="inicio" className="hero-section">
            <div className="hero-orb orb-left" aria-hidden="true" />
            <div className="hero-orb orb-right" aria-hidden="true" />
            <div className="container hero-grid">
              <Reveal className="hero-copy">
                <div className="eyebrow">
                  <span className="eyebrow-dot" />
                  Diseño y desarrollo web premium
                </div>
                <h1>Diseñamos páginas web que ayudan a los negocios a conseguir más clientes.</h1>
                <p className="hero-description">
                  Creamos sitios web rápidos, modernos, optimizados para Google y pensados para convertir visitas en clientes
                  con una presencia digital que transmite confianza desde el primer segundo.
                </p>
                <div className="hero-actions">
                  <a className="button button-secondary" href="#proyectos">
                    Ver proyectos
                    <FaArrowRightLong aria-hidden="true" />
                  </a>
                  <a className="button button-primary" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
                    Solicitar presupuesto
                  </a>
                </div>
                <ul className="hero-badges" aria-label="Ventajas clave">
                  <li>Rendimiento superior</li>
                  <li>SEO técnico listo</li>
                  <li>Diseño a medida</li>
                </ul>

                <div className="trust-strip" aria-label="Señales de confianza">
                  <div className="trust-item">
                    <FaBolt aria-hidden="true" />
                    <span>Carga rápida</span>
                  </div>
                  <div className="trust-item">
                    <FaGoogle aria-hidden="true" />
                    <span>Base SEO sólida</span>
                  </div>
                  <div className="trust-item">
                    <FaWhatsapp aria-hidden="true" />
                    <span>Contacto directo</span>
                  </div>
                </div>
              </Reveal>

              <Reveal className="hero-visual" delay={120}>
                <div className="hero-window surface-glass">
                  <div className="hero-window-bar">
                    <span />
                    <span />
                    <span />
                  </div>
                  <img
                    src={siteConfig.heroImage}
                    alt="Mockup moderno de una página web premium"
                    width="900"
                    height="680"
                    fetchPriority="high"
                  />
                  <div className="floating-badge badge-primary">
                    <strong>+25</strong>
                    <span>proyectos</span>
                  </div>
                  <div className="floating-badge badge-secondary">
                    <strong>100%</strong>
                    <span>responsive</span>
                  </div>
                </div>
              </Reveal>
            </div>

            <a className="scroll-indicator" href="#estadisticas" aria-label="Desplazarse a la siguiente sección">
              <span />
            </a>
          </section>

          <section id="estadisticas" className="section section-tight">
            <div className="container stats-grid">
              {stats.map((stat, index) => (
                <StatCard key={stat.label} stat={stat} index={index} />
              ))}
            </div>
          </section>

          <section id="proyectos" className="section">
            <div className="container">
              <Reveal className="section-heading">
                <span className="section-kicker">Proyectos destacados</span>
                <h2>Una muestra visual de sitios creados para impactar y convertir.</h2>
                <p>Solo tres ejemplos, suficientes para mostrar dirección visual, claridad estratégica y nivel de ejecución.</p>
              </Reveal>

              <div className="projects-grid">
                {projects.map((project, index) => (
                  <Reveal key={project.name} delay={index * 100}>
                    <InteractiveCard className="project-card surface-card">
                      <img
                        src={project.image}
                        alt={`Vista previa del proyecto ${project.name}`}
                        width="800"
                        height="560"
                        loading="lazy"
                      />
                      <div className="project-content">
                        <span className="project-category">{project.category}</span>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <ul className="tag-list" aria-label={`Tecnologías utilizadas en ${project.name}`}>
                          {project.technologies.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                        <a className="inline-link" href={project.url} target="_blank" rel="noreferrer">
                          Ver proyecto
                          <FaArrowRightLong aria-hidden="true" />
                        </a>
                      </div>
                    </InteractiveCard>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section id="servicios" className="section section-muted">
            <div className="container">
              <Reveal className="section-heading">
                <span className="section-kicker">Servicios</span>
                <h2>Soluciones enfocadas en vender, comunicar mejor y escalar tu presencia online.</h2>
                <p>Cada propuesta está pensada para verse impecable, funcionar rápido y facilitar futuras integraciones.</p>
              </Reveal>

              <div className="services-grid">
                {services.map((service, index) => {
                  const ServiceIcon = serviceIcons[index];

                  return (
                    <Reveal key={service.title} delay={index * 100}>
                      <InteractiveCard className="service-card surface-card">
                        <div className="service-icon">
                          <ServiceIcon aria-hidden="true" />
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.subtitle}</p>
                        <ul className="feature-list">
                          {serviceIncludes.map((feature) => (
                            <li key={feature}>
                              <FaCheck aria-hidden="true" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <a className="button button-primary" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
                          Solicitar presupuesto
                        </a>
                      </InteractiveCard>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <Reveal className="section-heading">
                <span className="section-kicker">Proceso de trabajo</span>
                <h2>Un recorrido claro, profesional y pensado para que el proyecto avance sin fricción.</h2>
                <p>Una metodología simple, visual y confiable para transformar una idea en un sitio listo para crecer.</p>
              </Reveal>

              <div className="timeline">
                {processSteps.map((step, index) => {
                  const StepIcon = processIcons[index];

                  return (
                    <Reveal key={step.title} delay={index * 70}>
                      <article className="timeline-item surface-card">
                        <div className="timeline-icon">
                          <StepIcon aria-hidden="true" />
                        </div>
                        <div className="timeline-content">
                          <span className="timeline-index">0{index + 1}</span>
                          <h3>{step.title}</h3>
                          <p>{step.text}</p>
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="section section-muted">
            <div className="container">
              <Reveal className="section-heading">
                <span className="section-kicker">Beneficios</span>
                <h2>Diseño, rendimiento y estrategia alineados para que tu web trabaje a favor de tu negocio.</h2>
                <p>Cada bloque está orientado a reforzar percepción de valor, mejorar experiencia y facilitar conversiones.</p>
              </Reveal>

              <div className="benefits-grid">
                {benefits.map((benefit, index) => {
                  const BenefitIcon = benefitIcons[index];

                  return (
                    <Reveal key={benefit} delay={(index % 5) * 70}>
                      <article className="benefit-card surface-card">
                        <BenefitIcon aria-hidden="true" />
                        <h3>{benefit}</h3>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <Reveal className="section-heading">
                <span className="section-kicker">Tecnologías</span>
                <h2>Dominio técnico visible, moderno y preparado para proyectos de distinto nivel.</h2>
                <p>La base está enfocada en rendimiento, mantenibilidad y futuras integraciones sin rehacer todo desde cero.</p>
              </Reveal>

              <div className="tech-grid">
                {techStack.map((item, index) => {
                  const Icon = techIconMap[item];

                  return (
                    <Reveal key={item} delay={(index % 5) * 60}>
                      <div className="tech-pill surface-card">
                        {Icon ? <Icon aria-hidden="true" /> : null}
                        <span>{item}</span>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="sobre-mi" className="section section-muted">
            <div className="container about-grid">
              <Reveal>
                <div className="about-copy">
                  <span className="section-kicker">Sobre mí</span>
                  <h2>Presentación profesional editable para reforzar autoridad y cercanía.</h2>
                  <p>
                    Soy diseñador y desarrollador web especializado en crear experiencias digitales que combinan estética,
                    estrategia y rendimiento. Trabajo con marcas que necesitan una web a la altura de su propuesta de valor.
                  </p>
                  <p>
                    Mi enfoque prioriza claridad de mensaje, diseño premium y una estructura pensada para que cada visita tenga
                    más probabilidades de convertirse en consulta, reunión o venta. Este texto es de ejemplo y está listo para
                    reemplazarse más adelante por tu historia real.
                  </p>
                  <div className="about-points" aria-label="Puntos destacados">
                    <span>Diseño visual premium</span>
                    <span>UX orientada a conversión</span>
                    <span>Frontend escalable</span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="about-visual surface-card">
                  <img
                    src={siteConfig.aboutImage}
                    alt="Retrato placeholder para la sección sobre mí"
                    width="520"
                    height="620"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>
          </section>

          <section id="faq" className="section">
            <div className="container faq-layout">
              <Reveal className="section-heading faq-copy">
                <span className="section-kicker">Preguntas frecuentes</span>
                <h2>Respuestas claras para reducir dudas y acelerar la decisión de contacto.</h2>
                <p>Un acordeón limpio y fácil de editar para cubrir objeciones comunes antes de la conversación comercial.</p>
              </Reveal>

              <div className="faq-list">
                {faqs.map((faq, index) => {
                  const isOpen = activeFaq === index;

                  return (
                    <Reveal key={faq.question} delay={index * 60}>
                      <article className={`faq-item surface-card ${isOpen ? 'is-open' : ''}`}>
                        <button
                          type="button"
                          className="faq-trigger"
                          aria-expanded={isOpen}
                          aria-controls={`faq-panel-${index}`}
                          id={`faq-trigger-${index}`}
                          onClick={() => setActiveFaq(isOpen ? -1 : index)}
                        >
                          <span>{faq.question}</span>
                          <span className="faq-symbol" aria-hidden="true">
                            {isOpen ? '−' : '+'}
                          </span>
                        </button>
                        <div
                          id={`faq-panel-${index}`}
                          role="region"
                          aria-labelledby={`faq-trigger-${index}`}
                          className="faq-panel"
                          hidden={!isOpen}
                        >
                          <p>{faq.answer}</p>
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="section section-cta-band">
            <div className="container">
              <Reveal>
                <div className="cta-band surface-card">
                  <div className="cta-band-copy">
                    <span className="section-kicker">Preparada para convertir</span>
                    <h2>Tu próxima web puede verse premium, cargar rápido y empezar a generar más consultas.</h2>
                    <p>
                      La estructura ya está pensada para escalar con backend, automatizaciones, panel administrativo,
                      reservas, formularios conectados o integraciones comerciales cuando llegue el momento.
                    </p>
                  </div>

                  <div className="cta-band-points">
                    <div className="cta-point">
                      <FaRocket aria-hidden="true" />
                      <div>
                        <strong>Lanzamiento profesional</strong>
                        <span>Una presencia seria desde el primer impacto.</span>
                      </div>
                    </div>
                    <div className="cta-point">
                      <FaComments aria-hidden="true" />
                      <div>
                        <strong>Más conversaciones</strong>
                        <span>Botones y recorridos pensados para facilitar el contacto.</span>
                      </div>
                    </div>
                    <div className="cta-point">
                      <FaShieldHalved aria-hidden="true" />
                      <div>
                        <strong>Base escalable</strong>
                        <span>Frontend limpio y listo para seguir creciendo sin rehacer todo.</span>
                      </div>
                    </div>
                    <a className="button button-primary" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
                      Solicitar presupuesto
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="contacto" className="section section-contact">
            <div className="container contact-grid">
              <Reveal>
                <div className="contact-copy">
                  <span className="section-kicker">Contacto</span>
                  <h2>Si tu marca necesita una web que se vea seria y venda mejor, empecemos por una conversación.</h2>
                  <p>
                    El formulario es visual y queda listo para conectarse a backend más adelante. Mientras tanto, tus canales
                    directos ya están destacados para captar consultas sin fricción.
                  </p>

                  <div className="social-grid">
                    <a className="social-card surface-card" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
                      <FaWhatsapp aria-hidden="true" />
                      <span>WhatsApp</span>
                    </a>
                    <a className="social-card surface-card" href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
                      <FaInstagram aria-hidden="true" />
                      <span>Instagram</span>
                    </a>
                    <a className="social-card surface-card" href={siteConfig.tiktokUrl} target="_blank" rel="noreferrer">
                      <FaTiktok aria-hidden="true" />
                      <span>TikTok</span>
                    </a>
                    <a className="social-card surface-card" href={`mailto:${siteConfig.email}`}>
                      <FaEnvelope aria-hidden="true" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <form className="contact-form surface-card" onSubmit={handleFormSubmit}>
                  <div className="form-heading">
                    <span>Contame tu idea</span>
                    <small>Respondemos por WhatsApp</small>
                  </div>
                  <label htmlFor="name">Nombre</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={formValues.name}
                    onChange={handleFormChange}
                    autoComplete="name"
                    required
                  />

                  <label htmlFor="email">Correo</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@correo.com"
                    value={formValues.email}
                    onChange={handleFormChange}
                    autoComplete="email"
                    required
                  />

                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Cuéntame sobre tu proyecto"
                    rows="6"
                    value={formValues.message}
                    onChange={handleFormChange}
                    required
                  />

                  <button className="button button-primary" type="submit" disabled={formStatus === 'loading'}>
                    {formStatus === 'loading' ? 'Preparando mensaje...' : 'Enviar por WhatsApp'}
                    {formStatus !== 'loading' ? <FaWhatsapp aria-hidden="true" /> : null}
                  </button>

                  <p className="form-status" aria-live="polite">
                    {formStatus === 'idle' && 'Al enviar se abrirá WhatsApp con tu consulta lista, sin guardar datos.'}
                    {formStatus === 'loading' && 'Preparando tu consulta de forma segura...'}
                    {formStatus === 'success' && 'WhatsApp fue abierto con tu mensaje listo para enviar.'}
                  </p>
                </form>
              </Reveal>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="container footer-grid">
            <div className="footer-brand">
              <img src={siteConfig.logo} alt="Logo de Zentro Web" width="84" height="56" />
              <p>Diseño y desarrollo web premium para marcas que quieren verse mejor, cargar rápido y convertir más.</p>
            </div>

            <div>
              <h3>Enlaces rápidos</h3>
              <ul className="footer-links">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3>Redes</h3>
              <ul className="footer-links">
                {socialLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="container footer-bottom">
            <span>© {currentYear} Zentro Web. Todos los derechos reservados.</span>
            <div className="footer-legal">
              <a href="#inicio">Política de privacidad</a>
              <a href="#inicio">Términos y condiciones</a>
            </div>
          </div>
        </footer>

        <a
          className="floating-whatsapp"
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir conversación por WhatsApp"
        >
          <FaWhatsapp aria-hidden="true" />
        </a>

        <button
          type="button"
          className={`back-to-top ${showTopButton ? 'is-visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Volver arriba"
        >
          <FaArrowUp aria-hidden="true" />
        </button>
      </div>
    </>
  );
}
