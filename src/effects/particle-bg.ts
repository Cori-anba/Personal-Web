interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  hue: number;
}

export class ParticleBackground {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationId = 0;
  private mouseX = -1000;
  private mouseY = -1000;
  private targetMouseX = -1000;
  private targetMouseY = -1000;
  private width = 0;
  private height = 0;

  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'particle-bg';
    this.canvas.setAttribute('aria-hidden', 'true');
    this.canvas.style.cssText = `
      position: fixed;
      inset: 0;
      z-index: 0;
      pointer-events: none;
    `;

    const ctx = this.canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas 2D context not available');
    this.ctx = ctx;

    // Insert as first child of body
    document.body.prepend(this.canvas);

    this.resize();
    this.createParticles();
    this.bindEvents();
    this.animate();
  }

  private resize(): void {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  private createParticles(): void {
    const isMobile = this.width < 640;
    const count = isMobile ? 50 : 100;
    this.particles = [];

    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 1.8 + 0.4,
        opacity: Math.random() * 0.4 + 0.1,
        hue: Math.random() > 0.7 ? 30 : 170, // copper amber or teal tint
      });
    }
  }

  private bindEvents(): void {
    window.addEventListener('resize', () => {
      this.resize();
      this.createParticles();
    });

    document.addEventListener('mousemove', (e) => {
      this.targetMouseX = e.clientX;
      this.targetMouseY = e.clientY;
    });

    document.addEventListener('mouseleave', () => {
      this.targetMouseX = -1000;
      this.targetMouseY = -1000;
    });
  }

  private animate = (): void => {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Smooth mouse lerp
    this.mouseX += (this.targetMouseX - this.mouseX) * 0.05;
    this.mouseY += (this.targetMouseY - this.mouseY) * 0.05;

    const particles = this.particles;
    const mouseNear = this.targetMouseX > -500;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Mouse attraction / repulsion
      if (mouseNear) {
        const dx = this.mouseX - p.x;
        const dy = this.mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 250) {
          const force = (1 - dist / 250) * 0.03;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
      }

      // Subtle organic drift
      p.vx += (Math.sin(Date.now() * 0.001 + i) * 0.003);
      p.vy += (Math.cos(Date.now() * 0.0013 + i) * 0.003);

      // Damping
      p.vx *= 0.995;
      p.vy *= 0.995;

      // Clamp speed
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed > 0.6) {
        p.vx = (p.vx / speed) * 0.6;
        p.vy = (p.vy / speed) * 0.6;
      }

      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Wrap edges
      if (p.x < -20) p.x = this.width + 20;
      if (p.x > this.width + 20) p.x = -20;
      if (p.y < -20) p.y = this.height + 20;
      if (p.y > this.height + 20) p.y = -20;

      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

      if (p.hue === 30) {
        this.ctx.fillStyle = `rgba(217, 119, 6, ${p.opacity * 0.5})`;
      } else {
        this.ctx.fillStyle = `rgba(120, 113, 108, ${p.opacity * 0.35})`;
      }
      this.ctx.fill();

      // Draw connections to nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const other = particles[j];
        const dx = p.x - other.x;
        const dy = p.y - other.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 150;

        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.055;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(other.x, other.y);

          // Copper-colored lines
          this.ctx.strokeStyle = `rgba(217, 119, 6, ${alpha})`;
          this.ctx.lineWidth = 0.4;
          this.ctx.stroke();
        }
      }
    }

    this.animationId = requestAnimationFrame(this.animate);
  };

  public destroy(): void {
    cancelAnimationFrame(this.animationId);
    this.canvas.remove();
  }
}
