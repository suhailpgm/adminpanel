import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { item }  from '../products';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  @Input() hero: item;

  constructor() { }

  ngOnInit(): void {
  }

}
