import { Component, OnInit } from '@angular/core';
import { GetrestaurantsService } from '../getrestaurants.service';
import { flatMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { log } from 'util';
import { of } from 'rxjs';
@Component({
  selector: 'app-selecting',
  templateUrl: './selecting.component.html',
  styleUrls: ['./selecting.component.css'],
  providers: []
})
export class SelectingComponent implements OnInit {
  restaurant: string;
  cuisine: string;
  LIVE_URI = 'https://developers.zomato.com/api/v2.1';
  res: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  random() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'user-key': '9afe5ae2561b8091f5118177b4848b35'
      })
    };
  this.http.get(this.LIVE_URI + '/search?q=' + this.restaurant + '&cuisines=' + this.cuisine,
    httpOptions).subscribe((val: any) => {
      this.res = val.restaurants.map(e => {
        return e.restaurant;
      });
    });
  }
   addToFavourites(res1: any) {
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'user-key': '9afe5ae2561b8091f5118177b4848b35'
    })
  };
  this.http.post('http://localhost:3000/favourites', res1).subscribe(data => {
    console.log('POST is successful');
}
  );
   }
  }
