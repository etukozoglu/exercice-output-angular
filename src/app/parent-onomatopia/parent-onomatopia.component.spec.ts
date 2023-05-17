import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOnomatopiaComponent } from './parent-onomatopia.component';

describe('ParentOnomatopiaComponent', () => {
  let component: ParentOnomatopiaComponent;
  let fixture: ComponentFixture<ParentOnomatopiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentOnomatopiaComponent]
    });
    fixture = TestBed.createComponent(ParentOnomatopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
