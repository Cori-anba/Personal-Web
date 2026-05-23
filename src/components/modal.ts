import { Project, DetailSection } from '../utils/data';
import { createEl } from '../utils/dom';

export class ProjectModal {
  private overlay: HTMLElement;
  private modal: HTMLElement;
  private body: HTMLElement;
  private isOpen = false;

  constructor() {
    // Backdrop
    this.overlay = createEl('div', { class: 'modal-overlay' });
    this.overlay.addEventListener('click', () => this.close());

    // Modal container
    this.modal = createEl('div', { class: 'modal-container' });
    this.modal.addEventListener('click', (e) => e.stopPropagation());

    // Close button
    const closeBtn = createEl('button', { class: 'modal-close', 'aria-label': '关闭' });
    closeBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
    closeBtn.addEventListener('click', () => this.close());
    this.modal.appendChild(closeBtn);

    // Scrollable body
    this.body = createEl('div', { class: 'modal-body' });
    this.modal.appendChild(this.body);

    this.overlay.appendChild(this.modal);

    // ESC key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) this.close();
    });
  }

  public open(project: Project): void {
    this.body.innerHTML = '';
    this.renderContent(project);
    document.body.appendChild(this.overlay);
    document.body.classList.add('modal-locked');

    // Trigger animation
    requestAnimationFrame(() => {
      this.overlay.classList.add('modal-overlay--visible');
      this.modal.classList.add('modal-container--visible');
    });

    this.isOpen = true;
  }

  public close(): void {
    this.overlay.classList.remove('modal-overlay--visible');
    this.modal.classList.remove('modal-container--visible');

    setTimeout(() => {
      if (this.overlay.parentNode) {
        this.overlay.parentNode.removeChild(this.overlay);
      }
      document.body.classList.remove('modal-locked');
    }, 300);

    this.isOpen = false;
  }

  private renderContent(project: Project): void {
    this.body.appendChild(this.buildHeader(project));
    this.body.appendChild(this.buildDivider());

    if (project.detailIntro) {
      this.body.appendChild(this.buildIntro(project.detailIntro));
    }

    if (project.detailTechStack) {
      this.body.appendChild(this.buildTechStack(project.detailTechStack));
    }

    if (project.detailSections) {
      project.detailSections.forEach((s) => {
        if (s.image) {
          this.body.appendChild(this.buildImage(s));
        } else if (s.heading) {
          this.body.appendChild(this.buildSection(s));
        }
        this.body.appendChild(this.buildMiniDivider());
      });
    }
  }

  private buildHeader(project: Project): HTMLElement {
    const header = createEl('div', { class: 'modal-header' });
    header.innerHTML = `
      <div class="modal-project-name">${project.name}</div>
      <div class="modal-project-sub">${project.subtitle}${project.period ? ' · ' + project.period : ''}</div>
    `;
    return header;
  }

  private buildDivider(): HTMLElement {
    return createEl('div', { class: 'modal-divider' });
  }

  private buildMiniDivider(): HTMLElement {
    return createEl('div', { class: 'modal-mini-divider' });
  }

  private buildIntro(text: string): HTMLElement {
    const wrap = createEl('div', { class: 'modal-intro' });
    wrap.innerHTML = `<p>${text}</p>`;
    return wrap;
  }

  private buildTechStack(techStr: string): HTMLElement {
    const wrap = createEl('div', { class: 'modal-tech-section' });
    const label = createEl('div', { class: 'modal-section-heading' }, '技术栈');
    wrap.appendChild(label);

    const tags = techStr.split('/').map(t => t.trim()).filter(Boolean);
    const tagWrap = createEl('div', { class: 'modal-tech-tags' });
    tags.forEach(t => {
      const tag = createEl('span', { class: 'modal-tech-tag' }, t);
      tagWrap.appendChild(tag);
    });
    wrap.appendChild(tagWrap);
    return wrap;
  }

  private buildSection(section: DetailSection): HTMLElement {
    const wrap = createEl('div', { class: 'modal-section' });
    wrap.innerHTML = `
      <h3 class="modal-section-heading">${section.heading}</h3>
      ${section.content ? `<p class="modal-section-content">${section.content}</p>` : ''}
    `;
    return wrap;
  }

  private buildImage(section: DetailSection): HTMLElement {
    const wrap = createEl('div', { class: 'modal-image-wrap' });

    const hdSrc = (section.image || '').replace('./images/', './images-hd/');
    const picture = createEl('picture', {});
    const source = createEl('source', { media: '(min-width: 1024px)', srcset: hdSrc });
    const img = createEl('img', {
      src: section.image || '',
      alt: section.imageAlt || '',
      class: 'modal-image',
      loading: 'lazy',
      decoding: 'async',
    });
    picture.appendChild(source);
    picture.appendChild(img);
    wrap.appendChild(picture);

    if (section.imageAlt) {
      const caption = createEl('div', { class: 'modal-image-caption' }, section.imageAlt);
      wrap.appendChild(caption);
    }

    return wrap;
  }
}
