import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanPublicComponent } from './fan-public.component';

describe('FanPublicComponent', () => {
  let component: FanPublicComponent;
  let fixture: ComponentFixture<FanPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
