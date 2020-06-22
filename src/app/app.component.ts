import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public products: Product[]=[
    new Product(15,"banana",700,4,"tarm banan"),
    new Product(25,"kiwi",800,15,"tarm kiwi"),
    new Product(11,"apple",500,20,"tarm xndor"),
    new Product(17,"orange",1500,2,"tarm narinj"),
  ]
  public cart:any[]=[
    Object.assign({qanak:1},this.products[0]),
    Object.assign({qanak:1},this.products[2]),
  ]
  public sum:number=this.cart.reduce((total, num)=> total + num.qanak*num.price,0);
  public n:string=""
  addCart(a){
    if (a.count>0) {
      a.count--
      if(this.cart.find(x=>x.id==a.id)){
        this.cart.find(x=>x.id==a.id).qanak++
      }
      else{
        this.cart.push(Object.assign({qanak:1},a))
      }
    }
    else{
      alert("no product")
    }
    this.sum=this.cart.reduce((total, num)=> total + num.qanak*num.price,0);
  }
  deleteCart(a){
    this.cart=this.cart.filter(x=>x.id!=a.id)
    this.products.find(x=>a.id==x.id).count+=a.qanak
     console.log(this.sum);
    console.log(this.cart);
   
    this.sum=this.cart.reduce((total, num)=> total + num.qanak*num.price,0);

  }
  plus(a){
    if (this.products.find(x=>a.id==x.id).count>0){
      this.cart.find(x=>a.id==x.id).qanak+=1
      this.products.find(x=>a.id==x.id).count-=1
      this.sum=this.cart.reduce((total, num)=> total + num.qanak*num.price,0);

    }
      
  }
  minus(a){
    if (this.cart.find(x=>a.id==x.id).qanak>1){
      this.cart.find(x=>a.id==x.id).qanak-=1
      this.products.find(x=>a.id==x.id).count+=1
    }
    else if(this.cart.find(x=>a.id==x.id).qanak==1){
      this.cart=this.cart.filter(x=>x.id!=a.id)
      this.products.find(x=>a.id==x.id).count+=a.qanak
    }
    this.sum=this.cart.reduce((total, num)=> total + num.qanak*num.price,0);

  }
}


class Product {
  public id:number
  public name:string
  public price:number
  public count:number
  public discription:string
  constructor(a:number,b:string,c:number,d:number,e:string){
    this.id=a
    this.name=b
    this.price=c
    this.count=d
    this.discription=e
  }
}