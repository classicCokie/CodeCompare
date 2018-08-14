import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	private userIpAdress;

    constructor(private http: HttpClient) {}

    public setUserIpAddress() {

    	if(this.userIpAdress){
    		return;
    	}

    	this.http.get<{ip:string}>('https://jsonip.com')
	    	.subscribe( data => {
	      		console.log('th data', data.ip);
	      		this.userIpAdress = data.ip;
	 		})
    }
}
