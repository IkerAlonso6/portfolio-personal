import { Component, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { FEATURED_PROJECTS } from '../../core/data/profile.data';
import { RevealDirective } from '../../core/directives/reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  private readonly i18n = inject(I18nService);
  readonly t = this.i18n.t;
  readonly tr = this.i18n.tr;
  readonly featured = FEATURED_PROJECTS;
}
