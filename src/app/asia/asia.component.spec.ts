import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiaComponent } from './asia.component';

describe('AsiaComponent', () => {
  let component: AsiaComponent;
  let fixture: ComponentFixture<AsiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
