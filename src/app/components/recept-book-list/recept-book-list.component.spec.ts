import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptBookListComponent } from './recept-book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReceptService } from '../../services/recept.service';
import { of } from 'rxjs';

describe('ReceptBookListComponent', () => {
  let component: ReceptBookListComponent;
  let fixture: ComponentFixture<ReceptBookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceptBookListComponent],
      imports: [HttpClientModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ReceptBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('turi būti atspausdintas vienas recepto pavadinimas', async () => {
    let receptServ = fixture.debugElement.injector.get(ReceptService);
    spyOn<ReceptService, any>(receptServ, 'getrecept').and.returnValue(
      of([
        {
          receptName: 'Tortas',
          cookingDescription: 'a',
          likes: 1,
          cookingTime: 5,
          photo: '',
          calory: 5,
          eatingTime: 's',
          alergenai: [],
          ingridientName: [],
        },
      ])
    );
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('.receptName').textContent).toContain(
        'Tortas'
      );
    });
  });
});
