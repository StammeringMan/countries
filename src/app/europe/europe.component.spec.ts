import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropeComponent } from './europe.component';

describe('EuropeComponent', () => {
  let component: EuropeComponent;
  let fixture: ComponentFixture<EuropeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuropeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
