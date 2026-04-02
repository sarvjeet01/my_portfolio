import React from 'react';
import Reveal from '../components/Reveal.jsx';

export default function HeroSection() {
  return (
    <section id="home" className="hero section" aria-label="Hero">
      <div className="container hero-grid">
        <div>
          <Reveal delayMs={50}>
            <span className="eyebrow">Backend Developer</span>
          </Reveal>

          <Reveal delayMs={100}>
            <h1 className="hero-title">Sarvjeet Kaur</h1>
          </Reveal>

          <Reveal delayMs={150}>
            <p className="hero-subtitle">Result-oriented Backend Developer</p>
          </Reveal>

          <Reveal delayMs={200}>
            <p className="hero-intro">
              Result-oriented Backend Developer with experience in PHP, CodeIgniter, MySQL, and API
              development
            </p>
          </Reveal>

          <Reveal delayMs={260} className="">
            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href="/sarvjeet_Backend_developer.pdf"
                download
              >
                Download CV
              </a>
              <a className="btn btn-ghost" href="#contact">
                Contact
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={320} className="hero-side">
          <div className="card">
            <div style={{ padding: 18 }}>
              <div className="hero-metric">
                <div className="metric-box">
                  <div className="metric-value">MVC + APIs</div>
                  <div className="metric-label">Clean architecture</div>
                </div>
                <div className="metric-box">
                  <div className="metric-value">RBAC</div>
                  <div className="metric-label">Role-based access</div>
                </div>
                <div className="metric-box">
                  <div className="metric-value">Deployment</div>
                  <div className="metric-label">Production-ready</div>
                </div>
                <div className="metric-box">
                  <div className="metric-value">MySQL</div>
                  <div className="metric-label">Relational databases</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

