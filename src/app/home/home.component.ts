import { Component } from '@angular/core';

interface Asset {
  name: String,
  code: String,
  value: Number,
  number: Number
}

interface PersonBalance {
  balance: Number,//Saldo da conta corrente
  overrun: Number,//Saldo do patrimonio
  assets: Array<Asset> //Ativos
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  item: PersonBalance;
  constructor() {
    this.item = {
      balance: 0.0,
      overrun: 250.0,
      assets: [{
        name: "Petrobras",
        code: "PETR4",
        value: 25.00,
        number: 10
      }]
    };
  }
}
