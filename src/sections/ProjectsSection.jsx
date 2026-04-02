import React from 'react';
import Reveal from '../components/Reveal.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';

export default function ProjectsSection() {
  return (
    <section id="projects" className="section" aria-label="Projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-lead">A selection of backend and business-focused work.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <Reveal key={project.name} delayMs={60 + idx * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

