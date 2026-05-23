import { Project } from '../utils/data';
import { createEl } from '../utils/dom';

export function createProjectCard(project: Project, index: number, onClick?: (project: Project) => void): HTMLElement {
  const card = createEl('article', {
    class: `project-card ${project.featured ? 'project-card--featured' : ''}`,
    'data-reveal': index % 2 === 0 ? 'left' : 'right',
  });

  // Image — responsive: HD on desktop, optimized on mobile
  const imgWrap = createEl('div', { class: 'project-card-img' });
  const hdSrc = project.image.replace('./images/', './images-hd/');
  const picture = createEl('picture', {});
  const source = createEl('source', { media: '(min-width: 1024px)', srcset: hdSrc });
  const img = createEl('img', {
    src: project.image,
    alt: project.imageAlt,
    class: 'project-card-thumb',
    loading: 'lazy',
    decoding: 'async',
  });
  picture.appendChild(source);
  picture.appendChild(img);
  imgWrap.appendChild(picture);

  // Shimmer overlay
  const shimmer = createEl('div', { class: 'project-card-shimmer' });
  imgWrap.appendChild(shimmer);

  card.appendChild(imgWrap);

  // Card body
  const body = createEl('div', { class: 'project-card-body' });

  // Header: name + subtitle
  const header = createEl('div', { class: 'project-card-header' });
  const nameEl = createEl('h3', { class: 'project-card-name' }, project.name);
  const subEl = createEl('span', { class: 'project-card-subtitle' }, `${project.subtitle}${project.period ? ' · ' + project.period : ''}`);
  header.appendChild(nameEl);
  header.appendChild(subEl);
  body.appendChild(header);

  // Description
  const desc = createEl('p', { class: 'project-card-desc' }, project.description);
  body.appendChild(desc);

  // Tech stack tags
  const techWrap = createEl('div', { class: 'project-card-tech' });
  project.techStack.slice(0, 6).forEach((tech) => {
    const t = createEl('span', { class: 'project-tech-tag' }, tech);
    techWrap.appendChild(t);
  });
  if (project.techStack.length > 6) {
    const more = createEl('span', { class: 'project-tech-tag project-tech-more' }, `+${project.techStack.length - 6}`);
    techWrap.appendChild(more);
  }
  body.appendChild(techWrap);

  // Highlights
  const highlightsList = createEl('ul', { class: 'project-card-highlights' });
  project.highlights.forEach((h) => {
    const li = createEl('li', { class: 'project-highlight-item' }, h);
    highlightsList.appendChild(li);
  });
  body.appendChild(highlightsList);

  // Outcome
  const outcomeBlock = createEl('div', { class: 'project-card-outcome' });
  outcomeBlock.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
    <span>${project.outcome}</span>
  `;
  body.appendChild(outcomeBlock);

  card.appendChild(body);

  // 3D hover effect
  setup3DHover(card);

  // Click to open detail modal
  if (onClick) {
    card.addEventListener('click', () => onClick(project));
  }

  return card;
}

function setup3DHover(card: HTMLElement): void {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.setProperty('--rotate-x', `${rotateX}deg`);
    card.style.setProperty('--rotate-y', `${rotateY}deg`);
    card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
  });

  card.addEventListener('mouseleave', () => {
    card.style.setProperty('--rotate-x', '0deg');
    card.style.setProperty('--rotate-y', '0deg');
  });
}
