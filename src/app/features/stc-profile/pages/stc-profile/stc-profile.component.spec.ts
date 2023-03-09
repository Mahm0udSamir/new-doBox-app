import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StcProfileComponent } from './stc-profile.component';

describe('StcProfileComponent', () => {
  let component: StcProfileComponent;
  let fixture: ComponentFixture<StcProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StcProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StcProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
