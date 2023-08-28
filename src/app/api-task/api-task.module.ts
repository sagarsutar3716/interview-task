import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiTaskRoutingModule } from './api-task-routing.module';
import { Task1Component } from './task1/task1.component';
import { MatarialUiModule } from '../matarial-ui/matarial-ui.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    Task1Component
  ],
  imports: [
    CommonModule,
    ApiTaskRoutingModule,
    MatarialUiModule,
    FlexLayoutModule
  ]
})
export class ApiTaskModule { }
