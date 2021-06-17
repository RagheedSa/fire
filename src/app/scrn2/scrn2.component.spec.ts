import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scrn2Component } from './scrn2.component';

describe('Scrn2Component', () => {
  let component: Scrn2Component;
  let fixture: ComponentFixture<Scrn2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Scrn2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Scrn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
