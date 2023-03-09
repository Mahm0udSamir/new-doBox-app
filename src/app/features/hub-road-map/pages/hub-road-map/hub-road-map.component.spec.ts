import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubRoadMapComponent } from './hub-road-map.component';

describe('HubRoadMapComponent', () => {
  let component: HubRoadMapComponent;
  let fixture: ComponentFixture<HubRoadMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HubRoadMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HubRoadMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
