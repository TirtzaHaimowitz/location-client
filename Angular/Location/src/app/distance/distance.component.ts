import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.css']
})
export class DistanceComponent implements OnInit {
distance: string;
counter: string;
  constructor(private route: ActivatedRoute) {
    // var obj= this.route.snapshot.paramMap.get('obj');
    // this.distance=obj["Distance"];
    // this.counter=obj["Counter"];
    this.distance = this.route.snapshot.paramMap.get('Distance');
    this.counter = this.route.snapshot.paramMap.get('Counter');
   }

  ngOnInit() {
  }

}
