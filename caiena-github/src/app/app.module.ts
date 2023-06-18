import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './components/home/home.module';
import { TableModule } from './components/table/table.module';
import { ThanksPageModule } from './components/thanks-page/thanks-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HomeModule,
    TableModule,
    ThanksPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
