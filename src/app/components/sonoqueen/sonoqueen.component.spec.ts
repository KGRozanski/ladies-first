import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonoqueenComponent } from './sonoqueen.component';

describe('SonoqueenComponent', () => {
  let component: SonoqueenComponent;
  let fixture: ComponentFixture<SonoqueenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonoqueenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonoqueenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
