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
  public submitted = false;

  public form: FormGroup<TableForm>;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group<TableForm>({
      label: new FormControl('', [Validators.required]),
      value: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.form.controls;
  }

  public onSubmit() {
    this.submitted = true;

    console.log(this.form.value);
  }
}

interface TableForm {
  label: FormControl<string | null>;
  value: FormControl<string | null>;
}
