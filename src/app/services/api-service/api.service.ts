import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private configUrl = "http://127.0.0.1:8803/";

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

  public vote(votedSide) {
  	return this.http.put(this.configUrl + 'vote',votedSide, this.httpOptions);
  }

#TODO implement the vote stuff




}
