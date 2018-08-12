import { Component, OnInit } from '@angular/core';
import { CodeDataService } from '../services/code-data/code-data.service';
import { ApiService } from '../services/api-service/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'abe-review-code',
  templateUrl: './review-code.component.html',
  styleUrls: ['./review-code.component.scss']
})
export class ReviewCodeComponent implements OnInit {

  public showVotes = false;

  public reviewObject =  {
    _id: "",
    title: "",
    codeLeft: "",
    codeRight: "",
    codeLeftVotes: 0,
    codeRightVotes: 0,
    language: "none",
    description: ""
  }

  constructor(
    public codeDataService: CodeDataService, 
    private router: Router, 
    private apiService: ApiService,
    private route: ActivatedRoute
    ) { 

    this.route.params
      .subscribe(params => {
         console.log(params['id']);

        if(!params.id) {
          this.router.navigate(['/search'])
        }
        
        if(params.id) {
          this.apiService.getCodeById(params.id)
          .subscribe((data: any) =>  {
            this.reviewObject = data;
          }); 
        }

      });
  }

  ngOnInit() {
    
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

}
