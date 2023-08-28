import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MatarialUiModule } from '../matarial-ui/matarial-ui.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ApiTaskModule } from '../api-task/api-task.module';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatarialUiModule,
    ApiTaskModule
  ],
  exports: [
NavbarComponent
  ]
})
export class SharedModule { }
