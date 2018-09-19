import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsExampleTwoComponent } from './echarts-example-two.component';

describe('EchartsExampleTwoComponent', () => {
  let component: EchartsExampleTwoComponent;
  let fixture: ComponentFixture<EchartsExampleTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsExampleTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsExampleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
