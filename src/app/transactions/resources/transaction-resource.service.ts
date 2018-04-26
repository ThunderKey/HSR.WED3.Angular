import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {map, catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

import {ResourceBase} from '../../core';

import {Transaction} from '../models';


@Injectable()
export class TransactionResourceService extends ResourceBase {
  constructor(http: HttpClient) {
    super(http);
  }

  public getNewestTransactions(): Observable<Array<Transaction>> {
    return this.get('/accounts/transactions', {count: 3, skip: 0})
      .pipe(
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

  public createTransaction(target: string, amount: number): Observable<Transaction> {
    return this.post('/accounts/transactions', {target, amount})
      .pipe(
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
