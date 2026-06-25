import './index.css';

const PROJECTS = [
  {
    id: '01',
    name: 'Flujo',
    tag: 'Finanzas personales',
    tagColor: '#e8622a',
    year: '2025',
    desc: 'Dashboard para rastrear ingresos, gastos y metas de ahorro. Categorías con colores, gráficas interactivas, modo oscuro, 8 monedas y exportación CSV. Tests con Vitest.',
    stack: ['React', 'Recharts', 'localStorage', 'Vitest', 'Vite'],
    demo: 'https://finance-dashboard-alpha-three-26.vercel.app',
    github: 'https://github.com/juceppo/flujo',
    wip: false,
  },
  {
    id: '02',
    name: 'CineVault',
    tag: 'Catálogo de cine',
    tagColor: '#f59e0b',
    year: '2025',
    desc: 'Catálogo de películas conectado a la API de TMDB. Búsqueda por título y género, trailers embebidos de YouTube, plataformas de streaming disponibles y recomendaciones basadas en tus favoritos.',
    stack: ['React', 'TMDB API', 'React Router', 'Vitest', 'Vite'],
    demo: 'https://movie-catalog-one-gold.vercel.app',
    github: 'https://github.com/juceppo/cinevault',
    wip: false,
  },
  {
    id: '03',
    name: 'Ticksy',
    tag: 'Gestión de soporte',
    tagColor: '#3b82f6',
    year: '2026',
    desc: 'Sistema de tickets y soporte técnico para equipos pequeños. Backend en Node.js con autenticación, base de datos relacional, panel de administración y notificaciones en tiempo real.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Express', 'WebSockets'],
    demo: null,
    github: null,
    wip: true,
  },
];

const STACK = [
  {
    cat: 'Frontend',
    items: ['React', 'JavaScript (ES2024)', 'HTML & CSS', 'Recharts', 'React Router'],
  },
  {
    cat: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'SQL / PostgreSQL'],
  },
  {
    cat: 'Herramientas',
    items: ['Git & GitHub', 'Vercel', 'Vitest', 'Vite', 'Figma'],
  },
];

export default function App() {
  return (
    <div className="site">
      <Nav />
      <Hero />
      <Projects />
      <StackSection />
      <About />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <a href="#" className="nav__name">JP Ceballos</a>
        <div className="nav__links">
          <a href="#projects" className="nav__link">Proyectos</a>
          <a href="#stack" className="nav__link">Stack</a>
          <a href="#about" className="nav__link">Sobre mí</a>
          <a href="mailto:juanpabloceballosgonzalez@gmail.com" className="nav__cta">
            Contacto →
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <span className="hero__badge">
            <span className="hero__badge-dot" />
            Disponible para trabajar
          </span>

          <h1 className="hero__headline">
            Construyo cosas<br />
            en la <em>web.</em>
          </h1>

          <p className="hero__sub">
            Soy Juan Pablo Ceballos, desarrollador con foco en React y JavaScript.
            Cada proyecto tiene que funcionar bien, verse mejor y tener
            código del que no me avergüence mostrar.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn-primary">
              Ver proyectos →
            </a>
            <a
              href="https://github.com/juceppo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              GitHub ↗
            </a>
          </div>

          <div className="hero__meta">
            <div className="hero__meta-item">
              <span className="hero__meta-label">Ubicación</span>
              <span className="hero__meta-value">Colombia</span>
            </div>
            <div className="hero__meta-item">
              <span className="hero__meta-label">Disponibilidad</span>
              <span className="hero__meta-value hero__meta-value--green">Inmediata</span>
            </div>
            <div className="hero__meta-item">
              <span className="hero__meta-label">Modalidad</span>
              <span className="hero__meta-value">Remoto · Presencial</span>
            </div>
            <div className="hero__meta-item">
              <span className="hero__meta-label">Enfoque</span>
              <span className="hero__meta-value">Full Stack</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Proyectos</span>
          <h2 className="section-title">Trabajo seleccionado</h2>
        </div>
        <div className="projects-list">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p }) {
  const tagStyle = {
    color: p.tagColor,
    borderColor: p.tagColor + '40',
    background: p.tagColor + '12',
  };

  return (
    <article className="project-card">
      <div className="project-card__num">{p.id}</div>

      <div className="project-card__body">
        <div className="project-card__top">
          <div className="project-card__meta">
            <div className="project-card__tag-row">
              <span className="project-card__tag" style={tagStyle}>{p.tag}</span>
              <span className="project-card__year">{p.year}</span>
              {p.wip && <span className="project-card__wip">En construcción</span>}
            </div>
            <h3 className="project-card__name">{p.name}</h3>
          </div>

          <div className="project-card__links">
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link project-link--accent"
              >
                Demo ↗
              </a>
            )}
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub ↗
              </a>
            )}
          </div>
        </div>

        <p className="project-card__desc">{p.desc}</p>

        <div className="project-card__stack">
          {p.stack.map((s) => (
            <span key={s} className="stack-pill">{s}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function StackSection() {
  return (
    <section className="stack-section" id="stack">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Tecnologías</span>
          <h2 className="section-title">Con qué trabajo</h2>
        </div>
        <div className="stack-grid">
          {STACK.map((col) => (
            <div key={col.cat} className="stack-col">
              <p className="stack-col__cat">{col.cat}</p>
              <ul className="stack-col__list">
                {col.items.map((item) => (
                  <li key={item} className="stack-col__item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__inner">
          <div className="section-header">
            <span className="section-label">Sobre mí</span>
            <h2 className="section-title">Juan Pablo Ceballos</h2>
          </div>
          <div className="about__text">
            <p className="about__para">
              Soy desarrollador de software en Colombia con foco en construir
              interfaces que tengan <strong>buena UX, código limpio y funcionen
              de verdad</strong> — no solo en demos.
            </p>
            <p className="about__para">
              Me interesa el producto tanto como la tecnología. Antes de escribir
              código me gusta entender qué problema resuelve y para quién.
              Eso cambia completamente cómo se construye.
            </p>
            <p className="about__para">
              Actualmente en búsqueda de mi primera experiencia profesional.
              Disponible para <strong>roles remotos o presenciales en Colombia</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer__cta">
          <h2 className="footer__headline">
            ¿Tienes un<br /><span>proyecto?</span>
          </h2>
          <p className="footer__sub">Hablemos.</p>
          <a
            href="mailto:juanpabloceballosgonzalez@gmail.com"
            className="footer__email"
          >
            juanpabloceballosgonzalez@gmail.com
          </a>
          <div className="footer__social">
            <a
              href="https://github.com/juceppo"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/juanpabloceballosgonzalez"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2025 Juan Pablo Ceballos González</span>
          <span>Hecho con React + Vite · Desplegado en Vercel</span>
        </div>
      </div>
    </footer>
  );
}
