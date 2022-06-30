import { Component, OnInit } from '@angular/core';
import { Recept } from '../../models/recept';
import { ReceptService } from '../../services/recept.service';

@Component({
  selector: 'app-recept-book-list',
  templateUrl: './recept-book-list.component.html',
  styleUrls: ['./recept-book-list.component.css'],
})
export class ReceptBookListComponent implements OnInit {
  public receptBook: Recept[] = [];
  public receptBookDisplay: Recept[] = [];
  public filterPusryciai: boolean = true;
  public filterPriespieciai: boolean = true;
  public filterPietus: boolean = true;
  public filterVakariene: boolean = true;
  constructor(private receptServ: ReceptService) {}
  private geRecept() {
    this.receptServ.getrecept().subscribe((response) => {
      this.receptBook = response;
      this.displayRecept();
    });
  }
  ngOnInit(): void {
    this.geRecept();

    this.receptServ.likesCount.subscribe(() => {
      this.geRecept();
    });
    this.receptServ.mealCount();
  }
  public displayRecept() {
    this.receptBookDisplay = [];
    this.receptBook.forEach((r) => {
      if (this.filterPusryciai && r.eatingTime == 'Pusryciai') {
        this.receptBookDisplay.push(r);
      }
      if (this.filterPriespieciai && r.eatingTime == 'Priespieciai') {
        this.receptBookDisplay.push(r);
      }
      if (this.filterPietus && r.eatingTime == 'Pietus') {
        this.receptBookDisplay.push(r);
      }
      if (this.filterVakariene && r.eatingTime == 'Vakriene') {
        this.receptBookDisplay.push(r);
      }
    });
  }
  public increaseLikesCount(id?: string) {
    if (id != null) {
      this.receptServ.increaseLikesCount(id);
    }
  }
}
