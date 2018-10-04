import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeadComponent } from './homepage/head/head.component';
import { SelectingComponent } from './homepage/selecting/selecting.component';

import { GetrestaurantsService } from './getrestaurants.service'
import { HttpClientModule }    from '@angular/common/http';


// import {  }

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeadComponent,
    SelectingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,

    HttpClientModule
  ],
  providers: [GetrestaurantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
