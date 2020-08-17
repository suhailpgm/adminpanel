import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditmComponent } from './additm.component';

describe('AdditmComponent', () => {
  let component: AdditmComponent;
  let fixture: ComponentFixture<AdditmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
