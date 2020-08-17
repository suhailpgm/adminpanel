import { Component, OnInit } from '@angular/core';
import { item } from '../products'
import { HEROES } from '../mock-products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  heroes = HEROES;

  selectedHero: item;

  ngOnInit(): void {
    
  }
  onSelect(hero: item): void {
    this.selectedHero = hero;
  }
  

}
