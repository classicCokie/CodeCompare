import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service/api.service';
import { CodeDataService } from '../services/code-data/code-data.service';
import {Router} from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'abe-add-code',
  templateUrl: './add-code.component.html',
  styleUrls: ['./add-code.component.scss']
})
export class AddCodeComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router, public codeDataService: CodeDataService) { }

  public codeToAdd =  {
    title: "",
  	codeLeft: "",
  	codeRight: "",
    codeLeftVotes: "",
    codeRightVotes: "",
  	language: "none",
  	description: ""
  }

  ngOnInit() {
  }

  public submitCode(code) {

    if(!this.validateCode(code)) {
      alert('Please Fill out all Fields');
      return;
    }

    this.apiService.addCode(code)
      .subscribe((data: any) =>  {
        this.codeDataService.setCode(data);
        this.router.navigate(['/welcome'])
      });
  }

  private validateCode(code) {

    if(code.title.length < 1) {
      return false;
    }

    if(code.codeLeft.length < 1) {
      return false;
    }

    if(code.codeRight.length < 1) {
      return false;
    }

    if(code.language.length < 1) {
      return false;
    }

    if(code.description.length < 1) {
      return false;
    }

    return true;
  }


}
