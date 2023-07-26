import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallGameCardComponent } from './small-game-card.component';

describe('SmallGameCardComponent', () => {
  let component: SmallGameCardComponent;
  let fixture: ComponentFixture<SmallGameCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallGameCardComponent]
    });
    fixture = TestBed.createComponent(SmallGameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
