import { Component, OnInit } from '@angular/core';
import { PersonDataService } from '../services/person-data/person-data.service';
 import {Router} from '@angular/router';

@Component({
  selector: 'abe-person-profile',
  templateUrl: './person-profile.component.html',
  styleUrls: ['./person-profile.component.scss']
})
export class PersonProfileComponent implements OnInit {

    public person = {};

    constructor(private personDataService: PersonDataService, private router: Router) {

        this.person = personDataService.getPerson();

        // Redirect if no person is selected
        if(!this.person) {
            this.router.navigate(['/suche'])
        }
    }

    ngOnInit() { }

}
