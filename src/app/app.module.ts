import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { DokumenterComponent } from './dokumenter/dokumenter.component';
import { DokumentComponent } from './dokumenter/dokument/dokument.component';
<<<<<<< HEAD
import { InnloggetComponent } from './innlogget/innlogget.component';
import { UtloggetComponent } from './utlogget/utlogget.component';
//import { LogoComponent } from 'body/logo/logo.component';
=======
import { MenyComponent } from './meny/meny.component';
import { UtloggetComponent } from './utlogget/utlogget.component';
import { InnloggetComponent } from './innlogget/innlogget.component';
import { Routes, RouterModule } from '@angular/router';
import { SikkerhetskopierComponent } from './sikkerhetskopier/sikkerhetskopier.component';
import { DeltmedmegComponent } from './deltmedmeg/deltmedmeg.component';
import { NyligeComponent } from './nylige/nylige.component';

const appRoutes: Routes = [
  {path: '', component: UtloggetComponent},
  {path: 'dokumenter', component: DokumenterComponent},
  {path: 'sikkerhetskopier', component: SikkerhetskopierComponent},
  {path: 'deltmedmeg', component: DeltmedmegComponent},
  {path: 'nylige', component: NyligeComponent},
  {path: 'innlogget', component: InnloggetComponent}
];
>>>>>>> 5774bf19f90eda51de2cb2b340fa741bf95b9db5

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    DokumenterComponent,
    DokumentComponent,
<<<<<<< HEAD
    InnloggetComponent,
    UtloggetComponent
    //LogoComponent
=======
    MenyComponent,
    UtloggetComponent,
    InnloggetComponent,
    SikkerhetskopierComponent,
    DeltmedmegComponent,
    NyligeComponent
>>>>>>> 5774bf19f90eda51de2cb2b340fa741bf95b9db5
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
