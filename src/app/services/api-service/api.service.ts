import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private configUrl = environment.apiUrl;

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

  public voteLeft(id) {
    return this.http.post(this.configUrl + 'vote/left', id, this.httpOptions);
  }

  public voteRight(id) {
    return this.http.post(this.configUrl + 'vote/right', id, this.httpOptions);
  }
}
