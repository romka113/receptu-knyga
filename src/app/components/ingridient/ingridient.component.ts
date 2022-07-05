import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingridient',
  templateUrl: './ingridient.component.html',
  styleUrls: ['./ingridient.component.css'],
})
export class IngridientComponent implements OnInit {
  public name: string | null = '';
  public quantity: number | null = null;
  public price: number | null = null;
  constructor() {}

  ngOnInit(): void {}
  public totalPrice(): number | null {
    if (this.quantity != null && this.price != null) {
      return this.quantity * this.price;
    } else {
      return null;
    }
  }
}
