import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineSpriteComponent } from './machine-sprite.component';

describe('MachineSpriteComponent', () => {
  let component: MachineSpriteComponent;
  let fixture: ComponentFixture<MachineSpriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineSpriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineSpriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
