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
  constructor(private receptServ: ReceptService) {}

  ngOnInit(): void {
    this.receptServ.getrecept().subscribe((response) => {
      this.receptBook = response;
    });
  }
}
