import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scrn3Component } from './scrn3.component';

describe('Scrn3Component', () => {
  let component: Scrn3Component;
  let fixture: ComponentFixture<Scrn3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Scrn3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Scrn3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
