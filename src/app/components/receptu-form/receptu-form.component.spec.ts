import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptuFormComponent } from './receptu-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ReceptuFormComponent', () => {
  let component: ReceptuFormComponent;
  let fixture: ComponentFixture<ReceptuFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceptuFormComponent],
      imports: [HttpClientModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ReceptuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
