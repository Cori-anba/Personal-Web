import { personalInfo } from '../utils/data';
import { createEl } from '../utils/dom';

export function createHero(): HTMLElement {
  const section = createEl('section', { id: 'hero', class: 'hero section' });

  // Content overlay
  const content = createEl('div', { class: 'hero-content container' });

  // Name with Chinese
  const nameEl = createEl('h1', { class: 'hero-name' });
  nameEl.innerHTML = personalInfo.name;
  content.appendChild(nameEl);

  // English subtitle
  const subtitle = createEl('div', { class: 'hero-subtitle' }, 'HE LINJIANG · PORTFOLIO');
  content.appendChild(subtitle);

  // Divider
  const divider = createEl('div', { class: 'hero-divider' });
  content.appendChild(divider);

  // Tagline
  const tagline = createEl('p', { class: 'hero-tagline' }, `"${personalInfo.tagline}"`);
  content.appendChild(tagline);

  section.appendChild(content);

  // Scroll indicator — direct child of section so position:absolute anchors to hero height
  const scrollHint = createEl('div', { class: 'hero-scroll-hint' });
  scrollHint.innerHTML = `
    <span class="hero-scroll-text">Scroll to explore</span>
    <svg class="hero-scroll-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 5v14M5 12l7 7 7-7"/>
    </svg>
  `;
  section.appendChild(scrollHint);

  return section;
}
