import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recept } from '../models/recept';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReceptService {
  private readonly url =
    'https://receptuknyga-b2673-default-rtdb.europe-west1.firebasedatabase.app/';
  constructor(private http: HttpClient) {}
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
          return recept;
        })
      );
  }
}
