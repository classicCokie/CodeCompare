import { Component, OnInit, OnChanges } from '@angular/core';
import { ApiService } from '../services/api-service/api.service';
import { CodeDataService } from '../services/code-data/code-data.service';
import {Router} from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'abe-add-code',
  templateUrl: './add-code.component.html',
  styleUrls: ['./add-code.component.scss']
})
export class AddCodeComponent implements OnChanges{

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

  ngOnChanges() {
    // changes.prop contains the old and the new value...
    console.log('sdf');
  }


  public submitCode(code) {

    if(!this.validateCode(code)) {
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
      alert('Please Fill out Title Field');
      return false;
    }

    if(code.codeLeft.length < 1 || code.codeLeft.length > 1000) {
      alert('Please make sure the left Code is not to long');
      return false;
    }

    if(code.codeRight.length < 1 || code.codeRight.length > 1000) {
      alert('Please make sure the right Code is not to long');
      return false;
    }

    if(code.language.length < 1) {
      alert('Please select a language');
      return false;
    }

    if(code.description.length < 1) {
      alert('Please fill in a description');
      return false;
    }

    return true;
  }


}
