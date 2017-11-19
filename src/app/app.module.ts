import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DokumenterComponent } from './dokumenter/dokumenter.component';
import { DokumentComponent } from './dokumenter/dokument/dokument.component';
import { MenyComponent } from './meny/meny.component';
import { UtloggetComponent } from './utlogget/utlogget.component';
import { InnloggetComponent } from './innlogget/innlogget.component';
import { Routes, RouterModule } from '@angular/router';
import { SikkerhetskopierComponent } from './sikkerhetskopier/sikkerhetskopier.component';
import { DeltmedmegComponent } from './deltmedmeg/deltmedmeg.component';
import { NyligeComponent } from './nylige/nylige.component';
import { DragDropDirective } from './utlogget/drag-drop.directive';

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
    DokumenterComponent,
    DokumentComponent,
    MenyComponent,
    UtloggetComponent,
    InnloggetComponent,
    SikkerhetskopierComponent,
    DeltmedmegComponent,
    NyligeComponent,
    DragDropDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
