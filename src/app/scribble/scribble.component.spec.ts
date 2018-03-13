import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScribbleComponent } from './scribble.component';

describe('ScribbleComponent', () => {
  let component: ScribbleComponent;
  let fixture: ComponentFixture<ScribbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScribbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScribbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
