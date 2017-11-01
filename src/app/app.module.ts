import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
<<<<<<< HEAD
=======
import { FooterComponent } from './footer/footer.component';
>>>>>>> d9951d566f9a35832ac93bcb8cf04247babefac5
//import { LogoComponent } from 'body/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
<<<<<<< HEAD
    BodyComponent
=======
    BodyComponent,
    FooterComponent,
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
