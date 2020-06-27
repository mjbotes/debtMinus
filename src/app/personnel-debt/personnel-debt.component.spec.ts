import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelDebtComponent } from './personnel-debt.component';

describe('PersonnelDebtComponent', () => {
  let component: PersonnelDebtComponent;
  let fixture: ComponentFixture<PersonnelDebtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnelDebtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelDebtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
