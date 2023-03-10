import { Component, Input, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-preview',
  templateUrl: './table-preview.component.html',
  styleUrls: ['./table-preview.component.scss'],
})
export class TablePreviewComponent implements OnChanges {
  @Input() data: Array<any> = [];
  @Input() headers: Array<string> = [];

  public dataSource: MatTableDataSource<any> = new MatTableDataSource(
    this.data
  );

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource(this.data);
  }
}
