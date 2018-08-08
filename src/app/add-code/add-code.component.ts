import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abe-add-code',
  templateUrl: './add-code.component.html',
  styleUrls: ['./add-code.component.scss']
})
export class AddCodeComponent implements OnInit {

  constructor() { }

  public codeToAdd =  {
  	codeLeft: "",
  	codeRight: "",
  	language: "",
  	description: ""
  }

  ngOnInit() {
  }

  public submitCode() {
  	console.log(this.codeToAdd);
  }

}
