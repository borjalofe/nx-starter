import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NbThemeModule } from '@nebular/theme';
import { RouterModule, Routes } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppComponent } from './app.component';

const routes:Routes = [
  {
    path: '',
    component: AppComponent
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NbThemeModule.forRoot(),
    RouterModule.forRoot(routes),
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
