import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { LoginModel } from '../Login/login/login';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userName: string;

  password: string;

  password1: string;

  form: FormGroup;

  constructor(public api: ApiServiceService,
    public router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({username:['', Validators.email],password:['', Validators.required], password1:['', Validators.required]});
  }

  Register(){
    if (this.form.valid) {
    let user: LoginModel = new LoginModel(this.userName, this.password);
    this.api.Register(user).subscribe(data => {
      localStorage.setItem('TOKEN', data.token);

      this.router.navigate(['details'])
    },
    err => {
      console.log('ERROR', err);
    });
  }
  }

}
