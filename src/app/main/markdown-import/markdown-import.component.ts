import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MarkdownService } from 'src/app/core/services/markdown.service';

@Component({
  selector: 'app-markdown-import',
  templateUrl: './markdown-import.component.html',
  styleUrls: ['./markdown-import.component.scss'],
})
export class MarkdownImportComponent {
  public form: FormGroup<MarkdownImportForm>;
  public submitted = false;
  public tableData: Array<any> = [];
  public tableHeaders: Array<string> = [];

  constructor(
    private formBuilder: FormBuilder,
    private markdownService: MarkdownService
  ) {
    this.form = this.formBuilder.group<MarkdownImportForm>({
      markdownTable: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.form.controls;
  }

  public onSubmit(): void {
    this.submitted = true;

    if (this.form.valid) {
      this.markdownService
        .importMarkdownTable(String(this.f.markdownTable.value))
        .then((tableObject) => {
          console.log('Table headers: ', tableObject.tableHeaders);
          console.log('Table data: ', tableObject.tableData);

          this.tableHeaders = tableObject.tableHeaders;
          this.tableData = tableObject.tableData;
          this.form.reset();
          this.submitted = false;
        })
        .catch((error) => {
          console.log('Error on markdown table import: ', error);
        });
    }
  }
}

interface MarkdownImportForm {
  markdownTable: FormControl<string | null>;
}
