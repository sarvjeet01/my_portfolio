import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <div className="card card-hover project-card">
      <h3 className="project-title">{project.name}</h3>
      <p className="project-desc">
        <strong className="project-summary">{project.summary}</strong>
      </p>

      {Array.isArray(project.highlights) && project.highlights.length > 0 ? (
        <ul className="project-bullets">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

