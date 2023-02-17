import { Component , OnInit } from '@angular/core';
import { CounterServiceService } from '../services/counter-service.service';
// import { CounterServiceService } from '../counter-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  

  counter :number = 0 ;
  constructor(private counterService : CounterServiceService){}

   ngOnInit(): void {
     this.counterService.counterVal.subscribe((res)=>{
      this.counter = res
      console.log(this.counter);
      
     })
   
  }
}
