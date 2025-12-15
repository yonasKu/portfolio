import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleDetailModalComponent } from './role-detail-modal.component';

describe('RoleDetailModalComponent', () => {
  let component: RoleDetailModalComponent;
  let fixture: ComponentFixture<RoleDetailModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleDetailModalComponent]
    });
    fixture = TestBed.createComponent(RoleDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});