import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginregister',
  templateUrl: './loginregister.component.html',
  styleUrls: ['./loginregister.component.css'],
})
export class LoginregisterComponent implements OnInit {
  signupUsers: any[] = [];

  loginUsers: any[] = [];

  signupObj: any = {
    username: '',
    password: '',
  };

  loginObj: any = {
    username: '',
    password: '',
  };

  constructor(public router: Router) {}

  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
      this.router.navigate(['dashboard']);
    }
  }

  onSignUp() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      username: '',
      password: '',
    };
    alert("signup successfull, you can now login");
  }

  onLogin() {
    const isUserExist = this.signupUsers.find(
      (m) =>
        m.username == this.loginObj.username &&
        m.password == this.loginObj.password
    );
    if (isUserExist != undefined) {
      this.router.navigate(['dashboard']);
    } else {
      alert('wrong username/ password combination!');
    }
  }
}