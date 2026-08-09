import { Component, inject, OnDestroy, signal } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { PROFILE } from '../../core/data/profile.data';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { ParallaxDirective } from '../../core/directives/parallax.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealDirective, ParallaxDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnDestroy {
  private readonly i18n = inject(I18nService);
  readonly t = this.i18n.t;
  readonly profile = PROFILE;

  readonly roleIndex = signal(0);
  private readonly timer: ReturnType<typeof setInterval>;

  constructor() {
    this.timer = setInterval(() => {
      this.roleIndex.update((i) => (i + 1) % PROFILE.roles.length);
    }, 3200);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
