import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CounterServiceService } from '../services/counter-service.service';
// import { CounterServiceService } from '../counter-service.service';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productDetails:any = {};
  id:string = "";
  counter = 0 ;
  products:any[] =  [];
  productList:any[] = []
  grandTotal !:number;
  constructor(private productService:ProductServiceService , private activatedRoute:ActivatedRoute , private counterService :CounterServiceService ){}
  ngOnInit(): void {
   this.id = this.activatedRoute.snapshot.params["id"];
   this.productService.getProductDetails(this.id).subscribe((res)=>{
    this.productDetails = res ;
  

    this.counterService.getProducts().subscribe((res)=>{
      this.products = res;
      console.log(this.products);
      this.grandTotal = this.counterService.getTotalPrice()


      this.productList.forEach((a:any)=>{
        Object.assign(a , {quantity:1, total: a.price})
      })
      
    })
   
 

    this.productService.counterVal.subscribe((res)=>{
      this.counter = res ;
      console.log(res);
      
  })

 

      
  }) }

  increaseCounter(){
    this.productService.updatecounterVal(++this.counter)
  }
  decreaseCounter(){
    this.productService.updatecounterVal(--this.counter)
  }
  removeCartItem(product:any){
    this.counterService.removeCartItem(product)
  }

    
  }
  

