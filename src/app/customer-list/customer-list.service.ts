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
      localStorage.setItem('name', val);
  }

  public getCustName(): string {
      return localStorage.getItem('name');
  }

  public setCustEmail(val: string): void {
    localStorage.setItem('email', val);
}

public getCustEmail(): string {
    return localStorage.getItem('email');
}
}
