import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnilinksComponent } from './unilinks.component';

describe('UnilinksComponent', () => {
  let component: UnilinksComponent;
  let fixture: ComponentFixture<UnilinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnilinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnilinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
