import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtmTaskComponent } from './atm-task/atm-task.component';

const routes: Routes = [
  { path: 'task-2', component: AtmTaskComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtmeMachineTaskRoutingModule { }
