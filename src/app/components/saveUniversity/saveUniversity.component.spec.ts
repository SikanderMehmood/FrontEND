import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveUniversityComponent } from './saveUniversity.component';

describe('SaveUniversityComponent', () => {
  let component: SaveUniversityComponent;
  let fixture: ComponentFixture<SaveUniversityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveUniversityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
