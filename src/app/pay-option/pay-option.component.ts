import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialog , MatDialogRef } from  '@angular/material/dialog';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-pay-option',
  templateUrl: './pay-option.component.html',
  styleUrls: ['./pay-option.component.css']
})
export class PayOptionComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  sendNotification() {
    let dialog = this.dialog.open(CardComponent, {});

  }

}
