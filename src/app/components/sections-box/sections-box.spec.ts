import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsBox } from './sections-box';

describe('SectionsBox', () => {
  let component: SectionsBox;
  let fixture: ComponentFixture<SectionsBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionsBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionsBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
