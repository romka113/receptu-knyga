import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  AbstractControl,
  FormArray,
} from '@angular/forms';

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
      photo: new FormControl(null, [this.urlCheck]),
      calory: new FormControl(null),
      alergenai: new FormArray([]),
      ingriedientName: new FormArray([]),
    });
  }
  ngOnInit(): void {}
  public formsubmitas() {
    console.log(this.eForm.value);
  }
  public alergyGrient() {
    return (<FormArray>this.eForm.get('alergenai')).controls;
  }
  public addAlgergen() {
    const alergenn = new FormControl(null, Validators.required);
    (<FormArray>this.eForm.get('alergenai')).push(alergenn);
  }
  public delleteAlergen() {
    return (<FormArray>this.eForm.get('alergenai')).removeAt(-1);
  }
  public addIngriedient() {
    const ingridient = new FormGroup({
      productName: new FormControl(null, Validators.required),
      kiekis: new FormControl(null, Validators.required),
      vnt: new FormControl('vnt', Validators.required),
    });
    (<FormArray>this.eForm.get('ingriedientName')).push(ingridient);
  }
  public ingridient() {
    return (<FormArray>this.eForm.get('ingriedientName')).controls;
  }
  public deleteingridient() {
    return (<FormArray>this.eForm.get('ingriedientName')).removeAt(-1);
  }
  public abstractToFormGroup(formGroup: AbstractControl) {
    return <FormGroup>formGroup;
  }

  validNumbers(control: FormControl): { [s: string]: boolean } | null {
    if (control.value % 5 != 0) {
      console.log(control.value);
      return { 'negalimas skaicius': true };
    } else {
      return null;
    }
  }
  urlCheck(control: AbstractControl): { [s: string]: boolean } | null {
    let t: RegExp = /(https?:\/\/)?(www\.)?[a-zA-Z0-9]+\.[a-zA-Z]{2,}/g;
    if (!t.test(control.value)) {
      return { 'negalimas Url adresas': true };
    } else {
      return null;
    }
  }
}
