import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalePage } from './finale.page';

describe('FinalePage', () => {
  let component: FinalePage;
  let fixture: ComponentFixture<FinalePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
