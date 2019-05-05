import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsShortComponent } from './about-us-short.component';

describe('AboutUsShortComponent', () => {
  let component: AboutUsShortComponent;
  let fixture: ComponentFixture<AboutUsShortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsShortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
