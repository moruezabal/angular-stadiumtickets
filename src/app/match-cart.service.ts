import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Match } from './match-list/Match';

@Injectable({
  providedIn: 'root'
})

/* 
Maneja la lógica del carrito
*/ 

export class MatchCartService {

  private _cartList: Match [] = [];
  cartList: BehaviorSubject <Match[]> = new BehaviorSubject([]);

  constructor() { }

  addToCart(match: Match) {
    let item: Match = this._cartList.find((v1) => v1.match == match.match);
    if (!item){
      this._cartList.push({... match});
    } else{
      item.quantity += match.quantity;
    }
    
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }

  
}
