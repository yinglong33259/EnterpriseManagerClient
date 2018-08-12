import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowcontrolComponent } from './windowcontrol.component';

describe('WindowcontrolComponent', () => {
  let component: WindowcontrolComponent;
  let fixture: ComponentFixture<WindowcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
