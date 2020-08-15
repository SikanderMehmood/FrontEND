import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityscrapComponent } from './universityscrap.component';

describe('UniversityscrapComponent', () => {
  let component: UniversityscrapComponent;
  let fixture: ComponentFixture<UniversityscrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityscrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityscrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
