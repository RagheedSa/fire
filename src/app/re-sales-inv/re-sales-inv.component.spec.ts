import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReSalesInvComponent } from './re-sales-inv.component';

describe('ReSalesInvComponent', () => {
  let component: ReSalesInvComponent;
  let fixture: ComponentFixture<ReSalesInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReSalesInvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReSalesInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
