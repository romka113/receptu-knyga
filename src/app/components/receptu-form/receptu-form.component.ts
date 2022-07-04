import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  AbstractControl,
  FormArray,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { ReceptService } from '../../services/recept.service';
import { map, Observable } from 'rxjs';
import { IngridientServiceService } from '../../services/ingridient-service.service';
import { Router } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-receptu-form',
  templateUrl: './receptu-form.component.html',
  styleUrls: ['./receptu-form.component.css'],
  animations: [
    trigger('animationBlock', [
      state(
        'padidejimas',
        style({
          'font-size': '25px',
          width: '100%',
          height: '150px',
        })
      ),
      state(
        'sumazejimas',
        style({
          'font-size': '16px',
          width: '10%',
        })
      ),
      transition('sumazejimas=>padidejimas', [animate(2000)]),
      transition('padidejimas=>sumazejimas', [animate(2000)]),
    ]),
    trigger('validBtn', [
      state('unhide', style({ opacity: '1' })),
      state('hide', style({ opacity: '0' })),
      transition('unhide=>hide', [animate(1000)]),
      transition('hide=>unhide', [animate(1000)]),
    ]),
  ],
})
export class ReceptuFormComponent implements OnInit {
  public eForm: FormGroup;
  public btnStatus = 'hide';
  public keitimasis = 'sumazejimas';
  public ingrident: { ingridient: string }[] = [];
  constructor(
    private receptServ: ReceptService,
    private ingridientServ: IngridientServiceService,
    private router: Router
  ) {
    this.eForm = new FormGroup({
      receptName: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
        this.receptNameCheck()
      ),
      cookingTime: new FormControl(null, [
        Validators.required,
        Validators.max(1000),
        this.validNumbers,
      ]),
      cookingDescription: new FormControl(null, Validators.required),
      photo: new FormControl(null),
      calory: new FormControl(null),
      alergenai: new FormArray([]),
      ingriedientName: new FormArray([]),
      eatingTime: new FormControl(null, Validators.required),
    });
  }
  ngOnInit(): void {
    this.getIngrideint();
    this.ingridientServ.ingridientUpdate.subscribe(() => {
      this.getIngrideint();
      this.eForm.statusChanges.subscribe((response) => {
        // console.log(response, 'aasdfa');
        if (response == 'INVALID') {
          this.btnStatus = 'hide';
        } else {
          this.btnStatus = 'unhide';
        }
      });
    });
  }
  public Onfocus() {
    if (this.keitimasis == 'sumazejimas') this.keitimasis = 'padidejimas';
  }
  public OnfocusOut() {
    if (this.keitimasis == 'padidejimas') this.keitimasis = 'sumazejimas';
  }

  private getIngrideint() {
    this.ingridientServ.getIngridient().subscribe((result) => {
      this.ingrident = result;
    });
  }

  receptNameCheck(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.receptServ.getrecept().pipe(
        map((response) => {
          let exist = false;
          response.forEach((recept) => {
            if (
              recept.receptName == control.value &&
              recept.eatingTime == this.eForm.get('eatingTime')?.value
            ) {
              exist = true;
            }
          });
          if (exist) {
            console.log('error');
            return { error: 'Toks recepto pavadinimas egzistuoja' };
          } else {
            return null;
          }
        })
      );
    };
  }

  public getError() {
    let control = this.eForm.get('receptName');
    if (control?.errors != null) {
      return control.errors['error'];
    }
    return '';
  }
  public newRecept() {
    this.receptServ.addrecept(this.eForm.value).subscribe();
    this.router.navigate(['']);
  }
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
      quantity: new FormControl(null, Validators.required),
      size: new FormControl('vnt', Validators.required),
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

  // urlCheck(control: AbstractControl): { [s: string]: boolean } | null {
  //   let t: RegExp = /(https?:\/\/)?(www\.)?[a-zA-Z0-9]+\.[a-zA-Z]{2,}/g;
  //   if (!t.test(control.value)) {
  //     return { 'negalimas Url adresas': true };
  //   } else {
  //     return null;
  //   }
  // }
}
