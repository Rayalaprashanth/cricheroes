import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricappsComponent } from './cricapps.component';

describe('CricappsComponent', () => {
  let component: CricappsComponent;
  let fixture: ComponentFixture<CricappsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CricappsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CricappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
