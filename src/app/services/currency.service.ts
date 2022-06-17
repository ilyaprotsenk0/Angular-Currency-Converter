import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Currency } from '../models/currency.model';
import { CurrencyApiItem } from '../models/currency-api-item.model';
import { map, Observable, catchError, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CurrencyService {
  private url: string = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`;

  constructor(private http: HttpClient) {}

  getCurrency(): Observable<Currency[]> {
    return this.http.get<CurrencyApiItem[]>(this.url).pipe(
      catchError(this.handleError),
      map((response) => {
        return response
          .filter((item) => {
            return item.cc === 'EUR' || item.cc === 'USD' || item.cc === 'UAH';
          })
          .map((item) => {
            return {
              name: item.cc,
              rate: item.rate,
            };
          });
      })
    );
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
