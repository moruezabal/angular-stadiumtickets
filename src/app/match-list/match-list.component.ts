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

  maxReached(message: string){
    alert(message);
  }

}
