import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NameBannerComponent } from './name-banner/name-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NameBannerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {
    const webComponent = createCustomElement(NameBannerComponent, { injector });
    customElements.define('ui-button', webComponent);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    throw new Error('Method not implemented.');
  }
}
