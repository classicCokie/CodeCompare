import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service/api.service';


@Component({
  selector: 'abe-add-code',
  templateUrl: './add-code.component.html',
  styleUrls: ['./add-code.component.scss']
})
export class AddCodeComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  public codeToAdd =  {
    title: "",
  	codeLeft: "",
  	codeRight: "",
    codeLeftVotes: "",
    codeRightVotes: "",
  	language: "",
  	description: ""
  }

  ngOnInit() {
  }


  public submitCode(code) {
    this.apiService.addCode(code)
      .subscribe((data: any) =>  {
        alert("sucess!");
      });
  }
}
