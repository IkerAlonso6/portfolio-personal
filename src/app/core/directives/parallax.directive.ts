import { Directive, effect, ElementRef, inject, input } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

@Directive({
  selector: '[appParallax]',
  standalone: true
})
export class ParallaxDirective {
  readonly speed = input(0.1, { alias: 'appParallax' });

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly scroll = inject(ScrollService);

  private readonly reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  constructor() {
    if (this.reduceMotion || typeof window === 'undefined') return;

    this.el.nativeElement.style.willChange = 'transform';

    effect(() => {
      this.scroll.scrollY();
      this.scroll.viewportHeight();
      this.apply();
    });
  }

  private apply(): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const offset = rect.top + rect.height / 2 - this.scroll.viewportHeight() / 2;
    const y = Math.round(-offset * this.speed() * 100) / 100;
    this.el.nativeElement.style.transform = `translate3d(0, ${y}px, 0)`;
  }
}
