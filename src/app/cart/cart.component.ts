import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatchCartService } from '../match-cart.service';
import { Match } from '../match-list/Match';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList$: Observable <Match[]>;

  constructor(private cart: MatchCartService) {
    this.cartList$ = cart.cartList.asObservable();
    
   }

  ngOnInit(): void {
  }

}
