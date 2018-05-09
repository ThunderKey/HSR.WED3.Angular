import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {map, catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import moment from '../../core/utils/moment_and_overrides';

import {ResourceBase} from '../../core';

import {Transaction} from '../models';
import {Account} from '../../auth/models';



@Injectable()
export class TransactionResourceService extends ResourceBase {
  constructor(http: HttpClient) {
    super(http);
  }

  public getTransactions(start: moment.Moment, end: moment.Moment): Observable<Array<Transaction>> {
    return this.handleTransactionList(this.get('/accounts/transactions', {
      count: -1,
      fromDate: start.toISOString(),
      toDate: end.toISOString(),
    }));
  }

  public getNewestTransactions(): Observable<Array<Transaction>> {
    return this.handleTransactionList(this.get('/accounts/transactions', {count: 3}));
  }

  public createTransaction(target: string, amount: number): Observable<Transaction> {
    return this.handleTransaction(this.post('/accounts/transactions', {target, amount}));
  }

  public getAccount(accountNr: string):Observable<Account>{
    let request = this.get(`/accounts/${accountNr}`);
    return request.pipe(
      map((response: any) => {
        if (response) {
          return Account.fromDto(response);
        }
        return null;
      }),
      catchError((error: any) => {
        console.error(error);
        return of<Account>(null);
      })
    );
  }

  private handleTransactionList(request: Observable<any>): Observable<Array<Transaction>> {
    return request.pipe(
      map((response: any) => {
        if (response) {
          return response.result.map((r) => Transaction.fromDto(r));
        }
        return null;
      }),
      catchError((error: any) => {
        console.error(error);
        return of<Transaction>(null);
      })
    );
  }

  private handleTransaction(request: Observable<any>): Observable<Transaction> {
    return request.pipe(
      map((response: any) => {
        if (response) {
          return Transaction.fromDto(response);
        }
        return null;
      }),
      catchError((error: any) => {
        console.error(error);
        return of<Transaction>(null);
      })
    );
  }
}
