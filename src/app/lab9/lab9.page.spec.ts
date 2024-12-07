import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lab9Page } from './lab9.page';

describe('Lab9Page', () => {
  let component: Lab9Page;
  let fixture: ComponentFixture<Lab9Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
