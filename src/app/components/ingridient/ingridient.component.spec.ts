import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngridientComponent } from './ingridient.component';

describe('IngridientComponent', () => {
  let component: IngridientComponent;
  let fixture: ComponentFixture<IngridientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IngridientComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IngridientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Antraste turi buti Ingridientas', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.tittle').textContent).toContain(
      'Ingridientas'
    );
  });
  it('Jai kiekis 5 o kaina 2 turi buti 10', () => {
    component.quantity = 5;
    component.price = 2;
    expect(component.totalPrice()).toEqual(10);
  });
  it('ar totalPrice() grazina null jai price laukelis null', () => {
    component.quantity = 5;
    component.price = null;
    expect(component.totalPrice()).toEqual(null);
  });
  it('Priskyrus name atvaizduojamas HTMLE', () => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.neimas').textContent).toContain(
      component.name
    );
  });
  it('Priskyrus quantity 5 turi Html atvaizduoti 5', () => {
    component.quantity = 5;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.kiekis').textContent).toContain(5);
  });
  it('Priskyrus price 5 turi Html atvaizduoti 5', () => {
    component.price = 5;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.kaina').textContent).toContain(5);
  });
  it('priskyrus quantity, o price palikus null nerodomas kainos laukelis ', () => {
    let compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('.totalprice')).toBeNull();
  });
});
