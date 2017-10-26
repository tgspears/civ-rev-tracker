import { NgModule, OnInit, Input }    from '@angular/core';
import { HttpModule }                 from '@angular/http';
import { RouterModule, Routes }       from '@angular/router';
import { NgIf }                       from '@angular/common';
import { BrowserModule }              from '@angular/platform-browser';
import { BrowserAnimationsModule }    from '@angular/platform-browser/animations';

import { MatMenuModule }              from '@angular/material';

import { MaterializeModule }          from "angular2-materialize";

import { CRTNotFoundComponent }       from "./not_found/not-found.component";
import { CRTNavComponent }            from "./nav/nav.component";
import { CRTSplashComponent }         from "./splash/splash.component";
import { CRTCivilizationsComponent }  from "./civilizations/civilizations.component";
import { CRTDashboardComponent }      from "./dashboard/dashboard.component";

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'welcome', component: CRTSplashComponent },
  { path: 'dashboard', component: CRTDashboardComponent },
  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  { path: '**', component: CRTNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CRTNotFoundComponent,
    CRTNavComponent,
    CRTSplashComponent,
    CRTCivilizationsComponent,
    CRTDashboardComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MaterializeModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
