import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseGlow]',
  standalone: true
})
export class MouseGlowDirective {
  private raf = 0;
  private x = window.innerWidth / 2;
  private y = window.innerHeight * 0.2;

  @HostListener('document:mousemove', ['$event'])
  onMove(event: MouseEvent): void {
    this.x = event.clientX;
    this.y = event.clientY;
    this.schedule();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.schedule();
  }

  private schedule(): void {
    if (this.raf) return;
    this.raf = requestAnimationFrame(() => {
      document.documentElement.style.setProperty('--mx', `${this.x}px`);
      document.documentElement.style.setProperty('--my', `${this.y}px`);
      this.raf = 0;
    });
  }
}
