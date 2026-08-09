import { computed, Injectable, signal } from '@angular/core';
import type { Bilingual, Lang } from '../models/profile.model';
import { TRANSLATIONS } from '../i18n/translations';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly storageKey = 'portfolio.lang';

  readonly lang = signal<Lang>(this.loadInitial());
  readonly dict = computed(() => TRANSLATIONS[this.lang()]);
  readonly tr = computed(
    () => (b: Bilingual | string) => (typeof b === 'string' ? b : b[this.lang()])
  );
  readonly t = computed(() => (key: string) => this.dict()[key] ?? key);

  setLang(lang: Lang): void {
    this.lang.set(lang);
    localStorage.setItem(this.storageKey, lang);
    document.documentElement.lang = lang;
  }

  toggle(): void {
    this.setLang(this.lang() === 'es' ? 'en' : 'es');
  }

  private loadInitial(): Lang {
    return typeof localStorage !== 'undefined' && localStorage.getItem(this.storageKey) === 'en'
      ? 'en'
      : 'es';
  }
}
