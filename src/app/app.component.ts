import { Component } from '@angular/core';


@Component({
  selector: 'abe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

	constructor() {}

  	title = 'abe';
  	isNavbarCollapsed=true;
}
