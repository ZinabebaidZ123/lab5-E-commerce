import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {
  private counter = new BehaviorSubject(0)
counterVal = this.counter.asObservable();

cartItemList : any = [];
productList = new BehaviorSubject<any>([]);

getProduct(){
  return this.productList.asObservable();
}


  constructor() { }


  getProducts(){
  return  this.productList.asObservable();

  }
  setProducts(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product)
  }
  addToCart(product : any){
       this.cartItemList.push(product);
       this.productList.next(this.cartItemList);
       this.getTotalPrice();
  }
  getTotalPrice() :number{
    let grandTotal = 0 ;
    this.cartItemList.map((a:any)=>{
      grandTotal +=parseInt( a.total)
    })
    return grandTotal ;
  }
  removeCartItem(product:any){
     this.cartItemList.map((a:any , index :any)=>{
        if(product.id===a.id){
          this.cartItemList.splice(index ,1)
        }
     })
  }
  // updatecounterVal(newVal:number){
  //   this.counter.next(newVal)
  // }

}

