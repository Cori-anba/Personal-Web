import './styles/reset.css';
import './styles/tokens.css';
import './styles/global.css';
import './styles/animations.css';
import './styles/components.css';

import { createNavbar } from './components/navbar';
import { createHero } from './components/hero';
import { createAboutModule1 } from './components/about-module1';
import { createAboutModule2 } from './components/about-module2';
import { createProjectsSection } from './components/projects-grid';
import { createContactSection } from './components/contact';
import { createFooter } from './components/footer';

import { ParticleBackground } from './effects/particle-bg';
import { CursorGlow } from './effects/cursor-glow';
import { ScrollReveal } from './effects/scroll-reveal';

import { ProjectModal } from './components/modal';

import { renderToApp } from './utils/dom';

function init(): void {
  // Full-page particle background (fixed canvas behind everything)
  new ParticleBackground();

  // Project detail modal
  const modal = new ProjectModal();

  // Render all sections
  renderToApp(
    createNavbar(),
    createHero(),
    createAboutModule1(),
    createAboutModule2(),
    createProjectsSection((project) => modal.open(project)),
    createContactSection(),
    createFooter()
  );

  // Initialize interactive effects
  new CursorGlow();
  new ScrollReveal();
}

// Boot when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
