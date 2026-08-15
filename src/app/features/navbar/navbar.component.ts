import { Component, effect, inject, signal } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { PROFILE, SECTION_ORDER } from '../../core/data/profile.data';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private readonly i18n = inject(I18nService);
  private readonly scroll = inject(ScrollService);
  readonly t = this.i18n.t;
  readonly lang = this.i18n.lang;
  readonly initials = PROFILE.initials;

  readonly open = signal(false);
  readonly scrolled = signal(false);

  readonly links = SECTION_ORDER.map((id) => ({ href: id, key: `nav.${id}` }));

  constructor() {
    effect(() => {
      this.scrolled.set(this.scroll.scrollY() > 24);
    });
  }

  toggleLang(): void {
    this.i18n.toggle();
  }

  scrollTo(id: string): void {
    this.open.set(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
