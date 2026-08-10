import { AfterViewInit, Component, ElementRef, OnDestroy, viewChild } from '@angular/core';

interface Star {
  x: number;
  y: number;
  r: number;
  phase: number;
  speed: number;
}

const PALETTE = [
  'rgba(127, 243, 255, 0.10)',
  'rgba(90, 90, 224, 0.10)',
  'rgba(90, 90, 224, 0.06)',
  'rgba(168, 111, 224, 0.06)'
];

@Component({
  selector: 'app-retro-bg',
  standalone: true,
  template: `<canvas #canvas aria-hidden="true"></canvas>`,
  styleUrl: './retro-bg.component.scss'
})
export class RetroBgComponent implements AfterViewInit, OnDestroy {
  private readonly canvasEl = viewChild<ElementRef<HTMLCanvasElement>>('canvas');

  private readonly reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  private ctx: CanvasRenderingContext2D | null = null;
  private stars: Star[] = [];
  private width = 0;
  private height = 0;
  private raf = 0;
  private last = 0;
  private barA = 0;
  private barB = 0;

  ngAfterViewInit(): void {
    const canvas = this.canvasEl()?.nativeElement;
    if (!canvas) return;
    this.ctx = canvas.getContext('2d');
    this.resize();
    window.addEventListener('resize', this.resize, { passive: true });

    if (this.reduceMotion) {
      this.drawFrame(0);
      return;
    }
    this.last = performance.now();
    this.loop();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.raf);
    window.removeEventListener('resize', this.resize);
  }

  private readonly resize = (): void => {
    const canvas = this.canvasEl()?.nativeElement;
    if (!canvas || !this.ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    canvas.width = this.width * dpr;
    canvas.height = this.height * dpr;
    canvas.style.width = `${this.width}px`;
    canvas.style.height = `${this.height}px`;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.seed();
    if (this.reduceMotion) this.drawFrame(0);
  };

  private seed(): void {
    const count = Math.min(120, Math.max(60, Math.floor((this.width * this.height) / 14000)));
    this.stars = Array.from({ length: count }, () => ({
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      r: 0.6 + Math.random() * 1.3,
      phase: Math.random() * Math.PI * 2,
      speed: 0.4 + Math.random() * 1.1
    }));
    this.barA = Math.random() * this.height;
    this.barB = Math.random() * this.height;
  }

  private readonly loop = (): void => {
    this.raf = requestAnimationFrame(this.loop);
    const now = performance.now();
    const dt = Math.min((now - this.last) / 1000, 0.05);
    this.last = now;
    this.barA = (this.barA + 42 * dt) % (this.height + 260);
    this.barB = (this.barB + 26 * dt) % (this.height + 260);
    this.drawFrame(now);
  };

  private drawFrame(now: number): void {
    const ctx = this.ctx;
    if (!ctx) return;
    ctx.clearRect(0, 0, this.width, this.height);

    ctx.fillStyle = '#12124d';
    ctx.fillRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.stars.length; i++) {
      const s = this.stars[i];
      const twinkle = 0.35 + 0.65 * Math.abs(Math.sin(now * 0.001 * s.speed + s.phase));
      ctx.fillStyle = `rgba(160, 232, 255, ${twinkle})`;
      ctx.fillRect(Math.round(s.x), Math.round(s.y), Math.ceil(s.r), Math.ceil(s.r));
    }

    this.rasterBar(ctx, this.barA - 130, 130, PALETTE[0]);
    this.rasterBar(ctx, this.barB - 130, 130, PALETTE[1]);
    this.rasterBar(ctx, this.barA - 330, 90, PALETTE[2]);
    this.rasterBar(ctx, this.barB - 250, 70, PALETTE[3]);
  }

  private rasterBar(ctx: CanvasRenderingContext2D, top: number, height: number, color: string): void {
    if (top > this.height || top + height < 0) return;
    ctx.fillStyle = color;
    ctx.fillRect(0, top, this.width, height);
  }
}
