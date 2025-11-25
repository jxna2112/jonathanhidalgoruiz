import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class TranslationService {
  availableLangs = ['es', 'en'];
  fallbackLang = 'es'; // Cambiado de defaultLang
  isBrowser: boolean;

  constructor(
    private translate: TranslateService,
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    // Agrega idiomas disponibles
    this.translate.addLangs(this.availableLangs);

    // Establece fallbackLang en lugar de defaultLang
    this.translate.setFallbackLang(this.fallbackLang);

    // Determina idioma inicial
    let lang = this.fallbackLang;

    if (this.isBrowser) {
      const saved = localStorage.getItem('lang');
      if (saved && this.availableLangs.includes(saved)) {
        lang = saved;
      }
    }

    this.useLanguage(lang);
  }

  useLanguage(lang: string) {
    if (!this.availableLangs.includes(lang)) {
      lang = this.fallbackLang;
    }

    // Cambia el idioma activo
    this.translate.use(lang);

    // Guarda en localStorage si estamos en browser
    if (this.isBrowser) {
      localStorage.setItem('lang', lang);
    }
  }

  getCurrentLang() {
    // Retorna el idioma actual o el fallback si no hay
    return this.translate.currentLang || this.fallbackLang;
  }
}