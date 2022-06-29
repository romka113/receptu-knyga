import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptDetailsComponent } from './recept-details.component';

describe('ReceptDetailsComponent', () => {
  let component: ReceptDetailsComponent;
  let fixture: ComponentFixture<ReceptDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
