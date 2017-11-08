import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { UtloggetComponent } from './utlogget/utlogget.component';
import { InnloggetComponent } from './innlogget/innlogget.component';
//import { LogoComponent } from 'body/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    UtloggetComponent,
    InnloggetComponent
    //LogoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
