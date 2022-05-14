import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableDatatableComponent } from './reusable-datatable.component';

describe('ReusableDatatableComponent', () => {
  let component: ReusableDatatableComponent;
  let fixture: ComponentFixture<ReusableDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
