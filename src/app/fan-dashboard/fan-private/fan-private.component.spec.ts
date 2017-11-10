import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanPrivateComponent } from './fan-private.component';

describe('FanPrivateComponent', () => {
  let component: FanPrivateComponent;
  let fixture: ComponentFixture<FanPrivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanPrivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
