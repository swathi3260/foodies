import { Component, OnInit } from '@angular/core';
import { GetrestaurantsService } from '../../getrestaurants.service';
// import 'rxjs/add/operator/Flatmap';
import { flatMap } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
// rxjs/add/operator/map
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { log } from 'util';
import { of } from 'rxjs';

//import { url } from 'inspector';


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
  res:any =[];
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

  //  this.http.get(this.LIVE_URI+"/search?q="+this.location+"&cuisines="+this.cuisine, 
  //   httpOptions).pipe( flatMap((x: any,i: number) =>  {  
  //       return x.restaurants.map((e) => {
  //         console.log(e)
  //         return e.restaurant
  //       })
  //       // return []    
  //   })).subscribe((val) => {
  //     console.log(this.res)
  //     this.res.push(val)
  //   })
  this.http.get(this.LIVE_URI+"/search?q="+this.location+"&cuisines="+this.cuisine, 
    httpOptions).subscribe((val: any) => {
      this.res = val.restaurants.map(e => {
        return e.restaurant
      })
    })
    // .subscribe(ress =>  this.res = ress.restaurants)
   //this.http.get(this.LIVE_URI+"/search?q="+this.location+"&cuisines="+this.cuisine, 
   //httpOptions).subscribe(res =>{this.response=res.results.map(e=>{e.photos_url=
    //"https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/photos#tabtop"});
   //console.log(this.response);
 // })

  }
}
