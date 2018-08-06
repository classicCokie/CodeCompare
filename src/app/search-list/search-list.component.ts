import { Component, OnInit } from '@angular/core';
import { PersonDataService } from '../services/person-data/person-data.service';
@Component({
  selector: 'abe-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {


    constructor(public personDataService: PersonDataService) {
        this.fillPersons();
    }

            // {
        //     id: 1,
        //     name: "Hans",
        //     description: "Tollster Mensch der Erde",
        //     adress: "Breckenheimerstraße 28a, 65719 Hofheim",
        //     profile_image: "http://via.placeholder.com/100x100",
        //     searchField: "Hans Tollster Mensch der Erde"
        // },
        // {
        //     id: 2,
        //     name: "Peter",
        //     description: "Nicht so cool",
        //     adress: "Breckenheimerstraße 28a, 65719 Hofheim",
        //     profile_image: "http://via.placeholder.com/100x100",
        //     searchField: "Peter Nicht so cool"
        // },
        // {
        //     id: 3,
        //     name: "Wurst",
        //     description: "Auch ziemlich gut",
        //     adress: "Breckenheimerstraße 28a, 65719 Hofheim",
        //     profile_image: "http://via.placeholder.com/100x100",
        //     searchField: "Wurst Auch ziemlich gut"
        // }

    public persons = [];

    public displayedPersons;
    public randomName() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    public searchText = "";

    public fillPersons() {
        for(let i = 0; i < 100000; i++) {
            let name = this.randomName();
            let person = {
                "id": i,
                "name": name,
                "description": "Es ist manchmal erstaunlich, wie einfach und nachhaltig sich schwierige Lebenssituationen durch einen neutralen Vermittler verändern und weitere Konflikte vermieden werden können. Coaching und Mediation können oft völlig neue Wege eröffnen.",
                "street": "Breckenheimerstraße 28a,",
                "city": "Hofheim",
                "postcode": "65719",
                "searchField": "Wurst Auch ziemlich gut",
                "profile_image": "http://via.placeholder.com/100x100"
            }

            this.persons.push(person);
        }
        this.displayedPersons = this.persons.slice(0,20);
    }


    public filterPersons() {

         let allPersons = this.persons.filter((person) => {
             return person.name.toLocaleLowerCase().includes(this.searchText.toLowerCase());
         });
         this.displayedPersons = allPersons.slice(0,20);
    }

    public setSelectedPerson(selectedPerson) {
        this.personDataService.setPerson(selectedPerson);
    }



    ngOnInit() {
    }

}
