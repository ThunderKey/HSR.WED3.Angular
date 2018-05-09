import {Component, OnInit} from '@angular/core';

import moment from '../../core/utils/moment_and_overrides';

import {TransactionResourceService} from '../resources';
import {Transaction} from '../models';

@Component({
  selector: 'wed-transactions',
  templateUrl: 'transactions.component.html',
  styleUrls: ['transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  public transactions: Array<Transaction> = []

  public years: Array<object> = [];
  public months: Array<object> = moment.months().map((month, i) => {
    return {text: month, value: i};
  });

  public year: number;
  public month: number;

  constructor(private resource: TransactionResourceService) {
    this.month = new Date().getMonth();
    let currentYear = this.year = new Date().getFullYear();
    for(let i = 0; i < 3; i++) {
      let year = currentYear - i;
      this.years.push({text: year, value: year});
    }
  }

  ngOnInit() {
    this.updateTransactions();
  }

  private updateTransactions() {
    let start = moment(new Date(this.year, this.month, 1));
    let end = start.endOf('month');
    this.resource.getTransactions(start, end).subscribe(
      (data: Array<Transaction>) => {
        this.transactions = data;
      }
    );
  }
}
