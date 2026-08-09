import { Directive, ElementRef, HostListener, inject, input, signal } from '@angular/core';

interface CarouselDrag {
  id: number;
  startX: number;
  startIndex: number;
  total: number;
  moved: boolean;
}

@Directive({
  selector: '[appCarousel]',
  exportAs: 'appCarousel',
  standalone: true
})
export class CarouselDirective {
  readonly count = input(0, { alias: 'appCarouselCount' });

  readonly activeIndex = signal(0);
  readonly dragOffset = signal(0);
  readonly isDragging = signal(false);

  private readonly el = inject(ElementRef<HTMLElement>);

  private drag: CarouselDrag | null = null;
  private raf = 0;

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.next();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.prev();
    }
  }

  @HostListener('pointerdown', ['$event'])
  onPointerDown(event: PointerEvent): void {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    if (this.drag) return;
    this.drag = {
      id: event.pointerId,
      startX: event.clientX,
      startIndex: this.activeIndex(),
      total: 0,
      moved: false
    };
    window.addEventListener('pointermove', this.onWindowMove, { passive: true });
    window.addEventListener('pointerup', this.onWindowUp, { passive: true });
    window.addEventListener('pointercancel', this.onWindowCancel, { passive: true });
  }

  next(): void {
    this.goTo(this.activeIndex() + 1);
  }

  prev(): void {
    this.goTo(this.activeIndex() - 1);
  }

  goTo(index: number): void {
    const n = this.count();
    if (n <= 1) return;
    this.activeIndex.set(((index % n) + n) % n);
  }

  position(index: number): number {
    const n = this.count();
    if (n <= 1) return 0;
    const diff = (((index - this.activeIndex()) % n) + n) % n;
    return diff > (n - 1) / 2 ? diff - n : diff;
  }

  private readonly onWindowMove = (event: PointerEvent): void => {
    const d = this.drag;
    if (!d || event.pointerId !== d.id) return;
    const delta = event.clientX - d.startX;
    if (!d.moved && Math.abs(delta) < 6) return;
    d.moved = true;
    d.total = delta;
    this.isDragging.set(true);
    const max = Math.max(80, this.el.nativeElement.clientWidth * 0.35);
    this.scheduleDrag(Math.max(-max, Math.min(max, delta)));
  };

  private readonly onWindowUp = (event: PointerEvent): void => {
    const d = this.drag;
    if (!d || event.pointerId !== d.id) return;
    this.finish(d.total);
  };

  private readonly onWindowCancel = (): void => {
    this.finish(0);
  };

  private finish(total: number): void {
    const d = this.drag;
    this.removeListeners();
    this.drag = null;
    if (!d || !d.moved) return;
    const width = this.el.nativeElement.clientWidth;
    const threshold = Math.max(56, width * 0.16);
    if (total < -threshold) {
      this.next();
    } else if (total > threshold) {
      this.prev();
    } else {
      this.goTo(d.startIndex);
    }
    this.dragOffset.set(0);
    this.isDragging.set(false);
  }

  private scheduleDrag(offset: number): void {
    if (this.raf) return;
    this.raf = requestAnimationFrame(() => {
      this.raf = 0;
      this.dragOffset.set(offset);
    });
  }

  private removeListeners(): void {
    window.removeEventListener('pointermove', this.onWindowMove);
    window.removeEventListener('pointerup', this.onWindowUp);
    window.removeEventListener('pointercancel', this.onWindowCancel);
  }
}
