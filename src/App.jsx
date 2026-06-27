import { useEffect, useRef, useState } from 'react';
import './index.css';

// ── Scroll reveal ─────────────────────────────────────────────────
function useReveal(threshold = 0.08) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('is-visible'); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ── Scroll progress ───────────────────────────────────────────────
function useScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el  = document.documentElement;
      const top = el.scrollTop || document.body.scrollTop;
      const h   = el.scrollHeight - el.clientHeight;
      setPct(h > 0 ? (top / h) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return pct;
}

// ── Data ──────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: '01',
    name: 'Sage',
    desc: 'Sube un PDF y hazle preguntas en lenguaje natural. RAG implementado desde cero: embeddings con OpenAI, similitud coseno con NumPy y SQLite como vector store.',
    stack: ['Python', 'FastAPI', 'OpenAI API', 'SQLite', 'React'],
    demo:   'https://frontend-beige-two-78.vercel.app',
    github: 'https://github.com/juceppo/sage',
    img:    '/sage.png',
    wip:    false, private: false,
  },
  {
    id: '02',
    name: 'Flujo',
    desc: 'Dashboard financiero con modo negocio, control de inventario, gráficas de tendencia en tiempo real y exportación CSV.',
    stack: ['React', 'Recharts', 'Vitest'],
    demo:   'https://finance-dashboard-alpha-three-26.vercel.app',
    github: 'https://github.com/juceppo/flujo',
    img:    '/flujo.png',
    wip:    false, private: false,
  },
  {
    id: '03',
    name: 'CineVault',
    desc: 'Catálogo de películas con sistema de estados, rating personal, reseñas y recomendaciones por estado de ánimo.',
    stack: ['React', 'TMDB API', 'React Router'],
    demo:   'https://movie-catalog-one-gold.vercel.app',
    github: 'https://github.com/juceppo/cinevault',
    img:    '/cinevault.png',
    wip:    false, private: false,
  },
  {
    id: '04',
    name: 'Lazos',
    desc: 'Conecta personas que necesitan ayuda con personas que pueden darla — comida, agua, medicamentos, transporte. Matches en tiempo real vía WebSockets, mapa interactivo con datos de sismos de USGS, autenticación con Google y es instalable como PWA.',
    stack: ['React', 'FastAPI', 'Supabase', 'WebSockets', 'Leaflet.js', 'PWA'],
    demo:    'https://lazosco.vercel.app',
    github:  null,
    img:     '/lazos.png',
    private: true,
    wip:     false,
  },
  {
    id: '05',
    name: 'Ticksy',
    desc: 'Sistema de gestión de soporte y tickets con autenticación, notificaciones en tiempo real y despliegue en AWS.',
    stack: ['React', 'Python', 'PostgreSQL', 'WebSockets', 'AWS'],
    demo: null, github: null, private: true, wip: true,
    img: null,
  },
];

const STACK = [
  { cat: 'Frontend',     items: ['React', 'JavaScript', 'HTML & CSS', 'Recharts', 'React Router'] },
  { cat: 'Backend',      items: ['Python', 'Node.js', 'REST APIs', 'WebSockets'] },
  { cat: 'Datos & IA',   items: ['PostgreSQL', 'MongoDB', 'ETL / Pipelines', 'OpenAI API', 'n8n'] },
  { cat: 'Cloud',        items: ['AWS', 'Docker', 'Vercel', 'Git & GitHub'] },
];

// ── App ───────────────────────────────────────────────────────────
export default function App() {
  const pct = useScrollProgress();
  return (
    <div className="site">
      <div className="scroll-bar" style={{ width: `${pct}%` }} />
      <Nav />
      <Hero />
      <Work />
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
        <a href="#" className="nav__logo">JPC</a>
        <div className="nav__links">
          <a href="#work"  className="nav__link">Trabajo</a>
          <a href="#stack" className="nav__link">Stack</a>
          <a href="#about" className="nav__link">Sobre mí</a>
          <a href="mailto:juanpabloceballosgonzalez@gmail.com" className="nav__cta">Contacto</a>
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
        <p className="hero__location anim-fade" style={{ '--d': '0ms' }}>
          Colombia
        </p>

        <h1 className="hero__name">
          <span className="hero__clip anim-clip" style={{ '--d': '80ms' }}>Juan Pablo</span>
          <span className="hero__clip anim-clip hero__clip--accent" style={{ '--d': '200ms' }}>Ceballos.</span>
        </h1>

        <p className="hero__role anim-fade" style={{ '--d': '340ms' }}>
          Full Stack — React · Python · AWS
        </p>

        <div className="hero__actions anim-fade" style={{ '--d': '440ms' }}>
          <a href="#work" className="btn-primary">Ver proyectos</a>
          <a href="https://github.com/juceppo" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Work ──────────────────────────────────────────────────────────
function Work() {
  const ref = useReveal();
  return (
    <section className="work reveal" ref={ref} id="work">
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
    <article className="project-row" ref={ref} style={{ '--delay': `${index * 120}ms` }}>
      {/* Screenshot */}
      {p.img && (
        <a href={p.demo || '#'} target="_blank" rel="noopener noreferrer"
          className="project-row__img-wrap">
          <img src={p.img} alt={`${p.name} screenshot`} className="project-row__img" loading="lazy" />
          <div className="project-row__img-overlay">
            <span className="project-row__img-label">Ver proyecto ↗</span>
          </div>
        </a>
      )}

      {/* Info */}
      <div className="project-row__body">
        <div className="project-row__top">
          <div>
            <div className="project-row__name-wrap">
              <span className="project-row__num">{p.id}</span>
              <h3 className="project-row__name">{p.name}</h3>
              {p.wip     && <span className="badge badge--blue">En construcción</span>}
              {p.private && <span className="badge badge--dim">🔒 Privado</span>}
            </div>
            <p className="project-row__desc">{p.desc}</p>
            <div className="project-row__stack">
              {p.stack.map(s => <span key={s} className="pill">{s}</span>)}
            </div>
          </div>
          <div className="project-row__links">
            {p.demo   && <a href={p.demo}   target="_blank" rel="noopener noreferrer" className="link-btn">Ver app ↗</a>}
            {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="link-btn">GitHub ↗</a>}
          </div>
        </div>
      </div>
    </article>
  );
}

// ── Stack ─────────────────────────────────────────────────────────
function StackSection() {
  return (
    <section className="stack-section" id="stack">
      <div className="container">
        <p className="label">Stack</p>
        <div className="stack-grid">
          {STACK.map((group, gi) => {
            const ref = useReveal();
            return (
              <div key={group.cat} className="stack-group reveal" ref={ref}
                style={{ '--delay': `${gi * 80}ms` }}>
                <p className="stack-group__cat">{group.cat}</p>
                <ul className="stack-group__list">
                  {group.items.map((item, ii) => (
                    <li key={item} className="stack-group__item anim-item"
                      style={{ '--i': ii }}>
                      <span className="stack-group__dot" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
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

// ── Footer ────────────────────────────────────────────────────────
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
          <a href="https://wa.me/573113014701" target="_blank" rel="noopener noreferrer"
            className="footer__link footer__link--wa">WhatsApp</a>
          <a href="https://github.com/juceppo" target="_blank" rel="noopener noreferrer"
            className="footer__link">GitHub</a>
          <a href="https://linkedin.com/in/juanpabloceballosgonzalez" target="_blank" rel="noopener noreferrer"
            className="footer__link">LinkedIn</a>
        </div>
        <p className="footer__copy">© 2026 Juan Pablo Ceballos</p>
      </div>
    </footer>
  );
}
