import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abe-review-code',
  templateUrl: './review-code.component.html',
  styleUrls: ['./review-code.component.scss']
})
export class ReviewCodeComponent implements OnInit {

  constructor() { }


  public showVotes = false;

  public reviewObject = {
  	codeLeft : " function() { some cool code}",
  	codeRight : " function() { some cool even cooler Code}",
  	codeLeftVotes: 0,
  	codeRightVotes: 0,
  	description: "This is a description"
  }

  public vote(votedSide) {
  	this.reviewObject[votedSide]++;
  	this.showVotes = true;
  }






  ngOnInit() {
  }

}
