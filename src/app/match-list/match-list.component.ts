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
    "capacity" : 60000,
    "available" : 0,
    "local" : "assets/img/nacional.png",
    "visitor" : "assets/img/penarol.png",
    "offer" : true,
  },
  {
    "match": "River vs Boca",
    "stadium" : "Monumental, Argentina",
    "capacity" : 70000,
    "available" : 35000,
    "local" : "assets/img/river.png",
    "visitor" : "assets/img/boca.png",
    "offer" : false,
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
