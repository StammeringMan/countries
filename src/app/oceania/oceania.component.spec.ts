import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OceaniaComponent } from './oceania.component';

describe('OceaniaComponent', () => {
  let component: OceaniaComponent;
  let fixture: ComponentFixture<OceaniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OceaniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OceaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
