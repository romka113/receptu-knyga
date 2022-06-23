import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptBookListComponent } from './recept-book-list.component';

describe('ReceptBookListComponent', () => {
  let component: ReceptBookListComponent;
  let fixture: ComponentFixture<ReceptBookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptBookListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
