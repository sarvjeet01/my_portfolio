import React from 'react';
import Navbar from './components/Navbar.jsx';
import ScrollToTopButton from './components/ScrollToTopButton.jsx';
import Footer from './components/Footer.jsx';
import HeroSection from './sections/HeroSection.jsx';
import AboutSection from './sections/AboutSection.jsx';
import SkillsSection from './sections/SkillsSection.jsx';
import ProjectsSection from './sections/ProjectsSection.jsx';
import ContactSection from './sections/ContactSection.jsx';

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

