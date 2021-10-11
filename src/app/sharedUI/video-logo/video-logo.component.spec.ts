import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLogoComponent } from './video-logo.component';

describe('VideoLogoComponent', () => {
  let component: VideoLogoComponent;
  let fixture: ComponentFixture<VideoLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
