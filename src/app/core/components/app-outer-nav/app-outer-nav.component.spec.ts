import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOuterNavComponent } from './app-outer-nav.component';

describe('AppOuterNavComponent', () => {
  let component: AppOuterNavComponent;
  let fixture: ComponentFixture<AppOuterNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppOuterNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppOuterNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
