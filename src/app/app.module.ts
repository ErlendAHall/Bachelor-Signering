import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { DokumenterComponent } from './dokumenter/dokumenter.component';
import { DokumentComponent } from './dokumenter/dokument/dokument.component';
import { MenyComponent } from './meny/meny.component';
import { UtloggetComponent } from './utlogget/utlogget.component';
import { InnloggetComponent } from './innlogget/innlogget.component';
import{Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
  {path:'', component: UtloggetComponent},
  {path:'innlogget', component: InnloggetComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    DokumenterComponent,
    DokumentComponent,
    MenyComponent,
    UtloggetComponent,
    InnloggetComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
