import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptuFormComponent } from './receptu-form.component';

describe('ReceptuFormComponent', () => {
  let component: ReceptuFormComponent;
  let fixture: ComponentFixture<ReceptuFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptuFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
