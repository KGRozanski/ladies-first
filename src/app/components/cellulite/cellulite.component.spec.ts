import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelluliteComponent } from './cellulite.component';

describe('CelluliteComponent', () => {
  let component: CelluliteComponent;
  let fixture: ComponentFixture<CelluliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelluliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelluliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
