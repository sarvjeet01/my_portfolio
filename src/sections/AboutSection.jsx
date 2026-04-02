import React from 'react';
import Reveal from '../components/Reveal.jsx';

export default function AboutSection() {
  return (
    <section id="about" className="section" aria-label="About">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About</h2>
          <p className="section-lead">
            Backend-focused developer building reliable, scalable systems with clean MVC patterns,
            REST APIs, and secure access controls.
          </p>
        </div>

        <div className="about-grid">
          <Reveal delayMs={50}>
            <ul className="about-list">
              <li className="about-item">
                <strong>Backend Experience</strong>
                <span>APIs, authentication/authorization flows, and maintainable server logic.</span>
              </li>
              <li className="about-item">
                <strong>MVC & Clean Code</strong>
                <span>Separation of concerns for long-term growth and easier debugging.</span>
              </li>
              <li className="about-item">
                <strong>REST APIs</strong>
                <span>Designing endpoints, validation, and response patterns for production usage.</span>
              </li>
            </ul>
          </Reveal>

          <Reveal delayMs={110}>
            <ul className="about-list">
              <li className="about-item">
                <strong>RBAC</strong>
                <span>Role-based access control for modules, routes, and admin features.</span>
              </li>
              <li className="about-item">
                <strong>Database (MySQL)</strong>
                <span>Schema design, performance-aware queries, and data integrity.</span>
              </li>
              <li className="about-item">
                <strong>Deployment</strong>
                <span>Production-ready setup, environment configuration, and reliable releases.</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

