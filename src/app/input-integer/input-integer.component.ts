import { Component, Input, OnInit } from '@angular/core';
import { Match } from '../match-list/Match';


@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.css']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  match: Match;

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

  ngOnInit(): void {
  }

}
