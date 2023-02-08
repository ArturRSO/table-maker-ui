import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
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
  ],
})
export class MainModule {}
