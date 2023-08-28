import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task1Component } from './task1/task1.component';


const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ,
  RouterModule.forRoot([
    { path: '', pathMatch: 'full', redirectTo: '' },
    { path: '', component: Task1Component },
  ])
  ],
  exports: [RouterModule]
})
export class ApiTaskRoutingModule { }
