import { Component, OnInit } from '@angular/core';
import { IngridientServiceService } from '../../services/ingridient-service.service';

@Component({
  selector: 'app-ingridient-form',
  templateUrl: './ingridient-form.component.html',
  styleUrls: ['./ingridient-form.component.css'],
})
export class IngridientFormComponent implements OnInit {
  public ingridient: string = '';
  constructor(private ingridientService: IngridientServiceService) {}

  ngOnInit(): void {}
  public addIngridient() {
    this.ingridientService.addIngridient(this.ingridient).subscribe(() => {
      this.ingridient = '';
    });
  }
}
