import { Component, OnInit } from '@angular/core';
import { GetrestaurantsService } from '../../getrestaurants.service';

@Component({
  selector: 'app-selecting',
  templateUrl: './selecting.component.html',
  styleUrls: ['./selecting.component.css'],
  providers: []
})
export class SelectingComponent implements OnInit {

  constructor(private some_name: GetrestaurantsService) { }

  ngOnInit() {
  }
  random() {
    console.log("hello world")
    this.some_name.getrestaurants().subscribe(res => {
      console.log(res)
    })

  }

}
