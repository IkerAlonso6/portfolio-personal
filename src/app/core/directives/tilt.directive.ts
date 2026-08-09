import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appTilt]',
  standalone: true
})
export class TiltDirective {
  private readonly el = inject(ElementRef<HTMLElement>);

  private readonly reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  private readonly coarse =
    typeof window !== 'undefined' &&
    window.matchMedia('(pointer: coarse)').matches;

  private raf = 0;
  private x = 0;
  private y = 0;

  @HostListener('pointerenter')
  onEnter(): void {
    if (this.reduceMotion || this.coarse) return;
    this.el.nativeElement.style.transition = 'transform 0.12s ease-out';
  }

  @HostListener('pointermove', ['$event'])
  onMove(event: PointerEvent): void {
    if (this.reduceMotion || this.coarse) return;
    const rect = this.el.nativeElement.getBoundingClientRect();
    this.x = (event.clientX - rect.left) / rect.width - 0.5;
    this.y = (event.clientY - rect.top) / rect.height - 0.5;
    this.schedule();
  }

  @HostListener('pointerleave')
  onLeave(): void {
    if (this.reduceMotion || this.coarse) return;
    const el = this.el.nativeElement;
    el.style.transition = 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)';
    el.style.transform = '';
  }

  private schedule(): void {
    if (this.raf) return;
    this.raf = requestAnimationFrame(() => {
      this.raf = 0;
      const rotateY = Math.round(this.x * 2 * 6 * 100) / 100;
      const rotateX = Math.round(-this.y * 2 * 6 * 100) / 100;
      this.el.nativeElement.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });
  }
}
