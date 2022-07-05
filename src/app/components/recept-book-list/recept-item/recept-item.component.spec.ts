import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptItemComponent } from './recept-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ReceptItemComponent', () => {
  let component: ReceptItemComponent;
  let fixture: ComponentFixture<ReceptItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceptItemComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ReceptItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
