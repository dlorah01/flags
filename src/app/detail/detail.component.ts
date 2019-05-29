import { Component, OnInit } from '@angular/core';
import { ServicesService } from "../services.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

   name = this.actRoute.snapshot.params['name'];

   countryData: any = {};

  constructor(public services: ServicesService, public actRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
  	this.loadCountry(this.name);
  }

   loadCountry(name){
  	return this.services.getCountry(name).subscribe(
  		data =>{
  			this.countryData=data[0];
  			console.log(this.countryData);
  		});
  }

  back(){
  	this.router.navigate(['/countries']);
  }

}
