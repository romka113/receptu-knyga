import { Component, Input, OnInit } from '@angular/core';
import { Recept } from '../../../models/recept';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recept-item',
  templateUrl: './recept-item.component.html',
  styleUrls: ['./recept-item.component.css'],
})
export class ReceptItemComponent implements OnInit {
  @Input() public recept: Recept | null = null;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  public receptDetails(id: string | undefined) {
    if (id != null) {
      this.router.navigate(['receptDetails', id]);
    }
  }
}
