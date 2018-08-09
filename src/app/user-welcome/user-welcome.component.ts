import { Component, OnInit } from '@angular/core';
import { CodeDataService } from '../services/code-data/code-data.service';

@Component({
  selector: 'abe-user-welcome',
  templateUrl: './user-welcome.component.html',
  styleUrls: ['./user-welcome.component.scss']
})
export class UserWelcomeComponent implements OnInit {


	public code;

  	constructor(public codeDataService: CodeDataService) { 
  		this.code = this.codeDataService.getCode();
  	}

  ngOnInit() {
  }

}
