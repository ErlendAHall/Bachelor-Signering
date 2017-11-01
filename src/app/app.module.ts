import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
<<<<<<< HEAD

=======
import { FooterComponent } from './footer/footer.component';
>>>>>>> fe201bac931d8953bdf62186974190ff7f3afc7e
//import { LogoComponent } from 'body/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
<<<<<<< HEAD

    BodyComponent,

=======
    BodyComponent,
    FooterComponent,
>>>>>>> fe201bac931d8953bdf62186974190ff7f3afc7e
    //LogoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
