import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconRibbon } from './icon-ribbon';

describe('IconRibbon', () => {
  let component: IconRibbon;
  let fixture: ComponentFixture<IconRibbon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconRibbon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconRibbon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
