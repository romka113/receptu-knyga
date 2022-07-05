import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptDetailsComponent } from './recept-details.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ReceptDetailsComponent', () => {
  let component: ReceptDetailsComponent;
  let fixture: ComponentFixture<ReceptDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceptDetailsComponent],
      imports: [HttpClientModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ReceptDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
