import { Component, OnInit } from '@angular/core';
import { PersonDataService } from '../services/person-data/person-data.service';
import { CodeDataService } from '../services/code-data/code-data.service';
import { ApiService } from '../services/api-service/api.service';
import { AuthService } from '../services/auth-service/auth.service';


@Component({
  selector: 'abe-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {

    public codes;
    public displayedCodes;
    public searchText = "";

    constructor(public codeDataService: CodeDataService, private apiService: ApiService, private authService: AuthService) {
        this.getAllCode();
        this.authService.setUserIpAddress();
    }

    public getAllCode() {
        this.apiService.getAllCode()
            .subscribe((data: any) =>  {
                this.codes = data;
                this.displayedCodes = this.codes.slice(0,20);
            });
    }
  
    public filterCodes() {
        let allCodes = this.codes.filter((code) => {
            return code.title.toLocaleLowerCase().includes(this.searchText.toLowerCase()) ||
                   code.description.toLocaleLowerCase().includes(this.searchText.toLowerCase()) ||
                   code.language.toLocaleLowerCase().includes(this.searchText.toLowerCase()) ||
                   code._id.toLocaleLowerCase().includes(this.searchText.toLowerCase());
        });
        this.displayedCodes = allCodes.slice(0,20);
    }
    
    public setSelectedCode(selectedCode) {
        this.codeDataService.setCode(selectedCode);
    }

    ngOnInit() {}

}
