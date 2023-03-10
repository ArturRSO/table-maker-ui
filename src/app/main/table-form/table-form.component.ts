import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.scss'],
})
export class TableFormComponent {
  public form: FormGroup<TableForm>;
  public submitted = false;
  public tableData: Array<any> = [];
  public tableHeaders: Array<string> = [];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group<TableForm>({
      columnName: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.form.controls;
  }

  public onSubmit() {
    this.submitted = true;

    if (this.form.valid) {
      this.tableHeaders.push(String(this.f.columnName.value));
      if (this.tableData.length > 0) {
        let tableObj: any = {};

        for (let header of this.tableHeaders) {
          tableObj[header] = 'Lorem Ipsun';
        }
        this.tableData[0] = tableObj;
      } else {
        this.tableData.push({
          [String(this.f.columnName.value)]: 'Lorem Ipsun',
        });
      }

      this.form.reset();
      this.submitted = false;
    }

    console.log('Current data:', this.tableData);
  }
}

interface TableForm {
  columnName: FormControl<string | null>;
}
