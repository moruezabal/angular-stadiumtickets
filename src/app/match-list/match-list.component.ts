import { Component, OnInit } from '@angular/core';
import { Match } from './Match';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {

  match: Match = {
    "match": "Nacional vs Peñarol",
    "stadium" : "Estadio Centenario, Uruguay",
    "capacity" : 60000,
    "available" : 22000,
    "local" : "assets/img/nacional.png",
    "visitor" : "assets/img/penarol.png"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
