import moment from '../../core/utils/moment_and_overrides';

export class Transaction {
  constructor(public source: string,
              public target: string,
              public amount: number,
              public total:  number,
              public date:   moment.Moment) {
  }

  public static fromDto(data: any): Transaction {
    return new Transaction(
      data.from,
      data.target,
      data.amount,
      data.total,
      moment(data.date),
    );
  }
}
