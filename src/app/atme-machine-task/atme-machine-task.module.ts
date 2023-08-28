import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AtmeMachineTaskRoutingModule } from './atme-machine-task-routing.module';
import { AtmTaskComponent } from './atm-task/atm-task.component';
import { MatarialUiModule } from '../matarial-ui/matarial-ui.module';



@NgModule({
  declarations: [
    AtmTaskComponent
  ],
  imports: [
    CommonModule,
    AtmeMachineTaskRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatarialUiModule,
  ]
})
export class AtmeMachineTaskModule { }
