import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recept } from '../models/recept';
import { map } from 'rxjs';
import { Meals } from '../models/meals';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReceptService {
  private readonly url = environment.dbUrl;
  public likesCount = new EventEmitter();
  public recept: Recept[] = [];
  constructor(private http: HttpClient, private router: Router) {}
  public addrecept(recept: Recept) {
    return this.http.post(this.url + 'receptbook.json', recept);
  }
  public getrecept() {
    return this.http
      .get<{ [key: string]: Recept }>(this.url + 'receptbook.json')
      .pipe(
        map((response) => {
          let recept: Recept[] = [];
          for (let key in response) {
            recept.push({ ...response[key], id: key });
          }
          this.recept = recept;
          return recept;
        })
      );
  }

  public getReceptnow(id: string): Recept | null {
    let recept: Recept | null = null;
    this.recept.forEach((receptas) => {
      if (receptas.id != null && receptas.id == id) {
        recept = receptas;
      }
    });
    if (recept == null) {
      this.router.navigate(['']);
    }
    return recept;
  }
  public mealCount() {
    let breakfast = 0;
    let lunch = 0;
    let dinner = 0;
    let supper = 0;
    this.http
      .get<{ [key: string]: Recept }>(this.url + 'receptbook.json')
      .subscribe((response) => {
        for (let key in response) {
          if (response[key].eatingTime == 'Pusryciai') {
            breakfast++;
          }
          if (response[key].eatingTime == 'Priespieciai') {
            lunch++;
          }
          if (response[key].eatingTime == 'Pietus') {
            dinner++;
          }
          if (response[key].eatingTime == 'Vakariene') {
            supper++;
          }
        }
        this.http
          .patch(this.url + 'meals.json', {
            breakfast: breakfast,
            lunch: lunch,
            dinner: dinner,
            supper: supper,
          })
          .subscribe((respose) => {});
      });
  }
  public increaseLikesCount(id: string) {
    let likes = 0;
    this.http
      .get<number>(this.url + 'receptbook/' + id + '/likes.json')
      .subscribe((response) => {
        likes = response;
        likes++;
        this.http
          .patch(this.url + 'receptbook/' + id + '.json', { likes: likes })
          .subscribe((respose) => {
            this.likesCount.emit();
          });
      });
  }
}
