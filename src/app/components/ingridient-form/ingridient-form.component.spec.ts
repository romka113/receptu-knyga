import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngridientFormComponent } from './ingridient-form.component';

describe('IngridientFormComponent', () => {
  let component: IngridientFormComponent;
  let fixture: ComponentFixture<IngridientFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngridientFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngridientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
