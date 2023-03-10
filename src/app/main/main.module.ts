import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { TableFormComponent } from './table-form/table-form.component';

@NgModule({
  declarations: [HomeComponent, TableFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MainRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    SharedModule,
  ],
})
export class MainModule {}
