import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { DokumenterComponent } from './dokumenter/dokumenter.component';
import { DokumentComponent } from './dokumenter/dokument/dokument.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    DokumenterComponent,
    DokumentComponent,
    MenyComponent,
    UtloggetComponent,
    InnloggetComponent,
    SikkerhetskopierComponent,
    DeltmedmegComponent,
    NyligeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
