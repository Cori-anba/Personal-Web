export class ScrollReveal {
  private observer: IntersectionObserver;

  constructor() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add('revealed');

            // Add stagger delay for children with stagger classes
            const staggerChildren = el.querySelectorAll('[class*="stagger-"]');
            staggerChildren.forEach((child) => {
              child.classList.add('revealed');
            });

            // Unobserve after revealing
            this.observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    // Observe all [data-reveal] elements
    this.observeAll();
  }

  private observeAll(): void {
    const elements = document.querySelectorAll('[data-reveal]');
    elements.forEach((el) => {
      this.observer.observe(el);
    });
  }

  // Called after new elements are added to DOM
  public refresh(): void {
    this.observeAll();
  }

  public destroy(): void {
    this.observer.disconnect();
  }
}
