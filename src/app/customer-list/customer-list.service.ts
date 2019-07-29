import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerListService {

  private custName: string;
  private custEmail: string;

  constructor() {
      this.custName = "Gautam";
      this.custEmail = "gbharti@kabbage.com";
  }

  public setCustName(val: string): void {
      this.custName = val;
  }

  public getCustName(): string {
      return this.custName;
  }

  public setCustEmail(val: string): void {
    this.custEmail = val;
}

public getCustEmail(): string {
    return this.custEmail;
}
}
