import './App.css';
import { useState } from 'react';
import { FaArrowUp, FaBars, FaCode, FaDatabase, FaEnvelope, FaGithub, FaLayerGroup, FaLinkedinIn, FaMoon, FaNetworkWired, FaProjectDiagram, FaSun, FaTimes } from 'react-icons/fa';
import { SiCss3, SiExpress, SiGit, SiGithub, SiHtml5, SiJava, SiJavascript, SiMongodb, SiNodedotjs, SiPython, SiReact, SiTailwindcss, SiVisualstudiocode } from 'react-icons/si';
import SujalPortrait from './images/dfgdgh.jpeg';
import TravelNestPreview from './images/travelnest.png';
import ExamNotesPreview from './images/Examnotes.png';
import PotholePreview from './images/poth.png';

const projects = [
  {
    number: '01',
    name: 'ExamNotes AI',
    type: 'AI learning platform',
    description:
      'Turns a topic into structured, exam-focused notes, then helps students revise with summaries, quizzes, diagrams and charts.',
    stack: ['React', 'Node.js', 'MongoDB', 'Groq'],
    live: 'https://ai-exam-notes-client-y9mw.onrender.com',
    code: 'https://github.com/Sujalrai12/AI-Exam-Notes',
    visual: 'notes',
  },
  {
    number: '02',
    name: 'TravelNest',
    type: 'Full-stack booking app',
    description:
      'An Airbnb-style application for discovering property listings, uploading images, signing in and managing booking workflows.',
    stack: ['EJS', 'Express', 'MongoDB', 'Node.js'],
    live: 'https://travelnest-3oye.onrender.com/',
    code: 'https://github.com/Sujalrai12/TravelNest',
    visual: 'travel',
  },
  {
    number: '03',
    name: 'Pothole Detection',
    type: 'Computer vision · Road safety',
    description:
      'A road-safety project focused on identifying potholes in road scenes to make damaged roads easier to spot.',
    stack: ['Node.js', 'Express.js', 'React.js', 'JavaScript'],
    live: 'https://pothole1.onrender.com/',
    code: 'https://github.com/Sujalrai12/Pothole',
    visual: 'pothole',
  },
];

const skillGroups = [
  { label: 'Languages', items: ['Python', 'JavaScript', 'Core Java', 'SQL'] },
  { label: 'Frontend', items: ['React', 'HTML', 'CSS', 'Tailwind CSS', 'EJS'] },
  { label: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { label: 'Data & tools', items: ['MongoDB', 'Git', 'GitHub', 'Render', 'VS Code'] },
  { label: 'Foundations', items: ['Data structures', 'Algorithms', 'DBMS', 'OOP'] },
];

const skillIcons = {
  Python: SiPython,
  JavaScript: SiJavascript,
  'Core Java': SiJava,
  SQL: FaDatabase,
  React: SiReact,
  'React.js': SiReact,
  HTML: SiHtml5,
  CSS: SiCss3,
  'Tailwind CSS': SiTailwindcss,
  EJS: FaCode,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  Express: SiExpress,
  'REST APIs': FaNetworkWired,
  MongoDB: SiMongodb,
  Git: SiGit,
  GitHub: SiGithub,
  Render: FaNetworkWired,
  'VS Code': SiVisualstudiocode,
  'Data structures': FaLayerGroup,
  Algorithms: FaProjectDiagram,
  DBMS: FaDatabase,
  OOP: FaCode,
};

const skillIconColors = {
  Python: '#3776AB',
  JavaScript: '#D6B400',
  'Core Java': '#E76F00',
  SQL: '#4479A1',
  React: '#149ECA',
  HTML: '#E34F26',
  CSS: '#1572B6',
  'Tailwind CSS': '#06A6BA',
  EJS: '#A6B93A',
  'Node.js': '#339933',
  'Express.js': '#666666',
  'REST APIs': '#7654C8',
  MongoDB: '#47A248',
  Git: '#F05032',
  GitHub: '#454A50',
  Render: '#168F6D',
  'VS Code': '#007ACC',
  'Data structures': '#4A78B8',
  Algorithms: '#8457A7',
  DBMS: '#607D8B',
  OOP: '#D16A2D',
};

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>;
}

function ProjectVisual({ kind }) {
  const projectDetails = {
    notes: { image: ExamNotesPreview, name: 'ExamNotes AI' },
    travel: { image: TravelNestPreview, name: 'TravelNest' },
    pothole: { image: PotholePreview, name: 'Pothole Detection' },
  }[kind];
  const { image, name: projectName } = projectDetails;
  return <div className={`preview preview-${kind}`}><img className="project-preview-image" src={image} alt={`${projectName} application preview`} /></div>;
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <ProjectVisual kind={project.visual} />
      <div className="project-content">
        <div className="project-meta"><span>{project.type}</span><span>{project.number} / 03</span></div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="tag-list">{project.stack.map((tag) => { const Icon = skillIcons[tag]; return <span key={tag}>{Icon && <Icon className="project-tag-icon" aria-hidden="true" style={{ color: skillIconColors[tag] }} />}{tag}</span>; })}</div>
        <div className="project-link-row">
          <div className="project-actions">
            {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live app<Arrow diagonal /></a>}
            {project.code && <a href={project.code} target="_blank" rel="noreferrer">Source code<Arrow diagonal /></a>}
          </div>
          <span className="project-status"><i /> Built project</span>
        </div>
      </div>
    </article>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return window.localStorage.getItem('sujal-portfolio-theme') !== 'light';
    } catch {
      return true;
    }
  });

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    try {
      window.localStorage.setItem('sujal-portfolio-theme', next ? 'dark' : 'light');
    } catch {
      // Theme switching still works for this visit if storage is unavailable.
    }
  };

  return (
    <div className={`site-shell${darkMode ? ' theme-dark' : ''}`}>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Sujal Rai, home">SUJAL<span>.</span></a>
        <nav id="primary-navigation" className={mobileMenuOpen ? 'mobile-open' : ''} aria-label="Main navigation">
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a><a href="#about" onClick={() => setMobileMenuOpen(false)}>About me</a><a href="#work" onClick={() => setMobileMenuOpen(false)}>Projects</a><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </nav>
        <div className="header-socials"><button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'} aria-pressed={darkMode} title={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}>{darkMode ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}</button><a href="https://www.linkedin.com/in/sujal-rai-60599141b/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><FaLinkedinIn aria-hidden="true" /><span className="visually-hidden">LinkedIn</span></a><a href="https://github.com/Sujalrai12" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><FaGithub aria-hidden="true" /><span className="visually-hidden">GitHub</span></a><button className="mobile-menu-toggle" type="button" aria-controls="primary-navigation" aria-expanded={mobileMenuOpen} aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMobileMenuOpen((open) => !open)}>{mobileMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}</button></div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow">COMPUTER SCIENCE · AI &amp; ML</p>
            <h1><span className="hero-greeting">Hello, I’m</span><br /><span className="hero-name">Sujal Rai</span></h1>
            <h2 className="hero-role">Full-stack Developer</h2>
            <p className="hero-intro">I build web applications and practical AI tools that turn useful ideas into software people can use.</p>
            <div className="hero-actions"><a className="resume-link" href={`${process.env.PUBLIC_URL}/Sujal_resume%20(4).pdf`} target="_blank" rel="noreferrer">Resume <Arrow diagonal /></a></div>
          </div>
          <div className="hero-art">
            <img className="hero-photo" src={SujalPortrait} alt="Sujal Rai standing outdoors" />
          </div>
          <a className="scroll-cue" href="#work"><span /> Scroll to explore</a>
        </section>



        <section className="about-section section-wrap" id="about">
          <div className="about-intro"><p className="eyebrow">A LITTLE ABOUT ME</p><p>I like turning ideas into practical products. My work spans web platforms and AI-powered learning tools, with a focus on understanding the problem and making the experience feel clear.</p><p>Based in Bhopal, India. Currently pursuing a B.Tech in Computer Science and Engineering (AI &amp; ML) at Oriental Institute of Science and Technology.</p></div>
          <div className="about-side"><div className="education-block"><span className="eyebrow">EDUCATION</span><div className="education-item"><i /><div><b>Oriental Institute of Science and Technology</b><span>B.Tech, Computer Science &amp; Engineering<br />(Artificial Intelligence &amp; Machine Learning)</span></div><small>2023 — NOW</small></div><div className="education-item"><i /><div><b>Shantiniketan School</b><span>Class XII · Science stream · 80%</span></div><small>BHOPAL</small></div></div>
            <div className="cert-block"><span className="eyebrow">CERTIFICATIONS</span><div className="cert-list"><span>Introduction to Data Science <b>Infosys</b></span><span>Introduction to Cybersecurity <b>Cisco</b></span><span>Mastering Python <b>Udemy</b></span></div></div>
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading"><div><p className="eyebrow">A FEW THINGS I’VE MADE</p><h2>Selected work<span>.</span></h2></div><p>Projects that bring together thoughtful interfaces, useful features and engineering.</p></div>
          <div className="projects-grid">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div>
          <div className="work-footnote"><span>01 — 03</span><p>Built to solve real problems, with room to keep getting better.</p><span className="footnote-star">✳</span></div>
        </section>

        <section className="skills-section section-wrap">
          <div className="skills-title"><p className="eyebrow">TOOLS I REACH FOR</p><h2>My toolkit<span>.</span></h2></div>
          <div className="skills-browser">
            <div className="skill-category-grid">
              {skillGroups.map((group) => {
                return <article className="skill-category-card" key={group.label}>
                  <div className="skill-card-heading"><h3 className="skill-card-label">{group.label}</h3><span className="skill-card-count">· {group.items.length}</span></div>
                  <span className="skill-card-tech-list">{group.items.map((item) => { const Icon = skillIcons[item] || FaCode; return <span className="skill-card-tech" key={item}><Icon aria-hidden="true" style={{ color: skillIconColors[item] }} />{item}</span>; })}</span>
                </article>;
              })}
            </div>
          </div>
        </section>

        
      </main>

      <footer className="site-footer section-wrap" id="contact">
        <div className="footer-main">
          <div className="footer-brand-block">
            <a className="wordmark" href="#home">SUJAL<span>.</span></a>
            <p>Building useful web apps<br />and practical AI tools.</p>
          </div>
          <div className="footer-connect">
            <span className="eyebrow">LET’S CONNECT</span>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/in/sujal-rai-60599141b/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn aria-hidden="true" /><span>LinkedIn</span></a>
              <a href="https://github.com/Sujalrai12" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub aria-hidden="true" /><span>GitHub</span></a>
              <a href="mailto:raisujal205@gmail.com" aria-label="Email Sujal"><FaEnvelope aria-hidden="true" /><span>Email</span></a>
            </div>
          </div>
          <a className="footer-top" href="#home"><span>Back to top</span><i><FaArrowUp aria-hidden="true" /></i></a>
        </div>
        <div className="footer-bottom"><span>© 2026 Sujal Rai</span><span>Bhopal, India</span><span>Designed &amp; built with care</span></div>
      </footer>
    </div>
  );
}

export default App;
