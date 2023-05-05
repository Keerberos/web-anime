import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePieceComponent } from './one-piece.component';

describe('OnePieceComponent', () => {
  let component: OnePieceComponent;
  let fixture: ComponentFixture<OnePieceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnePieceComponent]
    });
    fixture = TestBed.createComponent(OnePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
