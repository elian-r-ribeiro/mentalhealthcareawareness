import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Feeling2Page } from './feeling-2.page';

describe('Feeling2Page', () => {
  let component: Feeling2Page;
  let fixture: ComponentFixture<Feeling2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Feeling2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
