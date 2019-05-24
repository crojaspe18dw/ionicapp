import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionAcademicaPage } from './formacion-academica.page';

describe('FormacionAcademicaPage', () => {
  let component: FormacionAcademicaPage;
  let fixture: ComponentFixture<FormacionAcademicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormacionAcademicaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormacionAcademicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
