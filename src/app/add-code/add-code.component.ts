import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service/api.service';
import { CodeDataService } from '../services/code-data/code-data.service';
import {Router} from '@angular/router';


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
  	language: "",
  	description: ""
  }

  ngOnInit() {
  }


  public submitCode(code) {
    this.apiService.addCode(code)
      .subscribe((data: any) =>  {
        this.codeDataService.setCode(code);
        this.router.navigate(['/welcome'])
      });
  }
}
