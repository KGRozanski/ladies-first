import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegenerationComponent } from './regeneration.component';

describe('RegenerationComponent', () => {
  let component: RegenerationComponent;
  let fixture: ComponentFixture<RegenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
