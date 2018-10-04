import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplaycollectionsComponent} from './displaycollections/displaycollections.component';

const routes: Routes = [
  {path:'',redirectTo:'\homepage',pathMatch:'full'},
  {path:'\displaycollections',component: DisplaycollectionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
