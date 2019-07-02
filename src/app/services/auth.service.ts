import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

  public isLoggedIn(){
    let token = localStorage.getItem('quotes-token');

    if (!token) {
      return false;
    }

    let userEncryptedData = token.split('.')[1];
    let user: any = JSON.parse(window.atob(userEncryptedData));

    return (new Date(user.expiryDate) > new Date());

  }

  public register(user:User) {
    return this.http.post<any>(`${environment.apiUrl}/register`, user);
  }

  public login(user:User){
    return this.http.post<any>(`${environment.apiUrl}/login`, user);
  }
}
