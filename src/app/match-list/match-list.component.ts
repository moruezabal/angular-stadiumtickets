import { Component, OnInit } from '@angular/core';
import { MatchCartService } from '../match-cart.service';
import { Match } from './Match';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {

  matchs: Match[] = [ 
  {
    "match": "Nacional vs Peñarol",
    "stadium" : "Estadio Centenario, Uruguay",
    "available" : 10,
    "local" : "assets/img/nacional.png",
    "visitor" : "assets/img/penarol.png",
    "offer" : true,
    "quantity": 0,
  },
  {
    "match": "River vs Boca",
    "stadium" : "Monumental, Argentina",
    "available" : 5,
    "local" : "assets/img/river.png",
    "visitor" : "assets/img/boca.png",
    "offer" : false,
    "quantity": 0,
  }
]

  constructor(private cart: MatchCartService) {

   }

  ngOnInit(): void {
  }

  addToCart(match) :void {
    this.cart.addToCart(match);
    match.available -= match.quantity;
    match.quantity = 0;

  }

  maxReached(message: string){
    alert(message);
  }

}
