import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineDescComponent } from './machine-desc.component';

describe('MachineDescComponent', () => {
  let component: MachineDescComponent;
  let fixture: ComponentFixture<MachineDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
