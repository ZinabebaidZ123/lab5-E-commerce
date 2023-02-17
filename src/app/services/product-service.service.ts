import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private counter = new BehaviorSubject(0)
  counterVal = this.counter.asObservable();
  constructor(private http:HttpClient) { }

getProducts():Observable<any>{
  return this.http.get("https://fakestoreapi.com/products");
}

getProductDetails(id:string):Observable<any>{
  return this.http.get(` https://fakestoreapi.com/products/${id}`);
}

updatecounterVal(newVal:number){
  this.counter.next(newVal)
}

}
