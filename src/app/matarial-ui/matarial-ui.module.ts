import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatarialUiRoutingModule } from './matarial-ui-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatarialUiRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
})
export class MatarialUiModule { }
