import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangButton } from './lang-button';

describe('LangButton', () => {
  let component: LangButton;
  let fixture: ComponentFixture<LangButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LangButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
