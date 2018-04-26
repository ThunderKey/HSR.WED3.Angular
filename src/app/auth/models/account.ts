export class Account {
  constructor(public login: string,
              public firstname: string,
              public lastname: string,
              public accountNr: number) {
  }

  public static fromDto(data: any): Account {
    return new Account(data.login, data.firstname, data.lastname, parseInt(data.accountNr));
  }

  public static fromInfoDto(data: any): Account {
    if(!data) {
      return new Account(void 0, void 0, void 0, void 0);
    }
    return new Account(
      data.login,
      data.firstname,
      data.lastname,
      data.accountNr);
  }

  public get fullname(): string {
    return `${this.firstname} ${this.lastname}`;
  }

  toDto(): any {
    return {
      login: this.login,
      firstname: this.firstname,
      lastname: this.lastname,
      accountNr: this.accountNr
    };
  }
}
