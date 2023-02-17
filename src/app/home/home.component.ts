import { Component  , OnInit} from '@angular/core';
import { CounterServiceService } from '../services/counter-service.service';
import { ProductServiceService } from '../services/product-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList :any[] = [];
  constructor(private productService : ProductServiceService , private counterService:CounterServiceService){}
  ngOnInit(): void {
    this.productService.getProducts().subscribe((res)=>{
      this.productList = res ;
      console.log(this.productList);
     
      
      
     })
  }
 addToCart(item:any){
  this.counterService.addToCart(item);
  console.log(item);
  
 }

}
