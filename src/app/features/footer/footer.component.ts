import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { PROFILE } from '../../core/data/profile.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private readonly i18n = inject(I18nService);
  readonly t = this.i18n.t;
  readonly year = new Date().getFullYear();
  readonly initials = PROFILE.initials;

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
