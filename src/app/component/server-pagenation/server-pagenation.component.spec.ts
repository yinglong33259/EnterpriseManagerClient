import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerPagenationComponent } from './server-pagenation.component';

describe('ServerPagenationComponent', () => {
  let component: ServerPagenationComponent;
  let fixture: ComponentFixture<ServerPagenationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerPagenationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerPagenationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
