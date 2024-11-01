import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentUsersComponent } from './component-users.component';

describe('ComponentUsersComponent', () => {
  let component: ComponentUsersComponent;
  let fixture: ComponentFixture<ComponentUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentUsersComponent]
    });
    fixture = TestBed.createComponent(ComponentUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
