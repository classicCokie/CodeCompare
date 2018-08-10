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
        this.router.navigate(['/search'])
    }
  }

  public voteLeft() {

    this.reviewObject.codeLeftVotes++;
    this.showVotes = true;

    this.apiService.voteLeft({id: this.reviewObject._id})
      .subscribe((data: any) =>  {
        console.log('came back');
      });

  }
  
  public voteRight() {

    this.reviewObject.codeRightVotes++;
    this.showVotes = true;

    this.apiService.voteRight({id: this.reviewObject._id})
      .subscribe((data: any) =>  {
        console.log('came back');
      });

  }

  ngOnInit() {
  }

}
