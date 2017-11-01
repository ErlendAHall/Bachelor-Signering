import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
<<<<<<< HEAD
import { FooterComponent } from './footer/footer.component';
=======
>>>>>>> 191ea149c07ffd8da5c6015c8e38d7cd9b68701e
//import { LogoComponent } from 'body/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
<<<<<<< HEAD
    BodyComponent,
    FooterComponent,
=======
    BodyComponent
>>>>>>> 191ea149c07ffd8da5c6015c8e38d7cd9b68701e
    //LogoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
