import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoboxComponent } from './dobox.component';

describe('DoboxComponent', () => {
  let component: DoboxComponent;
  let fixture: ComponentFixture<DoboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
