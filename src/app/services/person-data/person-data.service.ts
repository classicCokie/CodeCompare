import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonDataService {

    private person;

    public setPerson(selectedPerson) {
        this.person = selectedPerson;
    }

    public getPerson() {
        return this.person;
    }

    constructor() { }
}
