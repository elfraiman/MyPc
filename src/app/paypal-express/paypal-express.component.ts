import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { environment } from '../../environments/environment';

declare let paypal: any;

@Component({
  selector: 'app-paypal-express',
  templateUrl: './paypal-express.component.html',
  styleUrls: ['./paypal-express.component.scss']
})
export class PaypalExpressComponent implements AfterViewChecked {

  addScript = false;

  paypalLoad = true;

  finalAmount = 1;

  cost = '1';

  currency = 'EUR';

  selectedCurrency = '0';

  currencies = [
    {
      value: '0',
      viewValue: 'Select Currency'
    },
    {
      'value': 'USD',
      'viewValue': 'US Dollar'
    },
    {
      'value': 'EUR',
      'viewValue': 'EURO'
    },
    {
      'value': 'ILS',
      'viewValue': 'Israeli new shekel'
    }
  ];

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: environment.paypal.client.sandbox,
      production: '<your-production-key here>'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: this.currency } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        // Do something when payment is successful.
      });
    }
  };

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-button');
        this.paypalLoad = false;
      });
    }
  }

  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      const scripttagElement = document.createElement('script');
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    });
  }

  CurrencyChange(cost, selectedCurreny, self): void {

    document.getElementById('paypal-button').innerHTML = '';
    if (selectedCurreny === 0) {
      alert('Please select the Country');
      return;
    }
  }

}
