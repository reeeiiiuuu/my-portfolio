import { useEffect, useMemo, useState } from "react";
import myPhoto from "./assets/picture.png";
import logo from "./assets/rei-logo.png";
import resume from "./assets/RESUME.pdf"
import "./App.css";


const PROJECTS = [
  {
    id: 1,
    title: "Dance Studio",
    desc: "",
    tech: ["Java", "CSS", "UI Motion"],
    featured: true,
    image: [
      '${import.meta.env.BASE_URL}projects/project3/1.jpg',
      '${import.meta.env.BASE_URL}projects/project3/2.jpg',
      '${import.meta.env.BASE_URL}projects/project3/3.jpg',
      '${import.meta.env.BASE_URL}projects/project3/4.jpg',
      '${import.meta.env.BASE_URL}projects/project3/5.jpg',
      '${import.meta.env.BASE_URL}projects/project3/6.jpg',
      '${import.meta.env.BASE_URL}projects/project3/7.jpg',
      '${import.meta.env.BASE_URL}projects/project3/8.jpg',
      '${import.meta.env.BASE_URL}projects/project3/9.jpg',
      '${import.meta.env.BASE_URL}projects/project3/10.jpg',
      '${import.meta.env.BASE_URL}projects/project3/11.jpg',
      '${import.meta.env.BASE_URL}projects/project3/12.jpg',
      '${import.meta.env.BASE_URL}projects/project3/13.jpg',
      '${import.meta.env.BASE_URL}projects/project3/14.jpg',
      '${import.meta.env.BASE_URL}projects/project3/15.jpg',
      '${import.meta.env.BASE_URL}projects/project3/16.jpg',
      '${import.meta.env.BASE_URL}projects/project3/17.jpg',
      '${import.meta.env.BASE_URL}projects/project3/18.jpg',
      '${import.meta.env.BASE_URL}projects/project3/19.jpg',
      '${import.meta.env.BASE_URL}projects/project3/20.jpg',
      '${import.meta.env.BASE_URL}projects/project3/21.jpg',
      '${import.meta.env.BASE_URL}projects/project3/22.jpg',
      '${import.meta.env.BASE_URL}projects/project3/23.jpg',
      '${import.meta.env.BASE_URL}projects/project3/24.jpg',
    ]
  },
  {
    id: 2,
    title: "Claudy Nails",
    desc: "",
    tech: ["HTML", "CSS" ,"Javascript"],
    image: [
      '${import.meta.env.BASE_URL}projects/project4/1.png',
      '${import.meta.env.BASE_URL}projects/project4/2.png',
      '${import.meta.env.BASE_URL}projects/project4/3.png',
      '${import.meta.env.BASE_URL}projects/project4/4.png',
      '${import.meta.env.BASE_URL}projects/project4/5.png',
      '${import.meta.env.BASE_URL}projects/project4/6.png',
      '${import.meta.env.BASE_URL}projects/project4/7.png',
      '${import.meta.env.BASE_URL}projects/project4/8.png',
      '${import.meta.env.BASE_URL}projects/project4/9.png',
      '${import.meta.env.BASE_URL}projects/project4/10.png',
      '${import.meta.env.BASE_URL}projects/project4/11.png',
      '${import.meta.env.BASE_URL}projects/project4/12.png',
      '${import.meta.env.BASE_URL}projects/project4/13.png',
      '${import.meta.env.BASE_URL}projects/project4/14.png',
      '${import.meta.env.BASE_URL}projects/project4/15.png',
      '${import.meta.env.BASE_URL}projects/project4/16.png',
      '${import.meta.env.BASE_URL}projects/project4/17.png',
      '${import.meta.env.BASE_URL}projects/project4/18.png',
    ]
  },
  {
    id: 3,
    title: "MiCasa Living",
    desc: "Typography-driven portfolio with glass UI and micro-interactions.",
    tech: ["HTML", "CSS", "JS"],
    featured: true,
    image: [
      '${import.meta.env.BASE_URL}projects/project5/1.png',
      '${import.meta.env.BASE_URL}projects/project5/2.png',
      '${import.meta.env.BASE_URL}projects/project5/3.png',
      '${import.meta.env.BASE_URL}projects/project5/4.png',
      '${import.meta.env.BASE_URL}projects/project5/5.png',
      '${import.meta.env.BASE_URL}projects/project5/6.png',
      '${import.meta.env.BASE_URL}projects/project5/7.png',
      '${import.meta.env.BASE_URL}projects/project5/8.png',
      '${import.meta.env.BASE_URL}projects/project5/9.png',
      '${import.meta.env.BASE_URL}projects/project5/10.png',
      '${import.meta.env.BASE_URL}projects/project5/11.png',
      '${import.meta.env.BASE_URL}projects/project5/12.png',
      '${import.meta.env.BASE_URL}projects/project5/13.png',
      '${import.meta.env.BASE_URL}projects/project5/14.png',
      '${import.meta.env.BASE_URL}projects/project5/15.png',
      '${import.meta.env.BASE_URL}projects/project5/16.png',
      '${import.meta.env.BASE_URL}projects/project5/17.png',
      '${import.meta.env.BASE_URL}projects/project5/18.png',
      '${import.meta.env.BASE_URL}projects/project5/19.png',
      '${import.meta.env.BASE_URL}projects/project5/20.png',
      '${import.meta.env.BASE_URL}projects/project5/21.png',
      '${import.meta.env.BASE_URL}projects/project5/22.png',
      '${import.meta.env.BASE_URL}projects/project5/23.png',
      '${import.meta.env.BASE_URL}projects/project5/24.png',
      '${import.meta.env.BASE_URL}projects/project5/25.png',
      '${import.meta.env.BASE_URL}projects/project5/26.png',
      '${import.meta.env.BASE_URL}projects/project5/27.png',
      '${import.meta.env.BASE_URL}projects/project5/28.png',
      '${import.meta.env.BASE_URL}projects/project5/29.png',
      '${import.meta.env.BASE_URL}projects/project5/30.png',
      '${import.meta.env.BASE_URL}projects/project5/31.png',
      '${import.meta.env.BASE_URL}projects/project5/32.png',
      '${import.meta.env.BASE_URL}projects/project5/33.png',
    ]
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="app">
      {/* Background decor */}
      <div className="bg" aria-hidden="true">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
        <span className="grid" />
      </div>

      {/* NAV */}
      <header className="navWrap">
        <nav className="nav">
          <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>
            <img
              src={logo}
              alt="Your logo"
              className="logoImg"
            />
            <span className="brandText">REYNALYN</span>
          </a>

          <button
            className="navToggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={`navLinks ${menuOpen ? "open" : ""}`}>
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a className="btn btnSmall" href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* MAIN */}
      <main id="top" className="container">
        {/* HERO */}
        <section className="hero">
          <div className="heroLeft">

            <h1 className="title">
              Hi! Im <span className="grad">Reynalyn Morales</span>
            </h1>

            <p className="subtitle">
              Designing and building interfaces people actually enjoy using.
            </p>

            <div className="heroActions">
              <a className="btn" href="#projects">
                View Projects
              </a>
              <a className="btn btnGhost" href="#contact">
                Let’s Talk
              </a>
            </div>

            <div className="metrics">
              <div className="metric">
                <div className="metricNum">Fast</div>
                <div className="metricLabel">Performance-first</div>
              </div>
              <div className="metric">
                <div className="metricNum">UI</div>
                <div className="metricLabel">Design-driven</div>
              </div>
            </div>
          </div>

          <div className="heroRight">
            <div className="profileCard">
              {/* Replace src with your image */}
              <img className="profileImg" src={myPhoto} alt="Your portrait"/>
              <div className="profileInfo">
                <div className="profileName">Reynalyn B. Morales</div>
                <div className="profileRole">Frontend Developer</div>
              </div>

              <div className="chips">
                <span className="chip">React</span>
                <span className="chip">UI/UX</span>
                <span className="chip">CSS</span>
                <span className="chip">JavaScript</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="sectionHead">
            <h2>About</h2>
            <p>I design and build interfaces with clear hierarchy, crisp details, and smooth motion.</p>
          </div>

          <div className="aboutGrid">
            <div className="card cardLg">
              <h3>What I do</h3>
              <p>
                I create modern responsive websites and web apps — with strong layout, accessibility,
                and performance. I love turning ideas into polished interfaces.
              </p>

              <div className="tags">
                <span className="tag">Responsive UI</span>
                <span className="tag">Animations</span>
                <span className="tag">Clean Code</span>
                <span className="tag">Accessibility</span>
              </div>
            </div>

            <div className="card">
              <h3>Quick Info</h3>
              <ul className="infoList">
                <li>
                  <span>Location</span>
                  <b>Philippines</b>
                </li>
                <li>
                  <span>Focus</span>
                  <b>Frontend / UI</b>
                </li>
                <li>
                  <span>Stack</span>
                  <b>HTML • CSS • JS</b>
                </li>
                <li>
                  <span>Learning</span>
                  <b>Next.js</b>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3>What you get</h3>
              <ul className="checklist">
                <li>Pixel-clean layout</li>
                <li>Modern interactions</li>
                <li>Mobile-first design</li>
                <li>Fast loading pages</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="sectionHead">
            <h2>Skills</h2>
            <p>A solid set of tools for modern web development.</p>
          </div>

          <div className="skillsGrid">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Git",
              "Responsive Design",
              "UI Motion",
              "Figma",
            ].map((s) => (
              <div className="skill" key={s}>
                {s}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="sectionHead">
            <h2>Projects</h2>
            <p>Selected work — designed for clarity and smooth experience.</p>
          </div>

          <div className="projectsGrid">
            {PROJECTS.map((p) => (
              <article
                key={p.id}
                className={`project ${p.featured ? "featured" : ""}`}
                onClick={() => setActiveProject(p)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setActiveProject(p)}
              >
                <div className="projectTop">
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                  {p.featured && <span className="badge">Featured</span>}
                </div>

                <div className="projectTags">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                <div
                  className="projectActions"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="btn btnSmall"
                    onClick={() => setActiveProject(p)}
                  >
                    View Screenshots
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="sectionHead">
            <h2>Contact</h2>
            <p>Let’s build something clean, fast, and modern.</p>
          </div>

          <div className="contactGrid">
            <div className="card">
              <h3>Message me</h3>
              <form className="form" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Your name" />
                <input type="email" placeholder="Email" />
                <textarea rows="5" placeholder="Tell me about your project..." />
                <button className="btn" type="submit">
                  Send
                </button>
              </form>
              <p>@this form does not send tru email yet@</p>
            </div>

            <div className="card">
              <h3>Links</h3>
              <div className="links">
                <a href="https://github.com/reeeiiiuuu" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href="https://www.facebook.com/reinalyn.belen" target="_blank" rel="noreferrer">
                  Facebook
                </a>
                <a
                  href={resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </div>

              <div className="mini">
                <div className="miniTitle">Email</div>
                <div className="miniValue">reynalynmorales24@gmail.com</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* MODAL */}
      <div
        className={`modal ${activeProject ? "open" : ""}`}
        aria-hidden={!activeProject}
        onClick={() => setActiveProject(null)}
      >
        <div
          className="modalPanel"
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="modalClose"
            aria-label="Close"
            onClick={() => setActiveProject(null)}
          >
            ✕
          </button>

          {activeProject && (
            <>
              <h3 className="modalTitle">{activeProject.title}</h3>
              <p className="modalDesc">{activeProject.desc}</p>

              <div className="modalTech">
                {activeProject.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              {activeProject.images?.length ? (
                <div className="modalGallery">
                  {activeProject.images.map((src, i) => (
                    <img
                      key={src}
                      className="modalImg"
                      src={src}
                      alt={`${activeProject.title} screenshot ${i + 1}`}
                      loading="lazy"
                    />
                  ))}
                </div>
              ) : (
                <p className="modalHint">No screenshots added yet.</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
