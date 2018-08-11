import { Component, OnInit } from '@angular/core';
import { CodeDataService } from '../services/code-data/code-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'abe-user-welcome',
  templateUrl: './user-welcome.component.html',
  styleUrls: ['./user-welcome.component.scss']
})
export class UserWelcomeComponent implements OnInit {


	public code;

  	constructor(public codeDataService: CodeDataService, private router: Router) { 
  		this.code = this.codeDataService.getCode();

  		if(!this.code) {
        	this.router.navigate(['/search'])
    	}
  		console.log(this.code);
  	}

  ngOnInit() {
  }

}
