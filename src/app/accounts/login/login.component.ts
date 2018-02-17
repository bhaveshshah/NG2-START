import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestCallingService } from '../../common/rest-calling.service';
import { Router } from '@angular/router';
import { EmailValidator } from '@angular/forms/src/directives/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  emp = {
    firstName: '',
    lastName: '',
  };

  number = 0;
  testBoxList= [];


  constructor(private router: Router, public restCallerService: RestCallingService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }

  loginUser() {
    console.log(this.loginForm);
    if (this.loginForm.controls.password.valid) {
      this.restCallerService.authenticateUser(this.loginForm.value['username'], this.loginForm.value['password']).subscribe(
        data => {
          const resp = data.json();
          if (resp !== undefined) {
            sessionStorage.setItem('AuthCode', resp.token);
            this.router.navigate(['/home/todo']);
          } else {
            alert('Invalid Login');
          }
        }, err => {
          console.log(err);
        }
      );
    }
  }

  checkValue() {
    console.log(this.emp);
    this.loginForm.addControl('testBox' + this.number, new FormControl(null, Validators.required));
    this.testBoxList.push(this.number);
    this.number++;
  }

}
