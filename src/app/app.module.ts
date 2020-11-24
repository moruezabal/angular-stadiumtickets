import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatchListComponent } from './match-list/match-list.component';

import { FormsModule } from '@angular/forms';
import { StadiumTicketsAboutComponent } from './stadium-tickets-about/stadium-tickets-about.component';
import { StadiumTicketsMatchsComponent } from './stadium-tickets-matchs/stadium-tickets-matchs.component';
import { CartComponent } from './cart/cart.component'; // Two-Way Data Binding -  Banana in a box

import { AppRoutingModule } from "./app-routing.module";
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchListComponent,
    StadiumTicketsAboutComponent,
    StadiumTicketsMatchsComponent,
    CartComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
