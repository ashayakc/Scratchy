import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialog , MatDialogRef } from  '@angular/material/dialog';
import { CardComponent } from '../card/card.component';
import { MatInputModule,MatProgressSpinnerModule,MatButtonModule } from '@angular/material';
import { Router } from '@angular/router';
import { CustomerListService } from '../customer-list/customer-list.service';
import { CardOptionService } from './card-option.service';

@Component({
  selector: 'card-options',
  templateUrl: './card-options.component.html',
  styleUrls: ['./card-options.component.css']
})
export class CardOptionsComponent implements OnInit {

  selectedVal : any = '';
  giftVouchers : any[] = [];
  category : string = '';
  kbgGoodies : any[] = [];
  giftOptions : any[] = [];
  kbgGood : string = '';
  payload : Object = {};
  emailId : string = "";
  mount : string = "";
  giftOption : string = "dollars";
  amount : string = "100";
  custId : string = "21314544";
  giftCards :string = "";
  giftCard :string = "";
  custEmail : string = "gbharti@kabbage.com";
  giftValue : string = "100";
  
 
  constructor(private dialog: MatDialog,private readonly _router: Router,private custService : CustomerListService,
              private giftOptionService :CardOptionService) {
     this.payload = {};
   }

  ngOnInit() {
    this.custEmail = this.custService.getCustEmail();


    this.giftOptions = [
      { id: 'betterLuck', name: 'Better Luck' },
      { id: 'dollars', name: 'Dollars' },
      { id: 'giftCards', name: 'Gift Cards' },
      { id: 'kbgGood', name: 'Kabbage Goodies' }
    ];
    this.giftVouchers = [
      { id: 'amz200', name: 'Amazon voucher worth $200' },
      { id: 'wal200', name: 'Walmart voucher worth $200' },
      { id: 'uber200', name: 'Uber voucher worth $200' },
    ];

    this.kbgGoodies = [
      { id: 'kbgBag', name: 'Kabbage Bag', src:'/assets/kbg-bag2.png' },
      { id: 'kbgHoodie', name: 'Kababge Hoodie', src: '/assets/hoodie.png' },
      { id: 'kbgJkt', name: 'Kabbage Jacket', src : '/assets/kbg-jacket.png'}
    ];

  }

  sendNotification() {

    switch(this.giftOption){

      case  'dollars' :
          this.giftValue = this.amount;
          break;
      case  'giftCards' :
          this.giftValue = this.giftVouchers.find(x => x.id === this.giftCard).name;
          break;
      case  'kbgGood' :
              this.giftValue = this.kbgGoodies.find(x => x.id === this.kbgGood).src;
              break;
      default :
              this.giftValue = 'betterLuck';
              break;
    }

    this.giftOptionService.setGiftValue(this.giftValue);

    this.giftOption = this.giftOptions.find(x => x.id === this.giftOption).name;

    this.giftOptionService.setGiftOption(this.giftOption);

    //let dialog = this.dialog.open(CardComponent, {});
    this.payload = {
      custId : this.custId,
      emailId : this.emailId,
      giftOption : this.giftOption,
      giftValue : this.giftValue
    }
    console.log(this.payload);
    this._router.navigate(['/pay-option']);
  }

  onSelectionChange(entry) {
    this.kbgGood = entry.id;
  }

}
