import { personalInfo } from '../utils/data';
import { createEl } from '../utils/dom';

export function createContactSection(): HTMLElement {
  const section = createEl('section', { id: 'contact', class: 'contact-section section' });
  const container = createEl('div', { class: 'container' });

  // Section header
  const label = createEl('div', { class: 'section-label' }, 'Contact');
  container.appendChild(label);

  const title = createEl('h2', { class: 'section-title' }, '联系我');
  container.appendChild(title);

  const divider = createEl('div', { class: 'section-divider' });
  container.appendChild(divider);

  // Two columns
  const grid = createEl('div', { class: 'contact-grid' });

  // Left: Info
  const infoCol = createEl('div', { class: 'contact-info', 'data-reveal': 'left' });
  infoCol.innerHTML = `
    <p class="contact-desc">如果你对我的经历和作品感兴趣，欢迎通过以下方式联系我。</p>
    <div class="contact-links">
      <a href="mailto:${personalInfo.email}" class="contact-link-item">
        <div class="contact-link-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
        </div>
        <div class="contact-link-text">
          <span class="contact-link-label">Email</span>
          <span class="contact-link-value">${personalInfo.email}</span>
        </div>
      </a>
      <a href="tel:${personalInfo.phone}" class="contact-link-item">
        <div class="contact-link-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </div>
        <div class="contact-link-text">
          <span class="contact-link-label">Phone</span>
          <span class="contact-link-value">${personalInfo.phone}</span>
        </div>
      </a>
      <a href="${personalInfo.github}" target="_blank" rel="noopener" class="contact-link-item">
        <div class="contact-link-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        </div>
        <div class="contact-link-text">
          <span class="contact-link-label">GitHub</span>
          <span class="contact-link-value">${personalInfo.githubUser}</span>
        </div>
      </a>
    </div>
  `;
  grid.appendChild(infoCol);

  // Right: Form
  const formCol = createEl('div', { class: 'contact-form-col', 'data-reveal': 'right' });
  const form = createEl('form', {
    class: 'contact-form',
    action: 'https://formspree.io/f/YOUR_FORM_ID',
    method: 'POST',
  }) as HTMLFormElement;

  form.innerHTML = `
    <div class="form-group">
      <label for="name" class="form-label">姓名</label>
      <input type="text" id="name" name="name" class="form-input" placeholder="你的名字" required />
    </div>
    <div class="form-group">
      <label for="email" class="form-label">邮箱</label>
      <input type="email" id="email" name="email" class="form-input" placeholder="your@email.com" required />
    </div>
    <div class="form-group">
      <label for="message" class="form-label">消息</label>
      <textarea id="message" name="message" class="form-textarea" rows="5" placeholder="写下你想说的话..." required></textarea>
    </div>
    <button type="submit" class="form-submit">
      <span>发送消息</span>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
    </button>
  `;

  formCol.appendChild(form);
  grid.appendChild(formCol);

  container.appendChild(grid);
  section.appendChild(container);

  return section;
}
