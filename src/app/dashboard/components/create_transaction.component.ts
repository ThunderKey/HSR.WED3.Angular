import {Component} from '@angular/core';

import {TransactionResourceService} from '../resources';
import {Transaction} from '../models';

@Component({
  selector: 'wed-create-transaction',
  templateUrl: 'create_transaction.component.html',
  styleUrls: ['create_transaction.component.scss']
})
export class CreateTransactionComponent {

  public source_account: string = "My Source";
  public target_account: string = "";
  public amount: number = 0;

  constructor(private resource: TransactionResourceService) {
  }

  public createTransaction(f: NgForm): boolean {
    if (f && f.valid) {
      this.isProcessing = true;
      console.log("source:", this.source_account);
      console.log("target:", this.target_account);
      console.log("amount:", this.amount);
    }
    return false;
  }
}
