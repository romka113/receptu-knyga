import { Component, OnInit } from '@angular/core';
import { Recept } from '../../models/recept';
import { ReceptService } from '../../services/recept.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recept-details',
  templateUrl: './recept-details.component.html',
  styleUrls: ['./recept-details.component.css'],
})
export class ReceptDetailsComponent implements OnInit {
  public recept: Recept | null = null;
  constructor(
    private receptServ: ReceptService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.recept = this.receptServ.getReceptnow(id);
  }
  public increaseLikesCount(id?: string) {
    if (id != null) {
      this.receptServ.increaseLikesCount(id);
      this.router.navigate(['/']);
    }
  }
}
