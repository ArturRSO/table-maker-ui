import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataInputFormComponent } from './data-input-form/data-input-form.component';
import { HomeComponent } from './home/home.component';
import { MarkdownImportComponent } from './markdown-import/markdown-import.component';
import { TableFormComponent } from './table-form/table-form.component';

const routes: Routes = [
  {
    path: 'data-input',
    component: DataInputFormComponent,
  },
  {
    path: 'form',
    component: TableFormComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'import-markdown',
    component: MarkdownImportComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
