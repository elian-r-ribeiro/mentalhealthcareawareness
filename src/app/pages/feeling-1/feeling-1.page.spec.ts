import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Feeling1Page } from './feeling-1.page';

describe('Feeling1Page', () => {
  let component: Feeling1Page;
  let fixture: ComponentFixture<Feeling1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Feeling1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
