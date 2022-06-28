import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingridient } from '../models/recept';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IngridientServiceService {
  private readonly url =
    'https://receptuknyga-b2673-default-rtdb.europe-west1.firebasedatabase.app/';
  constructor(private http: HttpClient) {}
  getIngridient() {
    return this.http.get<Ingridient>(this.url + 'ingridient.json').pipe(
      map((response) => {
        let result: Ingridient[] = [];
        for (let product of [response]) {
          result.push(product);
        }
      })
    );
  }
  addIngridient(ingridient: string) {
    return this.http.post(this.url + 'ingridient.json', {
      ingridient: ingridient,
    });
  }
}
