import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abe-review-code',
  templateUrl: './review-code.component.html',
  styleUrls: ['./review-code.component.scss']
})
export class ReviewCodeComponent implements OnInit {

  constructor() { }

  public reviewObject = {
  	codeLeft : " function() { some cool code}",
  	codeRight : " function() { some cool even cooler Code}",

  }

  ngOnInit() {
  }

}
