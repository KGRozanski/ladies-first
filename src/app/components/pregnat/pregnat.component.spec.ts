import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PregnatComponent } from './pregnat.component';

describe('PregnatComponent', () => {
  let component: PregnatComponent;
  let fixture: ComponentFixture<PregnatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PregnatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PregnatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
