import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../home/components/service/shared.service';
import { ApiService } from '../home/components/shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  submitted: boolean = false;
  loginForm: FormGroup
  constructor(private formBuild: FormBuilder, private apiService: ApiService, private router: Router, private toastr: ToastrService, private spinner: NgxSpinnerService, private sharedService: SharedService) {
    this.loginForm = this.formBuild.group({
      username: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(10)]]
    });
  }
  onSubmit() {
    this.submitted = true;
    this.apiService.postRequest('books/login', this.loginForm.value).subscribe((sresponse) => {
      if (sresponse.status == true) {
        this.toastr.success('Logged in  successfully', 'Success');
        this.router.navigate(['home']);
        this.sharedService.setToken(sresponse.data.token)
        debugger
        console.log(sresponse.data.token);
      }
    }, error => {
      this.toastr.error('Invalid username or password', 'Try again');
    });
  }

}
