import { Component, OnInit } from '@angular/core';
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
    "available" : 0,
    "local" : "assets/img/river.png",
    "visitor" : "assets/img/boca.png",
    "offer" : false,
    "quantity": 0,
  }
]

  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(match: Match) : void{
    if (match.quantity < match.available){
      match.quantity++;
    }
  }

  downQuantity(match: Match) : void{
    if(match.quantity > 0){
      match.quantity--;
    }
  }

  changeQuantity(event, match: Match){
    console.log(event.key); // A corregir
  }

}
