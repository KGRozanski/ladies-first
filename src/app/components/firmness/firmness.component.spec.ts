import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmnessComponent } from './firmness.component';

describe('FirmnessComponent', () => {
  let component: FirmnessComponent;
  let fixture: ComponentFixture<FirmnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
