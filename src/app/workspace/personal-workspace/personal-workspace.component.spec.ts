import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalWorkspaceComponent } from './personal-workspace.component';

describe('PersonalWorkspaceComponent', () => {
  let component: PersonalWorkspaceComponent;
  let fixture: ComponentFixture<PersonalWorkspaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalWorkspaceComponent]
    });
    fixture = TestBed.createComponent(PersonalWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
