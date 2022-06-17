import { Component, Input } from '@angular/core';
import { Currency } from 'src/app/models/currency.model';

@Component({
  selector: 'app-exchange-body',
  templateUrl: 'exchange-body.component.html',
  styleUrls: ['exchange-body.component.css'],
})
export class ExchangeBody {
  @Input() currencies!: Currency[];

  preventTypingArithmeticOperations(event: KeyboardEvent) {
    if (event.key === '+' || event.key === '-' || event.key === '.') {
      return false;
    }

    return true;
  }

  calculateCurrency(
    fromInput: HTMLInputElement,
    fromSelect: HTMLSelectElement,
    toInput: HTMLInputElement,
    toSelect: HTMLSelectElement
  ) {
    let fromAmount = fromInput.value;

    let fromSelectedCurrencyRate = this.currencies.find(
      (currency) => currency.name === fromSelect.value
    )?.rate;

    let toSelectedCurrencyRate = this.currencies.find(
      (currency) => currency.name === toSelect.value
    )?.rate;

    toInput.value = String(
      (
        (Number(fromAmount) * Number(fromSelectedCurrencyRate)) /
        Number(toSelectedCurrencyRate)
      ).toFixed(2)
    );
  }
}
