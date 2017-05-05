import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Credentials } from './auth.credentials.model';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {
    private backendUrl = process.env.BACKEND_URI;

    private jwtHelper: JwtHelper = new JwtHelper();

    constructor(private http: Http) { }


    login(credentials: Credentials) {
      console.log('cre', credentials);
        this.http.post(this.backendUrl + '/login', credentials)
            .map((res) => res.json())
            .subscribe(
            // We're assuming the response will be an object
            // with the JWT on an id_token key
            (data) => localStorage.setItem('jwtToken', data.jwtToken),
            (error) => console.log(error)
            );
    }

    loggedIn() {
      return tokenNotExpired('jwtToken');
    }

    useJwtHelper() {
      let token = localStorage.getItem('jwtToken');
      if ( token ) {
        console.log(
          this.jwtHelper.decodeToken(token),
          this.jwtHelper.getTokenExpirationDate(token),
          this.jwtHelper.isTokenExpired(token)
        );
      }
    }
}
