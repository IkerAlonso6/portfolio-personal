import { Component, computed, inject, signal } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { FEATURED_PROJECTS, sectionNumber } from '../../core/data/profile.data';
import type { ProjectCategory, ProjectLinkType } from '../../core/models/profile.model';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { ParallaxDirective } from '../../core/directives/parallax.directive';
import { TiltDirective } from '../../core/directives/tilt.directive';

type Filter = ProjectCategory | 'all';

const LINK_ICONS: Record<ProjectLinkType, string> = {
  repo: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  demo: 'M14 3h7v7m0-7L10 14M19 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5',
  docs: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8'
};

/** Los links de repositorio usan un glifo sólido; demo y docs son de trazo. */
const FILLED_ICONS: ReadonlySet<ProjectLinkType> = new Set<ProjectLinkType>(['repo']);

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective, ParallaxDirective, TiltDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  private readonly i18n = inject(I18nService);
  readonly t = this.i18n.t;
  readonly tr = this.i18n.tr;
  readonly sectionNumber = sectionNumber('projects');

  readonly filters: { id: Filter; key: string }[] = [
    { id: 'all', key: 'projects.filterAll' },
    { id: 'fullstack', key: 'projects.filterFullstack' },
    { id: 'backend', key: 'projects.filterBackend' },
    { id: 'frontend', key: 'projects.filterFrontend' },
    { id: 'desktop', key: 'projects.filterDesktop' }
  ];

  readonly activeFilter = signal<Filter>('all');

  private readonly visible = computed(() => {
    const filter = this.activeFilter();
    return filter === 'all'
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((project) => project.category === filter);
  });

  readonly featured = computed(() => this.visible().filter((project) => project.featured));
  readonly secondary = computed(() => this.visible().filter((project) => !project.featured));

  setFilter(filter: Filter): void {
    this.activeFilter.set(filter);
  }

  iconPath(type: ProjectLinkType): string {
    return LINK_ICONS[type];
  }

  isFilled(type: ProjectLinkType): boolean {
    return FILLED_ICONS.has(type);
  }
}
