import { motion, useReducedMotion } from 'framer-motion'
import ExpandCard from './ExpandCard'
import ScrollBackdrop from './ScrollBackdrop'
import {
  education,
  experience,
  privateProjects,
  profile,
  projects,
  skills,
} from './data'

const ease = [0.22, 1, 0.36, 1] as const

function SignalTicks() {
  const reduce = useReducedMotion()
  const heights = [4, 7, 5, 8, 3, 6]

  return (
    <span className="signal-ticks" aria-hidden="true">
      {heights.map((h, i) => (
        <motion.span
          key={i}
          initial={reduce ? false : { scaleY: 0.2 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.45, delay: 0.1 + i * 0.04, ease }}
          style={{ height: h, originY: 1 }}
        />
      ))}
    </span>
  )
}

export default function App() {
  const reduce = useReducedMotion()

  return (
    <div className="app-shell">
      <ScrollBackdrop />

      <div className="site">
        <header className="nav">
          <a className="nav-brand" href="#top">
            Azhar Iqbal
            <SignalTicks />
          </a>
          <nav className="nav-links" aria-label="Sections">
            <a href="#work">Work</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main id="top">
          <section className="hero" aria-label="Introduction">
            <motion.div
              className="hero-band panel"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <div className="hero-identity">
                <img
                  className="hero-photo"
                  src="/images/azhar.jpg"
                  alt="Azhar Iqbal"
                  width={160}
                  height={160}
                />
                <div>
                  <h1>{profile.name}</h1>
                  <p className="hero-tag">
                    AI engineer · agents, voice, adaptive learning, vision
                  </p>
                </div>
              </div>
              <div className="hero-aside">
                <p className="hero-summary">{profile.summary}</p>
                <div className="hero-actions">
                  <div className="cta-row">
                    <a className="btn" href="#projects">
                      View projects
                    </a>
                    <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
                      Email me
                    </a>
                  </div>
                  <div className="meta-row">
                    <span>{profile.location}</span>
                    <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>
                      {profile.phone}
                    </a>
                    <a
                      href={profile.links.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href={profile.links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <section className="card-deck" id="work" aria-label="Experience">
            <h2 className="deck-label">Experience</h2>
            <div className="card-grid">
              {experience.map((job) => (
                <ExpandCard
                  key={job.company}
                  eyebrow={job.dates}
                  title={job.role}
                  teaser={`${job.company} · ${job.place}`}
                >
                  <ul className="job-points">
                    {job.points.map((point) => (
                      <li key={point.slice(0, 48)}>{point}</li>
                    ))}
                  </ul>
                </ExpandCard>
              ))}
            </div>
          </section>

          <section className="card-deck" id="projects" aria-label="Projects">
            <h2 className="deck-label">Projects</h2>
            <div className="card-grid">
              {projects.map((project) => (
                <ExpandCard
                  key={project.name}
                  title={project.name}
                  teaser={project.subtitle}
                >
                  <p className="project-body">{project.body}</p>
                  {project.links.length > 0 && (
                    <div className="project-links">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </ExpandCard>
              ))}
              {privateProjects.map((project) => (
                <ExpandCard
                  key={project.name}
                  eyebrow="Private"
                  title={project.name}
                  teaser={project.subtitle}
                >
                  <p className="project-body">{project.body}</p>
                </ExpandCard>
              ))}
            </div>
          </section>

          <section className="card-deck" id="skills" aria-label="Skills">
            <h2 className="deck-label">Skills</h2>
            <div className="card-grid card-grid-skills">
              {skills.map((skill) => (
                <ExpandCard
                  key={skill.title}
                  title={skill.title}
                  teaser={skill.items.split(',').slice(0, 3).join(',') + '…'}
                >
                  <p className="skill-full">{skill.items}</p>
                </ExpandCard>
              ))}
            </div>
          </section>

          <section className="card-deck" id="education" aria-label="Education">
            <h2 className="deck-label">Education</h2>
            <div className="card-grid">
              <ExpandCard
                wide
                eyebrow={education.dates}
                title={education.degree}
                teaser={education.school}
              >
                <div className="awards">
                  {education.awards.map((award) => (
                    <span className="award" key={award}>
                      {award}
                    </span>
                  ))}
                </div>
              </ExpandCard>
            </div>
          </section>

          <section className="card-deck" id="contact" aria-label="Contact">
            <h2 className="deck-label">Contact</h2>
            <div className="card-grid">
              <ExpandCard
                wide
                title="Get in touch"
                teaser="Open to AI engineering roles and collaborations"
              >
                <p className="contact-line">
                  Agents, voice, adaptive learning, and vision systems
                </p>
                <div className="contact-actions">
                  <a className="btn" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                  <a
                    className="btn btn-ghost"
                    href={profile.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="btn btn-ghost"
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </ExpandCard>
            </div>
          </section>
        </main>

        <footer className="footer panel">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>{profile.location}</span>
        </footer>
      </div>
    </div>
  )
}
