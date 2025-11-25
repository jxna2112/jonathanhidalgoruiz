import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBox } from './project-box';

describe('ProjectBox', () => {
  let component: ProjectBox;
  let fixture: ComponentFixture<ProjectBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
