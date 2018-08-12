import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusTableComponent } from './cus-table.component';

describe('CusTableComponent', () => {
  let component: CusTableComponent;
  let fixture: ComponentFixture<CusTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
