import React from 'react';
import Reveal from '../components/Reveal.jsx';
import SkillCategoryCard from '../components/SkillCategoryCard.jsx';
import { skills } from '../data/skills.js';

export default function SkillsSection() {
  return (
    <section id="skills" className="section" aria-label="Skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
          <p className="section-lead">
            A focused stack for backend development, API delivery, and reliable database work.
          </p>
        </div>

        <div className="skills-grid" role="list">
          {skills.map((category, idx) => (
            <div key={category.key} role="listitem">
              <Reveal delayMs={80 + idx * 90}>
                <SkillCategoryCard category={category} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

