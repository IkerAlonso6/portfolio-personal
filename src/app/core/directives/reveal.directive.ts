import { Directive, ElementRef, inject, input, OnInit } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements OnInit {
  readonly delay = input(0, { alias: 'appRevealDelay' });
  readonly rotate = input(0, { alias: 'appRevealRotate' });
  readonly threshold = input(0.15, { alias: 'appRevealThreshold' });

  private readonly el = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.el.nativeElement;
    if (this.delay()) {
      el.style.transitionDelay = `${this.delay()}ms`;
    }
    if (this.rotate()) {
      el.style.setProperty('--reveal-rotate', `${this.rotate()}deg`);
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      el.classList.add('revealed');
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('revealed');
            observer.disconnect();
          }
        });
      },
      { threshold: this.threshold(), rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
  }
}
