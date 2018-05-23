import { Component, OnInit } from '@angular/core';

import { TransactionResourceService } from '../resources';
import { Transaction } from '../models';

@Component({
  selector: 'wed-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public transactions: Array<Transaction> = []

  constructor(private resource: TransactionResourceService) {
  }

  public onTransactionAdded(transaction: Transaction) {
    this.updateTransactions();
  }

  ngOnInit() {
    this.updateTransactions();
  }

  private updateTransactions() {
    this.resource.getNewestTransactions().subscribe(
      (data: Array<Transaction>) => {
        this.transactions = data;
      }
    );
  }
}
