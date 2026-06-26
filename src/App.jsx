import { useEffect, useRef } from 'react';
import './index.css';

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('is-visible'); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const PROJECTS = [
  {
    id: '01',
    name: 'Flujo',
    desc: 'Dashboard financiero con modo negocio, control de inventario, gráficas de tendencia en tiempo real y exportación CSV.',
    stack: ['React', 'Recharts', 'Vitest'],
    demo: 'https://finance-dashboard-alpha-three-26.vercel.app',
    github: 'https://github.com/juceppo/flujo',
  },
  {
    id: '02',
    name: 'CineVault',
    desc: 'Catálogo de películas con sistema de estados, rating personal, reseñas propias y recomendaciones por estado de ánimo.',
    stack: ['React', 'TMDB API', 'React Router'],
    demo: 'https://movie-catalog-one-gold.vercel.app',
    github: 'https://github.com/juceppo/cinevault',
  },
  {
    id: '03',
    name: 'Ticksy',
    desc: 'Sistema de gestión de soporte y tickets con autenticación, notificaciones en tiempo real y despliegue en AWS.',
    stack: ['React', 'Python', 'PostgreSQL', 'WebSockets', 'AWS'],
    demo: null,
    github: null,
    private: true,
    wip: true,
  },
];

export default function App() {
  return (
    <div className="site">
      <Nav />
      <Hero />
      <Work />
      <About />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <a href="#" className="nav__logo">JPC</a>
        <div className="nav__links">
          <a href="#work"  className="nav__link">Trabajo</a>
          <a href="#about" className="nav__link">Sobre mí</a>
          <a href="mailto:juanpabloceballosgonzalez@gmail.com" className="nav__cta">Contacto</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <p className="hero__location anim-fade" style={{ '--d': '0ms' }}>Colombia</p>

        <h1 className="hero__name">
          <span className="hero__line anim-up" style={{ '--d': '60ms' }}>Juan Pablo</span>
          <span className="hero__line anim-up hero__line--accent" style={{ '--d': '160ms' }}>Ceballos.</span>
        </h1>

        <p className="hero__role anim-fade" style={{ '--d': '280ms' }}>
          Full Stack — React · Python · AWS
        </p>

        <div className="hero__actions anim-fade" style={{ '--d': '360ms' }}>
          <a href="#work" className="btn-primary">Ver proyectos</a>
          <a href="https://github.com/juceppo" target="_blank" rel="noopener noreferrer" className="btn-ghost">GitHub ↗</a>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="work" id="work">
      <div className="container">
        <p className="label">Proyectos</p>
        <div className="work-list">
          {PROJECTS.map((p, i) => <ProjectRow key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project: p, index }) {
  const ref = useReveal();
  return (
    <article className="project-row reveal" ref={ref} style={{ '--delay': `${index * 80}ms` }}>
      <div className="project-row__left">
        <span className="project-row__num">{p.id}</span>
        <div>
          <div className="project-row__name-wrap">
            <h3 className="project-row__name">{p.name}</h3>
            {p.wip     && <span className="badge badge--blue">En construcción</span>}
            {p.private && <span className="badge badge--dim">🔒 Privado</span>}
          </div>
          <p className="project-row__desc">{p.desc}</p>
          <div className="project-row__stack">
            {p.stack.map(s => <span key={s} className="pill">{s}</span>)}
          </div>
        </div>
      </div>
      <div className="project-row__links">
        {p.demo   && <a href={p.demo}   target="_blank" rel="noopener noreferrer" className="link-btn">Demo ↗</a>}
        {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="link-btn">GitHub ↗</a>}
      </div>
    </article>
  );
}

function About() {
  const ref = useReveal();
  return (
    <section className="about reveal" ref={ref} id="about">
      <div className="container">
        <p className="label">Sobre mí</p>
        <div className="about__text">
          <p className="about__para">
            Tengo 22 años y soy de Colombia. Programar no es solo mi trabajo —
            es algo que disfruto hacer incluso en mi tiempo libre. Descubrí el
            desarrollo de software hace varios años y desde entonces no he dejado
            de aprender.
          </p>
          <p className="about__para">
            Me gusta trabajar en todo el ciclo: interfaces con React, APIs con Python,
            bases de datos, automatizaciones con IA, ETLs y despliegue en AWS.
            Me interesa entender cómo funciona el sistema completo — desde lo que
            ve el usuario hasta la infraestructura que lo sostiene.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const ref = useReveal();
  return (
    <footer className="footer reveal" ref={ref}>
      <div className="container">
        <h2 className="footer__headline">Hablemos.</h2>
        <a href="mailto:juanpabloceballosgonzalez@gmail.com" className="footer__email">
          juanpabloceballosgonzalez@gmail.com
        </a>
        <div className="footer__links">
          <a href="https://wa.me/573113014701" target="_blank" rel="noopener noreferrer" className="footer__link footer__link--wa">WhatsApp</a>
          <a href="https://github.com/juceppo" target="_blank" rel="noopener noreferrer" className="footer__link">GitHub</a>
          <a href="https://linkedin.com/in/juanpabloceballosgonzalez" target="_blank" rel="noopener noreferrer" className="footer__link">LinkedIn</a>
        </div>
        <p className="footer__copy">© 2026 Juan Pablo Ceballos</p>
      </div>
    </footer>
  );
}
