import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagediyComponent } from './imagediy.component';

describe('ImagediyComponent', () => {
  let component: ImagediyComponent;
  let fixture: ComponentFixture<ImagediyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagediyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagediyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
