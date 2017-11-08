import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { DokumenterComponent } from './dokumenter/dokumenter.component';
import { DokumentComponent } from './dokumenter/dokument/dokument.component';
import { InnloggetComponent } from './innlogget/innlogget.component';
import { UtloggetComponent } from './utlogget/utlogget.component';
//import { LogoComponent } from 'body/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    DokumenterComponent,
    DokumentComponent,
    InnloggetComponent,
    UtloggetComponent
    //LogoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
