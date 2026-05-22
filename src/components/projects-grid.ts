import { projects, supplementaryProjects } from '../utils/data';
import { createEl } from '../utils/dom';
import { createProjectCard } from './project-card';

export function createProjectsSection(): HTMLElement {
  const section = createEl('section', { id: 'projects', class: 'projects-section section' });
  const container = createEl('div', { class: 'container' });

  // Section header
  const label = createEl('div', { class: 'section-label' }, 'Portfolio');
  container.appendChild(label);

  const title = createEl('h2', { class: 'section-title' }, '项目作品');
  container.appendChild(title);

  const divider = createEl('div', { class: 'section-divider' });
  container.appendChild(divider);

  // Description
  const intro = createEl('p', { class: 'projects-intro', 'data-reveal': '' },
    '每一个项目都是成长的见证——从第一个消消乐小游戏到全栈AI应用，记录着从"不会"到"学会"的坚实历程。'
  );
  container.appendChild(intro);

  // Main projects grid
  const grid = createEl('div', { class: 'projects-grid' });
  projects.forEach((project, i) => {
    const card = createProjectCard(project, i);
    grid.appendChild(card);
  });
  container.appendChild(grid);

  // Supplementary projects
  const suppSection = createEl('div', { class: 'supplementary-section' });
  const suppLabel = createEl('div', { class: 'subsection-title', 'data-reveal': '' }, '更多作品');
  suppSection.appendChild(suppLabel);

  const suppGrid = createEl('div', { class: 'supplementary-grid' });

  supplementaryProjects.forEach((sp, i) => {
    const card = createEl('div', { class: 'supplementary-card', 'data-reveal': 'scale' });

    // Image if available
    if ('image' in sp && sp.image) {
      const img = createEl('img', {
        src: sp.image,
        alt: sp.name,
        class: 'supplementary-img',
        loading: 'lazy',
        decoding: 'async',
      });
      // Fallback if image fails
      img.addEventListener('error', () => {
        img.style.display = 'none';
      });
      card.appendChild(img);
    }

    const info = createEl('div', { class: 'supplementary-info' });
    const nameEl = createEl('h4', { class: 'supplementary-name' }, sp.name);
    const descEl = createEl('p', { class: 'supplementary-desc' }, sp.description);
    const techEl = createEl('div', { class: 'supplementary-tech' });
    sp.tech.forEach((t) => {
      const tag = createEl('span', { class: 'project-tech-tag' }, t);
      techEl.appendChild(tag);
    });
    info.appendChild(nameEl);
    info.appendChild(descEl);
    info.appendChild(techEl);
    card.appendChild(info);

    suppGrid.appendChild(card);
  });

  suppSection.appendChild(suppGrid);
  container.appendChild(suppSection);

  section.appendChild(container);
  return section;
}
