import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialog , MatDialogRef } from  '@angular/material/dialog';
import { CardComponent } from '../card/card.component';
import { MatInputModule,MatProgressSpinnerModule,MatButtonModule } from '@angular/material';

@Component({
  selector: 'card-options',
  templateUrl: './card-options.component.html',
  styleUrls: ['./card-options.component.css']
})
export class CardOptionsComponent implements OnInit {

  selectedVal : any = '';
  giftVouchers : any[] = [];
  category : String = '';
  kbgGoodies : any[] = [];
  giftOptions : any[] = [];
  kbgGood : String = '';
  payload : Object = {};
  emailId : String = "";
  mount : String = "";
  giftOption : String = "";
  amount : String = "";
  custId : String = "21314544";
  giftCards :String = "";
  giftCard :String = "";
  

  //constructor(private  dialog:  MatDialog) {
    //this.payload = {};
  //}
  constructor(private dialog: MatDialog) {
     this.payload = {};
   }

  ngOnInit() {
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
      { id: 'aliB200', name: 'Alibaba voucher worth $200' },
      { id: 'air200', name: 'Airbnb voucher worth $200' }
    ];

    this.kbgGoodies = [
      { id: 'tshirt', name: 'Kabbage T-shirt' },
      { id: 'kbgMug', name: 'Kababge Mug' },
      { id: 'kbgBag', name: 'Kabbage Bag' }
    ];
  }

  sendNotification() {
    this.payload = {
      custId : this.custId,
      emailId : this.emailId,
      giftOption : this.giftOption,
      amount : this.amount,
      kbgGood : this.kbgGood,
      giftCard : this.giftCard
   
    }

    let dialog = this.dialog.open(CardComponent, {});
    //this.dialog.open(CardComponent,{ data: {
      //message:  "Error!!!"
     // }});

    console.log(this.payload);
  }



}
