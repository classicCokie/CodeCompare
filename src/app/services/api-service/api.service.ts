import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private configUrl = environment.apiUrl;
  private userIpAdress;

  constructor(private http: HttpClient) {
      this.http.get<{ip:string}>('https://jsonip.com')
        .subscribe( data => {
            this.userIpAdress = data.ip;
        }) 
  }

  private httpOptions = {
	  headers: new HttpHeaders({
	    'Content-Type':  'application/json',
	  })
	}

  public addCode(code) {
    return this.http.post(this.configUrl + 'addCode', code, this.httpOptions);
  }

  public getAllCode() {
    return this.http.get(this.configUrl + 'allCode', this.httpOptions);
  }

  public getCodeById(id) {
    return this.http.get(this.configUrl + 'code/'+ id, this.httpOptions);
  }

  public voteLeft(id) {
    return this.http.post(this.configUrl + 'vote/left', {"id": id, "userIp": this.userIpAdress}, this.httpOptions);
  }

  public voteRight(id) {
    return this.http.post(this.configUrl + 'vote/right', {"id": id, "userIp": this.userIpAdress}, this.httpOptions);
  }
}
