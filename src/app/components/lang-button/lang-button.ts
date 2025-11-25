import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-lang-button',
  standalone: false,
  templateUrl: './lang-button.html',
  styleUrl: './lang-button.scss',
})
export class LangButton {
    open = false;
    languages = [
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'English', flag: '🇬🇧' }
    ];


    constructor(public translateService: TranslationService) { }


    toggle() {
    this.open = !this.open;
    }


    change(lang: string) {
    this.translateService.useLanguage(lang);
    this.open = false;
    }


    get current() {
    return this.translateService.getCurrentLang();
    }

    get currentFlag() {
      return this.languages.find(l => l.code === this.current)?.flag;
    }
}
