import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Credentials } from './auth.credentials.model';

@Injectable()
export class AuthService {
    private backendUrl = process.env.BACKEND_URI;

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
}
