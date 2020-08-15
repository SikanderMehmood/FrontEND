import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleunilinksComponent } from './singleunilinks.component';

describe('SingleunilinksComponent', () => {
  let component: SingleunilinksComponent;
  let fixture: ComponentFixture<SingleunilinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleunilinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleunilinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
