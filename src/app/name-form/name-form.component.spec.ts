/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NameFormComponent } from './name-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('NameFormComponent', () => {
  let component: NameFormComponent;
  let fixture: ComponentFixture<NameFormComponent>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ NameFormComponent ]
    })
    .compileComponents();
  }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set user first name and last name', () => {
    component.model.firstName = 'Bryan'
    expect(component.model.firstName ).toEqual('Bryan');
  });
});


