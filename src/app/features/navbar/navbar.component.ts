import { Component, HostListener, inject, signal } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { PROFILE } from '../../core/data/profile.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private readonly i18n = inject(I18nService);
  readonly t = this.i18n.t;
  readonly lang = this.i18n.lang;
  readonly initials = PROFILE.initials;

  readonly open = signal(false);
  readonly scrolled = signal(false);

  readonly links = [
    { href: 'about', key: 'nav.about' },
    { href: 'skills', key: 'nav.skills' },
    { href: 'projects', key: 'nav.projects' },
    { href: 'education', key: 'nav.education' },
    { href: 'contact', key: 'nav.contact' }
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  toggleLang(): void {
    this.i18n.toggle();
  }

  scrollTo(id: string): void {
    this.open.set(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
