import './index.css';

const PROJECTS = [
  {
    id: '01',
    name: 'Flujo',
    tag: 'Finanzas personales',
    tagColor: '#e8622a',
    year: '2025',
    desc: 'Dashboard para controlar ingresos, gastos y metas de ahorro. Tiene modo negocio con registro de ventas, control de inventario y gráficas de tendencia. Funciona con 8 monedas y exporta CSV compatible con Excel.',
    stack: ['React', 'Recharts', 'Vite', 'Vitest'],
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
    desc: 'Catálogo conectado a la API de TMDB. Puedes marcar películas como vistas, en watchlist o abandonadas, darles estrellas y escribir tu propia reseña. Tiene un selector de estado de ánimo que recomienda según cómo estás.',
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
    desc: 'Sistema de tickets para equipos pequeños. Lo empecé para aprender backend real: autenticación, base de datos relacional, notificaciones. Todavía en construcción.',
    stack: ['React', 'Python', 'PostgreSQL', 'WebSockets'],
    demo: null,
    github: null,
    wip: true,
  },
];

const STACK = [
  { cat: 'Frontend',     items: ['React', 'JavaScript', 'HTML & CSS', 'Recharts', 'React Router'] },
  { cat: 'Backend',      items: ['Python', 'Node.js', 'REST APIs', 'SQL / PostgreSQL'] },
  { cat: 'Herramientas', items: ['Git & GitHub', 'Vercel', 'Vitest', 'Vite'] },
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

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">

          <div className="hero__available">
            <span className="hero__dot" />
            Disponible para trabajar — Colombia
          </div>

          <h1 className="hero__name">
            Juan Pablo<br />
            <span className="hero__name-last">Ceballos.</span>
          </h1>

          <div className="hero__divider" />

          <p className="hero__role">Desarrollador de software</p>

          <p className="hero__bio">
            Construyo interfaces y automatizaciones que resuelven cosas concretas.
            Me enfoco en React para el frontend y Python para la lógica de negocio.
            Los proyectos que publico los terminé de verdad — no viven solo en mi localhost.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn-primary">Ver proyectos</a>
            <a href="https://github.com/juceppo" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="hero__aside">
          <div className="hero__aside-block">
            <p className="hero__aside-label">Enfoque</p>
            <p className="hero__aside-value">Full Stack</p>
          </div>
          <div className="hero__aside-block">
            <p className="hero__aside-label">Modalidad</p>
            <p className="hero__aside-value">Remoto · Presencial</p>
          </div>
          <div className="hero__aside-block">
            <p className="hero__aside-label">Ahora mismo</p>
            <p className="hero__aside-value hero__aside-value--accent">Buscando primer empleo</p>
          </div>
          <div className="hero__aside-block">
            <p className="hero__aside-label">Construyendo</p>
            <p className="hero__aside-value">Ticksy — backend con Python</p>
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
        <h2 className="section-eyebrow">Proyectos</h2>
        <div className="projects-list">
          {PROJECTS.map((p) => <ProjectCard key={p.id} project={p} />)}
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

function StackSection() {
  return (
    <section className="stack-section" id="stack">
      <div className="container">
        <h2 className="section-eyebrow">Stack</h2>
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
          <h2 className="section-eyebrow">Sobre mí</h2>
          <div className="about__text">
            <p className="about__para">
              Tengo 22 años y vivo en Colombia. Empecé a programar hace un par de años
              y desde entonces no paré. Lo que me engancha no es el código en sí, sino
              ver que algo que construí lo usa alguien real.
            </p>
            <p className="about__para">
              Trabajo bien con el frontend — React, CSS, esas cosas. Pero me interesa
              el backend igual. Estoy aprendiendo Python en serio: automatizaciones,
              integraciones con APIs, algo de procesamiento de datos.
            </p>
            <p className="about__para">
              Busco mi primer trabajo. No espero que sea perfecto, espero que me enseñe.
              Si construyes algo interesante y necesitas a alguien que aprende rápido
              y entrega sin excusas — hablemos.
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
          <span className="footer__made">Hecho con React · Colombia</span>
        </div>
      </div>
    </footer>
  );
}
