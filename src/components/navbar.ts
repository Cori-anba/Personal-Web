import { navLinks, personalInfo } from '../utils/data';
import { createEl } from '../utils/dom';

export function createNavbar(): HTMLElement {
  const nav = createEl('nav', { class: 'navbar', id: 'navbar' });

  const inner = createEl('div', { class: 'navbar-inner container' });

  // Logo
  const logo = createEl('a', { href: '#hero', class: 'navbar-logo' }, personalInfo.nameEn);
  inner.appendChild(logo);

  // Desktop nav links
  const linkList = createEl('ul', { class: 'navbar-links' });
  navLinks.forEach((link) => {
    const li = createEl('li');
    const a = createEl('a', { href: link.href, class: 'navbar-link' }, link.label);
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      closeMobileMenu(nav);
    });
    li.appendChild(a);
    linkList.appendChild(li);
  });
  inner.appendChild(linkList);

  // Mobile menu button
  const menuBtn = createEl('button', { class: 'navbar-menu-btn', 'aria-label': 'Toggle menu' });
  menuBtn.innerHTML = '<span></span><span></span><span></span>';
  menuBtn.addEventListener('click', () => toggleMobileMenu(nav));
  inner.appendChild(menuBtn);

  nav.appendChild(inner);

  // Scroll observer for background change
  setupScrollObserver(nav);

  return nav;
}

function setupScrollObserver(nav: HTMLElement): void {
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.scrollY > 60;
        nav.classList.toggle('scrolled', scrolled);
        // Update active link
        updateActiveLink(nav);
        ticking = false;
      });
      ticking = true;
    }
  });
}

function updateActiveLink(nav: HTMLElement): void {
  const links = nav.querySelectorAll('.navbar-link');
  const sections = document.querySelectorAll('section[id]');

  let currentSection = '';
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100) {
      currentSection = '#' + section.id;
    }
  });

  links.forEach((link) => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === currentSection || (href === '#about' && currentSection.startsWith('#about')));
  });
}

function toggleMobileMenu(nav: HTMLElement): void {
  nav.classList.toggle('menu-open');
  document.body.classList.toggle('menu-locked');
}

function closeMobileMenu(nav: HTMLElement): void {
  nav.classList.remove('menu-open');
  document.body.classList.remove('menu-locked');
}
