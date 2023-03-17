import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownImportComponent } from './markdown-import.component';

describe('MarkdownImportComponent', () => {
  let component: MarkdownImportComponent;
  let fixture: ComponentFixture<MarkdownImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkdownImportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkdownImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
