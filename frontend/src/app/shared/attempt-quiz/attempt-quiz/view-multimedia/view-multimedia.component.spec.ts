import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMultimediaComponent } from './view-multimedia.component';

describe('ViewMultimediaComponent', () => {
  let component: ViewMultimediaComponent;
  let fixture: ComponentFixture<ViewMultimediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMultimediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
