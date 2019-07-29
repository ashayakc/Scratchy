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
        localStorage.setItem('giftOption', val);
    }

    public getGiftOption(): string {
        return localStorage.getItem('giftOption') || 'Dollars';
    }

    public setGiftValue(val: string): void {
        localStorage.setItem('giftValue', val);
    }

    public getGiftValue(): string {
        return localStorage.getItem('giftValue') || '100';
    }
}
