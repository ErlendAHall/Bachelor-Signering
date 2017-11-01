import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
<<<<<<< HEAD
import { DokumenterComponent } from './dokumenter/dokumenter.component';
import { DokumentComponent } from './dokumenter/dokument/dokument.component';
=======
>>>>>>> d9951d566f9a35832ac93bcb8cf04247babefac5
//import { LogoComponent } from 'body/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
<<<<<<< HEAD
    DokumenterComponent,
    DokumentComponent,
=======
>>>>>>> d9951d566f9a35832ac93bcb8cf04247babefac5
    //LogoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
