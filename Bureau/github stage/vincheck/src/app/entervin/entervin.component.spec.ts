import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntervinComponent } from './entervin.component';

describe('EntervinComponent', () => {
  let component: EntervinComponent;
  let fixture: ComponentFixture<EntervinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntervinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntervinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
