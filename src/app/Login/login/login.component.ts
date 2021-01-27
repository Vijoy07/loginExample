import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';
import { LoginModel } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;

  userName: string;

  password: string;

  form: FormGroup;

  constructor(public api: ApiServiceService,
              public router: Router,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({username:['', Validators.email],password:['', Validators.required]});
  }

  Login(){
    if (this.form.valid) {
    let user: LoginModel = new LoginModel(this.userName, this.password);
    this.api.Login(user).subscribe(data => {
      localStorage.setItem('TOKEN', data.token);

      this.router.navigate(['details'])
    },
    err => {
      console.log('ERROR', err);
    });
  }
  }

}
