import { Component, OnInit } from '@angular/core';
import { ServicesService } from "../services.service";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

	Countries:any = [];

  constructor(public services: ServicesService) { }

  ngOnInit() {
  	this.loadCountries();
  }

  loadCountries(){
  	return this.services.getCountries().subscribe(
  		data =>{
  			this.Countries=data;
  			console.log(this.Countries);
  		});
  }

}
