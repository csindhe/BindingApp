import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingsChildComponent } from './bindings-child.component';

describe('BindingsChildComponent', () => {
  let component: BindingsChildComponent;
  let fixture: ComponentFixture<BindingsChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingsChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
