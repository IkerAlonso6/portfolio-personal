import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements OnInit {
  private readonly el = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    this.el.nativeElement.classList.add('revealed');
  }
}
