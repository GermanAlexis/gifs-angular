import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitCardListComponent } from './card-list.component';

describe('GitCardListComponent', () => {
  let component: GitCardListComponent;
  let fixture: ComponentFixture<GitCardListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GitCardListComponent],
    });
    fixture = TestBed.createComponent(GitCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
