import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Products } from '../_modals/apiResp';

@Injectable({
  providedIn: 'root'
})
export class Task1Service {
  private readonly API_URL = 'https://db.ezobooks.in/kappa/image/task';
  constructor(private httpClient: HttpClient) { }

      // Http Options
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      };

      getProducts(): Observable<Products> {
        return this.httpClient
          .get<Products>(this.API_URL)
          .pipe(retry(1));
      }
}
