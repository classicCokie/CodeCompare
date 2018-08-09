import { Component, OnInit } from '@angular/core';
import { CodeDataService } from '../services/code-data/code-data.service';
import { ApiService } from '../services/api-service/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'abe-review-code',
  templateUrl: './review-code.component.html',
  styleUrls: ['./review-code.component.scss']
})
export class ReviewCodeComponent implements OnInit {

  public showVotes = false;

  public reviewObject;

  constructor(public codeDataService: CodeDataService, private router: Router, private apiService: ApiService) { 
    this.reviewObject = this.codeDataService.getCode();

    if(!this.reviewObject) {
        this.router.navigate(['/suche'])
    }
  }

  public vote(votedSide) {
  	this.reviewObject[votedSide]++;
  	this.showVotes = true;
    this.apiService.vote(votedSide);
  }

  ngOnInit() {
  }

}
