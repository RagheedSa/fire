import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scrn1Component } from './scrn1.component';

describe('Scrn1Component', () => {
  let component: Scrn1Component;
  let fixture: ComponentFixture<Scrn1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Scrn1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Scrn1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
