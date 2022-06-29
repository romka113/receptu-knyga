import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptItemComponent } from './recept-item.component';

describe('ReceptItemComponent', () => {
  let component: ReceptItemComponent;
  let fixture: ComponentFixture<ReceptItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
