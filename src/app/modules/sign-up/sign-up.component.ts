import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../home/components/shared/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  hide = true;
  submitted: boolean = false;
  signUpForm: FormGroup
  constructor(private formBuild: FormBuilder, private router: Router, private spinner: NgxSpinnerService, private apiService: ApiService, private toastr: ToastrService) {
    this.signUpForm = this.formBuild.group({
      username: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      confirmpassword: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.signUpForm.controls['password'].value == this.signUpForm.controls['confirmpassword'].value) {
      let formdata = JSON.parse(JSON.stringify(this.signUpForm.value));
      delete formdata.confirmpassword;
      this.apiService.postRequest('books/signUp', formdata).subscribe((sresponse) => {
        if (sresponse.status == true) {
          this.toastr.success('Registered successfully', 'Success');
          this.router.navigate(['login']);
        }
      }, error => {
        this.toastr.error('Something went wrong', 'Try again');
      });
    } else {
      this.toastr.error('Password mismatch', 'Please try again')
    }
  }
}

