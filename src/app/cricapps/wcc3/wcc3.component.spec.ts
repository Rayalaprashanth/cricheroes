import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wcc3Component } from './wcc3.component';

describe('Wcc3Component', () => {
  let component: Wcc3Component;
  let fixture: ComponentFixture<Wcc3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wcc3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wcc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
