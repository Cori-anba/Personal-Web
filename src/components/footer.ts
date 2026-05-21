import { personalInfo } from '../utils/data';
import { createEl } from '../utils/dom';

export function createFooter(): HTMLElement {
  const footer = createEl('footer', { class: 'site-footer' });
  const container = createEl('div', { class: 'container' });

  const inner = createEl('div', { class: 'footer-inner' });

  // Brand
  const brand = createEl('div', { class: 'footer-brand' });
  brand.innerHTML = `
    <div class="footer-logo">${personalInfo.nameEn}</div>
    <p class="footer-tagline">${personalInfo.tagline}</p>
  `;
  inner.appendChild(brand);

  // Social links
  const social = createEl('div', { class: 'footer-social' });
  social.innerHTML = `
    <a href="${personalInfo.github}" target="_blank" rel="noopener" class="footer-social-link" aria-label="GitHub">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
    </a>
    <a href="mailto:${personalInfo.email}" class="footer-social-link" aria-label="Email">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
    </a>
  `;
  inner.appendChild(social);

  // Bottom
  const bottom = createEl('div', { class: 'footer-bottom' });
  bottom.innerHTML = `
    <span class="footer-copy">&copy; 2026 ${personalInfo.name}. All rights reserved.</span>
    <span class="footer-motto">Built with passion &amp; curiosity</span>
  `;
  inner.appendChild(bottom);

  container.appendChild(inner);
  footer.appendChild(container);

  return footer;
}
