import {Component, Input} from '@angular/core';

import {Transaction} from '../models';

@Component({
  selector: 'wed-transaction-table',
  templateUrl: 'transaction_table.component.html',
  styleUrls: ['transaction_table.component.scss'],
})
export class TransactionTableComponent {
  @Input()
  public transactions: Array<Transaction> = [];
}
