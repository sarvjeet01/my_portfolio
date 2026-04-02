import React from 'react';
import TechIcon from './TechIcon.jsx';

export default function SkillCategoryCard({ category }) {
  const iconStyle = {
    '--icon-bg': category.iconBg,
    '--icon-border': category.iconBorder,
    '--icon-color': category.iconColor
  };

  return (
    <div className="card card-hover skill-category">
      <div className="skill-top">
        <div className="icon-badge" style={iconStyle} aria-hidden="true">
          <TechIcon type={category.icon} />
        </div>
        <div className="skill-title">{category.title}</div>
      </div>

      {category.description ? <div className="skill-description">{category.description}</div> : null}

      <div className="chips" aria-label={`${category.title} skills`}>
        {category.items.map((item) => (
          <span className="chip" key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

