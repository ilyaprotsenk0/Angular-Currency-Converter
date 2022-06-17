import { Component, Input } from '@angular/core';
import { Currency } from 'src/app/models/currency.model';

@Component({
  selector: 'app-exchange-header',
  templateUrl: 'exchange-header.component.html',
  styleUrls: ['exchange-header.component.css'],
})
export class ExchangeHeader {
  @Input() currencies!: Currency[];
}
