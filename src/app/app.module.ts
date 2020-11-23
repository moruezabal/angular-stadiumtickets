import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatchListComponent } from './match-list/match-list.component';

import { FormsModule } from '@angular/forms'; // Two-Way Data Binding -  Banana in a box

@NgModule({
  declarations: [
    AppComponent,
    MatchListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
