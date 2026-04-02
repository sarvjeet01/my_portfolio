import React from 'react';

export default function TechIcon({ type }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  };

  switch (type) {
    case 'frontend':
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M9 18L3 12L9 6"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 6L21 12L15 18"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'backend':
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M6 9C6 7.34315 9.58227 6 14 6C18.4177 6 22 7.34315 22 9C22 10.6569 18.4177 12 14 12C9.58227 12 6 10.6569 6 9Z"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <path
            d="M6 9V15C6 16.6569 9.58227 18 14 18C18.4177 18 22 16.6569 22 15V9"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <path
            d="M2 10V16"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'database':
      return (
        <svg {...common} aria-hidden="true">
          <ellipse
            cx="12"
            cy="5"
            rx="8"
            ry="3"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <path
            d="M4 5V11C4 12.6569 7.58172 14 12 14C16.4183 14 20 12.6569 20 11V5"
            stroke="currentColor"
            strokeWidth="2.2"
          />
          <path
            d="M4 11V17C4 18.6569 7.58172 20 12 20C16.4183 20 20 18.6569 20 17V11"
            stroke="currentColor"
            strokeWidth="2.2"
          />
        </svg>
      );
    case 'tools':
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M14.7 6.3C15.4 5.6 16.6 5.6 17.3 6.3C18 7 18 8.2 17.3 8.9L16.3 9.9L14.1 7.7L14.7 6.3Z"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M12.2 10.1L4 18.3V20H5.7L13.9 11.8"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

