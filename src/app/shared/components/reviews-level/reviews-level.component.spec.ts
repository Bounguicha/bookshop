import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsLevelComponent } from './reviews-level.component';

describe('ReviewsLevelComponent', () => {
  let component: ReviewsLevelComponent;
  let fixture: ComponentFixture<ReviewsLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
