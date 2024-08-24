import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private $isLoggedIn = new BehaviorSubject<boolean>(false)
  isLoggedIn = this.$isLoggedIn.asObservable()

  constructor() { }

  login(data: any){
    window.localStorage.setItem('userData', JSON.stringify(data))
    this.$isLoggedIn.next(true)
  }

  checkIfLoggedIn(){
    const login = JSON.parse(window.localStorage.getItem('userData') || '{}')
    if(login && login.email && login.password){
      this.$isLoggedIn.next(true)
    }
  }
}
