import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  hide = true;
  submitted:boolean=false;
  signUpForm:FormGroup
  constructor(private formBuild:FormBuilder,private router:Router,private spinner:NgxSpinnerService){
    this.signUpForm=this.formBuild.group({
      username:[null,Validators.required],
      password:[null,[Validators.required,Validators.minLength(8),Validators.maxLength(10)]],
      confirmpassword:[null,[Validators.required,Validators.minLength(8),Validators.maxLength(10)]],
    });
  }
  onSubmit(){
    this.submitted=true;
    if(this.signUpForm.invalid){
      return
    }
    else{
      if(this.signUpForm.controls['username'].value=="abc"&& this.signUpForm.controls['password'].value=="test@123"&& this.signUpForm.controls['confirmpassword']){
        this.router.navigate(['login']);
      }
    }
  }
  }

