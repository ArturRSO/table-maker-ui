import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';

import { TablePreviewComponent } from './table-preview/table-preview.component';

@NgModule({
  declarations: [TablePreviewComponent],
  imports: [CommonModule, MatTableModule],
  exports: [TablePreviewComponent],
})
export class SharedModule {}
