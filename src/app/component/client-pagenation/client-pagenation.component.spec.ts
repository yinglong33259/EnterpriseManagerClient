import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPagenationComponent } from './client-pagenation.component';

describe('ClientPagenationComponent', () => {
  let component: ClientPagenationComponent;
  let fixture: ComponentFixture<ClientPagenationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPagenationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPagenationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
