import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOuterMenuComponent } from './app-outer-menu.component';

describe('AppOuterMenuComponent', () => {
  let component: AppOuterMenuComponent;
  let fixture: ComponentFixture<AppOuterMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppOuterMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppOuterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
