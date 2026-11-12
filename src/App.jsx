import { useEffect, useState } from "react";
import "./App.css";
import Contact from "./Contact";

/* =========================================
   PORTFOLIO DATA
========================================= */

const skills = [
  {
    title: "Programming",
    items: "Python, SQL, R, JavaScript, HTML, CSS",
  },
  {
    title: "Data Analytics",
    items:
      "Data cleaning, analysis, visualisation, statistical modelling and reporting",
  },
  {
    title: "Automation",
    items:
      "Python scripting, spreadsheet macros and workflow automation",
  },
  {
    title: "Data & Productivity Tools",
    items: "Excel, Power BI, Jupyter, Git and Google Sheets",
  },
  {
    title: "Web Development",
    items: "Website development, CMS and online service portals",
  },
  {
    title: "Business Analysis",
    items: "Requirements gathering, KPI tracking and insight reporting",
  },
];

const additionalSkills = [
  {
    title: "Engineering",
    description: "Technical drawing and circuit analysis",
  },
  {
    title: "Instrumentation",
    description: "Sensors, calibration and measurement",
  },
  {
    title: "Digital Media",
    description: "Graphic design and content editing",
  },
  {
    title: "Productivity",
    description: "MS Office, Google Workspace and Notion",
  },
];

const experience = [
  {
    role: "Research Consultant – Quantitative Data Analysis",
    organization: "WorldQuant BRAIN",
    location: "Remote",
    points: [
      "Built and backtested 30+ alpha signals using financial datasets.",
      "Raised simulation accuracy by 15% through iterative model refinement.",
      "Applied statistical reasoning to evaluate signal performance and risk.",
      "Documented research logic for reproducible, well-structured analysis.",
    ],
  },
  {
    role: "Data & Digital Services Analyst",
    organization: "AYLA E-Service Hub",
    location: "",
    points: [
      "Reduced data-entry errors by 25% through structured client records.",
      "Built spreadsheets and reports to track service requests and outcomes.",
      "Automated 5+ reporting workflows, saving about 6 hours per week.",
      "Guided 200+ clients through government and institutional portals.",
    ],
  },
  {
    role: "Data & Programs Volunteer",
    organization: "Africa's Young Leaders Association",
    location: "",
    points: [
      "Analysed data on 300+ participants to shape youth initiatives.",
      "Maintained digital records and assets for association activities.",
      "Prepared summaries and visual reports for leadership and partners.",
    ],
  },
  {
    role: "Industrial Attachment Trainee",
    organization: "Industrial Attachments · Engineering Placements",
    location: "",
    points: [
      "Assisted with instrumentation, measurement and equipment maintenance.",
      "Cut data recording time by 20% with structured operational logs.",
      "Upheld rigorous workplace safety procedures and quality standards.",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "AYLA — Official Website",
    category: "Organisational Website",
    description:
      "A digital platform for Africa's Young Leaders Association, bringing its organisational identity, leadership, programmes and opportunities together.",
    overview:
      "Developed as part of the digital presence of Africa's Young Leaders Association (AYLA). The platform brings together information about the association, its leadership, membership, programmes, Global Academy, Reader's Guild, events and opportunities.",
    tags: [
      "Web Development",
      "Responsive Design",
      "Digital Solutions",
      "UI/UX",
    ],
    github: "https://github.com/pumtechs-droid/AYLA-WEB",
    demo: "https://aylaweb.netlify.app/",
  },
  {
    number: "02",
    title: "Canopy of Grace Foundation",
    category: "Nonprofit & Social Impact Website",
    description:
      "A digital platform supporting girls' dignity, menstrual health, education and empowerment.",
    overview:
      "A website project for Canopy of Grace Foundation, presenting its mission, programmes, stories and impact. The platform supports awareness, community engagement, donations and partnership opportunities.",
    tags: [
      "Web Development",
      "Responsive Design",
      "Social Impact",
      "UI/UX",
    ],
    github:
      "https://github.com/pumtechs-droid/canopy-of-grace-foundation",
    demo: "https://canopy-of-grace-foundation.vercel.app/",
  },
  {
    number: "03",
    title: "eService Web",
    category: "Digital Services Platform",
    description:
      "A digital service platform connecting users with education support, administrative assistance, data analytics and technology solutions.",
    overview:
      "A web-based service platform showcasing digital and professional services. It demonstrates my interest in building practical online experiences that make service discovery and access more convenient.",
    tags: [
      "Next.js",
      "TypeScript",
      "Web Development",
      "Digital Services",
    ],
    github: "https://github.com/pumtechs-droid/eservice-web",
    demo: "https://eservice-web.vercel.app/",
  },
  {
    number: "04",
    title: "PUMTECHS",
    category: "Technology & Software Engineering",
    description:
      "A technology-focused initiative representing software engineering, innovation and practical digital solutions.",
    overview:
      "PUMTECHS represents my technology-focused identity and interest in software engineering, digital transformation and building useful technology solutions. Explore the project through its GitHub repository.",
    tags: [
      "Software Engineering",
      "Technology",
      "Innovation",
    ],
    github: "https://github.com/pumtechs-droid/pumtechs",
    demo: "",
  },
];

const education = [
  {
    title:
      "Electrical & Electronic Engineering Degree and Computer Science Studies",
    status: "Concurrent programmes · In progress",
    description:
      "Currently pursuing studies in electrical and electronic engineering and computer science. Expected graduation upon completion of current programmes.",
    coursework:
      "Programming, data structures, databases, statistics, circuit analysis, instrumentation and engineering mathematics.",
  },
];

const achievements = [
  {
    title:
      "From Problem to Plan: Identifying Business Opportunities and Making Strategic Recommendations",
    institution: "University of the People",
    type: "Certificate of Participation",
    date: "October 20, 2026",
  },
  {
    title:
      "Financial Literacy for Students: Budgeting, Saving, and Investing with Data",
    institution: "University of the People",
    type: "Certificate of Participation",
    date: "September 28, 2026",
  },
];

const attributes = [
  "Continuous, self-driven learner",
  "Collaborative team player",
  "Disciplined and reliable",
  "Safety-conscious in technical work",
];

const socialLinks = [
  {
    label: "X",
    url: "https://x.com/Pumtechs",
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/yulezekwecheedozzie",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/pumtechs/",
  },
  {
    label: "GitHub",
    url: "https://github.com/pumtechs-droid",
  },
];

const navigation = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Leadership", "#leadership"],
  ["Attributes", "#attributes"],
  ["Achievements", "#achievements"],
  ["Contact", "#contact"],
];

/* =========================================
   REUSABLE COMPONENTS
========================================= */

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}

function SocialLinks({ className = "" }) {
  return (
    <div className={`social-links ${className}`}>
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit my ${social.label} profile`}
        >
          {social.label}
          <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <article className="project-card">
      <div className="project-top">
        <span className="project-number">{project.number}</span>
        <span className="project-category">
          {project.category}
        </span>
      </div>

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="project-card-actions">
        <button
          type="button"
          className="project-details-button"
          onClick={() => onOpen(project)}
        >
          Explore Project <span>→</span>
        </button>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          GitHub ↗
        </a>
      </div>
    </article>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="project-modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <article
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          type="button"
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          ×
        </button>

        <p className="eyebrow">
          FEATURED PROJECT {project.number}
        </p>

        <span className="project-category">
          {project.category}
        </span>

        <h2 id="project-modal-title">{project.title}</h2>

        <h3>Project Overview</h3>
        <p>{project.overview}</p>

        <h3>Technologies & Focus Areas</h3>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="project-modal-actions">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
          >
            View GitHub Repository ↗
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              View Live Website ↗
            </a>
          )}

          <button
            type="button"
            className="btn secondary"
            onClick={onClose}
          >
            Close Details
          </button>
        </div>
      </article>
    </div>
  );
}

/* =========================================
   MAIN APPLICATION
========================================= */

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const closeMenu = () => setMenuOpen(false);

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio">
      {/* NAVIGATION */}

      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          REMMY<span>.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={
            menuOpen ? "Close navigation" : "Open navigation"
          }
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav
          id="main-navigation"
          className={`nav-links ${menuOpen ? "nav-open" : ""}`}
        >
          {navigation.map(([label, link]) => (
            <a
              href={link}
              key={link}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        {/* HERO */}

        <section className="hero" id="home">
          <div className="hero-layout">
            <div className="hero-content">
              <p className="eyebrow">
                WELCOME TO MY DIGITAL SPACE
              </p>

              <h1>
                NYAMWAYA OWINO
                <br />
                <span>OKOWA REMMY</span>
              </h1>

              <h2>
                Data Analyst | Digital Solutions Developer | Engineering & Computer Science Student
              </h2>

              <p className="hero-description">
                I turn data into insight and ideas into practical digital
                solutions. My work brings together data analytics, business
                intelligence, automation and web development, supported by
                an engineering mindset and a passion for solving real-world
                problems.
              </p>

              <p className="hero-specialities">
                DATA ANALYTICS · BUSINESS INTELLIGENCE · AUTOMATION · WEB DEVELOPMENT · ENGINEERING
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="btn primary">
                  Explore My Projects <span aria-hidden="true">↗</span>
                </a>

                <a href="#contact" className="btn secondary">
                  Let's Connect
                </a>

                <a
                  href="/remmy-cv.pdf"
                  download="Nyamwaya-Remmy-CV.pdf"
                  className="btn secondary"
                >
                  Download CV <span aria-hidden="true">↓</span>
                </a>
              </div>

              <SocialLinks className="hero-socials" />
            </div>

            <div className="hero-portrait">
              <div
                className="portrait-glow"
                aria-hidden="true"
              ></div>

              <img
                src="/remmy-watermark.jpeg"
                alt="Portrait of Nyamwaya Owino Okowa Remmy"
                fetchPriority="high"
              />

              <div className="portrait-caption">
                <h3>REMMY.</h3>
                <p>DATA · TECHNOLOGY · INNOVATION · LEADERSHIP</p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}

        <section className="section" id="about">
          <SectionHeading
            eyebrow="GET TO KNOW ME"
            title="About Me"
          />

          <div className="about-content">
            <p>
              I am Nyamwaya Owino Okowa Remmy, a multidisciplinary
              data analyst combining hands-on analytics, automation
              and web development experience with concurrent studies
              in engineering and computer science.
            </p>

            <p>
              I have experience cleaning, analysing and visualising
              data, building digital platforms and supporting
              business decisions with clear, evidence-based insight.
            </p>

            <p>
              I bring an engineer's discipline, a strong learning
              drive and a safety-first mindset to every team.
              I am passionate about technology, innovation and
              using digital solutions to address real-world challenges.
            </p>
          </div>
        </section>

        {/* SKILLS */}

        <section className="section" id="skills">
          <SectionHeading
            eyebrow="WHAT I CAN DO"
            title="Technical Skills"
          />

          <div className="skills-grid">
            {skills.map((skill) => (
              <article
                className="skill-card"
                key={skill.title}
              >
                <h3>{skill.title}</h3>
                <p>{skill.items}</p>
              </article>
            ))}
          </div>

          <h3 className="subsection-title">
            Additional Skills
          </h3>

          <div className="skills-grid">
            {additionalSkills.map((skill) => (
              <article
                className="skill-card"
                key={skill.title}
              >
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}

        <section className="section" id="projects">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Featured Projects"
          />

          <p className="projects-intro">
            A selection of digital platforms, organisational
            projects and technology initiatives from my
            development journey. Explore each project to
            learn more and visit its live website.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.number}
                project={project}
                onOpen={setSelectedProject}
              />
            ))}
          </div>

          <div className="github-more">
            <a
              href="https://github.com/pumtechs-droid"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              Explore All GitHub Projects ↗
            </a>
          </div>
        </section>

        {/* EXPERIENCE */}

        <section className="section" id="experience">
          <SectionHeading
            eyebrow="MY PROFESSIONAL JOURNEY"
            title="Experience"
          />

          <div className="experience-list">
            {experience.map((item) => (
              <article
                className="experience-card"
                key={item.role}
              >
                <div className="experience-heading">
                  <div>
                    <h3>{item.role}</h3>
                    <h4>{item.organization}</h4>
                  </div>

                  {item.location && (
                    <span>{item.location}</span>
                  )}
                </div>

                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}

        <section className="section" id="education">
          <SectionHeading
            eyebrow="MY ACADEMIC JOURNEY"
            title="Education"
          />

          {education.map((item) => (
            <article
              className="education-card"
              key={item.title}
            >
              <h3>{item.title}</h3>

              <p className="education-status">
                {item.status}
              </p>

              <p>{item.description}</p>

              <h4>Relevant Coursework</h4>

              <p>{item.coursework}</p>
            </article>
          ))}
        </section>

        {/* LEADERSHIP */}

        <section className="section" id="leadership">
          <SectionHeading
            eyebrow="BEYOND TECHNOLOGY"
            title="Leadership & Community"
          />

          <article className="leadership-card">
            <h3>Youth Leader</h3>

            <h4>
              Africa's Young Leaders Association (AYLA)
            </h4>

            <ul>
              <li>
                Coordinated student and community technology initiatives.
              </li>
              <li>
                Mentored peers in data tools and digital skills.
              </li>
              <li>
                Contributed to youth-focused programmes and initiatives.
              </li>
            </ul>
          </article>
        </section>

        {/* PERSONAL ATTRIBUTES */}

        <section className="section" id="attributes">
          <SectionHeading
            eyebrow="HOW I WORK"
            title="Personal Attributes"
          />

          <div className="attributes-grid">
            {attributes.map((attribute) => (
              <div key={attribute}>
                {attribute}
              </div>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS */}

        <section className="section" id="achievements">
          <SectionHeading
            eyebrow="LEARNING & DEVELOPMENT"
            title="Achievements & Certificates"
          />

          <div className="projects-grid">
            {achievements.map((achievement) => (
              <article
                className="project-card"
                key={achievement.title}
              >
                <span className="achievement-label">
                  CERTIFICATE
                </span>

                <h3>{achievement.title}</h3>

                <p>
                  {achievement.institution} · {achievement.type}
                </p>

                <p className="achievement-date">
                  {achievement.date}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}

        <Contact />
      </main>

      {/* PROJECT DETAILS MODAL */}

      <ProjectModal
        project={selectedProject}
        onClose={closeProject}
      />

      {/* FOOTER */}

      <footer className="footer">
        <a href="#home" className="logo">
          REMMY<span>.</span>
        </a>

        <p>
          © 2026. Nyamwaya Owino
          Okowa Remmy. All rights reserved.
        </p>

        <p>
          Built with curiosity, creativity and code.
        </p>

        <SocialLinks className="footer-socials" />

        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

export default App;