import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgmtSystemComponent } from './mgmt-system.component';

describe('MgmtSystemComponent', () => {
  let component: MgmtSystemComponent;
  let fixture: ComponentFixture<MgmtSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgmtSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgmtSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
