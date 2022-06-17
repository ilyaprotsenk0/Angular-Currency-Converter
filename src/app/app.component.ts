import { Component, OnInit } from '@angular/core';
import { Currency } from './models/currency.model';
import { CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  currencies!: Currency[];
  error!: boolean;
  loading: boolean = true;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getCurrency().subscribe(
      (data) => {
        this.currencies = data;
        this.currencies.push({
          name: 'UAH',
          rate: 1,
        });
        this.loading = false;
      },
      (error) => {
        console.error(error);
        this.loading = false;
        this.error = true;
      }
    );
  }

  title = 'angular-currency-converter';
}
