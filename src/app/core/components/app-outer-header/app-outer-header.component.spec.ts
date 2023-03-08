import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOuterHeaderComponent } from './app-outer-header.component';

describe('AppOuterHeaderComponent', () => {
  let component: AppOuterHeaderComponent;
  let fixture: ComponentFixture<AppOuterHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppOuterHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppOuterHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
