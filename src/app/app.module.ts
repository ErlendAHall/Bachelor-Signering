import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
<<<<<<< HEAD
import { FooterComponent } from './footer/footer.component';
=======
//import { LogoComponent } from 'body/logo/logo.component';
>>>>>>> ed3ff12e4b991f8d1b059d9b1737b29be5a35712

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
<<<<<<< HEAD
    BodyComponent,
    FooterComponent,
=======
    BodyComponent
    //LogoComponent
>>>>>>> ed3ff12e4b991f8d1b059d9b1737b29be5a35712
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
