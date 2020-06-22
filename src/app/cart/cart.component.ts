import { Component, OnInit,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() public cart
  @Input() public sum
  @Output() public del=new EventEmitter()
  @Output() public name=new EventEmitter()
  @Output() public pl=new EventEmitter()
  @Output() public min=new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  }
  delete(c): void {
    this.del.emit(c)
  }
  ok(n){
    this.name.emit(n)
  }
  plus(c){
    this.pl.emit(c)

  }
  minus(c){
    this.min.emit(c)

  }

}
