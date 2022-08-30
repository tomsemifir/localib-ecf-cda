import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsValidesComponent } from './locations-valides.component';

describe('LocationsValidesComponent', () => {
  let component: LocationsValidesComponent;
  let fixture: ComponentFixture<LocationsValidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsValidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationsValidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
