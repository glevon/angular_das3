import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() public prod
  @Output() public add= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    
  }

}
