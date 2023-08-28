import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: 'shared',
    loadChildren: () => import('./shared/shared.module').then(x => x.SharedModule)
 },
 {
  path: 'home',
  loadChildren: () => import('./api-task/api-task.module').then(x => x.ApiTaskModule)
},

{
path: 'atm-machine',
loadChildren: () => import('./atme-machine-task/atme-machine-task.module').then(x => x.AtmeMachineTaskModule)
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
