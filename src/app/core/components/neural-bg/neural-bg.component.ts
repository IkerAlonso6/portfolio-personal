import { AfterViewInit, Component, ElementRef, OnDestroy, viewChild } from '@angular/core';

interface NeuralNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  glow: number;
}

interface NeuralLink {
  a: NeuralNode;
  b: NeuralNode;
}

interface NeuralPacket {
  a: NeuralNode;
  b: NeuralNode;
  t: number;
  speed: number;
}

const LINK_DIST = 150;
const LINE_COLOR = '62, 207, 142';
const NODE_COLOR = '113, 239, 179';

@Component({
  selector: 'app-neural-bg',
  standalone: true,
  template: `<canvas #canvas aria-hidden="true"></canvas>`,
  styleUrl: './neural-bg.component.scss'
})
export class NeuralBgComponent implements AfterViewInit, OnDestroy {
  private readonly canvasEl = viewChild<ElementRef<HTMLCanvasElement>>('canvas');

  private readonly reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  private ctx: CanvasRenderingContext2D | null = null;
  private nodes: NeuralNode[] = [];
  private links: NeuralLink[] = [];
  private packets: NeuralPacket[] = [];
  private width = 0;
  private height = 0;
  private raf = 0;
  private last = 0;
  private spawnTimer = 0;

  ngAfterViewInit(): void {
    const canvas = this.canvasEl()?.nativeElement;
    if (!canvas) return;
    this.ctx = canvas.getContext('2d');
    this.resize();
    window.addEventListener('resize', this.resize, { passive: true });

    if (this.reduceMotion) {
      this.drawFrame();
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
    if (this.reduceMotion) this.drawFrame();
  };

  private seed(): void {
    const count = Math.min(85, Math.max(48, Math.floor((this.width * this.height) / 21000)));
    this.nodes = Array.from({ length: count }, () => ({
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      vx: (Math.random() - 0.5) * 0.16,
      vy: (Math.random() - 0.5) * 0.16,
      glow: 0
    }));
    this.rebuildLinks();
    this.packets = [];
    this.spawnTimer = 0;
  }

  private rebuildLinks(): void {
    this.links = [];
    for (let i = 0; i < this.nodes.length; i++) {
      const a = this.nodes[i];
      for (let j = i + 1; j < this.nodes.length; j++) {
        const b = this.nodes[j];
        if (Math.hypot(b.x - a.x, b.y - a.y) < LINK_DIST) {
          this.links.push({ a, b });
        }
      }
    }
  }

  private readonly loop = (): void => {
    this.raf = requestAnimationFrame(this.loop);
    const now = performance.now();
    const dt = Math.min((now - this.last) / 1000, 0.05);
    this.last = now;
    this.update(dt);
    this.drawFrame();
  };

  private update(dt: number): void {
    for (const n of this.nodes) {
      n.x += n.vx * 60 * dt;
      n.y += n.vy * 60 * dt;
      if (n.x < -10) n.x = this.width + 10;
      if (n.x > this.width + 10) n.x = -10;
      if (n.y < -10) n.y = this.height + 10;
      if (n.y > this.height + 10) n.y = -10;
      n.glow = Math.max(0, n.glow - dt * 1.5);
    }

    this.rebuildLinks();

    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      this.spawnTimer = 0.12 + Math.random() * 0.38;
      if (this.packets.length < 14 && this.links.length > 0) {
        const link = this.links[Math.floor(Math.random() * this.links.length)];
        const duration = 0.9 + Math.random() * 1.3;
        this.packets.push({ a: link.a, b: link.b, t: 0, speed: 1 / duration });
        link.a.glow = Math.max(link.a.glow, 0.4);
      }
    }

    for (let k = this.packets.length - 1; k >= 0; k--) {
      const p = this.packets[k];
      p.t += p.speed * dt;
      if (p.t >= 1) {
        p.b.glow = 1;
        this.packets.splice(k, 1);
      }
    }
  }

  private drawFrame(): void {
    const ctx = this.ctx;
    if (!ctx) return;
    ctx.clearRect(0, 0, this.width, this.height);

    for (const link of this.links) {
      const dx = link.b.x - link.a.x;
      const dy = link.b.y - link.a.y;
      const dist = Math.hypot(dx, dy);
      if (dist < LINK_DIST) {
        ctx.strokeStyle = `rgba(${LINE_COLOR}, ${(1 - dist / LINK_DIST) * 0.16})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(link.a.x, link.a.y);
        ctx.lineTo(link.b.x, link.b.y);
        ctx.stroke();
      }
    }

    for (const p of this.packets) {
      const x = p.a.x + (p.b.x - p.a.x) * p.t;
      const y = p.a.y + (p.b.y - p.a.y) * p.t;
      ctx.strokeStyle = `rgba(${LINE_COLOR}, 0.85)`;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(p.a.x, p.a.y);
      ctx.lineTo(x, y);
      ctx.stroke();

      ctx.shadowBlur = 14;
      ctx.shadowColor = '#71efb3';
      ctx.fillStyle = '#eafff3';
      ctx.beginPath();
      ctx.arc(x, y, 2.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    for (const n of this.nodes) {
      const glow = Math.max(n.glow, 0);
      ctx.fillStyle = `rgba(${NODE_COLOR}, ${0.45 + glow * 0.55})`;
      if (glow > 0.02) {
        ctx.shadowBlur = 18 * glow;
        ctx.shadowColor = '#71efb3';
      }
      ctx.beginPath();
      ctx.arc(n.x, n.y, 1.6 + glow * 2.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }
}
