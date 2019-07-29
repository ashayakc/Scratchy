import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardOptionService {

  private giftOption: string;
  private giftValue: string = "100";

  constructor() {
      this.giftOption = "Dollars";
      this.giftValue = "100";
  }

  public setGiftOption(val: string): void {
      this.giftOption = val;
  }

  public getGiftOption(): string {
      return this.giftOption;
  }

  public setGiftValue(val: string): void {
    this.giftValue = val;
}

public getGiftValue(): string {
    return this.giftValue;
}
}
