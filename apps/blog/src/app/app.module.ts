import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';

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
    RouterModule.forRoot(routes),
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
