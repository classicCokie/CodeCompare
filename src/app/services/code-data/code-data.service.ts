import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodeDataService {

  constructor() { }

  private selectedCode;

  public setCode(selectedCode) {
  	this.selectedCode = selectedCode;
  }

  public getCode() {
    return this.selectedCode;
  }



}