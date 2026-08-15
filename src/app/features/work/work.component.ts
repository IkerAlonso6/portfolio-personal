import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { sectionNumber, WORK_PRACTICES } from '../../core/data/profile.data';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { ParallaxDirective } from '../../core/directives/parallax.directive';
import { TiltDirective } from '../../core/directives/tilt.directive';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [RevealDirective, ParallaxDirective, TiltDirective],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  private readonly i18n = inject(I18nService);
  readonly t = this.i18n.t;
  readonly tr = this.i18n.tr;
  readonly practices = WORK_PRACTICES;
  readonly sectionNumber = sectionNumber('work');
}
