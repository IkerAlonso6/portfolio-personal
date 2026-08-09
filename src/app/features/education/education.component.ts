import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { COURSES, EDUCATION } from '../../core/data/profile.data';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { ParallaxDirective } from '../../core/directives/parallax.directive';
import { TiltDirective } from '../../core/directives/tilt.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RevealDirective, ParallaxDirective, TiltDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  private readonly i18n = inject(I18nService);
  readonly t = this.i18n.t;
  readonly tr = this.i18n.tr;
  readonly education = EDUCATION;
  readonly courses = COURSES;
}
