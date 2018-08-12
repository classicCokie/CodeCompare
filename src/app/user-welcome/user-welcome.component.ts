import { Component, OnInit } from '@angular/core';
import { CodeDataService } from '../services/code-data/code-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'abe-user-welcome',
  templateUrl: './user-welcome.component.html',
  styleUrls: ['./user-welcome.component.scss']
})
export class UserWelcomeComponent implements OnInit {


	public code;
	public reviewUrl;
	private configUrl = environment.hostUrl;

  	constructor(
  		public codeDataService: CodeDataService,
  		private router: Router,
  		private route: ActivatedRoute
  		) { 

  		this.code = this.codeDataService.getCode();

  		if(!this.code) {
        	this.router.navigate(['/search'])
        	return;
    	}
    	this.reviewUrl = this.createReviewUrl(this.code._id);
  	}

  ngOnInit() {
  }


  private createReviewUrl(id) {
  	return this.configUrl + "reviewCode/" +id;
  }

}
