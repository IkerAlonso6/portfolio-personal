import { Component, effect, inject, signal, viewChild, type ElementRef } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { FEATURED_PROJECTS } from '../../core/data/profile.data';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { CarouselDirective } from '../../core/directives/carousel.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective, CarouselDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  private readonly i18n = inject(I18nService);
  readonly t = this.i18n.t;
  readonly tr = this.i18n.tr;
  readonly featured = FEATURED_PROJECTS;

  readonly carousel = viewChild.required(CarouselDirective);
  private readonly stage = viewChild<ElementRef<HTMLElement>>('stage');

  readonly stageHeight = signal(0);

  readonly position = (i: number): number => this.carousel()?.position(i) ?? 0;

  readonly cardStyle = (i: number): Record<string, string> => {
    const d = this.position(i);
    const abs = Math.abs(d);
    const hidden = abs >= 2;
    const side = Math.sign(d) || 1;
    const transform =
      d === 0
        ? 'translate(-50%, 0) scale(1)'
        : abs === 1
          ? `translate(-50%, -3%) perspective(1100px) translateX(${side * 60}%) translateZ(-60px) rotateY(${-side * 42}deg) scale(0.85)`
          : `translate(-50%, -5%) perspective(1100px) translateX(${side * 110}%) translateZ(-180px) rotateY(${-side * 65}deg) scale(0.62)`;
    return {
      transform,
      'z-index': hidden ? '0' : d === 0 ? '6' : '4',
      opacity: hidden ? '0' : d === 0 ? '1' : '0.7',
      visibility: hidden ? 'hidden' : 'visible',
      'pointer-events': hidden ? 'none' : 'auto'
    };
  };

  readonly prev = (): void => this.carousel()?.prev();
  readonly next = (): void => this.carousel()?.next();
  readonly goTo = (i: number): void => this.carousel()?.goTo(i);

  constructor() {
    effect(() => {
      this.carousel()?.activeIndex();
      this.carousel()?.dragOffset();
      this.carousel()?.isDragging();
      requestAnimationFrame(() => this.measure());
    });
  }

  private measure(): void {
    const stage = this.stage();
    if (!stage) return;
    const slides = stage.nativeElement.querySelectorAll<HTMLElement>('.project-card');
    let h = 0;
    slides.forEach((s) => (h = Math.max(h, s.offsetHeight)));
    if (h > 0) this.stageHeight.set(h + 52);
  }
}
