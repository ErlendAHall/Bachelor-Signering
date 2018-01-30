import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';


import {AuthService}from './services/auth.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DokumenterComponent } from './components/dokumenter/dokumenter.component';
import { DokumentComponent } from './components/dokument/dokument.component';
import { MenyComponent } from './components/meny/meny.component';
import { UtloggetComponent } from './components/utlogget/utlogget.component';
import { InnloggetComponent } from './components/innlogget/innlogget.component';
import { SikkerhetskopierComponent } from './components/sikkerhetskopier/sikkerhetskopier.component';
import { DeltmedmegComponent } from './components/deltmedmeg/deltmedmeg.component';
import { NyligeComponent } from './components/nylige/nylige.component';
import { DragDropDirective } from './directives/drag-drop/drag-drop.directive';





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
    DragDropDirective,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    DialogModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
