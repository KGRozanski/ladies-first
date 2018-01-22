import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HairsComponent } from './hairs.component';

describe('HairsComponent', () => {
  let component: HairsComponent;
  let fixture: ComponentFixture<HairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
