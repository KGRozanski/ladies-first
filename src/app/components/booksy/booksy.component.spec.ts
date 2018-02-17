import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksyComponent } from './booksy.component';

describe('BooksyComponent', () => {
  let component: BooksyComponent;
  let fixture: ComponentFixture<BooksyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
