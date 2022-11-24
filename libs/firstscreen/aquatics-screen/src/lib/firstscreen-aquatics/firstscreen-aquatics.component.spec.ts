import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstscreenAquaticsComponent } from './firstscreen-aquatics.component';

describe('FirstscreenAquaticsComponent', () => {
  let component: FirstscreenAquaticsComponent;
  let fixture: ComponentFixture<FirstscreenAquaticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstscreenAquaticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstscreenAquaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
