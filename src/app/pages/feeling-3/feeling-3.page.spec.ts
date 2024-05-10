import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Feeling3Page } from './feeling-3.page';

describe('Feeling3Page', () => {
  let component: Feeling3Page;
  let fixture: ComponentFixture<Feeling3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Feeling3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
