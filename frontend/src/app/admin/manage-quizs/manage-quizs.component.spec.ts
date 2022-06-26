import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageQuizsComponent } from './manage-quizs.component';

describe('ManageQuizsComponent', () => {
  let component: ManageQuizsComponent;
  let fixture: ComponentFixture<ManageQuizsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageQuizsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageQuizsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
