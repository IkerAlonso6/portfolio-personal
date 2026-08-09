import { Component, inject, signal } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { SKILL_GROUPS } from '../../core/data/profile.data';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { ParallaxDirective } from '../../core/directives/parallax.directive';
import { TiltDirective } from '../../core/directives/tilt.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective, ParallaxDirective, TiltDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  private readonly i18n = inject(I18nService);
  readonly t = this.i18n.t;
  readonly tr = this.i18n.tr;
  readonly groups = SKILL_GROUPS;

  private readonly failedLogos = signal(new Set<string>());

  logoUrl(slug: string): string {
    return `https://cdn.simpleicons.org/${slug}/71efb3`;
  }

  logoFailed(slug: string): boolean {
    return this.failedLogos().has(slug);
  }

  onLogoError(slug: string): void {
    this.failedLogos.update((set) => new Set(set).add(slug));
  }
}
