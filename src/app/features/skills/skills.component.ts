import { Component, inject, signal } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { SKILL_GROUPS } from '../../core/data/profile.data';
import type { SkillGroup } from '../../core/models/profile.model';
import { RevealDirective } from '../../core/directives/reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective],
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
    return `https://cdn.simpleicons.org/${slug}/9bff00`;
  }

  logoFailed(slug: string): boolean {
    return this.failedLogos().has(slug);
  }

  onLogoError(slug: string): void {
    this.failedLogos.update((set) => new Set(set).add(slug));
  }

  ovr(group: SkillGroup, cardIndex: number): number {
    return this.rating(group, cardIndex, 0);
  }

  rating(group: SkillGroup, cardIndex: number, skillIndex: number): number {
    const total = Math.max(group.skills.length, 1);
    const top = Math.min(97, Math.max(78, 97 - cardIndex * 4));
    const step = Math.max(2, Math.floor((top - 58) / (total - 1)));
    return Math.max(55, top - skillIndex * step);
  }
}
