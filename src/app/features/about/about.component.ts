import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { ABOUT_FACTS } from '../../core/data/profile.data';
import { RevealDirective } from '../../core/directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  private readonly i18n = inject(I18nService);
  readonly t = this.i18n.t;
  readonly tr = this.i18n.tr;
  readonly facts = ABOUT_FACTS;
  readonly paragraphs = ['about.p1', 'about.p2', 'about.p3'];
}
