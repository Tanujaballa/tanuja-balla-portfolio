import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, Server, Database, Zap, ShieldCheck, Layers3, ChevronRight } from "lucide-react";
import "./styles.css";

const skills = [
  ["React.js", Code2, "Responsive UIs, reusable components, hooks and performance-focused interfaces."],
  ["Node.js", Server, "RESTful backend services, validations, integrations and production support."],
  ["NestJS", Layers3, "Structured APIs, modules, dependency injection, guards and scalable services."],
  ["MySQL / SQL", Database, "Queries, joins, indexing and performance optimization."],
  ["Kafka", Zap, "Event-driven processing and controlled downstream request flow."],
  ["JWT / RBAC", ShieldCheck, "Authentication, authorization and role-based access control."]
];

const projects = [
  {
    title: "Circuit — API Integration Platform", tag: "Production Project",
    description: "An API integration and business-process platform where users visually design flows using triggers, circuits and actions to connect enterprise systems.",
    stack: ["React.js","NestJS","Node.js","Kafka","MySQL","REST APIs"],
    points: ["Built and enhanced UI features for triggers, circuits, actions, dashboards and transaction tracking.","Worked with Kafka-based request processing to control downstream API traffic.","Implemented validations, environment import/export and briefcase-based migration workflows.","Investigated slow APIs using Kibana and optimized SQL queries and indexes."]
  },
  {
    title: "API Performance Optimization", tag: "Engineering Improvement",
    description: "Investigated slow production APIs by tracing latency and throughput, identifying SQL bottlenecks and improving database access patterns.",
    stack: ["Node.js","NestJS","SQL","Kibana"],
    points: ["Analyzed slow endpoints and traced issues to inefficient database queries.","Added indexes for frequently searched columns.","Replaced unnecessary SELECT * queries with required fields.","Reported approximately 40% improvement in API response performance."]
  },
  {
    title: "Circuit Import / Export & Briefcase", tag: "Feature Development",
    description: "Enhanced the platform's environment migration workflow to make moving actions, circuits and triggers between environments easier.",
    stack: ["React.js","REST APIs","Node.js"],
    points: ["Added preview and validation flows for imported content.","Implemented bulk download for actions, circuits and triggers.","Fixed environment migration and display issues.","Improved usability of large configuration-management workflows."]
  }
];

function App() {
  const [open, setOpen] = useState(false);
  const go = id => { document.getElementById(id)?.scrollIntoView({behavior:"smooth"}); setOpen(false); };

  return <div className="app">
    <header className="nav">
      <button className="brand" onClick={() => go("home")}>TB<span>.</span></button>
      <nav className={open ? "navlinks open" : "navlinks"}>
        {["about","skills","experience","projects","contact"].map(x => <button key={x} onClick={() => go(x)}>{x}</button>)}
      </nav>
      <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X size={23}/> : <Menu size={23}/>}</button>
    </header>

    <main>
      <section id="home" className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">FULL STACK DEVELOPER</p>
          <h1>Building reliable web applications<br/><span>from UI to API.</span></h1>
          <p className="hero-text">I’m Tanuja Balla, a Full Stack Developer with 2+ years of experience working with React.js, Node.js, NestJS, REST APIs and SQL. I enjoy turning requirements into clean, practical and maintainable features.</p>
          <div className="hero-actions"><button className="primary" onClick={() => go("projects")}>View my work <ArrowUpRight size={18}/></button><button className="secondary" onClick={() => go("contact")}>Get in touch</button></div>
          <div className="quick-tech"><span>React.js</span><span>Node.js</span><span>NestJS</span><span>MySQL</span></div>
        </div>
        <div className="hero-card">
          <div className="terminal-top"><i/><i/><i/><b>developer.js</b></div>
          <pre><code>{`const developer = {
  name: "Tanuja Balla",
  role: "Full Stack Developer",
  frontend: ["React.js", "JavaScript"],
  backend: ["Node.js", "NestJS"],
  database: ["MySQL", "SQL"],
  architecture: [
    "REST APIs",
    "Microservices",
    "Event-driven"
  ],
  focus: "Clean, scalable software"
};`}</code></pre>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-heading"><p className="eyebrow"><span className="section-dot"></span> ABOUT</p><h2>Engineering with a practical mindset.</h2></div>
        <div className="about-grid">
          <div className="about-main">
            <p>I work across both frontend and backend development, building features, implementing validations, developing REST APIs, fixing production issues and improving application performance.</p>
            <p>In my current work, I contribute to an API integration platform that connects enterprise systems through configurable workflows. My work has included responsive UI improvements, API integrations, transaction monitoring, authentication and environment migration features.</p>
            <p>I’m looking to grow with a strong engineering team where I can work on scalable applications and continue deepening my full-stack skills.</p>
          </div>
          <div className="facts"><div><strong>2+</strong><span>Years experience</span></div><div><strong>Full Stack</strong><span>Frontend + Backend</span></div><div><strong>API</strong><span>Integration & development</span></div></div>
        </div>
      </section>

      <section id="skills" className="section shaded">
        <div className="section-heading"><p className="eyebrow"><span className="section-dot"></span> SKILLS</p><h2>Tools I use to build.</h2></div>
        <div className="skill-grid">{skills.map(([name,Icon,desc]) => <article className="skill-card" key={name}><div className="icon-box"><Icon size={21}/></div><h3>{name}</h3><p>{desc}</p></article>)}</div>
        <div className="stack-line"><span>Also worked with</span>{["JavaScript","HTML","CSS","Express.js","TypeScript","REST APIs","Microservices","Git","Kibana"].map(x => <b key={x}>{x}</b>)}</div>
      </section>

      <section id="experience" className="section">
        <div className="section-heading"><p className="eyebrow"><span className="section-dot"></span> EXPERIENCE</p><h2>What I work on.</h2></div>
        <div className="timeline"><div className="timeline-item"><div className="timeline-dot"></div><div className="timeline-content">
          <div className="timeline-meta"><span>FULL STACK DEVELOPMENT</span><span>2+ YEARS</span></div>
          <h3>Full Stack Developer</h3>
          <p>Developing and maintaining production web applications across React.js and Node/NestJS. My day-to-day work includes new feature development, REST APIs, validations, responsive UI, defect resolution and client-environment support.</p>
          <ul><li>Developed frontend features and reusable UI flows using React.js.</li><li>Built and integrated REST APIs with validation and access control.</li><li>Worked on JWT-based authentication and role-based authorization.</li><li>Investigated production issues and API performance using Kibana.</li><li>Collaborated with developers, QA and stakeholders in an Agile workflow.</li></ul>
        </div></div></div>
      </section>

      <section id="projects" className="section shaded">
        <div className="section-heading"><p className="eyebrow"><span className="section-dot"></span> PROJECTS</p><h2>Selected work.</h2></div>
        <div className="project-grid">{projects.map(p => <article className="project-card" key={p.title}>
          <div className="project-top"><span className="project-tag">{p.tag}</span><ArrowUpRight size={20}/></div><h3>{p.title}</h3><p>{p.description}</p>
          <ul>{p.points.map(x => <li key={x}>{x}</li>)}</ul><div className="chips">{p.stack.map(x => <span key={x}>{x}</span>)}</div>
        </article>)}</div>
      </section>

      <section id="contact" className="section contact-section"><div className="contact-card">
        <p className="eyebrow">05 — CONTACT</p><h2>Let’s build something useful.</h2>
        <p>I’m open to Full Stack / MERN-oriented opportunities and engineering teams working on scalable web applications.</p>
        <div className="contact-actions">
          <a className="primary" href="mailto:ballatanuja627@gmail.com"><Mail size={18}/> Email me</a>
          <a className="secondary" href="https://www.linkedin.com/in/tanuja-balla" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a>
      
        </div>

      </div></section>
    </main>

    <footer><span>© {new Date().getFullYear()} Tanuja Balla</span><span>Built with React.js</span><button onClick={() => go("home")}>Back to top <ChevronRight size={15}/></button></footer>
  </div>;
}
createRoot(document.getElementById("root")).render(<App/>);
