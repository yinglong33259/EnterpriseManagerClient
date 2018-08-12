import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeansComponent } from './means.component';

describe('MeansComponent', () => {
  let component: MeansComponent;
  let fixture: ComponentFixture<MeansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
