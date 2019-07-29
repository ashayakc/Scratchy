import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialog , MatDialogRef } from  '@angular/material/dialog';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'card-popup',
  templateUrl: './card-popup.component.html',
  styleUrls: ['./card-popup.component.css']
})
export class CardPopupComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    let dialog = this.dialog.open(CardComponent, {});
  }


}
