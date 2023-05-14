import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn() {

    const users = localStorage.getItem('signupUsers'); // get users from local storage

    if(users != undefined){
      return true;

    }
    return false;

  }

  onLogOut(){
    localStorage.removeItem('signupUsers'); // removes users from local storage
  }
}