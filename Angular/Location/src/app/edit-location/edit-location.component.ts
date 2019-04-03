import { Component, OnInit } from '@angular/core';
import { LocationService } from '../LocationService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.css']
})
export class EditLocationComponent implements OnInit {
source:string;
destination:string;
  constructor(private service: LocationService, private route:Router) { }

  ngOnInit() {
    
  }
  getDistance()
  {
this.service.getDistance(this.source, this.destination).subscribe(data=>{
  console.log(data);
this.route.navigate(["distance",data]);
// this.route.navigate(["distance"]);
})
  }
}
