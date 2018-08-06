import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient
    ) {

    }

    login(email:string, password:string ) {
        return this.http
            .post<User>('/api/login', {
                email,
                password
            })
            .map(response => response.json())
            .catch(this.handleError);
    }
}
