import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  submitted:boolean=false;
  loginForm:FormGroup
  constructor(private formBuild:FormBuilder,private router:Router,private spinner:NgxSpinnerService){
    this.loginForm=this.formBuild.group({
      username:[null,Validators.required],
      password:[null,[Validators.required,Validators.minLength(8),Validators.maxLength(10)]]
    });
  }
  onSubmit(){
    this.submitted=true;
    if(this.loginForm.invalid){
      return
    }
    else{
      if(this.loginForm.controls['username'].value=="abc"&& this.loginForm.controls['password'].value=="test@123"){
        this.router.navigate(['home']);
      }
    }
  }
 
}
