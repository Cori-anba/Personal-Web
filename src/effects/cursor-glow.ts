export class CursorGlow {
  private el: HTMLElement;
  private targetX = 0;
  private targetY = 0;
  private currentX = 0;
  private currentY = 0;
  private animationId = 0;

  constructor() {
    this.el = document.createElement('div');
    this.el.className = 'cursor-glow';
    this.el.setAttribute('aria-hidden', 'true');
    document.body.appendChild(this.el);
    this.bindEvents();
    this.animate();
  }

  private bindEvents(): void {
    document.addEventListener('mousemove', (e) => {
      this.targetX = e.clientX;
      this.targetY = e.clientY;
    });

    // Hide glow when mouse leaves
    document.addEventListener('mouseleave', () => {
      this.el.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      this.el.style.opacity = '1';
    });

    // Brighten on interactive elements
    const interactiveSelectors = 'a, button, .project-card, .honor-card, .cta-btn, input, textarea';
    document.querySelectorAll(interactiveSelectors).forEach((el) => {
      el.addEventListener('mouseenter', () => {
        this.el.classList.add('cursor-glow--interactive');
      });
      el.addEventListener('mouseleave', () => {
        this.el.classList.remove('cursor-glow--interactive');
      });
    });

    // Re-bind for dynamically added elements
    const observer = new MutationObserver(() => {
      document.querySelectorAll(interactiveSelectors).forEach((el) => {
        el.removeEventListener('mouseenter', this.handleInteractiveEnter);
        el.removeEventListener('mouseleave', this.handleInteractiveLeave);
        el.addEventListener('mouseenter', this.handleInteractiveEnter);
        el.addEventListener('mouseleave', this.handleInteractiveLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  private handleInteractiveEnter = (): void => {
    this.el.classList.add('cursor-glow--interactive');
  };

  private handleInteractiveLeave = (): void => {
    this.el.classList.remove('cursor-glow--interactive');
  };

  private animate = (): void => {
    // Smooth lerp
    this.currentX += (this.targetX - this.currentX) * 0.08;
    this.currentY += (this.targetY - this.currentY) * 0.08;

    this.el.style.transform = `translate(${this.currentX - 100}px, ${this.currentY - 100}px)`;
    this.animationId = requestAnimationFrame(this.animate);
  };

  public destroy(): void {
    cancelAnimationFrame(this.animationId);
    this.el.remove();
  }
}
