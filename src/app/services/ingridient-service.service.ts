import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingridient } from '../models/recept';
import { map, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IngridientServiceService {
  private readonly url = environment.dbUrl;
  public ingridientUpdate = new EventEmitter();
  constructor(private http: HttpClient) {}
  getIngridient() {
    return this.http
      .get<{ [key: string]: { ingridient: string } }>(
        this.url + 'ingridient.json'
      )
      .pipe(
        map((response) => {
          let result: { ingridient: string }[] = [];
          for (let key in response) {
            result.push({ ingridient: response[key].ingridient });
          }
          return result;
        })
      );
  }
  addIngridient(ingridient: string) {
    return this.http
      .post(this.url + 'ingridient.json', {
        ingridient: ingridient,
      })
      .pipe(
        tap((response) => {
          this.ingridientUpdate.emit();
        })
      );
  }
}
