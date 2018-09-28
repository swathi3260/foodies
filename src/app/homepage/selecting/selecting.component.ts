import { Component, OnInit } from '@angular/core';
import { GetrestaurantsService } from '../../getrestaurants.service';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { log } from 'util';


@Component({
  selector: 'app-selecting',
  templateUrl: './selecting.component.html',
  styleUrls: ['./selecting.component.css'],
  providers: []
})
export class SelectingComponent implements OnInit {
  /*location:string=$('#formGroupExampleInput2').val();
  cuisine:string=$('#formGroupExampleInput3').val();*/
  location: string;
  cuisine: string;
  LIVE_URI = 'https://developers.zomato.com/api/v2.1';
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  random() {
   // a = $('#a').val();
    /*console.log("hello world")
    this.some_name.getrestaurants(this.location,this.cuisine).subscribe(res => {
      console.log(res)
    })*/

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'user-key': '9afe5ae2561b8091f5118177b4848b35'
      })
    };

    this.http.get(this.LIVE_URI+"/search?q="+this.location+"&cuisines="+this.cuisine, httpOptions).subscribe(res =>{console.log(res)});

  }

}
