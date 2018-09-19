import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsExampleOneComponent } from './echarts-example-one.component';

describe('EchartsExampleOneComponent', () => {
  let component: EchartsExampleOneComponent;
  let fixture: ComponentFixture<EchartsExampleOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsExampleOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsExampleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
