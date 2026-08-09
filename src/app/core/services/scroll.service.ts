import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  readonly scrollY = signal(typeof window !== 'undefined' ? window.scrollY : 0);
  readonly viewportHeight = signal(
    typeof window !== 'undefined' ? window.innerHeight : 0
  );
  readonly maxScroll = signal(0);
  readonly progress = signal(0);

  private readonly reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  private raf = 0;

  constructor() {
    if (typeof window === 'undefined') return;
    this.onScroll();
    this.onResize();
    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onResize, { passive: true });
  }

  private readonly onScroll = (): void => {
    if (this.raf) return;
    this.raf = requestAnimationFrame(() => {
      this.raf = 0;
      const y = window.scrollY;
      this.scrollY.set(y);
      this.maxScroll.set(Math.max(document.documentElement.scrollHeight - window.innerHeight, 1));
      this.progress.set(this.maxScroll() > 0 ? y / this.maxScroll() : 0);
    });
  };

  private readonly onResize = (): void => {
    this.viewportHeight.set(window.innerHeight);
    this.onScroll();
  };
}
