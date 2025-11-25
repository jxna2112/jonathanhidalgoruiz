import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { LangButton } from './components/lang-button/lang-button';
import { TranslationService } from './services/translation.service';
import { AboutMe } from './components/about-me/about-me';
import { IconRibbon } from './components/icon-ribbon/icon-ribbon';
import { TecnologiesView } from './components/tecnologies-view/tecnologies-view';
import { ProjectBox } from './components/project-box/project-box';
import { SectionsBox } from './components/sections-box/sections-box';
import { ContactSection } from './components/contact-section/contact-section';
import { FormsModule } from '@angular/forms';
import { Footer } from './components/footer/footer';

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return {
    getTranslation: (lang: string) => http.get(`./assets/i18n/${lang}.json`)
  } as TranslateLoader;
}

@NgModule({
  declarations: [
    App,
    Navbar,
    AboutMe,
    LangButton,
    IconRibbon,
    TecnologiesView,
    ProjectBox,
    SectionsBox,
    ContactSection,
    Footer
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
    fallbackLang: 'es',
    loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient]
    }
    }),
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    TranslationService
  ],
  bootstrap: [App]
})
export class AppModule { }
