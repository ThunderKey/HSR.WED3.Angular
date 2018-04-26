import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

import {TransactionResourceService} from '../resources';
import {Transaction} from '../models';

import {AuthService} from '../../auth/services';

@Component({
  selector: 'wed-create-transaction',
  templateUrl: 'create_transaction.component.html',
  styleUrls: ['create_transaction.component.scss']
})
export class CreateTransactionComponent {

  public sourceNr: number;
  public targetNr: number;
  public amount: number;

  constructor(private resource: TransactionResourceService, private auth: AuthService) {
    if(auth.authenticatedUser)
      this.sourceNr = auth.authenticatedUser.accountNr;
  }

  public createTransaction(f: NgForm): boolean {
    if (f && f.valid) {
      this.isProcessing = true;
      console.log("source:", this.sourceNr);
      console.log("target:", this.targetNr);
      console.log("amount:", this.amount);
    }
    return false;
  }
}
