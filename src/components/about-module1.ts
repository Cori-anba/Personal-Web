import { personalInfo, education, hobbies, selfEvaluation } from '../utils/data';
import { createEl } from '../utils/dom';

export function createAboutModule1(): HTMLElement {
  const section = createEl('section', { id: 'about', class: 'about-section section' });

  const container = createEl('div', { class: 'container' });

  // Section header
  const label = createEl('div', { class: 'section-label' }, 'About Me · 01');
  container.appendChild(label);

  const title = createEl('h2', { class: 'section-title' }, '个人信息');
  container.appendChild(title);

  const divider = createEl('div', { class: 'section-divider' });
  container.appendChild(divider);

  // Two-column layout
  const grid = createEl('div', { class: 'about-grid' });

  // Left column - Photo
  const leftCol = createEl('div', { class: 'about-left', 'data-reveal': '' });
  const photoFrame = createEl('div', { class: 'about-photo-frame' });
  const img = createEl('img', {
    src: personalInfo.avatar,
    alt: personalInfo.avatarAlt,
    class: 'about-photo',
    loading: 'lazy',
    decoding: 'async',
  });
  photoFrame.appendChild(img);
  leftCol.appendChild(photoFrame);

  // Quick contact buttons under photo
  const contactRow = createEl('div', { class: 'about-quick-contact' });
  contactRow.innerHTML = `
    <a href="mailto:${personalInfo.email}" class="quick-contact-btn" aria-label="Email">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
      <span>Email</span>
    </a>
    <a href="tel:${personalInfo.phone}" class="quick-contact-btn" aria-label="Phone">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      <span>Call</span>
    </a>
    <a href="${personalInfo.github}" target="_blank" rel="noopener" class="quick-contact-btn" aria-label="GitHub">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
      <span>GitHub</span>
    </a>
  `;
  leftCol.appendChild(contactRow);

  grid.appendChild(leftCol);

  // Right column - Info
  const rightCol = createEl('div', { class: 'about-right' });

  // Education card
  const eduCard = createEl('div', { class: 'about-edu-card', 'data-reveal': '' });
  eduCard.innerHTML = `
    <div class="edu-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5"/></svg>
    </div>
    <h3 class="edu-school">${education.school}</h3>
    <p class="edu-major">${education.major}</p>
    <div class="edu-meta">
      <span class="edu-badge gpa">GPA ${education.gpa}</span>
      <span class="edu-badge rank">排名 ${education.rank}</span>
      <span class="edu-badge period">${education.period}</span>
    </div>
  `;
  rightCol.appendChild(eduCard);

  // Hobbies card — compact horizontal row
  const hobbiesCard = createEl('div', { class: 'hobbies-card', 'data-reveal': '' });
  hobbiesCard.innerHTML = `
    <div class="hobbies-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
    </div>
    <span class="hobbies-label">个人爱好：</span>
    ${hobbies.map((hobby) => `<span class="hobby-tag">${hobby}</span>`).join('')}
  `;
  rightCol.appendChild(hobbiesCard);

  // Self evaluation quote
  const quoteCard = createEl('blockquote', { class: 'about-quote', 'data-reveal': '' });
  quoteCard.innerHTML = `<p>"${selfEvaluation.short}"</p>`;
  rightCol.appendChild(quoteCard);

  // Extended evaluation
  const evalList = createEl('div', { class: 'about-eval-list', 'data-reveal': '' });
  selfEvaluation.full.forEach((item, i) => {
    const p = createEl('p', { class: 'about-eval-item' }, `${i + 1}. ${item}`);
    evalList.appendChild(p);
  });
  rightCol.appendChild(evalList);

  // CTA button
  const ctaWrap = createEl('div', { class: 'about-cta-wrap', 'data-reveal': '' });
  const cta = createEl('a', { href: '#projects', class: 'cta-btn' });
  cta.innerHTML = `
    <span>View My Work</span>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
  `;
  cta.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  });
  ctaWrap.appendChild(cta);
  rightCol.appendChild(ctaWrap);

  grid.appendChild(rightCol);

  container.appendChild(grid);
  section.appendChild(container);

  return section;
}
