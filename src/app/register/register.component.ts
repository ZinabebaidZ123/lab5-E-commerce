import { Component } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  productForm : FormGroup
  constructor(){
    this.productForm = new FormGroup({
      email : new FormControl("" , [Validators.required  , 
        Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$") ] ) ,
      userName : new FormControl("" , [Validators.required  , Validators.pattern("^[a-zA-Z0-9!@#*()+{}[\\];:,|\/\\\\_\S-]+$")] ),
      password : new FormControl("" , [Validators.required , Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")]),
      // confirmPassword :new FormControl("" , [Validators.required] , [passwordMatch("password" , "confirmPassword")])
  
    });
  }
    submitForm(){
      console.log(this.productForm);
      
    }
  
  }
