import { useEffect, useRef } from 'react';
import './index.css';

// ── Scroll reveal hook ────────────────────────────────────────────
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('is-visible'); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ── Data ─────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: '01',
    name: 'Flujo',
    tag: 'Finanzas personales',
    tagColor: '#e8622a',
    year: '2025',
    desc: 'Dashboard financiero con modo negocio. Registro de ventas con control de stock, gráficas de tendencia en tiempo real, meta diaria con ring SVG y exportación CSV con encoding correcto para Excel en español.',
    stack: ['React', 'Recharts', 'localStorage', 'Vitest'],
    demo: 'https://finance-dashboard-alpha-three-26.vercel.app',
    github: 'https://github.com/juceppo/flujo',
    wip: false,
  },
  {
    id: '02',
    name: 'CineVault',
    tag: 'Catálogo de películas',
    tagColor: '#f59e0b',
    year: '2025',
    desc: 'Catálogo conectado a TMDB con sistema de estados (Quiero ver / Viendo / Vista), rating personal, reseñas y estadísticas propias. Incluye Mood Discovery: recomendaciones según cómo te sientes.',
    stack: ['React', 'TMDB API', 'React Router', 'Vitest'],
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
    desc: 'Sistema de tickets con backend en Python, base de datos PostgreSQL, autenticación y notificaciones en tiempo real con WebSockets. Ciclo completo de un producto en producción.',
    stack: ['React', 'Python', 'PostgreSQL', 'WebSockets', 'AWS'],
    demo: null,
    github: null,
    wip: true,
  },
];

const STACK = [
  {
    cat: 'Frontend',
    items: ['React', 'JavaScript', 'HTML & CSS', 'Recharts', 'React Router'],
  },
  {
    cat: 'Backend',
    items: ['Python', 'Node.js / Express', 'REST APIs', 'WebSockets'],
  },
  {
    cat: 'Datos & IA',
    items: ['PostgreSQL', 'MongoDB', 'ETL / Pipelines', 'OpenAI API', 'n8n'],
  },
  {
    cat: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Vercel', 'Git & GitHub'],
  },
];

const TICKER_ITEMS = [
  'React', 'Python', 'PostgreSQL', 'AWS', 'ETL', 'Node.js',
  'MongoDB', 'Docker', 'n8n', 'OpenAI API', 'JavaScript', 'WebSockets',
  'Redis', 'REST APIs', 'Vitest', 'React Router',
];

// ── App ───────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="site">
      <Nav />
      <Hero />
      <Ticker />
      <Projects />
      <StackSection />
      <About />
      <Footer />
    </div>
  );
}

// ── Nav ───────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <a href="#" className="nav__name">Juan Pablo Ceballos</a>
        <div className="nav__links">
          <a href="#projects" className="nav__link">Proyectos</a>
          <a href="#stack"    className="nav__link">Stack</a>
          <a href="#about"    className="nav__link">Sobre mí</a>
          <a href="mailto:juanpabloceballosgonzalez@gmail.com" className="nav__cta">
            Escribeme →
          </a>
        </div>
      </div>
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <p className="hero__location anim-fade" style={{ '--d': '0ms' }}>
            Colombia
          </p>

          <h1 className="hero__name">
            <span className="hero__reveal-wrap anim-up" style={{ '--d': '80ms' }}>
              <span>Juan Pablo</span>
            </span>
            <span className="hero__reveal-wrap anim-up" style={{ '--d': '180ms' }}>
              <span className="hero__name-accent">Ceballos.</span>
            </span>
          </h1>

          <div className="hero__divider anim-fade" style={{ '--d': '300ms' }} />

          <p className="hero__role anim-fade" style={{ '--d': '360ms' }}>
            Desarrollador Full Stack
          </p>

          <p className="hero__bio anim-fade" style={{ '--d': '440ms' }}>
            Construyo productos completos — interfaces en React, backends en Python,
            automatizaciones con IA, ETLs y el ciclo entero de un sistema en producción.
          </p>

          <div className="hero__actions anim-fade" style={{ '--d': '520ms' }}>
            <a href="#projects" className="btn-primary">Ver proyectos</a>
            <a href="https://github.com/juceppo" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="hero__aside anim-fade" style={{ '--d': '300ms' }}>
          <div className="hero__aside-block">
            <p className="hero__aside-label">Área</p>
            <p className="hero__aside-value">Full Stack</p>
          </div>
          <div className="hero__aside-block">
            <p className="hero__aside-label">Modalidad</p>
            <p className="hero__aside-value">Remoto · Presencial</p>
          </div>
          <div className="hero__aside-block">
            <p className="hero__aside-label">Ahora mismo</p>
            <p className="hero__aside-value">Ticksy — Python + PostgreSQL</p>
          </div>
          <div className="hero__aside-block">
            <p className="hero__aside-label">También</p>
            <p className="hero__aside-value">Automatizaciones con IA</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Ticker ────────────────────────────────────────────────────────
function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {items.map((item, i) => (
          <span key={i} className="ticker__item">
            {item} <span className="ticker__sep">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Projects ──────────────────────────────────────────────────────
function Projects() {
  const ref = useReveal();
  return (
    <section className="projects reveal" ref={ref} id="projects">
      <div className="container">
        <h2 className="section-eyebrow">Proyectos</h2>
        <div className="projects-list">
          {PROJECTS.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, index }) {
  const ref = useReveal();
  const tagStyle = {
    color: p.tagColor,
    borderColor: p.tagColor + '40',
    background: p.tagColor + '12',
  };
  return (
    <article className="project-card reveal" ref={ref} style={{ '--reveal-delay': `${index * 100}ms` }}>
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
              <a href={p.demo} target="_blank" rel="noopener noreferrer"
                className="project-link project-link--accent">Demo ↗</a>
            )}
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer"
                className="project-link">GitHub ↗</a>
            )}
          </div>
        </div>
        <p className="project-card__desc">{p.desc}</p>
        <div className="project-card__stack">
          {p.stack.map((s) => <span key={s} className="stack-pill">{s}</span>)}
        </div>
      </div>
    </article>
  );
}

// ── Stack ─────────────────────────────────────────────────────────
function StackSection() {
  const ref = useReveal();
  return (
    <section className="stack-section reveal" ref={ref} id="stack">
      <div className="container">
        <h2 className="section-eyebrow">Stack</h2>
        <div className="stack-grid">
          {STACK.map((col, i) => (
            <div key={col.cat} className="stack-col reveal" ref={useReveal()}
              style={{ '--reveal-delay': `${i * 80}ms` }}>
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

// ── About ─────────────────────────────────────────────────────────
function About() {
  const ref = useReveal();
  return (
    <section className="about reveal" ref={ref} id="about">
      <div className="container">
        <div className="about__inner">
          <h2 className="section-eyebrow">Sobre mí</h2>
          <div className="about__text">
            <p className="about__para">
              Tengo 22 años, soy de Colombia y programar no es solo mi trabajo —
              es lo que hago cuando no tengo nada más que hacer.
              Me enganché con esto y nunca lo solté.
            </p>
            <p className="about__para">
              Me muevo en el ciclo completo: interfaces en React, backends en Python,
              bases de datos, automatizaciones con IA, ETLs y despliegue en AWS.
              Me gusta entender todo el sistema, no solo una parte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────
function Footer() {
  const ref = useReveal();
  return (
    <footer className="footer reveal" ref={ref} id="contact">
      <div className="container">
        <div className="footer__cta">
          <h2 className="footer__headline">
            ¿Tienes algo<br />
            en que trabajar?
          </h2>
          <a href="mailto:juanpabloceballosgonzalez@gmail.com" className="footer__email">
            juanpabloceballosgonzalez@gmail.com
          </a>
          <div className="footer__social">
            <a href="https://github.com/juceppo" target="_blank" rel="noopener noreferrer"
              className="footer__social-link">GitHub ↗</a>
            <a href="https://linkedin.com/in/juanpabloceballosgonzalez" target="_blank" rel="noopener noreferrer"
              className="footer__social-link">LinkedIn ↗</a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2025 Juan Pablo Ceballos</span>
          <span className="footer__made">Colombia</span>
        </div>
      </div>
    </footer>
  );
}
