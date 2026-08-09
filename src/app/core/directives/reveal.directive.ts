import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements OnInit {
  private readonly el = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.el.nativeElement;
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
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
  }
}
