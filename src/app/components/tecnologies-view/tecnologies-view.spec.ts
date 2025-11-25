import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiesView } from './tecnologies-view';

describe('TecnologiesView', () => {
  let component: TecnologiesView;
  let fixture: ComponentFixture<TecnologiesView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TecnologiesView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologiesView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
