import { Clipboard } from '@angular/cdk/clipboard';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MarkdownService } from 'src/app/core/services/markdown.service';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-data-input-form',
  templateUrl: './data-input-form.component.html',
  styleUrls: ['./data-input-form.component.scss'],
})
export class DataInputFormComponent {
  public form: FormGroup;
  public submitted = false;
  public data: Array<any> = [];
  public tableData: Array<any> = [];
  public tableHeaders: Array<string> = [];

  private fileName = 'excel-export.xlsx';

  constructor(
    private clipboard: Clipboard,
    private formBuilder: FormBuilder,
    private markdownService: MarkdownService,
    private sessionStorage: SessionStorageService
  ) {
    this.tableHeaders = this.sessionStorage.getObject('tableHeaders');
    this.form = this.formBuilder.group(this.buildForm());
  }

  get f() {
    return this.form.controls;
  }

  public getFormControl(controlName: string) {
    return this.form.controls[controlName] as FormControl;
  }

  private buildForm(): any {
    let formGroups: any = {};

    for (let header of this.tableHeaders) {
      formGroups[header] = new FormControl('', [Validators.required]);
    }

    return formGroups;
  }

  public exportToExcel(): void {
    const element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);
  }

  public exportToMarkdown(): void {
    const markdownTable = this.markdownService.convertToMarkdownTable(
      this.tableHeaders,
      this.data
    );
    this.clipboard.copy(markdownTable);
  }

  public onSubmit(): void {
    this.submitted = true;

    if (this.form.valid) {
      this.data.push(this.form.value);
      this.tableData = [...this.data];
      this.form.reset();
      this.submitted = false;
    }
  }
}
