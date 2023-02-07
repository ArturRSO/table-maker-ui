import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { TableFormComponent } from './table-form/table-form.component';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HomeComponent, TableFormComponent],
  imports: [CommonModule, MainRoutingModule, MatButtonModule],
})
export class MainModule {}
