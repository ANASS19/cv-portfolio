import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaRobot, FaSatelliteDish } from 'react-icons/fa';
import { TbAugmentedReality } from 'react-icons/tb';
import MatrixBackground from './components/MatrixBackground';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import {
  personalInfo,
  education,
  experience,
  projects,
  advancedWork,
  skills,
  certifications,
  hackathons,
  languages
} from './data/resume';
import './App.css';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

function App() {
  const sanitizedPhone = personalInfo.phone.replace(/[^+\d]/g, '');

  return (
    <div className="app-shell">
      <MatrixBackground />
      <div className="app-content">
        <header className="hero" id="top">
          <motion.div
            className="hero-grid"
            initial="hidden"
            animate="show"
            variants={heroVariants}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="hero-copy">
              <span className="hero-eyebrow">Neon-coded autonomy for engineered futures</span>
              <h1 className="hero-title">
                <span className="hero-name glitch" data-text={personalInfo.name}>
                  {personalInfo.name}
                </span>
                <span className="hero-highlight">{personalInfo.title}</span>
              </h1>
              <p className="hero-summary">{personalInfo.summary}</p>
              <div className="hero-meta">
                <span><FaMapMarkerAlt /> {personalInfo.location}</span>
                <a href={`tel:${sanitizedPhone}`}><FaPhone /> {personalInfo.phone}</a>
                <a href={`mailto:${personalInfo.email}`}><FaEnvelope /> {personalInfo.email}</a>
              </div>
              <div className="hero-actions">
                <a className="primary-btn" href="#projects">
                  <FaRobot /> Explore Selected Work
                </a>
                <div className="social-links">
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <FaGithub />
                  </a>
                  <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
            <div className="hero-orbit">
              <div className="hero-orbit-core">
                <FaRobot />
              </div>
              <div className="hero-orbit-ring ring-one">
                <span>RAG Architect</span>
                <span>LLM Ops</span>
              </div>
              <div className="hero-orbit-ring ring-two">
                <span>Geometric Deep Learning</span>
                <span>Edge AI</span>
              </div>
              <div className="hero-orbit-ring ring-three">
                <span>Embodied Interfaces</span>
                <span>Neuroadaptive UX</span>
              </div>
            </div>
          </motion.div>
        </header>

        <nav className="pill-nav" aria-label="Primary">
          {navItems.map((item, index) => (
            <a key={item.id} href={`#${item.id}`}>
              <span className="nav-index">{String(index + 1).padStart(2, '0')}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <main>
          <Section id="about" eyebrow="Mission" title="Engineering intelligence with responsibility">
            <div className="about-grid">
              <div className="about-lead">
                <p>
                  I build resilient AI ecosystems that fuse research-grade machine intelligence with polished product delivery. From
                  conversational agents to embedded perception, I design architectures that are observable, trustworthy, and ready for scale.
                </p>
                <div className="about-cards">
                  <article>
                    <FaSatelliteDish />
                    <div>
                      <h3>Conversational AI Systems</h3>
                      <p>Designing multi-agent, retrieval-augmented workflows that keep nuance, context, and guardrails intact.</p>
                    </div>
                  </article>
                  <article>
                    <TbAugmentedReality />
                    <div>
                      <h3>Intelligent Interfaces</h3>
                      <p>Blending sensing, affective computing, and explainability to make interventions transparent and delightful.</p>
                    </div>
                  </article>
                </div>
              </div>
              <div className="about-stack">
                <h3>Deep dives and recent explorations</h3>
                <ul>
                  {advancedWork.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          <Section id="experience" eyebrow="Trajectory" title="Where I have been building">
            <div className="timeline">
              {experience.map((role) => (
                <article className="timeline-item" key={`${role.company}-${role.period}`}>
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <header>
                      <h3>{role.role}</h3>
                      <span className="timeline-meta">
                        {role.company} - {role.location} - {role.period}
                      </span>
                    </header>
                    <ul>
                      {role.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section id="projects" eyebrow="Selected Work" title="Featured builds and experiments">
            <div className="project-grid">
              {projects.map((project) => (
                <article key={project.name} className="project-card">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section id="education" eyebrow="Foundations" title="Academic formation">
            <div className="education-grid">
              {education.map((entry) => (
                <article key={entry.degree}>
                  <h3>{entry.degree}</h3>
                  <p>{entry.school}</p>
                  <span>{entry.location} - {entry.period}</span>
                </article>
              ))}
            </div>
          </Section>

          <Section id="skills" eyebrow="Toolset" title="Capabilities and stacks">
            <div className="skills-grid">
              {skills.map((group) => (
                <article key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="pill-row">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <div className="certs-grid">
              <div>
                <h3>Certifications</h3>
                <ul>
                  {certifications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Hackathons and camps</h3>
                <ul>
                  {hackathons.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Languages</h3>
                <ul>
                  {languages.map((lang) => (
                    <li key={lang.name}>{lang.name} - {lang.level}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          <Section id="contact" eyebrow="Collaborate" title="Let's architect your next breakthrough">
            <div className="contact-grid">
              <div className="contact-intro">
                <p>
                  I'd love to discuss AI-driven products, research collaborations, or opportunities to weave intelligence into real-world systems.
                  Drop a line and I'll reply swiftly.
                </p>
                <ul>
                  <li><FaEnvelope /> {personalInfo.email}</li>
                  <li><FaPhone /> {personalInfo.phone}</li>
                  <li><FaLinkedin /> {personalInfo.linkedin}</li>
                </ul>
              </div>
              <ContactForm targetEmail={personalInfo.email} />
            </div>
          </Section>
        </main>

        <footer className="footer">
          <p>Copyright {new Date().getFullYear()} {personalInfo.name}. Crafted with React, Vite, and a spark of AI imagination.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
