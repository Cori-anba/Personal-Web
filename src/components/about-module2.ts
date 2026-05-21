import { skills, honors, Honor } from '../utils/data';
import { createEl } from '../utils/dom';

export function createAboutModule2(): HTMLElement {
  const section = createEl('section', { id: 'about-2', class: 'about-section section' });
  const container = createEl('div', { class: 'container' });

  // Section header
  const label = createEl('div', { class: 'section-label' }, 'About Me · 02');
  container.appendChild(label);

  const title = createEl('h2', { class: 'section-title' }, '能力与经历');
  container.appendChild(title);

  const divider = createEl('div', { class: 'section-divider' });
  container.appendChild(divider);

  // Personal photo 2 — landscape banner
  const photoSection = createEl('div', { class: 'about2-photo-section', 'data-reveal': '' });
  const photoFrame = createEl('div', { class: 'about2-photo-frame' });
  const img = createEl('img', {
    src: './images/photos/photo2.jpg',
    alt: '何林江',
    class: 'about2-photo',
    loading: 'lazy',
  });
  photoFrame.appendChild(img);
  photoSection.appendChild(photoFrame);
  container.appendChild(photoSection);

  // Skills section
  const skillsSection = createEl('div', { class: 'skills-section', 'data-reveal': '' });
  const skillsTitle = createEl('h3', { class: 'subsection-title' }, '技术技能栈');
  skillsSection.appendChild(skillsTitle);

  // Group skills by category
  const categories = ['前端', '后端/全栈', '工具/工程', 'AI 协同'];
  const skillGrid = createEl('div', { class: 'skills-grid' });

  categories.forEach((cat) => {
    const catCard = createEl('div', { class: 'skill-category-card' });
    const catName = createEl('div', { class: 'skill-cat-name' }, cat);
    catCard.appendChild(catName);

    const tagList = createEl('div', { class: 'skill-tags' });
    const catSkills = skills.filter((s) => s.category === cat);
    catSkills.forEach((skill) => {
      const levelClass = `skill-tag--${skill.level}`;
      const tag = createEl('span', { class: `skill-tag ${levelClass}` });

      // Level indicator dot
      const dot = createEl('span', { class: 'skill-dot' });
      tag.appendChild(dot);
      tag.appendChild(document.createTextNode(skill.name));

      tagList.appendChild(tag);
    });
    catCard.appendChild(tagList);
    skillGrid.appendChild(catCard);
  });

  skillsSection.appendChild(skillGrid);
  container.appendChild(skillsSection);

  // Honors section
  const honorsSection = createEl('div', { class: 'honors-section' });
  const honorsTitle = createEl('h3', { class: 'subsection-title' }, '核心经历与荣誉');
  honorsSection.appendChild(honorsTitle);

  const honorsGrid = createEl('div', { class: 'honors-grid' });

  honors.forEach((honor, i) => {
    const badge = createHonorBadge(honor, i);
    badge.setAttribute('data-reveal', '');
    honorsGrid.appendChild(badge);
  });

  honorsSection.appendChild(honorsGrid);
  container.appendChild(honorsSection);

  section.appendChild(container);
  return section;
}

function createHonorBadge(honor: Honor, index: number): HTMLElement {
  const card = createEl('div', { class: `honor-card ${honor.highlight ? 'honor-card--highlight' : ''}` });

  const iconMap: Record<string, string> = {
    trophy: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 8 8 12 8s5-4 7.5 0a2.5 2.5 0 0 1 0 5H18"/><path d="M18 9v4c0 3.5-2.7 6-6 6s-6-2.5-6-6V9"/><path d="M12 15v4"/></svg>',
    medal: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
    star: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    briefcase: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>',
    users: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  };

  card.innerHTML = `
    <div class="honor-icon">${iconMap[honor.icon]}</div>
    <div class="honor-info">
      <div class="honor-title">${honor.title}</div>
      <div class="honor-subtitle">${honor.subtitle}</div>
    </div>
  `;

  return card;
}
