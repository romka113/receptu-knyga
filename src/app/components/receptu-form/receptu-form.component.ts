import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-receptu-form',
  templateUrl: './receptu-form.component.html',
  styleUrls: ['./receptu-form.component.css'],
})
export class ReceptuFormComponent implements OnInit {
  public eForm: FormGroup;

  constructor() {
    this.eForm = new FormGroup({
      receptName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      cookingTime: new FormControl(null, [
        Validators.required,
        Validators.max(1000),
        this.validNumbers,
      ]),
      cookingDescription: new FormControl(null, Validators.required),
      photo: new FormControl(null, [Validators.required, this.urlCheck]),
      calory: new FormControl(null),
    });
  }
  ngOnInit(): void {}

  validNumbers(control: FormControl): { [s: string]: boolean } | null {
    if (control.value % 5 != 0) {
      console.log(control.value);
      return { 'negalimas skaicius': true };
    } else {
      return null;
    }
  }
  urlCheck(control: FormControl): { [s: string]: boolean } | null {
    let t =
      /^(http['s]?:\/\/){?}(w{3}\.)[-a-z\d+&@#\/%?=~_|!:,.;]*[-a-z\d+&@#\/%=~_|]/;
    if (!t.test(control.value)) {
      return { klaida: true };
    } else {
      return null;
    }
  }
}
