import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  implements OnInit{
  id:string="" ;
  productDetails:any ={};
   constructor(private activatedRoute:ActivatedRoute , private productService:ProductServiceService){}

  ngOnInit(): void {
   this.id =  this.activatedRoute.snapshot.params['id']
   this.productService.getProductDetails(this.id).subscribe((res)=>{
    this.productDetails = res;
    console.log(this.productDetails);
    console.log(res);
    
   })
    
  }

}
