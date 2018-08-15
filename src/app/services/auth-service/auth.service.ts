import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	public userIpAdress;

    constructor(private http: HttpClient) {}

    public setUserIpAddress() {

    	if(this.userIpAdress){
    		return;
    	}

    	this.http.get<{ip:string}>('https://jsonip.com')
	    	.subscribe( data => {
	      		this.userIpAdress = data.ip;
	 		})
    }
}
